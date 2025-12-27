// =======================================================
// DAY 3: IF - ELSE TRONG JAVASCRIPT
// =======================================================

// -------------------------------------------------------
// 1. IF - ELSE là gì?
// -------------------------------------------------------
// if - else dùng để rẽ nhánh logic
// Chương trình sẽ chạy các đoạn code khác nhau
// tùy điều kiện đúng (true) hay sai (false)

// Điều kiện trong if - else luôn trả về: true / false

// -------------------------------------------------------
// 2. Cú pháp cơ bản
// -------------------------------------------------------

/*
if (condition) {
  // chạy khi condition = true
} else {
  // chạy khi condition = false
}
*/

// Ví dụ
let age = 18;

if (age >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Không đủ tuổi");
}

// -------------------------------------------------------
// 3. IF - ELSE IF - ELSE
// -------------------------------------------------------

let score = 7;

if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else {
  console.log("Trung bình");
}

// -------------------------------------------------------
// 4. Toán tử so sánh
// -------------------------------------------------------
// >  <  >=  <=  ==  ===  !=  !==

// -------------------------------------------------------
// 5. Toán tử logic
// -------------------------------------------------------
// &&  (AND)
// ||  (OR)
// !   (NOT)

// -------------------------------------------------------
// 6. Toán tử 3 ngôi (Ternary Operator)
// -------------------------------------------------------

/*
condition ? valueIfTrue : valueIfFalse
*/

// -------------------------------------------------------
// 7. Bài tập: Kiểm tra số chẵn / lẻ
// -------------------------------------------------------

let n = 7;

if (n % 2 === 0) {
  console.log("Số chẵn");
} else {
  console.log("Số lẻ");
}

// -------------------------------------------------------
// 8. Bài tập: Kiểm tra số âm, số dương, số 0
// -------------------------------------------------------

let number = 4;

if (number < 0) {
  console.log("Số âm");
} else {
  if (number === 0) {
    console.log("Là số 0 và là số dương");
  } else {
    console.log("Số dương");
  }
}

// -------------------------------------------------------
// 9. Bài tập: Kiểm tra đăng nhập
// -------------------------------------------------------

let username = "admin";
let password = "123456";

let inputUsername = "admin";   // người dùng nhập
let inputPassword = "123";     // người dùng nhập

if (inputUsername === username && inputPassword === password) {
  console.log("Login success");
} else {
  console.log("Login failed");

  if (inputUsername !== username) {
    console.log("Sai username");
  } else if (inputPassword !== password) {
    console.log("Sai password");
  }
}

// -------------------------------------------------------
// 10. Bài tập: Kiểm tra năm nhuận
// -------------------------------------------------------
// Năm nhuận là năm:
// - Chia hết cho 4
// - Nhưng không chia hết cho 100

let year = 2024;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("Năm nhuận");
} else {
  console.log("Không phải năm nhuận");
}

// -------------------------------------------------------
// 11. Bài tập tổng hợp: Xét duyệt vay tiền
// -------------------------------------------------------

let customerAge = 25;
let hasJob = true;
let salary = 15000000; // VNĐ
let hasBadDebt = false;

// Luật xét duyệt:
// 1. < 18           → Từ chối
// 2. Không có việc  → Từ chối
// 3. Có nợ xấu      → Từ chối
// 4. Thu nhập:
//    >= 20 triệu → Duyệt vay mức cao
//    >= 10 triệu → Duyệt vay mức trung bình
//    < 10 triệu  → Từ chối

if (customerAge < 18) {
  console.log("Từ chối: Chưa đủ tuổi");
} else if (!hasJob) {
  console.log("Từ chối: Không có việc làm");
} else if (hasBadDebt) {
  console.log("Từ chối: Có nợ xấu");
} else {
  if (salary >= 20000000) {
    console.log("Duyệt vay mức cao");
  } else if (salary >= 10000000) {
    console.log("Duyệt vay mức trung bình");
  } else {
    console.log("Từ chối: Thu nhập không đủ");
  }
}

// -------------------------------------------------------
// 12. Cách viết gọn hơn bằng toán tử logic
// -------------------------------------------------------

if (customerAge < 18 || !hasJob || hasBadDebt) {
  console.log("Từ chối");
} else {
  if (salary >= 20000000) {
    console.log("Duyệt vay mức cao");
  } else if (salary >= 10000000) {
    console.log("Duyệt vay mức trung bình");
  } else {
    console.log("Từ chối: Thu nhập không đủ");
  }
}



// =======================================================
// SUMMARY – DAY 3: IF ELSE TRONG JAVASCRIPT
// =======================================================
//
// - if / else dùng để rẽ nhánh logic chương trình
// - Điều kiện trong if / else luôn trả về: true hoặc false
//
// - Các dạng sử dụng:
//   + if - else
//   + if - else if - else
//   + if lồng nhau (nested if)
//   + kết hợp toán tử logic (&&, ||, !)
//
// - Toán tử so sánh thường dùng:
//   >  <  >=  <=  ===  !==
//
// - Toán tử logic:
//   &&  (AND) : tất cả điều kiện phải đúng
//   ||  (OR)  : chỉ cần một điều kiện đúng
//   !   (NOT) : phủ định điều kiện
//
// - Toán tử 3 ngôi (ternary):
//   condition ? valueIfTrue : valueIfFalse
//
// - Khi viết if - else:
//   + Luôn ưu tiên dùng === thay vì ==
//   + Tránh lồng quá nhiều if
//   + Điều kiện fail nên xử lý sớm
//   + Code cần dễ đọc, dễ hiểu
//
// =======================================================
