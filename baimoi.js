//async await
// let delay = async function(){
//     for(let i=0; i<10000;i++){
//         for(let j=0; j<10000; j++){
//             var l;
//         }
//     }

// }

// let ASfunc =  async () => {
//     console.log("begin function")
//     await delay();
//     console.log("end function")
// };
// console.log("begin req")
// ASfunc();
// console.log("end req")

// console.log(x)
// var x = 7
// var mofile = require('mofile');
// var title = mofile.readFileSync('abcd.txt','utf-8');
// console.log(title);
// console.log('hello');
const fs = require('fs')

fs.writeFile('abcd.txt', 'utf-8',(err,data)=>{
    var dataload = "huu oc";
    if(err){
        console.log(err)
    }
    else{
        console.log(`du lieu duoc truyen vao: ${dataload}`)
    }

})
fs.readFile('abcd.txt','utf-8',(err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`du lieu doc duoc: ${data}`)
    }
})