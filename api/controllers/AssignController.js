const mongoose = require('mongoose');

Assign = mongoose.model('Assign');

exports.createAssign = function(req, res) {
    let assign = new Assign(req.body);
    assign.save(function(err, assign) {
        if (err) {
            return res.json({ status: false, data: 'Unable to Create Assign!', err: err.message });
        }
        return res.json({ status: true, data: assign });
    });
};

exports.getAllAssign = function(req, res) {
    Assign.find({})
        .populate('travel_agent')
        .populate('customer')

        .then(assign => {
            res.json({ status: true, data: assign });
        })
        .catch(err => {
            res.json({ status: false, data: err.message });
        })
};
