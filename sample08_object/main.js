document.title = "テスト";
document.body.style.backgroundColor = "#006";
document.body.style.color = "#fff";
document.write("<h1>JavaScript</h1>");

var str = "JavaScript";
console.log("長さ" + str.length);
console.log(str.toUpperCase());

var str1 = "ダイヤモンドは";
document.write(str1);
console.log(str1);

var str2 = new String("砕けない");
document.write(str2.bold().fontcolor("yellow"));
console.log(str2);

var num1 = 12.345;
var numStr1 = num1.toFixed(1);
console.log(numStr1);

var num2 = new Number(12.345);
var numStr2 = num2.toFixed(2);
console.log(numStr2);

// インスタンスメソッド
// インスタンスに関連するメソッド
// インスタンス.メソッド（引数）
// toFixed()メソッド
// 数値の小数点以下を四捨五入により
// 指定した桁数にして文字列に変換した値を返す。

// インスタンスプロパティ
// インスタンスに関連付くプロパティ
// インスタンス.プロパティ

// スタティックメソッド
// インスタンスに関係ないメソッド
// オブジェクト名.メソッド（引数）
// Number.isInteger()メソッド
// 引数が整数ならtrue、そうでなければfalseを返す

// スタティックプロパティ
// インスタンスに関係ないプロパティ
// オブジェクト名.プロパティ
// Number.MAX_VALUE
// Numberで扱える最大値を返す
// Number.MIN_VALUE
// Numberで扱える最小値を返す

// プリミティブ型とオブジェクト型
// JavaScriptのデータ型にはプリミティブ型とオブジェクト型がある
// プリミティブ型・・・値そのものを扱う
// 例　数値型、文字列型、真偽値型、null,undefined
// オブジェクト型・・・プロパティやメソッドを持てる
// 例 Array、Object、Date、Document、Window、String

// ラッパーオブジェクト
// 文字列型→Stringオブジェクト
// 数値型→Numberオブジェクト
// 真偽値型→Booleanオブジェクト

// NaN:非数（Not a Number）を示す特別な値

// typeof()メソッド
// 引数のデータ型を返す
console.log(typeof(str1));
console.log(typeof (str2));
console.log(typeof (num1));
console.log(typeof (num2));