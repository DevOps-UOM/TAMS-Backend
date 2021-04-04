const mongoose = require('mongoose');

Task = mongoose.model('Task');

exports.createTask = function(req, res) {
    let task = new Task(req.body);
    task.save(function(err, task) {
        if (err) {
            return res.json({ status: false, data: 'Unable to Create Task!', err: err.message });
        }
        return res.json({ status: true, data: task });
    });
};

exports.getAllTask = function(req, res) {
    Task.find({}, function(err, task) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }
        res.json({ status: true, data: task });
    });
};

