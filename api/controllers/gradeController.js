const ResponseService = require("../shared/responseService");
const mongoose = require('mongoose');
Grade = mongoose.model('User');
const UserService = require("../shared/user.service");

exports.createUser = function(req, res) {
  const grade = new Grade(req.body);
  grade.save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

exports.getUser = function(req, res) {
  Grade.find({ role: "ca" }, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

exports.getMaxUser = function(req, res) {
  Grade.find({ role: "ta" }, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};


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

// module.exports.getAgentLeaveStatusById = (req, res, next) => {
//   // const currentUser = req.user;
//   const id = parseInt(req.params.id);

  // only allow admins to access other user records
  // if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
  //     return res.status(401).json({ message: 'Unauthorized' });
  // }

//   userService.getAgentLeaveStatusById(req.params.id)
//   .then(user => user ? res.json(user) : res.sendStatus(404))
//   .catch(err => next(err));
// }


exports.getAgentLeaveStatusById = function(req, res) {
  // Grade.find({ role: "ta" }, (err, doc) => {
  //   ResponseService.generalPayloadResponse(err, doc, res);
  // });
    UserService.getAgentLeaveStatusById(req.params.id).then(x => {
      res.json({status : true, data : x});
    }).catch(err=> {
        res.json({status : false, data : null});
    });
};