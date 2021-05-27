const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const Role = require('./role');
const mongoose = require('mongoose');
const { User } = require('./role');
_User = mongoose.model('User');
_Leave = mongoose.model('leaves');
require('../controllers/UserController');
// users hardcoded for simplicity, store in a db for production applications
// const users = [
//     { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
//     { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
// ];

module.exports = {
    authenticate,
    getAll,
    getById,
    getAgentLeaveStatusById
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

async function getAgentLeaveStatusById(id){

    const today = new Date();
    await _User.find({ userid : id },(err,users)=> {
        if(err) throw err;
        return users.length;
        // users.count({},function(err,noOfDocs) {
        //     if(err) throw err;
        //     if(noOfDocs >= 1) {
        //         console.log(noOfDocs);
        //        user.findOne({}, (err, res) => {
        //            if(err) throw err;
        //            console.log(res);
        //             return res;
        //        });
        //     } else {
        //         return null;
        //     }
        // });
    });
    


    // return null;
    // if(len >= 1) {
    //     console.log("called");
    //     const userDocID = user;
    //     return userDocID;
    // } else {
    //     return null;
    // }
    // return null;

    // const leaves = _Leave.find({
    //         $and: [ 
    //             { travel_agent : _user},
    //             { start_date : {
    //                     $gte : today
    //                 }
    //             },
    //             { end_date : {
    //                     $lte : today
    //                 }
    //             }
    //         ]
    //     },(err) => {
    //         console.log(err);
    //     });
       
    //const leaves = _Leave.find();
    // console.log(" ====== ", leaves);   
        //const temp = leaves.find(x => x.userid === user && x.leave_date.start_date >= today && x.leave_date.end_date <= today );
    //console.log(temp);
    // return leaves;
}