var mongoose = require('mongoose');

Itinerary = mongoose.model('Travel_itinerary');
Customers = mongoose.model('Customer');
TaskAssignment = mongoose.model('task_assignment')

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

exports.getAllocatedCustomers = (async function(req, res) {
    try {
        const travel_itenery = await Itinerary.find({ date: req.params.date, travel_agent_id: req.params.taid });
        const customers_array = travel_itenery[0].assigned_customer_id;
        const relevant_customers = await Customers.find({ cust_id: { $in: customers_array }, is_deleted: false });
        res.json({ status: true, data: relevant_customers });
    } catch (error) {
        console.log("Error from backend");
    }
})

exports.getAllocatedPendingCustomers = (async function(req, res) {
    try {
        const travel_itenery = await Itinerary.find({ date: req.params.date, travel_agent_id: req.params.taid });
        const customers_array = travel_itenery[0].assigned_customer_id;
        const pending_customers = await TaskAssignment.find({ cust_id: { $in: customers_array }, itinerary_id: travel_itenery[0]._id, status: "Pending" });

        var pending_customer_array = [];
        for (const customer of pending_customers) {
            pending_customer_array.push(customer.cust_id);
        }
        const relevant_customers = await Customers.find({ cust_id: { $in: pending_customer_array }, is_deleted: false });

        //console.log(res);
        res.json({ status: true, data: relevant_customers });
    } catch (error) {
        console.log("Error from backend");
    }
})