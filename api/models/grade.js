const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
  //userid
  userid: { type: String, required: true },

  //email
  email: { type: String, required: true },


  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile_number: { type: Number, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  province: { type: String, required: true },
  bio: { type: String, required: true },
  agentType: { type: String, required: true } //agenttype
});

module.exports = mongoose.model("Grade", gradeSchema);
