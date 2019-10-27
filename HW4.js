const fs = require('fs')
// const http = require('http')
fs.readFile('data.txt','utf-8',(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(`du lieu cu:
${data}`)
    // fs.writeFile()

    var result = data.replace(/"questionContent":"hahahahahahaha",/g,'cover new divide k huu?')
    console.log(`du lieu moi:
${result}`)
        
})
// http.createServer(function(req, res){
//     fs.writeFile('data.txt','utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.writeHead({'"questionContent"':'e huu, bao h cover new divide?'})
//             res.write(data);
//             res.end(); 
//             console.log(data);    
//         }
//     })
// })
// fs.readFile('data.txt','utf-8',(err,data) =>{
//     if(err){
//         return console.log(err)

//     }
// })
// fs.writeFile('data.txt',result,'utf-8',(err)=>{
//     if(err)return console.log(err);
// })