const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/noteRoute');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost:27017/authDB');

app.use(authRoutes);
app.use(userRoutes);

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})