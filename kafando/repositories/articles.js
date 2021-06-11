const { Article } = require('../models')
 module.exports = {
   async getAllarticles() {
     return Article.findAll()
   },

async getAllarticlebyid(id){
  return await Article.findAll({
    where: {
        id:id
        }
  })
},


async addArticle(article)
{ 
  let _article={};
 const created= await Article.create({
  title: article.title,
  content: article.content,
  published:article.published,
  UserId: article.userid,
  updatedAt : article.updatedAt,
  createdAt : article.createdAt
});
if (created != null){
  _article.title = created.title
  _article.content = created.content
  _article.published= created.published
  _article.UserId = created.UserId
} else _user.error = "can't create this user"

return _article;
},

async udpdateArticle(article)
{
const _article= await this.getAllarticlebyid(article.id) //this de objet
console.log("USER: ", _article)
if(_article==null)return {"error": "Can't 1 update user"}
try{
   const updated= await Article.update(article,{
     where:{
       id:_article.id
     }
   });
   if (updated == 1) return article;
   else throw new Error()
 } catch(error){
   return {"error": "Can't update user"}
 }
},

async delarticle(id)
{
  return await Article.destroy({
    where:{
      id:id
    }
  });
},
//affiche tous les articles d'un utilisateur
async getartsuser(id) 
{
  return await Article.findAll({
    where: {
        UserId:id 
        }
  })
},

async countarticles()
{
  return await Article.count({ where: { published: true} })
  .then(c => {
    console.log("There are " + c + " projects!")
  })
}


   // méthodes à implémente
 }