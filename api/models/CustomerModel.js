var mongoose = require('mongoose');
require('mongoose-type-email');
var Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

var nameSchema = new mongoose.Schema({
    first_name: String,
    last_name: String
})

var CustomerSchema = new Schema({
    cust_id: {
        type: String,
        unique: true,
        required: 'Enter ID'
    },
    name: nameSchema,
    location: pointSchema,
    email: {
        type: mongoose.SchemaTypes.Email,
        allowBlank: true
    },
    nic: {
        type: String,
        validate: {
            validator: function(v) {
                return /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(v);
            },
            message: '{VALUE} is not a valid NIC number!'
        }
    },
    mobile_number: Number,
    address: {
        address_line_1: String,
        address_line_2: String,
        city: String
    },
    area: String,
    is_deleted: Boolean,
    default_agent_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);