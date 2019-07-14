'use strict';

let img = document.getElementById('myImage');
let imgHeight = parseInt(img.height);
let imgWidth = parseInt(img.width);

function moveImg(e) {
	img.style.top = (e.clientY - (imgHeight / 2)) + 'px';
	img.style.left = (e.clientX - (imgWidth / 2)) + 'px';
}

document.addEventListener('mousemove', moveImg, false);

// エレメントの追加・削除
// エレメントの生成
// createElement(エレメント名)
// エレメントの追加
// appendChild(エレメントオブジェクト)
// エレメントの削除
// removeChild(エレメントオブジェクト)