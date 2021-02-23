var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var ItineraryDateSchema = new Schema({
    date: {
        type: Date,
        required: 'Enter Date'
    },
    travel_agent_id: {
        type: String,
        required: 'Enter Travel Agent ID'
    },
    assigned_customer_id: [String]
});

module.exports = mongoose.model('Travel_itinerary', ItineraryDateSchema);