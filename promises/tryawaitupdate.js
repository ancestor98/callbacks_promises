const fs= require('fs');
const updatefiles=async ()=>{
    try{
        await fs.appendFileSync('anaetoo.txt','/nanaeto')
        console.log("succesfully updated")
    }catch(e){
        console.log(e)
    }


};
updatefiles();