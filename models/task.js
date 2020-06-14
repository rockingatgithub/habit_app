const mongoose = require('mongoose');
const path = require('path');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    time:{
        type: String,
        required: true
    },
    statusTask:{
        type: String,
        default: 'None'
    },
    important: {
        type: Boolean,
        default: false
    },
    days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }]
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;