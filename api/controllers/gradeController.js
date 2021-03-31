const ResponseService = require("../shared/ResponseService");
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