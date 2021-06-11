var express=require('express');

router=express.Router();

const Comments=require('../repositories/comments');


router.get('/',async function(req,res){
   return  res.send( await Comments.getAllcoments())
})

router.get('/:id',async function(req,res){
    return res.send(await Comments.getArticleComments(req.params.id))
})


router.post('/', async function(req, res) {
    let com = {}
    com.id=req.body.id
    com.content = req.body.content
    com.ArticleId = req.body.ArticleId
    await Comments.addComments(com);
    res.redirect("/");
  });
  
  router.put('/', async function(req, res) {
    let com = {}
    com.id=req.body.id,
    com.content = req.body.content
    res.send(await Comments.updateComments(com));
  });
  
  router.delete('/', async function(req, res){
    let com= req.params.id
    await Comments.delComments(com);
   res.redirect("/")
});

module.exports=router;