// const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const userSchema = mongoose.Schema({
//   //userid
//   userid: { type: String, required: true },

//   //email
//   email: { type: String, required: true, unique:true },


//   first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   mobile_number: { type: Number, required: true },
//   city: { type: String, required: true },
//   district: { type: String, required: true },
//   province: { type: String, required: true },
//   bio: { type: String, required: true },
//   role: { type: String, required: true }, //agenttype
//   password: {
//     type: String,
//     required: true,
//     minlength: [4, 'Password must be atleast 4 character long']
// },
//   saltSecret: String
// });

// // Events
// userSchema.pre('save', function (next) {
//   bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(this.password, salt, (err, hash) => {
//           this.password = hash;
//           this.saltSecret = salt;
//           next();
//       });
//   });
// });

// userSchema.methods.generateJwt = function () {
//   return jwt.sign({ _id: this._id},
//       process.env.JWT_SECRET,
//   {
//       expiresIn: process.env.JWT_EXP
//   });
// }

// module.exports = mongoose.model("User", userSchema);
