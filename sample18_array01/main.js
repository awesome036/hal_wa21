// 6.配列
// 一連の値をまとめて管理するためのデータ型。

// a.配列の生成
// 1.コンストラクタ
// new Array(要素数)
'use strict';

let colors = new Array(4);
colors[0] = '黒';
colors[1] = '白';
colors[2] = '赤';
colors[3] = '橙';

console.log(colors);

// 2.コンストラクタ②
// new Array(要素１,要素２,・・・)
let colors2 = new Array('黒','白','赤','橙');
console.log(colors2);

let colors3 = ['黒', '白', '赤','橙'];
console.log(colors3);

let days = '月,火,水,木,金,土';
let daysArray = days.split(',');
console.log(daysArray);
console.log('要素数:', daysArray.length);

daysArray[6] = '日';
console.log('要素数:',daysArray.length, daysArray);

// 文字列に変数①
// Arrayオブジェクト .toString();
console.log('配列を文字列に変換:',daysArray.toString());

// 文字列に変数②
// Arrayオブジェクト .join(区切り文字);
console.log(daysArray.join('-'));	// 引数省略するとカンマ区切りになる
console.log(daysArray.join(''));	// 月火水木金土日

console.time('case1');
for(let i = 0; i < daysArray.length; i++){
	console.log(i + ':' + daysArray[i]);
}
console.timeEnd('case1');

let today = new Date();
let day;
switch(today.getDay()){
	case 0:
		day = '日曜日';
		break;
	case 1:
		day = '月曜日';
		break;
	case 2:
		day = '火曜日';
		break;
	case 3:
		day = '水曜日';
		break;
	case 4:
		day = '木曜日';
		break;
	case 5:
		day = '金曜日';
		break;
	case 6:
		day = '土曜日';
		break;
}
console.log(day);

let daysArray2 = [
	"日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"
];
console.log(daysArray2[today.getDay()]);

// 補　arguments
// 関数を使うとき、引数の値が格納される配列（のようなもの）

function sum() {
	let num = 0;
	for(let i = 0; i < arguments.length; i++){
		num += arguments[i];
	}
	console.log(arguments);
	return num;
}
console.time('case2');
let num = sum(10, 20, 100);
console.timeEnd('case2');
console.log(num);