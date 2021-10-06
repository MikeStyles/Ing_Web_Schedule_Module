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
    .connect("mongodb://duvanc:H9lmTQIoXDmPOwiV@cluster0-shard-00-00.p5egw.mongodb.net:27017,cluster0-shard-00-01.p5egw.mongodb.net:27017,cluster0-shard-00-02.p5egw.mongodb.net:27017/agendamiento?ssl=true&replicaSet=atlas-14dpig-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(()=>{
        app.listen(app.get('port'),()=>{
            console.log(`server on port ${app.get('port')}`)
        });
    })
    .catch((err)=> console.log(err));
