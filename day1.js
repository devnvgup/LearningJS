// =======================================================
// LEARNING JAVASCRIPT BASIC
// =======================================================

// -------------------------------------------------------
// 1. let / const / var
// -------------------------------------------------------

// ES6+ (phiên bản hiện đại của JavaScript) sử dụng: let, const
// ES5 (phiên bản cũ) sử dụng: var
// ❌ Hiện nay KHÔNG khuyến khích dùng var

// -------------------------------------------------------
// TẠI SAO DÙNG let / const MÀ KHÔNG DÙNG var?
// -------------------------------------------------------

// ===== LÝ DO 1: var BỊ KHAI BÁO LẠI (GHI ĐÈ) =====

// var cho phép khai báo lại → dễ gây bug
// var count = 1;
// var count = 2;
// console.log(count); // 2

// let KHÔNG cho khai báo lại → an toàn hơn
// let count = 1;
// let count = 2; // ❌ Error


// ===== LÝ DO 2: HOISTING =====

// Với var
// console.log(a); // undefined
// var a = 10;

// Trình biên dịch hiểu như sau:
// var a;
// console.log(a);
// a = 10;

// Với let
// console.log(b); // ❌ Error
// let b = 10;


// ===== LÝ DO 3: SCOPE =====

// var KHÔNG có block scope
// if (true) {
//   var x = 10;
// }
// console.log(x); // 10 ❌ khó kiểm soát

// let CÓ block scope
// if (true) {
//   let y = 10;
//   console.log(y); // 10
// }
// console.log(y); // ❌ Error


// -------------------------------------------------------
// 2. const (constant)
// -------------------------------------------------------

// const dùng khi giá trị KHÔNG ĐƯỢC GÁN LẠI

// const pi = 3.14;
// pi = 25; // ❌ Error

// 👉 Quy tắc:
// - Không cần gán lại → dùng const
// - Cần gán lại → dùng let
// - KHÔNG dùng var


// -------------------------------------------------------
// 3. Kiểu dữ liệu trong JavaScript
// -------------------------------------------------------

// JavaScript là ngôn ngữ dynamic typing (không cần khai báo kiểu)

// Các kiểu dữ liệu cơ bản (Primitive):
// - string     : "truong"
// - number     : 10, 3.14, -5
// - boolean    : true | false
// - undefined  : khai báo nhưng chưa gán
// - null       : cố ý không có giá trị

// Kiểm tra kiểu dữ liệu
// typeof variable


// Ví dụ:
let number = false;
console.log(typeof number); // boolean


// -------------------------------------------------------
// 4. undefined vs null
// -------------------------------------------------------

// undefined: biến khai báo nhưng CHƯA GÁN (JS tự gán)
let a;
console.log(a); // undefined

// null: lập trình viên CHỦ ĐỘNG gán
let c = null;
console.log(c); // null

// 👉 Note:
// - undefined → JS nói "chưa có"
// - null → dev nói "cố ý không có"


// -------------------------------------------------------
// 5. Hoisting (tóm tắt)
// -------------------------------------------------------

// Hoisting là việc JS kéo phần KHAI BÁO var lên đầu

// console.log(b);
// var b = 10;
// => b = undefined

// let / const không cho truy cập trước khi khai báo
// => an toàn hơn


// -------------------------------------------------------
// 6. Tham trị & Tham chiếu
// -------------------------------------------------------

// ===== THAM TRỊ (PASS BY VALUE) =====
// Áp dụng cho: number, string, boolean, null, undefined

let x = 10;
let y = x;

y = 20;
console.log(x); // 10 (không bị ảnh hưởng)


// ===== THAM CHIẾU (PASS BY REFERENCE) =====
// Áp dụng cho: object, array, function

let objectA = {
  name: "truong"
};

let objectB = objectA; // cùng trỏ tới 1 vùng nhớ

objectB.name = "nha";
objectA.name = "123123";

console.log(objectB.name); // 123123

// 👉 Giải thích:
// - objectA và objectB trỏ cùng 1 địa chỉ
// - Thay đổi 1 → ảnh hưởng tất cả


// -------------------------------------------------------
// SUMMARY
// -------------------------------------------------------

// - let / const thay thế var
// - const dùng khi không gán lại
// - undefined: JS tự gán
// - null: dev chủ động gán
// - Primitive → tham trị (copy giá trị)
// - Object → tham chiếu (copy địa chỉ)

// =======================================================
