//nhap a b c
let a =parseInt(prompt("Nhập vào hệ số a:"));
let b =parseInt(prompt("Nhập vào hệ số b:"));
let c =parseInt(prompt("Nhập vào hệ số c:"));

//tinh delta
let delta = b * b - 4 * a * c;
//xet dieu kien cua delta
if (delta < 0) {
 document.write("Phương trình vô nghiệm");
} else if (delta == 0) {
  let x = -b / (2 * a);
  document.write("Phương trình có nghiệm kép x =" + x);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  document.write("Phương trình có hai nghiệm phân biệt:");
  document.write("x1 =" + x1);
  document.write("x2 =" + x2);
}