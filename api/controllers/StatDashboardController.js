const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.listAllAgents = function(req, res) {
    var mysort = { rate: 1 }
    User.find({}).sort(mysort).populate("userid").populate("first_name").populate("last_name").exec((err, agents) => {
        if (err) {
            res.json({ status: false, data: 'Unable to show all' });
        }
        console.log(res.json({ status: true, data: agents }));
    });
}