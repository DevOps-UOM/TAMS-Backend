var mongoose = require('mongoose');

Itinerary = mongoose.model('ItineraryModel');

exports.listAllItineraries = function(req, res) {
    Itinerary.find({}, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }

        res.json({ status: true, data: itinerary });
    });
};

exports.addAItinerary = function(req, res) {
    var newItinerary = new Itinerary(req.body);

    newItinerary.save(function(err, itinerary) {

    });
    Itinerary.find({}, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Unable to Create!' });
        }

        res.json({ status: true, data: itinerary });
    });
};

exports.getASingleItinerary = function(req, res) {
    Itinerary.findById({ date: req.params.date, travel_agent_id: req.params.taid }, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Invalid date or TAID' });
        }

        res.json({ status: true, data: itinerary });
    })
};

exports.updateAItinerary = function(req, res) {
    Itinerary.findOneAndUpdate({ date: req.params.date, travel_agent_id: req.params.taid }, req.body, { new: true }, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Unable to Update!' });
        }

        res.json({ status: true, data: itinerary });
    })
};

exports.deleteAItinerary = function(req, res) {
    Student.remove({ date: req.params.date, travel_agent_id: req.params.taid }, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' });
        }

        res.json({ status: true, data: 'Itinerary removed Successfully!' });
    })
};