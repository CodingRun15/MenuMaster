const express = require('express');
const connection = require('./configs/db');
require('dotenv').config({path:'../configs/.env'});
const app = express();
app.use(express.json());
const User = require('./Models/userModel');
connection.sync({ force: true }) // force: true will drop the table if it already exists, use it with caution
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error creating database & tables:', err);
  });
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.listen(process.env.PORT,async()=>{
    try{
        connection.authenticate();
        console.log('connected to db');
    }
    catch(error){
        console.log('unable to connect'+ error);
    }
console.log('listening on port '+process.env.PORT);
})


