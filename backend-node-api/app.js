import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express()
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'

const PORT = process.env.PORT || 5000;

// Mongo Databsae connection

import mongoClient from './src/config/db.js'
mongoClient();

app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('tiny'));
// app.use(helmet())
app.use(cors())


import routers from './src/routers/index.js'
app.use('/api/v1', routers);



// serving react application through Node server
const __dirname = path.resolve();
 app.use(express.static(path.join(__dirname,"/react-frontend-app/build")))
app.use('/', function (req, res){
  // res.send('you reached to our not to do backend server')
  // res.sendFile(__dirname + "/react-frontend-app/index.html")

  res.sendFile(path.join(__dirname , "/react-frontend-app/build/index.html"))
});

app.listen(PORT, (error) => {
    if(error){
        return console.log(error);
    }
    console.log(`the server running at http://localhost:${PORT}`);
});
 
// app.listen(PORT);