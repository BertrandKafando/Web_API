const {Tag}=require('../models')

module.exports={
    async getallTags() {
        return  Tag.findAll()
    },

    async addtags(tag)
    {
        let _tag={} ;
        const created= await  Tag.create({
            id:tag.id,
            name:tag.name,
            updatedAt : tag.updatedAt,
           createdAt : tag.createdAt
        });
        if(created!=null){
         _tag.id=created.id,
         _tag.name=created.name
        }else _user.error = "can't create this user"
        console.log(_tag);
        return _tag;
    },
async gettagsid(id){
 return await Tag.findOne({
     where:
     {
         id:id
     }
 })
},
    
async tagsupdate(tag){
    const _tag=await this.gettagsid(tag.id);
    if(_tag==null) return {"error":"can't update error 1"}
    try{ 
   const updated= await Tag.update(tag,{
       where:{
           id:_tag.id
       }
   });
   if (updated == 1) return tag;
   else throw new Error()
   } catch(error){
   return {"error": "Can't update tag"}
 }
},
async deltag(id){
    return await Tag.destroy({
        where:{
            id:id
        }
    })
}

}
