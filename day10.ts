// 1. Đếm số ký tự trong chuỗi
// Input: "hello"
// Output: 5

// 2. In từng ký tự của chuỗi
// Input: "abc"
// Output:
// a
// b
// c

// 3. Đếm số nguyên âm trong chuỗi
// a, e, i, o, u
// Input: "abc"
// Output:
// a
// b
// c

function soNguyeAm(str: string) : number{
    let arr: string[] = ["a","e","i","u","o"]
    let count : number = 0
    for (let i = 0; i < str.length;i++){
        if(arr.includes(str[i])){
            count +=1
        }
    }
    return count;
}

// 4. Đếm số chữ cái in hoa
// Dùng Character.isUpperCase().
// Input: "HeLLo"
// Output: 3

// 5. Đảo ngược chuỗi
// Input: "hello"
// Output: "olleh"

// 6. Kiểm tra chuỗi đối xứng
// Input: "madam"
// Output: true

// 7. Đếm số lần xuất hiện của một ký tự
// Input: s = "banana", target = 'a'
// Output: 3

// 8. Tìm ký tự đầu tiên của chuỗi
// Input: "java"
// Output: j

// 9. Tìm ký tự cuối cùng của chuỗi
// Input: "java"
// Output: a

// 10. Nối hai chuỗi
// Input: "hello", "world"
// Output: "helloworld"