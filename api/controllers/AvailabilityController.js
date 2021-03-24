const mongoose = require('mongoose');

Availability = mongoose.model('Availability');

exports.createAvailability = function(req, res) {
    let availability = new Availability(req.body);
    availability.save(function(err, availability) {
        if (err) {
            return res.json({ status: false, data: 'Unable to Create Availability!', err: err.message });
        }
        return res.json({ status: true, data: availability });
    });
};

exports.getAllAvailability = function(req, res) {
    Availability.find({}).populate('task')
    .then(availabilities => {
        res.json({ status: true, data: availabilities });
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

