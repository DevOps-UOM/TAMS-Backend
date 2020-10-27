var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ItinerarySchema = new Schema({

    travel_agent_id: {
        type: String,
        required: 'Enter Travel Agent ID'
    },
    assigned_customer_id: [String]
});

var ItineraryDateSchema = new Schema({
    date: {
        type: Date,
        required: 'Enter Date'
    },
    itinerarySchemas: [ItinerarySchema]
});

module.exports = mongoose.model('ItineraryModel', ItineraryDateSchema);