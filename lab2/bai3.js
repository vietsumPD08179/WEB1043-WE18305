//khai bao bien
var hoTen;
var gioiTinh;
var ho;
var tenDem;
var tenRieng;
//yeu can nhap ho ten va gioi tinh
hoTen = prompt("Nhập vào họ và tên:");
gioiTinh = prompt("Nhập vào giới tính (Nam/Nữ):");
//tach ho ten va cac thanh phan 
var mangHoTen = hoTen.split(" ");
ho = mangHoTen[0];
tenRieng = mangHoTen[mangHoTen.length - 1];
if (mangHoTen.length > 2) {
  tenDem = "";
  for (var i = 1; i < mangHoTen.length - 1; i++) {
    tenDem += mangHoTen[i] + " ";
  }
} else {
  tenDem = "";
}
//in ho ten dem ten rieng
document.write("Họ: " + ho +"<br>");
document.write("Tên đệm: " + tenDem +"<br>");
document.write("Tên riêng: " + tenRieng +"<br>");
//thay doi ten diem dua tren gioi tinh
if (gioiTinh == "Nam") {
  tenDem = "Văn ";
} else if (gioiTinh == "Nữ") {
  tenDem = "Vẽ";
} else {
  document.write("Giới tính không hợp lệ");
}
//in ra ket qua
document.write("Tên mới: " + ho + " " + tenDem + tenRieng);