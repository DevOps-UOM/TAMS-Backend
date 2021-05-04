var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

TaskAssignment = mongoose.model("task_assignment");
Customer = mongoose.model("Customer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tams.uom@gmail.com",
    pass: "Tams1234",
  },
});

exports.sendShowLocationMail = async function (mailData) {
  console.log("sharing location started");

  const tempId = `http://localhost:4200/showAgentLocation/${mailData.random_key}`;

  var mailOptions = {
    from: "tams.uom@gmail.com",
    to: mailData.receiver_mail,
    subject: "Sending Tempory Link",
    text: tempId,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error occured in  mail sending");
  }

  //   TaskAssignment.findOneAndUpdate(
  //     { cust_id: req.params.cust_id, itinerary_id: req.params.itinerary_id },
  //     { urlId: tempId },
  //     { multi: true },
  //     function (err, taskAssignment) {
  //       if (err) {
  //         res.json({ status: false, data: "Unable to Update!" });
  //       }
  //       //console.log(taskAssignment);

  //       transporter.sendMail(mailOptions, function (error, info) {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           console.log("Email sent: " + info.response);
  //         }
  //       });

  //       console.log("Location shared");
  //     }
  //   );
};
