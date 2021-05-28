var express = require('express');
const app = require('./app');
var Router=require('./routes/index')
var ap=express();


ap.use(app);
 

ap.listen(3000);

