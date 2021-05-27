var mongoose = require("mongoose");

require("./../models/ShowLocationModel.js");
const ShowLocation = mongoose.model("showLocationSchema");

require("./../models/CustomerModel");
const Customer = mongoose.model("Customer");

Itinerary = mongoose.model('Travel_itinerary');
TaskAssignment = mongoose.model('task_assignment')

var rand = require("random-key");
const { sendShowLocationMail } = require("../services/MailService.js");

exports.enableShowLocation = async function(req, res) {

    //console.log("Belloooo")
    const showLocationModel = new ShowLocation();

    const random_key = rand.generate(7);
    showLocationModel.travel_agent_id = req.body.travel_agent_id;
    showLocationModel.customer_id = req.body.customer_id;
    showLocationModel.random_key = random_key;
    showLocationModel.expired = false;

    var dbRecord = await ShowLocation.find({ travel_agent_id: req.body.travel_agent_id, customer_id: req.body.customer_id });

    console.log(dbRecord)

    if (dbRecord.length == 0) {
        dbRecord = await showLocationModel.save();
        console.log("Added new live location URL")
    } else {
        await ShowLocation.findOneAndUpdate({ travel_agent_id: req.body.travel_agent_id, customer_id: req.body.customer_id }, { $set: { expired: false, random_key: showLocationModel.random_key } });
        console.log("Updated live location URL")
    }



    const customerDbRecord = await Customer.find({
        cust_id: req.body.customer_id,
    });

    if (!customerDbRecord) {
        return res.status(404).send("relevant customer not found");
    }

    const customer = customerDbRecord[0];

    const email = customer.email;

    await sendShowLocationMail({
        random_key,
        receiver_mail: email, // change with email variable in line 33
    });

    console.log(customerDbRecord);

    return res.status(200).send(dbRecord);
};

exports.validateRequest = async function(req, res) {
    const random_key = req.params.random_key;

    // console.log(" Id ::::: " + random_key);

    // const showLocationModel = new ShowLocation();

    const dbRecord = await ShowLocation.find({ random_key });

    if (!dbRecord && dbRecord.length == 0) {
        return res
            .status(404)
            .send({ status: false, msg: `No record found for key ${random_key}` });
    }

    const existingRecord = dbRecord[0];

    if (existingRecord.expired) {
        return res.status(400).send({ status: false, msg: `key : ${random_key} is expired` });
    }

    return res.status(200).send({
        status: true,
        agent_id: existingRecord.travel_agent_id,
    });
};

//expired
exports.expireKey = async function(req, res) {
    //const random_key = req.body.random_key;



    const dbRecord = await ShowLocation.find({ travel_agent_id: req.body.travel_agent_id, customer_id: req.body.customer_id });

    if (!dbRecord && dbRecord.length == 0) {
        return res
            .status(404)
            .send({ msg: `No record found` });
    }

    const result = await ShowLocation.findOneAndUpdate({ travel_agent_id: req.body.travel_agent_id, customer_id: req.body.customer_id }, { $set: { expired: true } });

    // const existingRecord = dbRecord[0];
    // existingRecord.expired = true;

    // const showLocationModel = new ShowLocation(existingRecord);

    // const result = await showLocationModel.save();

    return res.status(200).send({
        msg: "succefully expired the key",
        body: result,
    });
};

exports.isExpired = async function(req, res) {
    const ta_id = req.params.ta_id;
    const cust_id = req.params.cust_id;

    // console.log(" Id ::::: " + random_key);

    // const showLocationModel = new ShowLocation();
    console.log(req.params);
    const dbRecord = await ShowLocation.find({ travel_agent_id: ta_id, customer_id: cust_id });

    if (dbRecord.length == 0) {
        return res
            .status(404)
            .send({ status: false, msg: `No record found ` });
    }

    const existingRecord = dbRecord[0];

    console.log(dbRecord);
    if (existingRecord.expired) {
        return res.status(400).send({ status: false, msg: `key is expired` });
    }

    return res.status(200).send({
        status: true,
        agent_id: existingRecord.travel_agent_id,
        cust_id: existingRecord.customer_id
    });
}

exports.rateTA = async function(req, res) {
    // const date = new Date();
    const date = new Date("2021-04-05");
    console.log(date);

    const uniqueKey = req.body.uniqueKey;
    const rate = req.body.rate;

    const dbRecord = await ShowLocation.find({ random_key: uniqueKey });

    if (!dbRecord && dbRecord.length == 0) {
        return res
            .status(404)
            .send({ status: false, msg: `No record found for key ${random_key}` });
    }

    const existingRecord = dbRecord[0];

    const travel_agent_id = existingRecord.travel_agent_id;
    const cust_id = existingRecord.customer_id

    if (existingRecord.expired) {
        return res.status(400).send({ status: false, msg: `key : ${random_key} is expired` });
    }

    const ItineraryRecord = await Itinerary.find({ travel_agent_id, date })

    if (!existingRecord && existingRecord.length == 0) {
        return res
            .status(404)
            .send({ status: false, msg: `No record found for travel agent id ${travel_agent_id} and for date ${date}` });
    }

    const itinerary_id = ItineraryRecord[0]._id;

    TaskAssignment.findOneAndUpdate({ itinerary_id, cust_id }, { $set: { rate } }, { new: true }, function(err, taskAssign) {
        if (err) {
            res.json({ status: false, data: 'Unable to Update!' });
        }

        res.json({ status: true, data: taskAssign });
    })





}