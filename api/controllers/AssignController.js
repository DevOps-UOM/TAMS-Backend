const mongoose = require('mongoose');

Assign = mongoose.model('Assign');
Itinerary = mongoose.model('Travel_itinerary');
TaskAssignment = mongoose.model('task_assignment')
Availability = mongoose.model('Availability');
// exports.createAssign = function(req, res) {
//     let assign = new Assign(req.body);
//     assign.save(function(err, assign) {
//         if (err) {
//             return res.json({ status: false, data: 'Unable to Create Assign!', err: err.message });
//         }
//         return res.json({ status: true, data: assign });
//     });
// };

exports.createAssign = (async function(req, res) {
    try {
        console.log(req.body)
        const taArr = []
        for (var i = 0; i < req.body.length; i++) {
            var assign = new Assign(req.body[i]);
            //console.log(req.body)
            var checkCollection = await Assign.find({ iti_date: req.body[i].iti_date, customer: req.body[i].customer }).populate('travel_agent').populate('customer');
            console.log(checkCollection)
            if (checkCollection.length != 0) {
                var removed_itinerary = await Itinerary.find({ date: checkCollection[0].iti_date, travel_agent_id: checkCollection[0].travel_agent.userid, assigned_customer_id: { $elemMatch: { $eq: checkCollection[0].customer.cust_id } } });

                if (removed_itinerary != 0) {
                    await Itinerary.findOneAndUpdate({ date: checkCollection[0].iti_date, travel_agent_id: checkCollection[0].travel_agent.userid }, { $pull: { assigned_customer_id: checkCollection[0].customer.cust_id } })
                    console.log("bellooooo");

                    var removed_task = TaskAssignment.find({ cust_id: checkCollection[0].customer.cust_id, itinerary_id: removed_itinerary[0]._id })

                    if (removed_task.length != 0) {

                        await TaskAssignment.remove({ cust_id: checkCollection[0].customer.cust_id, itinerary_id: removed_itinerary[0]._id })
                    }
                }

                await Assign.findOneAndUpdate({ iti_date: req.body[i].iti_date, customer: req.body[i].customer }, req.body[i], { new: true });
                console.log("Assign collection Updated");
            } else {
                await assign.save();
                console.log("Assign collection Added");
            }

            taArr.push(req.body[i].travel_agent)
        }
        var uniqueTAArr = [...new Set(taArr)]
        var custDetArr;
        //console.log(req.body)
        for (var i = 0; i < uniqueTAArr.length; i++) {
            custDetArr = await Assign.find({ iti_date: req.body[0].iti_date, travel_agent: uniqueTAArr[i] })
                .populate('customer')
                .populate('travel_agent');

            //console.log(custDetArr);

            var custArr = [];
            for (var j = 0; j < custDetArr.length; j++) {
                custArr.push(custDetArr[j].customer.cust_id);
            }
            var itineraryObj = {
                date: req.body[0].iti_date,
                travel_agent_id: custDetArr[0].travel_agent.userid,
                assigned_customer_id: custArr
            }

            var checkItinerary = await Itinerary.find({ travel_agent_id: itineraryObj.travel_agent_id, date: itineraryObj.date });
            console.log(checkItinerary)
            var tempItinerary;
            if (checkItinerary.length != 0) {
                console.log("Travel Itinerary Updated")
                tempItinerary = await Itinerary.findOneAndUpdate({ travel_agent_id: itineraryObj.travel_agent_id, date: itineraryObj.date }, itineraryObj, { new: true })
            } else {
                const newItinerary = new Itinerary(itineraryObj)
                console.log("Travel Itinerary Added")
                tempItinerary = await newItinerary.save()
            }

            for (var j = 0; j < custDetArr.length; j++) {
                var availability = await Availability.find({ cust_id: custDetArr[j].customer._id, date: itineraryObj.date })
                    //console.log(availability);
                var taskAssignObj = {
                    cust_id: custDetArr[j].customer.cust_id,
                    itinerary_id: tempItinerary._id,
                    task: availability[0].task,
                    status: "Pending",
                    queue_number: 100
                }

                var checkTaskAssign = await TaskAssignment.find({ cust_id: taskAssignObj.cust_id, itinerary_id: taskAssignObj.itinerary_id })
                    //console.log(taskAssignObj);
                    //availability[j].task
                if (checkTaskAssign.length != 0) {
                    await TaskAssignment.findOneAndUpdate({ cust_id: taskAssignObj.cust_id, itinerary_id: taskAssignObj.itinerary_id }, taskAssignObj, { new: true })
                    console.log("Task Assignment Updated")
                } else {
                    const taskAssign = new TaskAssignment(taskAssignObj)
                    taskAssign.save()
                    console.log("Task Assignment Added")
                }

            }
        }
        res.json({ status: true, data: "Assign successful" })
    } catch (error) {
        console.log(error);
        res.json({ status: false, data: "Error in assign" })
    }


})


// exports.createAssign = function(req, res) {
//     let assign = new Assign(req.body);
//     assign.save(function(err, assign) {
//         if (err) {
//             return res.json({ status: false, data: 'Unable to Create Assign!', err: err.message });
//         }
//         return res.json({ status: true, data: assign });
//     });
// };

exports.getAllAssign = function(req, res) {
    Assign.find({})
        .populate('travel_agent')
        .populate('customer')


    .then(assign => {
            //console.log(assign)

            res.json({ status: true, data: assign });
        })
        .catch(err => {
            res.json({ status: false, data: err.message });
        })

};