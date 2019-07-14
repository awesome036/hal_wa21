'use strict';

// エレメントの追加・削除
// エレメントの生成
// createElement(エレメント名)
// エレメントの追加
// appendChild(エレメントオブジェクト)
// エレメントの削除
// removeChild(エレメントオブジェクト)

let imgWidth = 60;
let imgHeight = 70;

let mainDiv = document.getElementById('mainDiv');
function appendImg (e) {
	// エレメントの生成
	let newImg = document.createElement('img');

	// プロパティの設定
	newImg.addEventListener('click', removeImg, false);
	newImg.setAttribute('class', 'myImage');
	newImg.src = './images/hibino.jpg';
	newImg.style.left = (e.clientX - (imgWidth / 2)) + 'px';
	newImg.style.top = (e.clientY - (imgHeight / 2)) + 'px';

	// エレメントの追加
	mainDiv.appendChild(newImg);
}

document.addEventListener('click', appendImg, false);

function removeImg(e) {
	mainDiv.removeChild(e.target);
	e.stopPropagation();	// 削除の後に追加されないようにイベントの伝番を制御
}
