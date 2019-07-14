// インクリメントの順序
var a = 1;
console.log(a);		// 1
a++;
console.log(a);		// 2
console.log(a++);	// 2(出力してから加算)
console.log(a);		// 3
console.log(++a);	// 4(加算してから出力)
console.log(a);		// 4

a = 1;
var b;
b = a++;
console.log("a="+a+" b="+b);	// a=2 b=1
b= ++a;
console.log("a=" + a + " b=" + b);	// a=3 b=3

// ・リテラル
// エスケープ：「\任意文字」
// 改行：「\n」
// 2進数：「0bXXX」
// 8進数：「0XXX」
// 16進数：「0xXXX」

// ・文字列と数値の変換
// parseInt(文字列[,基数])	文字列をn進数として判断して整数にする
// parseFloat(文字列)		文字列を浮動小数点数にする
// String(数値)				数値を文字列にする

// ・定数の宣言
// const 定数名　= 値
// 定数は宣言後書き換え不可

const year = 2018;
console.log(year);