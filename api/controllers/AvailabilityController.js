const mongoose = require("mongoose");

Availability = mongoose.model("Availability");
Leaves = mongoose.model("leaves");

exports.createAvailability = function (req, res) {
  // console.log("=======");
  // console.log(req.body.cust_id,new Date(req.body.date));
  Availability.find(
    { cust_id: req.body.cust_id, date: new Date(req.body.date) },
    (err, result) => {
      // console.log("-----");
      // console.log(result.length);

      if (result.length === 0) {
        let availability = new Availability(req.body);
        availability.save(function (error) {
          if (error) {
            return res.json({
              status: false,
              data: "Somthing went wrong!",
              err: error,
            });
          }
          return res.json({ status: true, data: availability });
        });
      } else {
        return res.json({
          status: false,
          data: "Availability already created!",
          err: err,
        });
      }
    }
  );
};

// exports.
// createAvailability = function(req, res) {
//     let availability = new Availability(req.body);
//     availability.save(function(err, availability) {
//         if (err) {
//             return res.json({ status: false, data: 'Unable to Create Availability!', err: err.message });
//         }
//         return res.json({ status: true, data: availability });
//     });
// };

exports.getAllAvailability = function (req, res) {
  Availability.find({})
    .populate("task")
    .populate({
      path: "cust_id",
      populate: {
        path: "default_agent_id",
        model: "User",
      },
    })
    .then(async (availabilities) => {
      let leaves = [];
      // let availabilities_mapped = availabilities.map(async (m) => {
      //     m.leave = await Leaves.find({travel_agent: m.cust_id.default_agent_id._id})
      //     return m
      // })
      let availabilities_mapped = await Promise.all(
        availabilities.map(async (m) => {
          m.leave = await Leaves.find({
            travel_agent: m.cust_id.default_agent_id._id,
          });
          return m;
        })
      );
      // console.log(availabilities_mapped)
      await res.json({ status: true, data: availabilities_mapped });
    })
    .catch((err) => {
      res.json({ status: false, data: err.message });
    });
  // Availability.find({}, function(err, availabilities) {
  //     if (err) {
  //         res.json({ status: false, data: 'Invalid Request!' });
  //     }
  //     res.json({ status: true, data: availabilities });
  // }).populate('task');
};

exports.editAvailability = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log("received id " + id);
  console.log("received body ");
 

  //   Availability.updateOne(
  //     { _id: id },
  //     {
  //       $set: body,
  //     }
  //   );

  Availability.findByIdAndUpdate({ _id : id }, body, (err, response) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "error in update availability" });
    }

    console.log("response")
    console.log(response)

    return res
      .status(200)
      .json({ message: "succesfully updated the availability" });
  });
};

exports.deleteAvailability = (req, res) => {
  Availability.deleteOne(
    { date: req.params.date, _id: req.params.custid },
    (err, Availability) => {
      if (err) {
        return res.json({ status: false, data: "Unable to Delete!" });
      }
      return res.json({
        status: true,
        data: "Availability removed Successfully!",
      });
    }
  );
};
