var mongoose = require("mongoose");

require("./../models/ShowLocationModel.js");
const ShowLocation = mongoose.model("showLocationSchema");

var rand = require("random-key");

exports.enableShowLocation = function (req, res) {
  const showLocationModel = new ShowLocation();

  showLocationModel.travel_agent_id = req.body.travel_agent_id;
  showLocationModel.customer_id = req.body.customer_id;
  showLocationModel.random_key = rand.generate(7);
  showLocationModel.expired = false;

  showLocationModel.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    }
  });


//send email

};

exports.validateRequest = async function (req, res) {
  const random_key = req.params.random_key;

  // console.log(" Id ::::: " + random_key);

  // const showLocationModel = new ShowLocation();

  const dbRecord = await ShowLocation.find({ random_key });

  if (!dbRecord && dbRecord.length == 0) {
    return res
      .status(404)
      .send({ msg: `No record found for key ${random_key}` });
  }

  const existingRecord = dbRecord[0];

  if (existingRecord.expired) {
    return res.status(400).send({ msg: `key : ${random_key} is expired` });
  }

  return res.status(200).send({
      agent_id : existingRecord.travel_agent_id,
  })

};

//expired
exports.expireKey = async function (req, res) {

    const random_key = req.params.random_key;
  
    const dbRecord = await ShowLocation.find({ random_key });
  
    if (!dbRecord && dbRecord.length == 0) {
      return res
        .status(404)
        .send({ msg: `No record found for key ${random_key}` });
    }
  
    const existingRecord = dbRecord[0];
  
    if (existingRecord.expired) {
      return res.status(400).send({ msg: `key : ${random_key} is expired` });
    }
  
    return res.status(200).send({
        agent_id : existingRecord.travel_agent_id,
    })
  
  };