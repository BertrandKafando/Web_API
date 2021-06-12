var express=require('express');
var moment= require('moment') 
router=express.Router();

const Tags=require('../repositories/tags');

router.get('/',async function(req,res){
   return res.send(await Tags.getallTags())
});

router.get('/:id',async function(req,res){
    return res.send(await Tags.gettagsid(req.params.id))
});

router.post('/',async function(req,res){
    let tag={};
  tag.id=req.body.id,
  tag.name=req.body.name,
  tag.createdAt = moment().format('YYYY/MM/DD h:mm:ss')
  tag.updatedAt = tag.createdAt  //meme date
  res.send( await Tags.addtags(tag))
});

router.put('/',async function(req,res){
    let tag={};
     tag.id=req.body.id,
    tag.name=req.body.name,
    tag.updatedAt = moment().format('YYYY/MM/DD h:mm:ss')
res.send( await Tags.tagsupdate(tag))
});
router.delete('/:id', async function(req, res, next){
    let tag= req.params.id
    await Tags.deltag(tag);
    res.redirect("/");
  })
module.exports=router;