const moment = require('moment');
const today = moment().startOf('day');
const Task = require('../models/task');
const Day = require('../models/day');

module.exports.home = async function(req, res){
    try{
        //populate the habits list....
        let habits = await Day.find({
            createdAt: {
                $gte: today.toDate(),
                $lte: moment(today).endOf('day').toDate()
            }
        })
        .sort('-createdAt')
        .populate('task')

        let tasks = await Task.find({});
        return res.render('home', {
            title: 'Habitat',
            tasks: tasks,
            todays_task: habits
        });
    }
    catch(err){
        console.log('Error', err);
        return;
    }

}