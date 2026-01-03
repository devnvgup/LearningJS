// =======================================================
// SWITCH – CASE & STRING (JavaScript ES6+)
// Author: Truong Nguyen
// Description: Tổng hợp kiến thức switch-case và string
// =======================================================

/*
=========================================================
1️⃣ SWITCH – CASE
=========================================================
- Dùng để rẽ nhánh theo GIÁ TRỊ CỤ THỂ
- So sánh bằng ===
- Thường thay thế if – else if khi có nhiều case
*/

// -------------------------
// Cú pháp cơ bản
// -------------------------
/*
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
*/

// -------------------------
// Ví dụ: Thứ trong tuần
// -------------------------
let day = 1;

switch (day) {
  case 1:
    console.log("Thứ hai");
    break;
  case 2:
    console.log("Thứ ba");
    break;
  default:
    console.log("Không hợp lệ");
}

// -------------------------
// Ví dụ: Nhiều case chung logic
// -------------------------
let score = "A";

switch (score) {
  case "A":
  case "B":
    console.log("Giỏi");
    break;
  case "C":
    console.log("Trung bình");
    break;
  default:
    console.log("Yếu");
}

// -------------------------
// Ví dụ: Role người dùng
// -------------------------
let role = "ADMIN";

switch (role) {
  case "ADMIN":
    console.log("Toàn quyền");
    break;
  case "USER":
    console.log("Hạn chế");
    break;
  case "GUEST":
    console.log("Chỉ xem");
    break;
  default:
    console.log("Role không hợp lệ");
}

// -------------------------
// Ví dụ: HTTP Status Code
// -------------------------
let statusCode = 200;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;
  case 201:
    console.log("Created");
    break;
  case 400:
    console.log("Bad Request");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 403:
    console.log("Forbidden");
    break;
  case 404:
    console.log("Not Found");
    break;
  default:
    console.log("Server Error");
}

/*
=========================================================
2️⃣ STRING (CHUỖI)
=========================================================
- Dùng để xử lý text, input, dữ liệu API
*/

// -------------------------
// Template String (ES6+)
// -------------------------
const name = "Truong";
const age = 22;

console.log(`Tên tôi là ${name} và tôi ${age} tuổi`);

// -------------------------
// Độ dài chuỗi
// -------------------------
const str = "Hello JavaScript";
console.log(str.length);

// -------------------------
// In hoa / In thường
// -------------------------
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// -------------------------
// includes: kiểm tra chuỗi con
// -------------------------
const str1 = "frontend developer";
console.log(str1.includes("developer")); // true

// -------------------------
// indexOf: tìm vị trí xuất hiện
// -------------------------
const text = "Hello World";
console.log(text.indexOf("World")); // >= 0
console.log(text.indexOf("ABC"));   // -1

// -------------------------
// slice: cắt chuỗi
// -------------------------
console.log(text.slice(0, 5)); // Hello

// -------------------------
// replace: thay thế chuỗi
// -------------------------
const str2 = "I love JS";
console.log(str2.replace("JS", "JavaScript"));

// -------------------------
// trim: xoá khoảng trắng đầu & cuối
// -------------------------
const str3 = "   Hello World   ";
console.log(str3.trim());

// -------------------------
// split: tách chuỗi thành mảng
// -------------------------
const str4 = "Hello-World-JavaScript";
console.log(str4.split("-"));

/*
=========================================================
3️⃣ BÀI TẬP THỰC HÀNH (ĐÃ LÀM)
=========================================================
*/

// BT1: Độ dài chuỗi
console.log(str.length);

// BT2: Viết hoa chuỗi
console.log(str.toUpperCase());

// BT3: Viết thường chuỗi
console.log(str.toLowerCase());

// BT4: Kiểm tra chuỗi con
console.log(str1.includes("developer"));

// BT5: Thay thế chuỗi
console.log(str2.replace("JS", "JavaScript"));

// BT6: Xoá khoảng trắng
console.log(str3.trim());

/*
=========================================================
SUMMARY
=========================================================
- switch-case: rẽ nhánh theo giá trị
- String methods:
  + length
  + toUpperCase / toLowerCase
  + includes
  + indexOf
  + slice
  + replace
  + trim
  + split
=========================================================
*/
