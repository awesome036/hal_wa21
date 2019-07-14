'use strict';

var str1 = 'global';

function myfunc() {
	var str2 = 'local';
	console.log('関数内str1:' + str1);
	console.log('関数内str1:' + str2);
}
myfunc();
console.log('関数外str1:' + str1);
// console.log('関数外str1:' + str2);

// 補　ブロックスコープ
// 「{}」で囲むことでスコープを設定できる。
var num = 1;
{
	// 「let」を使用して変数を宣言することでブロックスコープを設定できる。
	let num = 2;
	console.log('{}内:' + num);
}
console.log('{}外:' + num);

var i  = 1;
for(let i = 0; i < 10; i++){
	console.log(i);
}
console.log(i);