const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    today: {
        type: Date,
        default: Date.now,
        required: true,
    },
    task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
},{
    timestamps: true
});

const Day = mongoose.model('Day', daySchema);
module.exports = Day;