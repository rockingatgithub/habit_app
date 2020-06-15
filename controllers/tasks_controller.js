const Task = require('../models/task');
// const Day = require('../models/day');

module.exports.create = async function(req, res){
    try{
        if(req.body.taskValue === undefined){
            req.body.taskValue = false;
        }
        let pair = {status: req.body.taskStatus, date: new Date()};
        let task = await Task.create({
            name: req.body.taskName,
            time: req.body.taskTime,
            description: req.body.taskDescription,
            important: req.body.taskValue,
        });
        task.statusPair.push(pair);
        await task.save();
        return res.redirect('back');
    }
    catch(err){
        console.log('Error', err);
        return res.redirect('back');
    }
}


//to dispaly weekview....
module.exports.weekview = async function(req, res){
    try{
        let habits = await Task.findById(req.query.id);
        return res.render('_week_view', {
            title: 'Habitat',
            tasks: habits,
        });
    }
    catch(err){
        console.log('Error', err);
        return;
    }
    
}