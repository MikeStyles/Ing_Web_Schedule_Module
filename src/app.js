require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const indexRoutes = require('./routes/schedule.routes');
app.set('port', process.env.PORT || 4000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use('/',indexRoutes);

mongoose
    .connect("")
    .then(()=>{
        app.listen(app.get('port'),()=>{
            console.log(`server on port ${app.get('port')}`)
        });
    })
    .catch((err)=> console.log(err));
