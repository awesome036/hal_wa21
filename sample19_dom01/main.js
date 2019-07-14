'use strict';

// DOMの操作
// DOM(DocumentObjekutModel)
// プログラムからHTMLのエレメントを操作する

// 1.グローバルオブジェクト
// --window
var num = 10;
function test() {
	console.log('Javascript');
}
console.log(window.num);
window.test();
// windowは省略可能

// --document
document.write('<h1>寒い</h1>');
window.document.write('<h1>眠い</h1>');

// DOMツリー
// HTMLドキュメントの階層構造
// DOMツリーの各要素をノードと呼ぶ

// ノードを取得
// id名を指定して取得
// getElementById(id名)
let myP = document.getElementById('myP');
console.log(myP);

// タグ名を指定して取得
// getElementsByTagName(タグ名)
let h2s = document.getElementsByTagName('h2');
for(let i = 0; i < h2s.length; i++){
	console.log(h2s[i].firstChild.nodeValue);
}

let myImage = document.getElementById('myImage');
let images = ['1549507979347.png','ichigo.jpg'];
let targetImage = images[Math.floor(Math.random() * 2)];
myImage.src = './images/' + targetImage;

// getAttribute()/setAttrbute()
myImage.setAttribute('src', './images/ichigo.jpg');

// innerHTML/innerText
let myPP = document.getElementById('myPP');
console.log(myPP.innerHTML);
console.log(myPP.innerText);
console.log(myPP);