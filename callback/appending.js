const datau='my document2'

fs.appendFile('anaeto.txt',datau,'utf8',(err)=>{
    if (err){
        console.log(err);

    }else{
        console.log('tour file is up');
    }

});