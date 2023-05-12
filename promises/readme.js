const fs= require('fs');

 const datai="my document"

 fs.writeFile('anaeto.txt',datai,'utf8',(err)=>{
   if(err){
        console.log(err);

   }else{
       console.log('your file is written')};

 });
