const ResponseService = require("../shared/responseService");
const mongoose = require('mongoose');
Grade = mongoose.model('Grade');

exports.createUser = function(req, res) {
  const grade = new Grade(req.body);
  grade.save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

exports.getUser = function(req, res) {
  Grade.find({ agentType: "ca" }, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

exports.getMaxUser = function(req, res) {
  Grade.find({ agentType: "ta" }, (err, doc) => {
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





// const Grade = require("../models/grade");
// const app = require("express");
// const router = app.Router();

// router.post("/", (req, res) => {
//   const grade = new Grade(req.body);
//   grade.save((err, doc) => {
//     ResponseService.generalPayloadResponse(err, doc, res);
//   });
// });

// router.get("/", (req, res) => {
//   Grade.find({ agentType: "ca" }, (err, doc) => {
//     ResponseService.generalPayloadResponse(err, doc, res);
//   });
// });

// router.get("/max", (req, res) => {
//   Grade.find({ agentType: "ta" }, (err, doc) => {
//     ResponseService.generalPayloadResponse(err, doc, res);
//   });
// });