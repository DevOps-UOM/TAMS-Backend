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

// exports.updateACustomer = function(req, res) {
//     Customer.findOneAndUpdate({ cust_id: req.params.id }, req.body, { new: true }, function(err, customer) {
//         if (err) {
//             res.json({ status: false, data: 'Unable to Update!' });
//         }

//         res.json({ status: true, data: customer });
//     })
// };

exports.deleteACustomer = function(req, res) {
    Customer.remove({ cust_id: req.params.id }, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' });
        }

        res.json({ status: true, data: 'Customer removed Successfully!' });
    })
};

exports.updateACustomer = function(req, res) {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

    var customer = {
        area: req.body.area,
        cust_id: req.body.cust_id,
        mobile_number: req.body.mobile_number,
        //salary: req.body.salary,
    };
    Customer.findOneAndUpdate(req.params.id, { $set: customer }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
};

// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Employee.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });


//getItineraryCustomers