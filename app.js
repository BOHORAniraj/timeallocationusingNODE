import express from 'express';
import helmet from 'helmet';

// const express = require('express')

const app = express()
import morgan from 'morgan'

const PORT = 8000;

// Mongo Databsae connection

import mongoClient from './src/config/db.js'
mongoClient();
//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet())


import routers from './src/routers/index.js'
app.use('/api/v1', routers);

// pass all the api request here 
app.use("/api/v1/",(req, res) => {
  res.json({
    message :"hello",
  })
  res.json

})
 
app.get('/', function (req, res) {
  res.send('you reached to our not to do backend server')
});

app.listen(PORT, (error) => {
    if(error){
        return console.log(error);
    }
    console.log(`the server running at http://localhost:${PORT}`);
});
 
// app.listen(PORT);