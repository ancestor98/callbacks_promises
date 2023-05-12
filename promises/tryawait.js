const fs= require('fs')
const writeFile= async()=>{ 
    try{
    await fs.writeFile('anaetoo.txt','hello',()=>{
        console.log( 'hello')
    });
}catch(e){
    console.log(e)
}
}
writeFile();


