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
    description:{
        type: String,
    },
    important: {
        type: Boolean,
        default: false
    },
    statusPair:[{
        status:{
            type: String,
            default: 'None',
            required: true
        },
        date:{
            type: Date,
            default: Date.now,
            required: true
        }
    }]
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;