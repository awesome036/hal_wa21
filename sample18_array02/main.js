'use strict';

let prefs = ['青森県', '秋田県', '岩手県'];
console.log(prefs);
prefs[4] = '宮城県';
console.log('要素数:', prefs.length, prefs);

// 要素の追加

// 配列の最後に要素を追加
// push(値)
prefs.push('福島県');
console.log(prefs);

// 配列の最後の要素を削除
// pop()		// 戻り値は取り出した値
let last = prefs.pop();
console.log('削除:', last, prefs);

// 配列の最初に要素を追加する
// unshift(値);
prefs.unshift('北海道');
console.log(prefs);

// 配列の最初の要素を削除
// shift();		// 戻り値は削除した値
let first = prefs.shift();
console.log('削除:', first, prefs);

// 複数の値を追加
// concat(値,・・・)
let prefs2 = prefs.concat('福島県', '茨城県');
console.log(prefs2);

let prefs3 = ['栃木県','群馬県'];
let prefs4 = prefs2.concat(prefs3);
console.log(prefs4);

// 並び替え
// ・反転
// reverse();
let numArray = [0,1,2,3,4,5];
console.log(numArray);
numArray.reverse();
console.log(numArray);
console.log(numArray.reverse());

// ・ソート
// sort(比較関数);
let numArray2 = [1111, 121, 22, 3, 200];
numArray2.sort();
console.log(numArray2);
// 比較関数
// function compare(a, b) {
// 	return c;
// }
// インデックスが a<b -> c<0
// インデックスが a=b -> c=0
// インデックスが a>b -> c>0
function compareNum(a, b) {
	return a - b;
}

numArray2.sort(compareNum);
console.log(numArray2);

function compareNum2(a, b) {
	return b - a;
}

numArray2.sort(compareNum2);
console.log(numArray2);

numArray2.sort( function(a,b) {
	return a - b;
});
console.log(numArray2);