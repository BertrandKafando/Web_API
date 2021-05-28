/*var express = require('express');
var router = express.Router();*/
var User=require('../respositories/users')
/* GET users listing. */

/*router.get('/users', function(req, res, next) {
  getuser= async ()=> {
     User=await user.getAllUsers()
    res.send(User);
   }
   getuser();
  
});*/

module.exports = function(router){
  router.route('/users')
  .get(function(req,res){
   User.getAllUsers(),then(function(data){
     res.send(data);
   });

 });
  
}
