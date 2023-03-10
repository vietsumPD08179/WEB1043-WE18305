//nhap a b c
var a = parseInt(prompt("Nhập vào a:"));
var b = parseInt(prompt("Nhập vào b:"));
var c = parseInt(prompt("Nhập vào c:"));
//xet cac dieu kien
if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b ==c) {
            document.write("Đây là một tam giác đều.");
        } else if (a ==b || a ==c ||b ==c) {
            document.write("Đây là một tam giác can.");
        } else if (a*a +b*b ==c*c ||a*a +c*c ==b*b ||b*b +c*c ==a*a) {
            document.write("Đây là một tam giác vuông.");
        } else {
            document.write("Đây là một tam giác thường.");
        }
    } else {
        document.write("tam giác không hợp lệ.");
    }
} else {
    document.write("Ba số này phải là 3 số dương.");
}