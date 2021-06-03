const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AvailabilitySchema = new Schema({
    // cust_id: {
    //     type: String,
    //     ref: 'Customer',
    //     required: 'Enter CUS ID'
    // },
    cust_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: 'Enter CUS ID'
    },
    date: {
        type: Date,
        required: true
    },

    task: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Task'
    }],
    note: {
        type: String
    },
    task_duration: {
        type: String
    }

});


module.exports = mongoose.model('Availability', AvailabilitySchema);
