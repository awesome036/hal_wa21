'use strict'

let textArea = document.getElementById('textArea');
let msg = document.getElementById('msg');

// 喝の追加
function addText() {
	let text = document.createElement('span');
	text.innerText = '喝';
	textArea.append(text);
}
let addButton = document.getElementById('addStr');
addButton.addEventListener('click', addText, false);

// 喝の削除
function deleteText() {
	if(textArea.lastChild){
		textArea.removeChild(textArea.lastChild);
	}
}
let deleteButton = document.getElementById('deleteStr');
deleteButton.addEventListener('click', deleteText, false);

// メッセージ追加
function addMessage() {
	// text取得
	let text = msg.value;
	msg.value = '';

	if(text != ''){
		// 日付取得
		let now = new Date();
		console.log(now.toLocaleString());
	
		// textLine生成
		let textLine = document.createElement('div');
		textLine.style.color = msg.style.color;
		text = now.toLocaleString() + ' ' + text;
		textLine.innerText = text;
		
	
		let msgArea = document.getElementById('msgArea');
		msgArea.appendChild(textLine);
	}
}
let submit = document.getElementById('submit');
submit.addEventListener('click', addMessage, false);

// ラジオボタンでメッセージの色変更
function setColor(e) {
	msg.style.color = e.currentTarget.value;
}
let radios = document.getElementsByName('color');
for (let i = 0; i < radios.length; i++) {
	radios[i].addEventListener('change', setColor, false);
}

// カーソル変更
let img = document.getElementById('cursor');
let imgHeight = parseInt(img.height);
let imgWidth = parseInt(img.width);
function moveImg(e) {
	img.style.top = (e.clientY - (imgHeight / 2)) + 'px';
	img.style.left = (e.clientX - (imgWidth / 2 + -10)) + 'px';
}
document.addEventListener('mousemove', moveImg, false);