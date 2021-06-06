//const users = require("../../repositories/users")
const URL = 'http://localhost:4000/users/';
async function getusers(cb){
  let xhr=new XMLHttpRequest()
  xhr.open('GET','/users')
  xhr.setRequestHeader('content-type','application/json')


  xhr.onload=()=>{
  if(xhr.status==200){
      console.log(xhr.response)
      cb(JSON.parse(xhr.responseText))
  }
  }
  xhr.send()
  }



  async function createUser() {
    var _data = {}
    _data.username = document.querySelector("#username").value
    _data.email = document.querySelector("#email").value
    _data.password = document.querySelector("#password").value
    _data.role = document.querySelector("#role").value

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    //.then(json => console.log(json))
    //.catch(err => console.log(err));
    //document.getElementById('validate').innerHTML="<div class='alert alert-success'>User added successfully</div>"
}

async function updateUser(){
  const data= {}
  data.username = document.querySelector("#usernameUP").value
  data.email = document.querySelector("#emailUP").value
  data.role = document.querySelector("#roleUP").value
  await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .catch(err => console.log(err));
}