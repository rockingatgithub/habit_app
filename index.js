const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const path = require('path');

//middleware below....
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'habit_app',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100) // in milliseconds...
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    },
    function(err){
        console.log(err || 'connect mongodb setup ok');
    })
}));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`error running server on port: ${port}`);
    }
    console.log(`Server is running on port: ${port}`);
})