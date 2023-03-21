function tinhDiemTrungBinhIfElse(toan, ly, hoa, sinh) {
    if (toan < 0 || toan > 10 || ly < 0 || ly > 10 || hoa < 0 || hoa > 10 || sinh < 0 || sinh > 10) {
        return "Điểm nhập vào không hợp lệ";
    }
    let diemTb = (toan + ly + hoa + sinh) / 4;
    if (diemTb >= 9) {
        return "Giỏi";
    } else if (diemTb >= 7) {
        return "Khá";
    } else if (diemTb >= 5) {
        return "Trung Bình";
    } else {
        return "Yếu";
    }
}

function tinhDiemTrungBinhSwitchCase(toan, ly, hoa, sinh) {
    if (toan < 0 || toan > 10 || ly < 0 || ly > 10 || hoa < 0 || hoa > 10 || sinh < 0 || sinh > 10) {
        return "Điểm nhập vào không hợp lệ";
    }
    let diemTb = Math.floor((toan + ly + hoa + sinh) /4);
    switch(diemTb){
      case(9):
      case(10):
          return "Giỏi";
      case(7):
      case(8):
          return "Khá";
      case(6):
      case(5):
          return "Trung Bình";
      default:
          return "Yếu"; 
   }
}
while(true){
    console.log("1. Tính điểm trung bình (switch case)");
    console.log("2. Tính điểm trung bình (if else)");
    console.log("0. Thoát");
    let luaChon = prompt("Nhập lựa chọn của bạn: ");
    if(luaChon == '0'){
        break;
    }
    let toan = parseFloat(prompt("Nhập điểm Toán: "));
    let ly = parseFloat(prompt("Nhập điểm Lý: "));
    let hoa = parseFloat(prompt("Nhập điểm Hóa: "));
    let sinh = parseFloat(prompt("Nhập điểm Sinh: "));
    
    if(luaChon == '1'){
        ketQua = tinhDiemTrungBinhSwitchCase(toan,ly,hoa,sinh);     
        document.write("Xếp loại: " + ketQua);
        break;        
    }else if(luaChon == '2'){
        ketQua = tinhDiemTrungBinhIfElse(toan,ly,hoa,sinh);
        document.write("Xếp loại: " + ketQua);
        break;
    }
 }