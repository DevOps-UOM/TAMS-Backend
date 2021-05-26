const mongoose = require('mongoose');

Availability = mongoose.model('Availability');
Leaves = mongoose.model('leaves');

exports.
createAvailability = function(req, res) {
    let availability = new Availability(req.body);
    availability.save(function(err, availability) {
        if (err) {
            return res.json({ status: false, data: 'Unable to Create Availability!', err: err.message });
        }
        return res.json({ status: true, data: availability });
    });
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
            let availabilities_mapped = await Promise.all(availabilities.map(async (m) => {
                m.leave = await Leaves.find({travel_agent: m.cust_id.default_agent_id._id})
                return m
            }));
            // console.log(availabilities_mapped)
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

exports.editAvailability= (req,res) =>{
    Availability.updateOne({_id: req.params.id}, {
        $set: req.body
    })}

exports.deleteAvailability = (req, res) => {
    Availability.deleteOne({date: req.params.date, _id: req.params.custid }, (err, Availability) => {
        if(err){
           return res.json({ status: false, data: 'Unable to Delete!' });
        }
           return res.json({ status: true, data: 'Availability removed Successfully!' });
    }
        )
}