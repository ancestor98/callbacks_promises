// using a promise that reads a file,which then append "new content"to that file and show 
//the file containing 
//the previous content and the newly added content
//bassically there are 3 things read,append and read again
 //1st you creat a read function


const { assert } = require("console");
const fs= require("fs");
const { type } = require("os");
const path = require("path");


// function for reading
  const readMyfile=(path,encode)=>{
      
      return new promise(function(resolve,reject){
          fs.readfile(path,encode,function(err,data){

          
          if(err){
              reject(err)
          }else{
              resolve(data)
              console.log(data.tostring())
          }
      });
      })
  }




  // creat awrite function
   const appendanyfile=(path,newcontent,encode)=>{
       // call your promise
       return new promise((resolve,reject)=>{
           // read afile
           fs.appendFile(path,newcontent,encode,(err,data)=>{
               if (err){
                   reject(err)
               }else{
                   resolve()
               }
           });
       });
   }
   // appendfile

   // function for delete
   function deletmyfile(path){
       return new promise(function(resolve,reject){
           fs.unlink(path,function(err){
               if(err){
                   reject(err)
               }else{
                   resolve()
               }
           });
       })
   }
   // then the actual solution
   const solution=async( path,type)=>{
       try{
           await readMyfile(path,type);
           await appendanyfile(path,type);
           await readMyfile(path,type)
           await deletmyfile(path,type)
       } catch(e){
           console.log(e.message)
       }
   }
   solution()
   //study well