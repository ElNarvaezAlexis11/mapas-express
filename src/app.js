const express = require('express');
const location = require('./route/location'); 
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

//Config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Router
app.use('/',location);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})