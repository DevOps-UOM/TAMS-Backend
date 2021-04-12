const ResponseService = require("../shared/responseService");
const mongoose = require('mongoose');
Grade = mongoose.model('User');

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