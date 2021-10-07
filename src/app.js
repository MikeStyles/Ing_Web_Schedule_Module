const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

const indexRoutes = require('./routes/schedule.routes');
const conexionDB = require('./db.conexion');
app.set('port', process.env.PORT || 4000);

conexionDB();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use('/',indexRoutes);

module.exports = app;