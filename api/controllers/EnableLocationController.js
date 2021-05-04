var mongoose = require("mongoose");

require("./../models/ShowLocationModel.js");
const ShowLocation = mongoose.model("showLocationSchema");

require("./../models/CustomerModel");
const Customer = mongoose.model("Customer");

var rand = require("random-key");
const { sendShowLocationMail } = require("../services/MailService.js");

exports.enableShowLocation = async function (req, res) {
  const showLocationModel = new ShowLocation();

  const random_key = rand.generate(7);
  showLocationModel.travel_agent_id = req.body.travel_agent_id;
  showLocationModel.customer_id = req.body.customer_id;
  showLocationModel.random_key = random_key;
  showLocationModel.expired = false;

  const dbRecord = await showLocationModel.save();

  const customerDbRecord = await Customer.find({
    cust_id: req.body.customer_id,
  });

  if (!customerDbRecord) {
    return res.status(404).send("user not found");
  }

  const customer = customerDbRecord[0];

  const email = customer.email;

  await sendShowLocationMail({
    random_key,
    receiver_mail: "bhagyafdo97@gmail.com", // change with email variable in line 33
  });

  console.log(customerDbRecord);

  return res.status(200).send(dbRecord);
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
    agent_id: existingRecord.travel_agent_id,
  });
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
  existingRecord.expired = true;

  const showLocationModel = new ShowLocation(existingRecord);

  const result = await showLocationModel.save();

  return res.status(200).send({
    msg: "succefully expired the key",
    body: result,
  });
};
