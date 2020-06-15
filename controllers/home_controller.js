const moment = require('moment');
const today = moment().startOf('day');
const Task = require('../models/task');

module.exports.home = async function(req, res){
    try{
        //populate the habits list....
        let habits = await Task.find({
            createdAt: {
                $gte: today.toDate(),
                $lte: moment(today).endOf('day').toDate()
            }
        })
        .sort('-createdAt');
        return res.render('home', {
            title: 'Habitat',
            tasks: habits,
        });
    }
    catch(err){
        console.log('Error', err);
        return;
    }

}