// let age
// let hasID

// Nếu age >= 18 và hasID === true → "Được phép vào"
// Ngược lại → "Không được phép"

// let isOnline
// let isAdmin

// neu dang online va admin -> admin dang hoat dong
// neu dang online va khong la admin -> user dang hoat dong
// con lai la offline

if (isOnline) {
    if (isAdmin) {
        console.log("Admin dang hoat dong");
    } else {
        console.log("User dang hoat dong");
    }
} else {
    console.log("Offline");
}

// age, gender  // gender: 'male' | 'female'

// Nếu age >= 18 và gender === 'male' → "Nam đủ tuổi"

// Nếu age >= 18 và gender === 'female' → "Nữ đủ tuổi"

// Ngược lại → "Chưa đủ tuổi"

let ages =18;
let gender
if(ages>=18){
    if(gender==='male'){
        console.log("Nam đủ tuổi");
    }else {
        console.log( "Nữ đủ tuổi");
    }
}else{
    console.log("chua du tuoi");
}


// isLogin, isBlocked, isVerified

// Nếu chưa login → "Chưa đăng nhập"

// Nếu đã login nhưng bị block → "Tài khoản bị khóa"

// Nếu đã login, không block, nhưng chưa xác thực → "Chưa xác thực"

// Nếu đã login, không block, đã xác thực → "Truy cập thành công"

if (isLogin) {
    if (isBlocked) {
        console.log("Tài khoản bị khóa");
    }else {
        if (!isVerified){
            console.log("Chưa xác thực");
        }else{
            console.log("Truy cập thành công");
        }
    }
}else{
    console.log("Chưa đăng nhập"); 
}


isAlive        // true | false
hp             // 'high' | 'medium' | 'low'
hasWeapon      // true | false
hasSkill       // true | false
enemyNear      // true | false
isBoss         // true | false
hasPotion      // true | false


// Các biến đầu vào:
// isAlive: nhân vật còn sống hay không
// hp: mức máu của nhân vật ('high' | 'medium' | 'low')
// hasWeapon: có vũ khí hay không
// hasSkill: có kỹ năng đặc biệt hay không
// enemyNear: có kẻ địch ở gần hay không
// isBoss: kẻ địch có phải Boss hay không
// hasPotion: có bình máu hay không

// 📋 YÊU CẦU LOGIC
// 1. Nếu nhân vật đã chết
// Hiển thị: "Game Over"
// 2. Nếu nhân vật còn sống
// 2.1 Nếu không có kẻ địch ở gần
// Hiển thị: "Tự do di chuyển"
// 2.2 Nếu có kẻ địch ở gần
// 2.2.1 Nếu HP thấp
// Nếu có bình máu
// → Hiển thị: "Uống bình máu"
// Ngược lại
// → Hiển thị: "Chạy trốn"
// 2.2.2 Nếu HP trung bình
// Nếu có vũ khí
// Nếu có skill
// → Hiển thị: "Dùng skill tấn công"
// Ngược lại
// → Hiển thị: "Đánh thường"
// Nếu không có vũ khí
// → Hiển thị: "Phòng thủ"
// 2.2.3 Nếu HP cao
// Nếu gặp Boss
// Nếu có skill
// → Hiển thị: "Dùng skill mạnh"
// Ngược lại
// → Hiển thị: "Đánh thăm dò"
// Nếu không phải Boss
// → Hiển thị: "Tấn công mạnh"


if (isAlive) {
    if(!enemyNear){
        console.log("Tự do di chuyển");
    }else{
        if (hp===low) {
            if(hasPotion){
                console.log("Uống bình máu");
            }else{
                console.log("Chạy trốn");
            }
        }else if(hp===medium){
            if(hasWeapon){
                if (hasSkill) {
                    console.log("Dùng skill tấn công");
                }else{
                    console.log("Đánh thường");
                }
            }else{
                console.log("Phòng thủ");
            }
        }else{
            if(isBoss){
                if(hasSkill){
                    console.log("Dùng skill mạnh");
                }else{
                    console.log("Đánh thăm dò");
                }
            }else{
                console.log("Tấn công mạnh");
            }
        }
    }
}else{
    console.log("Game Over");
}
