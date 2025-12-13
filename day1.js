// learning javascript basic

// let const var

// let đc dùng nhiều trong es6+ (es6+ là phiên bản mới nhất của javascript)
// var same let nhưng mà là dùng ở es5

// tại sao h người ta dùng let mà ko dùng var

// lý do số 1 : var bị ghi đè, let văng error
// let thì nó sẽ ko cho khai báo lại
// var thì nó sẽ cho khai báo lại

// var count = 1
// var count = 2

// console.log("count", count);

// let count = 1
// let count = 2

// console.log("count", count);

// lý do số 2 : HOISTING - var
// console.log(a)
// var a = 10;

// // complier
// var a
// console.log(a)
// a = 10

// console.log(a)
// let a = 10

// lý do số 3: scope
// if (true) {
//     var a = 10
// }
// console.log(a)

// => khó kiểm soát trong dự án lớn

// if (true) {
//     let a = 10
//     console.log(a)
// }
// console.log(a)



// Web / mobile app (React Native)/ app desktop (Electron)
// Nodejs (backend), Nextjs (frontend), Nestjs (backend)


// let var 
// 3 lý do để dùng let thay thế var
// số 1 : var bị ghi đè, let văng error
// số 2: HOISTING - var
// số 3: scope

// const  (viết tắt của constant)
// khi nào thì mình dùng const ????
// const pi = 3.14
// const nhaAge = 28

// ví dụ

// const pi = 3.14 // duy nhất
// // a = 15
// // a = 20
// // a = "truong"
// pi = 25 
// console.log(pi);


// const dùng để gán 1 lần duy nhất, ko cho gán lại 
// khi nào dùng const : khi anh muốn giá trị đó ko thay đổi, và bi gán lại


// trong java
// int, float, double,long, string, char
// int songuyen = 1
// float sothuc

// trong js
// let const var , từ let với const

// js, reactjs

// let number = false

// console.log(typeof number) // check kiểu dữ liệu


// kiểu dữ liệu trong js
// string "truong"
// number 10 3.14 -1 -2 -3
// boolean true| fasle
// underfined
// null

// underfined, biến khai báo nhưng chưa gán

let a

console.log(a);

// null

let c = null


console.log(c);


// note: underfined là khai báo nhưng chưa gán, do js gán
// null là do lập trình viên gán


// let const var
// kiểu dữ liệu


// HOISTING

// var với let

// HOISTING : là kéo khai báo var lên đầu khi trình biên dịch chạy

// anh nhã thấy
console.log(b)
var b = 10

=> b => undefined

// khi trình biên dịch chạy
var b
console.log(b)
b = 10

// trường hợp let
console.log(a) // not defined
let a = 10
