const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AssignSchema = new Schema({
    travel_agent: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: 'Enter CUS ID'
    },
    iti_date: {
        type: Date,
        required: true
    }

}, { timestamps: true });


module.exports = mongoose.model('Assign', AssignSchema);

