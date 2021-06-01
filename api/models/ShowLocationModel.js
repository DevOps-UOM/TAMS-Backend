const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var showLocationSchema = new Schema({
    
    travel_agent_id: {
        type: String,
        ref: 'agent_id',
        required: 'Enter travel_agent_id'
    },

    customer_id: {
        type: String,
        ref: 'customer_id',
        required: 'Enter customer_id'
    },
    random_key: {
        type: String,
        ref: 'random_key',
        required: 'Enter random_key'
    },

    expired: {
        type: Boolean,
        ref: 'expired',
    },
    
});


module.exports = mongoose.model('showLocationSchema', showLocationSchema);