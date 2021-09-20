require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const indexRoutes = require('./routes/index');
app.set('port', process.env.PORT || 4000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use('/',indexRoutes);
/*app.listen(app.get('port'),()=>{
    console.log("server on port 3000")
})*/
mongoose
    .connect("mongodb+srv://duvanc:H9lmTQIoXDmPOwiV@cluster0.p5egw.mongodb.net/agendamiento?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(app.get('port'),()=>{
            console.log(`server on port ${app.get('port')}`)
        });
    })
    .catch((err)=> console.log(err));
