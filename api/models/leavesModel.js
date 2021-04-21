const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var leavesSchema = new Schema({
    
    travel_agent: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'Enter TA ID'
    },
    // ta_name: {
    //     type: String,
    //     required: 'Enter TA ID'
    // },
    leave_date: {
        type: Object,
        required: true
    },
    // pod: {
    //     type: String,
    // },
    //
    note: {
        type: String
    },
    
});


module.exports = mongoose.model('leaves', leavesSchema);
