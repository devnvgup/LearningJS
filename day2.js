// =======================================================
// JAVASCRIPT BASIC – OPERATOR, TYPE, TRUTHY / FALSY
// =======================================================

// -------------------------------------------------------
// 1. Operators (Toán tử số học)
// -------------------------------------------------------
// +  Cộng
// -  Trừ
// *  Nhân
// /  Chia
// %  Chia lấy dư

let a = 10;
let b = 2;

let c = a / b;
console.log(c); // 5


// -------------------------------------------------------
// 2. Bài tập: Tìm số chẵn trong mảng
// -------------------------------------------------------
// arr = [1,2,3,4,5,6] => [2,4,6]

function timSoChan(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(timSoChan([1, 2, 3, 4, 5, 6]));


// -------------------------------------------------------
// 3. So sánh == và ===
// -------------------------------------------------------
// ==  : so sánh giá trị (có ép kiểu) ❌
// === : so sánh giá trị + kiểu dữ liệu ✅

let test1 = 3;      // number
let test2 = "3";    // string

console.log(test1 == test2);   // true ❌
console.log(test1 === test2);  // false ✅


// -------------------------------------------------------
// 4. Truthy & Falsy
// -------------------------------------------------------

// Falsy: khi đưa vào if sẽ hiểu là false
// Chỉ có các giá trị sau:

// false
// 0
// ""
// null
// undefined
// NaN

if (0) {
  console.log("Run");
} else {
  console.log("Falsy"); // chạy
}


// -------------------------------------------------------
// 5. Ví dụ thực tế với API response
// -------------------------------------------------------

let response = ["truong", "nha", "phong", undefined];
let result = [];

for (let i = 0; i < response.length; i += 1) {
  if (response[i]) {
    result.push(response[i].toUpperCase());
  }
}

console.log(result); // ["TRUONG", "NHA", "PHONG"]


// -------------------------------------------------------
// 6. Truthy
// -------------------------------------------------------
// Ngoài các giá trị falsy ở trên → tất cả là truthy

let obj = {};

if (obj) {
  console.log("Truthy"); // chạy
}


// -------------------------------------------------------
// 7. Ép kiểu (Type Conversion)
// -------------------------------------------------------

// ---------- String → Number ----------

let strNumber = "10";
let number = 5;

// Cách 1: Number()
console.log(Number(strNumber) + number); // 15

// Cách 2: Unary (+)
console.log(+strNumber + number); // 15

// Cách 3: parseInt
console.log(parseInt(strNumber, 10) + number); // 15


// ---------- Number → String ----------

// Cách 1: String()
let num = 123;
let str1 = String(num);
console.log(typeof str1); // string

// Cách 2: toString()
let str2 = num.toString();
console.log(typeof str2); // string


// -------------------------------------------------------
// 8. Ép kiểu Boolean
// -------------------------------------------------------

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("abc"));   // true
console.log(!!null);           // false
console.log(!![]);             // true


// =======================================================
// SUMMARY
// =======================================================
// ✔ Operators: + - * / %
// ✔ Dùng === thay cho ==
// ✔ Falsy chỉ có: false, 0, "", null, undefined, NaN
// ✔ Ngoài ra là Truthy
// ✔ String → Number: Number(), +value, parseInt()
// ✔ Number → String: String(), toString()
// ✔ Ép Boolean: Boolean(value) hoặc !!value
