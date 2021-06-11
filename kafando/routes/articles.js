var express = require('express');
var moment= require('moment') 

var router = express.Router();

const articles= require('../repositories/articles');
const comments = require('../repositories/comments');
router.get('/', async function(req, res){
	return res.send(await articles.getAllarticles())
}),

router.get('/:id',async function(req,res){
return res.send(await articles.getAllarticlebyid(req.params.id))
})


router.post('/',async function(req,res){
	let article= {}
	article.title=req.body.title
	article.content=req.body.content
	article.published=req.body.published
	article.UserId=req.body.UserId
	article.createdAt = moment().format('YYYY/MM/DD h:mm:ss')
	article.updatedAt = article.createdAt
	res.send(await articles.addArticle(article))
	
}),

router.put('/',async function(req,res){
	let article={}  // enregistrement 
	article.id=req.body.id
	article.title=req.body.title
	article.content=req.body.content
	article.published=req.body.published
	article.UserId=req.body.UserId
	article.updatedAt = moment().format('YYYY/MM/DD h:mm:ss')
 res.send(await articles.udpdateArticle(article))
})
// suppression
router.delete('/:id',async function(req,res){
	let article= req.body.id
    await articles.delarticle(article);
    res.redirect("/");
}),

router.get('/:id/user',async function(req,res){
	res.send(await articles.getartsuser(req.params.id))
}),
//count
router.get('/ctarticles', async function(req, res) {
	res.send(await articles.countarticles());
  });
  //count
  router.get('/ctComments', async function(req, res) {
	res.send(await comments.countCom());
  });
  
  router.get('/:id/comments', async function(req, res) {
	res.send(await Comments.getArticleComments(req.params.id)); // comments
  });
module.exports=router;