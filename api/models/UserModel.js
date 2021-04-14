const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 

const userSchema = mongoose.Schema({
    //userid
    userid: { type: String, required: true },
  
    //email
    email: { type: String, required: true, unique:true },
  
  
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mobile_number: { type: Number, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    province: { type: String, required: true },
    bio: { type: String, required: true },
    role: { type: String, required: true }, //agenttype
    password: {
      type: String,
      required: true,
      minlength: [4, 'Password must be atleast 4 character long']
  },
    saltSecret: String
  });

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

// const User = mongoose.model('User',userSchema);
// module.exports = User;

// mongoose.model('User', userSchema);

module.exports = mongoose.model("User", userSchema);
