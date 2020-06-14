const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://singhz:2509%40Course@habitappcluster-uy2kh.mongodb.net/HabitAppDevelopment?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connectinhg to database'));

db.once('open', function(){
    console.log('connected to db');
});

module.exports = db;
