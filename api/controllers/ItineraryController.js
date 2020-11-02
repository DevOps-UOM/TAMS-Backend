var mongoose = require('mongoose');
var Customers = require('../controllers/CustomerController');

Itinerary = mongoose.model('Travel_itinerary');

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
    Itinerary.find({ date: req.params.date, travel_agent_id: req.params.taid }, function(err, itinerary) {
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
    Itinerary.remove({ date: req.params.date, travel_agent_id: req.params.taid }, function(err, itinerary) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' });
        }

        res.json({ status: true, data: 'Itinerary removed Successfully!' });
    })
};

exports.getAllocatedCustomers = function(req, res) {
    getASingleItinerary(req, resItin);
    var customerList = resItin.data.assigned_customer_id;
    var customers;
    for (var i = 0; i < customerList.length; i++) {
        Customers.getASingleCustomer(customerList[i], resCust);
        customers.push(resCust.data);
    }
    if (err) {
        res.json({ status: false, data: 'Unable to get Allocated Customers!' });
    }

    res.json({ status: true, data: customers });
}