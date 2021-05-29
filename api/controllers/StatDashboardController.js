const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const ItineraryModel = require('../models/ItineraryModel');
const moment = require('moment');

exports.listAllAgents = function(req, res) {
    let mysort = { rate: -1 };
    let limit = 5;
    User.find().sort(mysort).limit(limit).exec((err, agents) => {
        if (err) {
            return res.json({ status: false, data: 'Unable to show all' });
        }
        return res.json({ status: true, data: agents });
    });
}


exports.listMostVisitedCustomers = function(req, res) {
    ItineraryModel.aggregate([{
            $unwind: "$assigned_customer_id"
        },
        {
            $group: {
                _id: "$assigned_customer_id",
                count: { $sum: 1 }
            }
        }
    ]).sort({ count: -1 }).limit(5).exec(async(err, result) => {
        if (err) {
            return res.json({ status: false, data: 'Unable to show all' });
        }

        const resultData = [];

        for (let i = 0; i < result.length; i++) {
            try {
                const data = await Customer.findOne({ cust_id: result[i]._id });
                resultData.push({
                    ...result[i],
                    user: data
                });
            } catch (err) {
                console.log(err);
                return res.json({ status: false, err: 'Unable to fetch user data' });
            }
        }

        return res.json({
            status: true,
            data: resultData
        });
    })
}


exports.listMostEfficientDays = function(req, res) {
    ItineraryModel.aggregate([{
        '$project': {
            'assigned_customer_id': 1,
            'date': 1,
            'customer_count': {
                '$size': '$assigned_customer_id'
            }
        }
    }, {
        '$group': {
            '_id': '$date',
            'sum_count': {
                '$sum': '$customer_count'
            }
        }
    }, {
        '$sort': {
            'sum_count': -1
        }
    }]).limit(5).exec(async(err, result) => {
        if (err) {
            return res.json({ status: false, data: 'Unable to show all' });
            console.log(err);
        }

        return res.json({
            status: true,
            data: result
        });
    })
}


exports.listLeastEfficientDays = function(req, res) {
    ItineraryModel.aggregate([{
        '$project': {
            'assigned_customer_id': 1,
            'date': 1,
            'customer_count': {
                '$size': '$assigned_customer_id'
            }
        }
    }, {
        '$group': {
            '_id': '$date',
            'sum_count': {
                '$sum': '$customer_count'
            }
        }
    }, {
        '$sort': {
            'sum_count': 1
        }
    }]).limit(5).exec(async(err, result) => {
        if (err) {
            return res.json({ status: false, data: 'Unable to show all' });
            console.log(err);
        }

        return res.json({
            status: true,
            data: result
        });
    })
}


exports.listDailyTaskCount = function(req, res) {
    const start = moment().startOf('day')
    const end = moment().endOf('day').format()

    console.log(start, end);
    console.log(new Date(start), new Date(end), );

    ItineraryModel.aggregate([{
            $match: {
                date: { $gte: new Date(start), $lte: new Date(end) },
            }
        },
        {
            "$addFields": { "stringID": { "$toString": "$_id" } }
        },
        {
            $lookup: {
                from: "task_assignments",
                localField: "stringID",
                foreignField: "itinerary_id",
                as: "tasksList"
            }
        }

    ]).exec(async(err, result) => {
        if (err) {
            console.log(err);
            return res.json({ status: false, data: 'Unable to show all' });
        }
        console.log(result);
        return res.json({
            status: true,
            data: result
        });
    })
}


exports.listMonthlyTaskCount = function(req, res) {
    const start = moment().startOf('month')
    const end = moment().endOf('month').format()

    console.log(start, end);
    console.log(new Date(start), new Date(end), );

    ItineraryModel.aggregate([{
            $match: {
                date: { $gte: new Date(start), $lte: new Date(end) },
            }
        },
        {
            "$addFields": { "stringID": { "$toString": "$_id" } }
        },
        {
            $lookup: {
                from: "task_assignments",
                localField: "stringID",
                foreignField: "itinerary_id",
                as: "tasksList"
            }
        }

    ]).exec(async(err, result) => {
        if (err) {
            console.log(err);
            return res.json({ status: false, data: 'Unable to show all' });
        }
        console.log(result);
        return res.json({
            status: true,
            data: result
        });
    })
}