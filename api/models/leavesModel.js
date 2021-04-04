const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var leavesSchema = new Schema({
    
    ta_id: {
        type: String
    },
    ta_name: {
        type: String,
        required: 'Enter TA ID'
    },
    leave_date: {
        type: Object,
        required: true
    },
    pod: {
        type: String,
    },
    
    note: {
        type: String
    },
    
});


module.exports = mongoose.model('leaves', leavesSchema);
