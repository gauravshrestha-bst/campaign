const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride=require('method-override');

const LocalStrategy=require('passport-local');
const User=require('./models/User');

mongoose.connect(
 'mongodb://gaurav:Gaurav-1995@ds123465.mlab.com:23465/tyroo-task'
  );

const app = express();

app.use(bodyParser.json());

app.post('/login',(req,res)=>{
  res.send("hey");
})

app.post('Campaign',(req,res)=>{
  res.send("campaign added");
})

app.get('Campaign',(req,res)=>{
  res.send("campaigns");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
