const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
  //userid
  userid: { type: String, required: true },

  //email
  email: { type: String, required: true },


  //engMark: { type: String, required: true },
  //sciMark: { type: Number, required: true },
  agentType: { type: String, required: true } //agenttype
});

module.exports = mongoose.model("Grade", gradeSchema);
