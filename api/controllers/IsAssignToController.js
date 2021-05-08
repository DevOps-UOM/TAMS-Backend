var mongoose = require("mongoose");
//var nodemailer = require('nodemailer');


TaskAssignment = mongoose.model('task_assignment');
Customer = mongoose.model('Customer')

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'tams.uom@gmail.com',
//         pass: 'Tams1234'
//     }
// });


// exports.listAllTaskAssignments = function(req, res) {
//     TaskAssignment.find({ is_deleted: false }, function(err, taskAssignment) {
//         if (err) {
//             res.json({ status: false, data: 'Invalid Request!' });
//         }

//         res.json({ status: true, data: taskAssignment });
//     });
// };

exports.listAllTaskAssignments = function(req, res) {
    TaskAssignment.find({ is_deleted: false }).populate('task')
        .then(taskAssignment => {
            res.json({ status: true, data: taskAssignment });
        })
        .catch(err => {
            res.json({ status: false, data: 'Invalid Request!' });
        })
};

exports.addATaskAssignment = function(req, res) {
    var newTaskAssignment = new TaskAssignment(req.body);

    newTaskAssignment.save(function(err, taskAssignment) {

    });
    TaskAssignment.find({}, function(err, taskAssignment) {
        if (err) {
            res.json({ status: false, data: 'Unable to Create!' });
        }

        res.json({ status: true, data: taskAssignment });
    });
};


exports.updateTaskAssignment = function(req, res) {
    TaskAssignment.findOneAndUpdate({ cust_id: req.params.cust_id, itinerary_id: req.params.itinerary_id }, req.body, { new: true }, function(err, taskAssignment) {
        if (err) {
            res.json({ status: false, data: 'Unable to Update!' });
        }

        //console.log(taskAssignment);
        res.json({ status: true, data: taskAssignment });
    })
};

exports.removeATaskAssignment = function(req, res) {
    TaskAssignment.findOneAndUpdate({ cust_id: req.params.cust_id, itinerary_id: req.params.itinerary_id }, { $set: { is_deleted: true } }, function(err, taskAssignment) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' });
        }

        res.json({ status: true, data: 'Itinerary removed Successfully!' });
    })
};

exports.getASingleTaskAssignment = function(req, res) {
    TaskAssignment.find({ cust_id: req.params.cust_id, itinerary_id: req.params.itinerary_id }).populate('task')
        .then(taskAssignment => {
            res.json({ status: true, data: taskAssignment });
        })
        .catch(err => {
            res.json({ status: false, data: 'Invalid date or TAID' });
        })
};

// exports.startShowLocation = function(req, res) {
//     console.log("sharing location started")

//     let tempId = makeid();
//     // http://localhost:4200/showAgentLocation/${random_key}

//     var mailOptions = {
//         from: 'tams.uom@gmail.com',
//         to: 'johanpriyasanka@gmail.com',
//         subject: 'Sending Email using Node.js',
//         text: tempId
//     };

//     TaskAssignment.findOneAndUpdate({ cust_id: req.params.cust_id, itinerary_id: req.params.itinerary_id }, { urlId: tempId }, { multi: true }, function(err, taskAssignment) {
//         if (err) {
//             res.json({ status: false, data: 'Unable to Update!' });
//         }
//         //console.log(taskAssignment);

//         transporter.sendMail(mailOptions, function(error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//             }
//         });

//         console.log("Location shared")
//         res.json({ status: true, data: taskAssignment });
//     })
// };


// Making a unique ID
// function makeid() {
//     var result = [];
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < 30; i++) {
//         result.push(characters.charAt(Math.floor(Math.random() *
//             charactersLength)));
//     }
//     console.log(result.join(''))
//     return result.join('');
// }