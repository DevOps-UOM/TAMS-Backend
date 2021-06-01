const mongoose = require('mongoose');

leaves = mongoose.model('leaves');

exports.createleaves = function(req, res) {
    let newLeaves = new leaves(req.body);
    newLeaves.save(function(err, leaves) {
        if (err) {
            return res.json({ status: false, data: 'Unable to Create leaves!', err: err.message });
        }
        return res.json({ status: true, data: leaves });
    });
};

exports.getAllleaves = function(req, res) {
    // leaves.find({}, function(err, leaves) {
    //     if (err) {
    //         res.json({ status: false, data: 'Invalid Request!' });
    //     }
    //     res.json({ status: true, data: leaves });
    // });
    leaves.find({})
        .populate('travel_agent')
        .then(availabilities => {
            res.json({ status: true, data: availabilities });
        })
        .catch(err => {
            res.json({ status: false, data: err.message });
        })
};

exports.deleteLeaves = (req, res) => {
    leaves.deleteOne({_id: req.params.id}, (err, leaves) => {
        if(err){
           return res.json({ status: false, data: 'Unable to Delete!' });
        }
           return res.json({ status: true, data: 'Leave removed Successfully!' });
    }
        )
}