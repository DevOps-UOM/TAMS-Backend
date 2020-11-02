var mongoose = require('mongoose');

Customer = mongoose.model('Customer');

exports.listAllCustomers = function(req, res) {
    Customer.find({}, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }

        res.json({ status: true, data: customer });
    });
};

exports.addACustomer = function(req, res) {
    var newCustomer = new Customer(req.body);

    newCustomer.save(function(err, customer) {

    });
    Customer.find({}, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Unable to Create!' });
        }

        res.json({ status: true, data: customer });
    });
};

exports.getASingleCustomer = function(req, res) {
    Customer.find({ cust_id: req.params.id }, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Invalid ID' });
        }

        res.json({ status: true, data: customer });
    })
};

exports.updateACustomer = function(req, res) {
    Customer.findOneAndUpdate({ cust_id: req.params.id }, req.body, { new: true }, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Unable to Update!' });
        }

        res.json({ status: true, data: customer });
    })
};

exports.deleteACustomer = function(req, res) {
    Customer.remove({ cust_id: req.params.id }, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' });
        }

        res.json({ status: true, data: 'Customer removed Successfully!' });
    })
};



//getItineraryCustomers