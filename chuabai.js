// let str = "kia con  buon vang"
// let arr = ['kia','con','buom','vang'];
// str = str.trim(); //bo nhung dau space va tab
// while(str.includes("  ")){
//     str = str.replace("  "," ")
// }
// console.log(":" + str + ":");
// let arrstr = str.split(" ")
// console.log(arrstr);
// for (let i = 0; i < array.length; index++) {
    
    
// }
// //ex3 push day vao, pop day ra
// let n = 10
// let answer = []
// while(answer.length<n){
//     let newvalue = Number.parseInt(Math.random()*100)
//     if(answer.indexOf(newvalue)==-1){
//         answer.push(newvalue);
//     }
    


// }
// // answer.sort(function(a,b){
// //     return a>b
// // })
// answer.sort((a, b) => a > b);
// console.log(answer);
// //ex 2
// function tong(a , b){
//     return a+b
// }

// let tong2 = function(a, b){
//     return a+b
// }
// //ecma scprit 6
// let tong3 = (a, b) => { //arrow function
//     return a + b;
// }
// let tong4 =(a, b)=> a+b;
// let tong5= (e, f) => ({
//     tenham: "tong",
//     ketqua: e+f
// })
// let sinhtong = e =>{
//     return function(f){
//         return e+f;
//     }
// }
// let sinhTong5 = sinhtong(5);
// let sinhTong7 = sinhtong(7);
// let ketqua = sinhTong5(6);
// console.log(ketqua)
let timkiem = function(tenMXH){
    return function(tennguoidung){
        return tenMXH + tennguoidung
    };

};
const linkINS = "http://instagram.com/";
let tkINS = timkiem(linkINS)
let hieu = tkINS("hieudz");
console.log(hieu);

let x3 = "10"
// let strx = "day la x3:" +x3

let strxx = `day la x3: ${3}`

console.log(strxx)

let x1 = "100"
let x2 = "10"
console.log(x1+x2)
console.log(x1-x2);
