const mongoose = require('mongoose');

Availability = mongoose.model('Availability');
Leaves = mongoose.model('leaves');

exports.createAvailability = async function(req, res) {

    try {
        let availability = new Availability(req.body);
        let checkAvailability = await Availability.find({ cust_id: availability.cust_id, date: availability.date });

        if (checkAvailability.length != 0) {
            return res.json({ status: false, data: 'RecordExist' });
        }

        await availability.save();

        return res.json({ status: true, data: availability });
    } catch (err) {
        return res.json({ status: false, data: 'Unable to Create Availability!', err: err.message });
    }


    // availability.save(function(err, availability) {
    //     if (err) {
    //         return res.json({ status: false, data: 'Unable to Create Availability!', err: err.message });
    //     }
    //     return res.json({ status: true, data: availability });
    // });
};

exports.getAllAvailability = function(req, res) {
    Availability.find({})
        .populate('task')
        .populate({
            path: 'cust_id',
            populate: {
                path: 'default_agent_id',
                model: 'User'
            }
        })
        .then(async availabilities => {
            let leaves = []
                // let availabilities_mapped = availabilities.map(async (m) => {
                //     m.leave = await Leaves.find({travel_agent: m.cust_id.default_agent_id._id})
                //     return m
                // })
            let availabilities_mapped = await Promise.all(availabilities.map(async(m) => {
                m.leave = await Leaves.find({ travel_agent: m.cust_id.default_agent_id._id })
                return m
            }));
            console.log(availabilities_mapped)
            await res.json({ status: true, data: availabilities_mapped });
        })
        .catch(err => {
            res.json({ status: false, data: err.message });
        })
        // Availability.find({}, function(err, availabilities) {
        //     if (err) {
        //         res.json({ status: false, data: 'Invalid Request!' });
        //     }
        //     res.json({ status: true, data: availabilities });
        // }).populate('task');
};