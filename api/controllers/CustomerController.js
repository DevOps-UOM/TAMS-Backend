var mongoose = require('mongoose');

Customer = mongoose.model('Customer');

exports.listAllCustomers = function(req, res) {
    // Customer.find({}, function(err, customer) {
    //     if (err) {
    //         res.json({ status: false, data: 'Invalid Request!' });
    //     }

    //     res.json({ status: true, data: customer });
    // });

    Customer.find({}).populate('default_agent_id')
    .then(customer => {
        res.json({ status: true, data: customer });
    })
    .catch(err => {
        res.json({ status: false, data: err.message });
    })
};

exports.addACustomer = function(req, res) {
    var newCustomer = new Customer(req.body);

    Customer.find({}, function(err, doc) {
        console.log('aaaa');
        console.log(doc.length);
        
        var new_id = paddy(doc.length+1, 4)
        console.log(new_id);
    
        new_id = 'C'+new_id
    
        console.log(new_id);
        newCustomer['cust_id'] = new_id;

    newCustomer.save(function(err, customer) {

    });
    Customer.find({}, function(err, customer) {
        if (err) {
            res.json({ status: false, data: 'Unable to Create!' });
        }

        res.json({ status: true, data: customer });
    });
})
};

// exports.addACustomer = function(req, res) {
//     const customer = new Customer(req.body);
  
//     Customer.find({}, (err, doc) => {
//       console.log('abcd');
//       console.log(doc.length);
      
//       var new_id = paddy(doc.length*1 +1, 4)
//       console.log(new_id);
  
//       new_id = 'C'+new_id
  
//       console.log(new_id);
//       customer['cust_id'] = new_id;
      
//       customer.save((err, doc) => {
//         //   ResponseService.generalPayloadResponse(err, doc, res);
//         });
  
//     })
// };

function getNextSequenceValue(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
       query:{cust_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
    return sequenceDocument.sequence_value;
  }

  function paddy(num, padlen, padchar) {
	var pad_char = typeof padchar !== "undefined" ? padchar : "0";
	var pad = new Array(1 + padlen).join(pad_char);
	return (pad + num).slice(-pad.length);
}

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
    // if (!mongoose.cust_id.isValid(req.params.id))
    //     return res.status(400).json(`No record with given id : ${req.params.id}`);

    var customer = {
        ...req.body
    };
    Customer.findOneAndUpdate({cust_id: req.params.id}, { $set: customer }, { new: true }, (err, doc) => {
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