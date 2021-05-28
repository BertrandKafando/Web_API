function getusers(cb){
   let xhr=new XMLHttpRequest()
   xhr.open('GET','/users')
   xhr.setRequestHeader('contente-type','application/json')


   xhr.onload=()=>{
   if(xhr.status==200){
       console.log(xhr.response)
       cb(JSON.parse(xhr.responseText))
   }
   }
   xhr.send()
   }