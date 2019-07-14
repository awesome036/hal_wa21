var num = parseFloat(prompt("数値を入力してください"));
// 少数を整数に変換する
// 1) floor()メソッド
// floor(値)
// 切り捨て
console.log(num + "を切り捨てた値は" + Math.floor(num));

// 2) ceil()メソッド
// ceil(値)
// 切り上げ
console.log(num + "を切り上げた値は" + Math.ceil(num));

// 3) round()
// round(値)
// 四捨五入
console.log(num + "を四捨五入した値は" + Math.round(num));