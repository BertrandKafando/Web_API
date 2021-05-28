var express = require('express');
var router = express.Router();
var userRoute=require('./users')(router)

module.exports=router;