const ResponseService = require("../shared/responseService");
const mongoose = require('mongoose');
Grade = mongoose.model('User');

exports.createUser = function(req, res) {
    const grade = new Grade(req.body);
    console.log(req.body);
    console.log(grade);
    if (grade.role == "ta") {
        Grade.find({ role: "ta" }, (err, doc) => {
            console.log('dddd');
            console.log(doc.length);

            var new_id = paddy(doc.length * 1 + 1, 4)
            console.log(new_id);

            new_id = grade['role'].toUpperCase() + new_id

            console.log(new_id);
            grade['userid'] = new_id;

            grade.save((err, doc) => {
                ResponseService.generalPayloadResponse(err, doc, res);
            });

        })

    } else if (grade.role == "ca") {

        Grade.find({ role: "ca" }, (err, doc) => {
            console.log('cccc');
            console.log(doc.length);

            var new_id = paddy(doc.length * 1 + 1, 4)
            console.log(new_id);

            new_id = grade['role'].toUpperCase() + new_id

            console.log(new_id);
            grade['userid'] = new_id;

            grade.save((err, doc) => {
                ResponseService.generalPayloadResponse(err, doc, res);
            });

        })

    }

};



function getNextSequenceValue(sequenceName) {
    var sequenceDocument = db.counters.findAndModify({
        query: { userid: sequenceName },
        update: { $inc: { sequence_value: 1 } },
        new: true
    });
    return sequenceDocument.sequence_value;
}

exports.getCAagent = function(req, res) {


    Grade.find({ role: "ca", is_deleted: false }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
};

exports.getTAagent = function(req, res) {


    Grade.find({ role: "ta", is_deleted: false }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
};

function paddy(num, padlen, padchar) {
    var pad_char = typeof padchar !== "undefined" ? padchar : "0";
    var pad = new Array(1 + padlen).join(pad_char);
    return (pad + num).slice(-pad.length);
}



exports.findOne = function(req, res) {
    Grade.findOne({ userid: req.params.id }, function(err, user) {
        if (err) {
            res.json({ status: false, data: 'Invalid ID' });
        }

        res.json({ status: true, data: user });
    })
};

exports.updateAUser = function(req, res) {
    Grade.findOneAndUpdate({ userid: req.params.id }, req.body, { new: true }, function(err, user) {
        if (err) {
            res.json({ status: false, data: 'Unable to Update!' });
        }

        res.json({ status: true, data: user });
    })
};

module.exports.getAgentLeaveStatusById = (req, res, next) => {
    // const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    // if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    userService.getAgentLeaveStatusById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


exports.deleteAnAgent = function(req, res) {

    Grade.findOneAndUpdate({ userid: req.params.id }, { $set: { is_deleted: true } }, function(err, agent) {
        if (err) {
            res.json({ status: false, data: 'Unable to Delete!' })
        }

        res.json({ status: true, data: 'Agent removed Successfully!' });
    })
};