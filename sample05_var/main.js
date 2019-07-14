// 変数の宣言
var num1,num2,num3	// 変数の宣言
num1 = 15	// 変数へ代入
num2 = 20;
num3 = num1 + num2;
console.log(num3);

// cm/inch
var rate=2.54;

for(var inch = 1; inch <= 3; inch++){
	console.log(inch + "インチ:" + (inch * rate) + "cm");
	document.write(inch + "インチ:" + (inch * rate) + "cm<br>");
}