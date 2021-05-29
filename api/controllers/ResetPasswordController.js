// const mongoose = require('mongoose');
// const User = mongoose.model('User');
// const passwordResetToken = mongoose.model('passwordResetToken');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// module.exports.ResetPassword = async (req, res) => {
//   console.log(req.body.email);

//   if (!req.body.email) {
//     return res
//     .status(500)
//     .json({ message: 'Email is required' });
//   }

//   let user;

//   try {
//     user = await User.findOne({
//     email:req.body.email
//   });
//   } catch (err) {
//     console.log(err);
//     return res
//     .status(500)
//     .json({ message: err });
//   }

//   if (!user) {
//       return res
//       .status(409)
//       .json({ message: 'Email does not exist' });
//   }

//   console.log(user.email);

//   var resettoken = new passwordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });

//   resettoken.save(function (err) {
    
//     if (err) { return res.status(500).send({ msg: err.message }); }
    
//     passwordResetToken.find({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();

//     // return res.status(200).json({ message: 'Reset Password successfully.', url: 'http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken });
//     console.log(resettoken.resettoken);

//     try {
//       var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         port: 465,
//         auth: {
//           user: 'dushan.testlab@gmail.com',
//           pass: 'Admin_my@123'
//         }
//       });
      
//       var mailOptions = {
//         from: 'dushan.testlab@gmail.com',
//         to: user.email,
//         subject: 'Node.js Password Reset',
//         text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
//         'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
//         'http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken + '\n\n' +
//         'If you did not request this, please ignore this email and your password will remain unchanged.\n'
//       };

//       transporter.sendMail(mailOptions, function (err, info) {
//         if (err) {
//           return res.status(500).json ({ err: err });
//           console.log(err);
//         } else {
//           console.log('Email sent successfully' + info.res);
//         }
//       });
//     }
//     catch (err) {
//       console.log(err);
//       res.status(400).json({err});
//     }
//   })
// };



// module.exports.ValidPasswordToken = async (req, res) => {
//         if (!req.body.resettoken) {
//           return res
//           .status(500)
//           .json({ message: 'Token is required' });
//         }

        

//         const user = await passwordResetToken.findOne({
//           resettoken: req.body.resettoken
//         });

//         if (!user) {
//           return res
//           .status(409)
//           .json({ message: 'Invalid URL' });
//         }

//         User.findOneAndUpdate({ _id: user._userId }).then(() => {
//         res.status(200).json({ message: 'Token verified successfully.' });
//         }).catch((err) => {
//         return res.status(500).send({ msg: err.message });
//         });
// }


// module.exports.NewPassword = async (req, res) => {
//     passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
//               if (!userToken) {
//                 return res
//                   .status(409)
//                   .json({ message: 'Token has expired' });
//               }
        
//               User.findOne({
//                 _id: userToken._userId
//               }, function (err, userEmail, next) {
//                 if (!userEmail) {
//                   return res
//                     .status(409)
//                     .json({ message: 'User does not exist' });
//                 }
//                 return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
//                   if (err) {
//                     return res
//                       .status(400)
//                       .json({ message: 'Error hashing password' });
//                   }
//                   userEmail.password = hash;
//                   userEmail.save(function (err) {
//                     if (err) {
//                       return res
//                         .status(400)
//                         .json({ message: 'Password can not reset.' });
//                     } else {
//                       userToken.remove();
//                       return res
//                         .status(201)
//                         .json({ message: 'Password reset successfully' });
//                     }
        
//                   });
//                 });
//               });
        
//     })
// }


const mongoose = require('mongoose');
const User = mongoose.model('User');
const passwordResetToken = mongoose.model('passwordResetToken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

module.exports.ResetPassword = async (req, res) => {
  console.log(req.body.email);

  if (!req.body.email) {
    return res
    .status(500)
    .json({ message: 'Email is required' });
  }

  let user;

  try {
    user = await User.findOne({
    email:req.body.email
  });
  } catch (err) {
    console.log(err);
    return res
    .status(500)
    .json({ message: err });
  }

  if (!user) {
      return res
      .status(409)
      .json({ message: 'Email does not exist' });
  }

  console.log(user.email);

  var resettoken = new passwordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });

  resettoken.save(function (err) {
    
    if (err) { return res.status(500).send({ msg: err.message }); }
    
    passwordResetToken.find({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();

    // return res.status(200).json({ message: 'Reset Password successfully.', url: 'http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken });
    console.log(resettoken.resettoken);

    try {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
          user: 'dushan.testlab@gmail.com',
          pass: 'Admin_my@123'
        }
      });

      console.log('http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken);
      
      var mailOptions = {
        from: 'dushan.testlab@gmail.com',
        to: user.email,
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          return res.status(500).json ({ err: err, resetLink: 'http://localhost:4200/boards/response-reset-password/' + resettoken.resettoken });    
        } else {
          console.log('Email sent successfully' + info.res);
        }
      });
    }
    catch (err) {
      console.log(err);
      res.status(400).json({err});
    }
  })
};



module.exports.ValidPasswordToken = async (req, res) => {
        if (!req.body.resettoken) {
          return res
          .status(500)
          .json({ message: 'Token is required' });
        }

        

        const user = await passwordResetToken.findOne({
          resettoken: req.body.resettoken
        });

        if (!user) {
          return res
          .status(409)
          .json({ message: 'Invalid URL' });
        }

        User.findOne({ _id: user._userId }).then(() => {
          res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
          return res.status(500).send({ msg: err.message });
        });
}


module.exports.NewPassword = async (req, res) => {
    passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
              if (!userToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              User.findOne({
                _id: userToken._userId
              }, function (err, userEmail, next) {
                if (!userEmail) {
                  return res
                    .status(409)
                    .json({ message: 'User does not exist' });
                }
                
                userEmail.password = req.body.newPassword;
                userEmail.save(function (err) {
                  if (err) {
                    return res
                      .status(400)
                      .json({ message: 'Password cannot reset.' });
                  } else {
                    userToken.remove();
                    return res
                      .status(201)
                      .json({ message: 'Password reset successfully' });
                  }
                });
              });
        
    })
}