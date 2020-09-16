const bodyparser = require('body-parser'); 
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');

const app = express();

const { common_routes , api_routes } = require('./routes/index');

const port = process.env.PORT;
const localhost = process.env.LOCAL_HOST;
const redhost = process.env.RED_HOST;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.set('port', port);
app.set('hostname', localhost || redhost);

app.use("/", common_routes);
app.use("/api/", api_routes);
app.use(morgan('dev'));

module.exports = app;

