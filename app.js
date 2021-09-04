import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express()
import morgan from 'morgan'

const PORT = 8000;

// Mongo Databsae connection

import mongoClient from './src/config/db.js'
mongoClient();

app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet())
app.use(cors())


import routers from './src/routers/index.js'
app.use('/api/v1', routers);

 
app.use('/', function (req, res) {
  res.send('you reached to our not to do backend server')
});

app.listen(PORT, (error) => {
    if(error){
        return console.log(error);
    }
    console.log(`the server running at http://localhost:${PORT}`);
});
 
// app.listen(PORT);