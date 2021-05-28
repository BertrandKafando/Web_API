//const { Json } = require("sequelize/types/lib/utils");

//const { json } = require("express");
 //function getuse(){ 
let users=[];
const xhr= new XMLHttpRequest()
xhr.open('Get','/users')
xhr.setRequestHeader('conten-type','application/json')


xhr.onload()=() =>{
   // if(xhr.status===200){
        console.log(JSON.parse(xhr.responseText))
        //console.log(users);
   // }
}

 //}

xhr.send()