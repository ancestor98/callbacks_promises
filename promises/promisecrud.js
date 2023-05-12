const fs= require ('fs');

const apendfunction=(filename,filecontent)=>{
    return new Promise((resolve,reject)=>{
        fs.appendFile(filename,'utf8',(error,data)=>{
            if (error){
                reject(error)
                console.log(error.message)
            }else{
                resolve(data)
                console.log('succsesful')
            }
        })
        fs.appendFile(filename,filecontent,(error)=>{
            if (error){
                reject(error)
            }
        })
    })
}
apendfunction('./anaetoo.txt,',"we have updated ")