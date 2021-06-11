const { Comment } = require('../models')
const { Article } = require('../models')
var sequelize = require('sequelize');
 module.exports = {

  async getAllcoments(){
    return Article.findAll({              // articlescomments
        group : ['Article.id'],        // regrouper par id
        attributes: ['title', [sequelize.fn('COUNT', 'Comments.id'), 'Nombre']],
        include: { model: Comment,attributes: []}
      });
  },
async getcommentid(id){
  return await Comment.findOne({
    where:{
      id:id
    }
  })
},

  async getArticleComments(id) {
    return await Comment.findAll({
      where: {       
        ArticleId: id
      }
    });
    },
 
 async addComments(com){
   let _com={}
   const created=await Comment.create({
     id:com.id,
     content:com.content,
     updatedAt : com.updatedAt,
     createdAt : com.createdAt,
     ArticleId: com.ArticleId
   })
   if (created != null){
    _com.id= created.id
    _com.content = created.content
    _com.ArticleId = created.ArticleId
  } else _user.error = "can't create this user"
  
  return _com;

 },

 async updateComments(com){
 const _com=await this.getcommentid(com.id);
 if(_com==null) return {"error":"can't update error 1"}
 try{ 
const updated= await Comment.update(com,{
    where:{
        id:_com.id
    }
});
if (updated == 1) return com;
else throw new Error()
} catch(error){
return {"error": "Can't update comment"}
}
},


  async delComments(id) { 
    return await Comment.destroy({
      where: {
        id: id
      }
    });
},
 }