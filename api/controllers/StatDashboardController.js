// exports.findBestAgents = function(req, res) {

//     TaskAssignment.find().sort({rate:-1}).limit(5).exec(
//         function(err, result){
//             console.log((result));
//             return res.send(result);
//         }
//     );
    
// };

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const ItineraryModel = require('../models/ItineraryModel');

exports.listAllAgents = function(req,res){
    // let mysort = { rate: -1 };
    // let limit = 5;
    // User.find().sort(mysort).limit(limit).exec((err,agents)=>{
    //     if(err){
    //         return res.json({status:false, data:'Unable to show all'});
    //     }
    //     return res.json({status:true, data:agents});
    // });

    ItineraryModel.aggregate([
        {
            $unwind: "$assigned_customer_id"
        },
        {
            $group: {
                _id: "$assigned_customer_id",
                count: { $sum: 1 }
            }
        }
    ]).sort({ count: -1 }).limit(5).exec(async (err, result) => {
        if(err){
            return res.json({ status:false, data:'Unable to show all' });
        }

        const resultData = [];

        for(let i=0; i < result.length; i++) {
            try {
                const data = await Customer.findOne({ cust_id: result[i]._id });
                resultData.push({
                    ...result[i],
                    user: data
                });
            } catch (err) {
                console.log(err);
                return res.json({ status:false, err:'Unable to fetch user data' });
            }
        }

        return res.json({ 
            status:true,
            data: resultData
        });
    })
}


