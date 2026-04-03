


// BT1: hello => Hello, viết hoa chữ cái đầu tiên
// BT2: getUsername("abc@gmail.com") → "abc", trả về phần username của email
// BT3: isURL("https://google.com") → true, Bắt đầu bằng http:// hoặc https://
// hint : neu bat dau bang http:// hoac https:// => true (startWith)
// BT4 : countWords("Hello world") → 2, Các từ cách nhau bởi 1 hoặc nhiều khoảng trắng

// BT5: isValidEmail("abc@gmail.com") → true , Có ký tự @, có dấu . , @ đứng trước ., Không chứa khoảng trắng
// BT6: isEmpty("") → true

// charAt(index) , slice(start, index)
let test = "hello"

console.log(`${test.charAt(0).toUpperCase()}${test.slice(1)}`)


const str_4 = "hello"
console.log(str_4.charAt(0).toUpperCase()+str_4.slice(1));


// BT2: 
let testEmail = "abc@gmail.com"
let index = testEmail.indexOf("@")
console.log(testEmail.slice(0, index))

let str_5="thanhnhadev@gmail.com"
console.log(`username:${str_5.split("@")[0]}`);

