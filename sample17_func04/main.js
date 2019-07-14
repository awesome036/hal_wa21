// 無名関数
// 名前のない関数。イベント処理やコールバック関数として使用される。

// 定義
// let 変数名
// 変数名 = function(引数・・・){
// 	処理
// }

// 呼び出し
// 変数名(引数・・・)
	
'use strict';

let myFunc;
myFunc = function(){
	console.log('JavaScript!');
}
myFunc();

let myFunc2;
myFunc2 = function(num){
	return num * num;
}
let square = myFunc2(2);
console.log(square);

function myFunc3(){
	console.log('myFunc3');
}
myFunc3();
myFunc4();	// 有名関数の場合、関数が後ろに定義されていても読み込める。

function myFunc4() {
	console.log('myFunc4');
}

let myFunc5 = function(){
	console.log('myFunc5');
}

myFunc5();
// myFunc6();	// 無名関数の場合、定義されてからでないと読み込めない
// let myFunc6 = function () {
// 	console.log('myFunc6');
// }