var express = require('express');

var router = express.Router();

const userRepos = require('../repositories/users')

/* GET users listing. */

router.get('/', async function(req, res, next) {

res.send(await userRepos.getUsers( req.query.offset, req.query.limit))

});

router.post('/',async function(req, res, next) {

res.send( await userRepos.addUser( req.body.user ) );

});

router.put('/',async function(req, res, next) {

res.send( await userRepos.updateUser( req.body.user ) );

});

router.get('/:id',async function(req, res, next) {

res.send( await userRepos.getUser( req.params.id) );

});

router.delete('/:id',async function(req, res, next) {

res.send( await userRepos.deleteUser( req.bo ) );

});

module.exports = router;