// const fs= require('fs');
// fs.unlink('./anaetodelete.txt',(error)=>{
//     if (error){
//         console.log(error)
//     } else{
//         console.log('file.deleted')
//     }
// });


// with promise
const fs= require('fs').promises;
//
fs.unlink("./anaetodelete.txt")
.then(()=>{
    console.log('your file is gone ooo');

})
.catch((error)=>{
    console.log(error)
    
});