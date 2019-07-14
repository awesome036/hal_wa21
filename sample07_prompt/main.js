// ・テキスト入力ダイアログ
// // テキスト入力ダイアログの表示
// 戻り値　「OK」：入力したテキスト	「NG」：Null
var name = window.prompt("名前を入力してください");
document.write("<h1>こんにちは"+name+"さん</h1>");

var num1 = parseInt(prompt("数値を入力してください1"));
var num2 = parseInt(prompt("数値を入力してください1"));
document.write(num1 + "+" + num2 + "=" + (num1+num2));