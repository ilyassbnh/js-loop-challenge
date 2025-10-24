//-----------challenge 1 --------------
// let i = 1;
// while (i <= 10){
//     console.log(i)
//     i++;
// }
//-----------challenge 2 --------------
// for ( let i=1; i<=20;i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }
//-----------challenge 3 --------------
// let i=0;
// let sum=0;
// while(i < 10){
//     i++;
//     sum += i;
// }console.log(sum)
//-----------challenge 4 --------------
// let fruits = ["pomme","banane","orange","fraise"]
// for(let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i])
//  }
//-----------challenge 5 --------------
// let mot = "frontend"
// console.log(mot.length)
//-----------challenge 6 --------------
// let table =["1","2","3","4","5"]
// let sum = ""
// for (let i =0;i<table.length;i++ ){
//     console.log("le nombre "+table[i]+ " multiplie par 2 est: "+ table[i]*2)
// }
// -----------challenge 7 --------------
// let dev =["js","react","html","css"]
// for(let i = 0 ; i < dev.length; i++){
// console.log(dev[i].toUpperCase())
// }
// -----------challenge 8 --------------
// for ( let i=1; i<=15;i++){
//     if(i%2 === 1){
//         console.log(i)
//     }
// }
// -----------challenge 9 --------------
// let arr = ["chat","chien","rat","poisson","lion"]
// let count = 0
// for(let i = 0 ; i<arr.length;i++){
//     count ++
// }console.log(count);
// -----------challenge 10 --------------
// let mot = "Hello"
// let times = 5
// for (let i=0 ; i<times ; i++){
//     console.log(mot);
// }
// -----------challenge 11 --------------

// function positiveSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i]
//     }
//   }
//   return sum
// 

// 
let arr = [83, 0, -12, 95]
let min = arr[0]
for (let i = 0; i < arr.length; i++) {

    if (min > arr[i]) {
        min = arr[i]
    }
} console.log(min);




