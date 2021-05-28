const { User } = require('../models')
module.exports = {
    getAllUsers:function() {
      return User.findAll()
    },

    // méthodes à implémenter
    getUsers:function(offset = 0, limit = 10) { 
     return user.findAll({offset:offset,limit:limit})
    },

    getAdmins:function() { 
        return User.findAll({
            where: {
                role:'admin'
            }
        })
    },

    getAuthors:function() { 
        return User.findAll({
            where:{
                role:'author'
            }
        })
    },
    getGuests:function(){ 
        return User.findAll({
            where:{
                role:'guest'
            }
        })
    }, 
    getUser:function(id) { 
        return User.find(id)
    },
    getUserByEmail:function(email) { 
        return User.findone({
            where:{
                email:email // attention ici 
            }
        })
    },

/*
    addUser: ad= async(userDate)=> { 
          {var user= await User.create(userDate)
          return user}
          ad();
    },

    updateUser: up=async (id,UserData)=>{ 
        await User.update(UserData,{
            where:{
                id:id
            }
        })
      up();
    },
    deleteUser: del=async(id)=> { 
        return await User.destroy({
            where:{
                id:id
            }
        })
        del();
    },*/

    // D'autres méthodes jugées utiles
  }
 