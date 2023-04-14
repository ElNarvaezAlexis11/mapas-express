const express = require('express');
const location = require('./route/web/location'); 
const states = require('./route/api/states');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
//Config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Router
app.use('/',location);
app.use('/api',states);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`)
})