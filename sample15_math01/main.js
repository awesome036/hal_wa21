// Mathオブジェクト
// 算術演算用のメソッド・プロパティがまとめて用意されているオブジェクト
// Mathオブジェクトのメソッドはスタティックオブジェクト
// Math.メソッド名(引数,・・・)

// max(引数1,引数2,・・・)
// 引数の中で最も大きい値を返す
var maxVal = Math.max(10,20,-10,0,99);
console.log(maxVal);		// 99

// min(引数1,引数2,・・・)
// 引数の中で最も小さい値を返す
var minVal = Math.min(10, 20, -10, 0, 99);
console.log(minVal);		// -10

// Mathオブジェクトのプロパティはスタティックプロパティ
// Math.プロパティ名

// PI：円周率
console.log(Math.PI);		// 3.141592653589793

// 練習：半径を入力させて、円の面積を求める。
var r = parseInt(prompt("半径を入力してください。"));
var s = r * r * Math.PI;
console.log("半径" + r + "の円の面積は" + s + "です。" );

// pow(引数1,引数2,・・・)
// 引数1を引数2で累乗した値を返す
var v = (4/3) * Math.PI * Math.pow(r,3);
console.log("半径" + r + "の球の体積は" + v + "です。");

// 少数を整数に変換する
// 1) floor()メソッド
// floor(値)
// 切り捨て

// 2) ceil()メソッド
// ceil(値)
// 切り上げ

// 3) round()
// round(値)
// 四捨五入