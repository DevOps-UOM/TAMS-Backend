var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskAssignment = new Schema({
    cust_id: {
        type: String,
        required: 'Enter Customer ID'
    },
    itinerary_id: {
        type: String,
        required: 'Enter Itinerary ID'
    },
    rate: {
        type: Number,
    },
    task: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Task'
    }],
    status: {
        type: String,
        enum: ["Pending", "Completed", "Postponed"],
        required: "Enter the status of the task"
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    queue_number: {
        type: Number,
        default: 100
    }
});

module.exports = mongoose.model('task_assignment', TaskAssignment);