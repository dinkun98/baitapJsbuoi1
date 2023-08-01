// Bài 1
/* 
B1: Xác định đầu vào
lương 1 ngày: 100k
số ngày lương
luong
*/
var luongOneDay = 100000;
var soNgayLam = 3;
var luong;

/* 
B2: Xác định công thức tính lương 
lương = lương 1 ngày * số ngày làm
*/
luong = luongOneDay * soNgayLam

// B3: Xuất kết quả 
console.log('Lương của bạn là: ', luong);

// BÀI 2
// b1: xác định đầu vào
// 5 số thực, giá trị trung bình, kết quả
var so1 = 1, so2 = 2, so3 = 3, so4 = 4, so5 = 5;
var gttb;

// b2: xác định công thức tính
// giá trị trung bình = tổng 5 số thực chia cho 5
gttb = (so1+so2+so3+so4+so5)/5;

// b3: xuất kết quả 
console.log('giá trị trung bình: ', gttb);

// BÀI 3
// giá usd 23500, nhập USD để đổi, tiền sau quy đổi
var currentUSD = 23500, nhapUSD=3, tienDaDoi;

// b2: xác định công thức
// lấy số usd người dùng nhập nhân cho trị giá usd hiện tại
tienDaDoi = currentUSD*nhapUSD;

// b3: xuất kết quả
console.log('tiền sau khi đổi: ', tienDaDoi);

// BÀI 4
// b1: xác định đầu vào 
// chiều dài, chiều rộng, diện tích, chu vi
var dai=3, rong=4, s, p;

// b2: xác định công thức
// diện tích = dài * rộng;
// chu vi = (dài + rộng ) * 2;
s = dai * rong;
p = (dai + rong) * 2;

// b3: xuất kết quả
console.log('Dien tich: ', s );
console.log('Chu vi: ', p );

// BÀI 5
//bước 1: nhập vào số có 2 chữ số, so1, so2
var num = 12, so1 = String(num).charAt(0), so2 = String(num).charAt(1), tong;
// bước 2: công thức 
// lấy số ở hàng đơn vị và hàng chục cộng lại với nhau
tong = parseInt(so1) + parseInt(so2);

// bước 3: xuất kết quả 
console.log('kết quả: ', tong );




