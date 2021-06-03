var mongoose = require("mongoose");

Itinerary = mongoose.model("Travel_itinerary");
Customers = mongoose.model("Customer");

TaskAssignment = mongoose.model("task_assignment");
User = mongoose.model("User");

exports.listAllItineraries = async (req, res)=> {
  Itinerary.find({},async function (err, iternaries) {
    if (err) {
      res.json({ status: false, data: "Invalid Request!" });
    }

    console.log(iternaries)

    populatedIternaries = []
    populatedCustomers = []

    for(var x=0;x<iternaries.length;x++){
        let item = iternaries[x]
        const agent = await getAgent(item.travel_agent_id)

        for(var y=0;y<item._doc.assigned_customer_id.length;y++){
            const customer = await getCustomers(item._doc.assigned_customer_id[y]);
            populatedCustomers.push(customer)
        }

       
        const populated = {...item, agent, customers:populatedCustomers}
        populatedIternaries.push(populated)
        populatedCustomers = []
    }
 
    res.json({ status: true, data: populatedIternaries });
  });
};

const getAgent = async (userid) => {
    console.log(userid)
  const agent =  await User.findOne({ userid });
    console.log("****************")
    console.log(agent)
    return agent
};

const getCustomers = async (cust_id) => {
    console.log(cust_id)
  const customer =  await Customers.findOne({ cust_id });
    console.log("****************")
    console.log(customer)
    return customer
};

exports.listItinerariesByDate = async function (req, res) {
  try {
    const travel_itenery = await Itinerary.find({ date: req.params.date });
    const new_travel_itinerary = [];
    for (var k = 0; k < travel_itenery.length; k++) {
      const travel_agent = await User.find({
        userid: travel_itenery[k].travel_agent_id,
      });

      const customers_array = travel_itenery[k].assigned_customer_id;
      const pending_customers = await TaskAssignment.find({
        cust_id: { $in: customers_array },
        itinerary_id: travel_itenery[k]._id,
      }).sort({ queue_number: 1 });

      const pending_customer_array = [];
      for (const customer of pending_customers) {
        pending_customer_array.push(customer.cust_id);
      }
      const relevant_customers = await Customers.find({
        cust_id: { $in: pending_customer_array },
        is_deleted: false,
      });

      let optimized_cust_array = [];
      for (var i = 0; i < pending_customer_array.length; i++) {
        for (j = 0; j < pending_customer_array.length; j++) {
          if (pending_customer_array[i] == relevant_customers[j].cust_id) {
            optimized_cust_array.push(relevant_customers[j]);
            break;
          }
        }
      }
      new_travel_itinerary.push({
        itinerary_id: travel_itenery[k]._id,
        date: travel_itenery[k].date,
        travel_agent: travel_agent[0],
        customers: optimized_cust_array,
      });
    }

    res.json({ status: true, data: new_travel_itinerary });
  } catch (error) {
    console.log("list itinerary by date error");
  }
};

exports.addAItinerary = function (req, res) {
  var newItinerary = new Itinerary(req.body);

  newItinerary.save(function (err, itinerary) {});
  Itinerary.find({}, function (err, itinerary) {
    if (err) {
      res.json({ status: false, data: "Unable to Create!" });
    }

    res.json({ status: true, data: itinerary });
  });
};

exports.getASingleItinerary = function (req, res) {
  Itinerary.find(
    { date: req.params.date, travel_agent_id: req.params.taid },
    function (err, itinerary) {
      if (err) {
        res.json({ status: false, data: "Invalid date or TAID" });
      }

      res.json({ status: true, data: itinerary });
    }
  );
};

exports.updateAItinerary = function (req, res) {
  Itinerary.findOneAndUpdate(
    { date: req.params.date, travel_agent_id: req.params.taid },
    req.body,
    { new: true },
    function (err, itinerary) {
      if (err) {
        res.json({ status: false, data: "Unable to Update!" });
      }

      res.json({ status: true, data: itinerary });
    }
  );
};

exports.deleteAItinerary = function (req, res) {
  Itinerary.deleteOne(
    { date: req.params.date, travel_agent_id: req.params.taid },
    function (err, itinerary) {
      if (err) {
        res.json({ status: false, data: "Unable to Delete!" });
      }
      res.json({ status: true, data: "Itinerary removed Successfully!" });
    }
  );
};

// exports.getAllocatedCustomers = (async function(req, res) {
//     try {
//         const travel_itenery = await Itinerary.find({ date: req.params.date, travel_agent_id: req.params.taid });
//         const customers_array = travel_itenery[0].assigned_customer_id;
//         const relevant_customers = await Customers.find({ cust_id: { $in: customers_array }, is_deleted: false });
//         res.json({ status: true, data: relevant_customers });
//     } catch (error) {
//         console.log("Error from backend");
//     }
// })

exports.getAllocatedCustomers = async function (req, res) {
  try {
    const travel_itenery = await Itinerary.find({
      date: req.params.date,
      travel_agent_id: req.params.taid,
    });
    //console.log(travel_itenery);
    const customers_array = travel_itenery[0].assigned_customer_id;
    const pending_customers = await TaskAssignment.find({
      cust_id: { $in: customers_array },
      itinerary_id: travel_itenery[0]._id,
    }).sort({ queue_number: 1 });

    //console.log(pending_customers);
    var pending_customer_array = [];
    for (const customer of pending_customers) {
      pending_customer_array.push(customer.cust_id);
    }
    const relevant_customers = await Customers.find({
      cust_id: { $in: pending_customer_array },
      is_deleted: false,
    });

    let optimized_cust_array = [];

    for (var i = 0; i < pending_customer_array.length; i++) {
      for (j = 0; j < pending_customer_array.length; j++) {
        if (pending_customer_array[i] == relevant_customers[j].cust_id) {
          optimized_cust_array.push(relevant_customers[j]);
          break;
        }
      }
    }
    console.log(optimized_cust_array);
    //console.log(pending_customer_array);
    res.json({ status: true, data: optimized_cust_array });
  } catch (error) {
    console.log("Allocated customer fetching error");
  }
};

exports.getAllocatedPendingCustomers = async function (req, res) {
  try {
    //console.log(req.body)
    const travel_itenery = await Itinerary.find({
      date: req.params.date,
      travel_agent_id: req.params.taid,
    });
    //console.log(travel_itenery)
    const customers_array = travel_itenery[0].assigned_customer_id;
    const pending_customers = await TaskAssignment.find({
      cust_id: { $in: customers_array },
      itinerary_id: travel_itenery[0]._id,
      status: "Pending",
    }).sort({ queue_number: 1 });

    //console.log(pending_customers);
    var pending_customer_array = [];
    for (const customer of pending_customers) {
      pending_customer_array.push(customer.cust_id);
    }

    const relevant_customers = await Customers.find({
      cust_id: { $in: pending_customer_array },
      is_deleted: false,
    });

    console.log(relevant_customers);
    console.log(pending_customer_array);
    let optimized_cust_array = [];

    for (var i = 0; i < pending_customer_array.length; i++) {
      for (j = 0; j < pending_customer_array.length; j++) {
        if (pending_customer_array[i] == relevant_customers[j].cust_id) {
          optimized_cust_array.push(relevant_customers[j]);
          break;
        }
      }
    }

    //console.log(optimized_cust_array);

    //console.log(pending_customer_array);
    res.json({ status: true, data: optimized_cust_array });
  } catch (error) {
    res.json({
      status: false,
      data: "Allocated pending customer fetching error",
    });
    // console.log("Allocated pending customer fetching error");
  }
};
