var express = require('express');
var moment= require('moment') 

var router = express.Router();

const User= require('../repositories/users')

/* GET home page. */
router.get('/', async function(req, res){
	return res.send(await User.getUsers())
})

router.get('/author', async function(req, res){
	return res.send(await User.getAuthors())
})

router.get('/admin', async function(req, res){
	return res.send(await User.getAdmins())
})

router.get('/guest', async function(req, res){
	return res.send(await User.getGuests())
})

router.get('/:id', async function(req, res){
	res.send(await User.getUser(req.params.id))
})


router.post('/', async function(req, res){
	let user = {};
	user.username = req.body.username
	user.email = req.body.email
	user.password = req.body.password
	user.role = req.body.role
	user.createdAt = moment().format('YYYY/MM/DD h:mm:ss')
	user.updatedAt = user.createdAt
	res.send(await User.addUser(user));
})

router.put('/', async function(req, res){
	let user= {}
	user.id=req.body.id
	user.username=req.body.username
	user.email=req.body.email
	user.role=req.body.role
	user.updatedAt=moment().format('YYYY/MM/DD h:mm:ss')
	res.send(await User.updateUser(user))
});



router.delete('/:id',async function(req, res) {
	let user= req.params.id
    await User.DeleteUser(user);
   res.redirect("/")
});

module.exports = router;