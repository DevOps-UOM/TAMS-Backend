const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    task_name: {
        type: String,
        required: 'Enter TASK NAME'
    },
    note: {
        type: String
    },
    task_duration: {
        type: String
    }

});


module.exports = mongoose.model('Task', TaskSchema);
