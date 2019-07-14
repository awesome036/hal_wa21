'use strict';

// 1つのイベントに対して複数のコールバック関数（リスナー関数）を登録できる。
// ・リスナー関数の登録
// addEventListener(イベント名, リスナー関数, useCapture)
// useCapture: イベント伝番モード(true: キャプチャリングフェーズ, false: バブリングフェーズ)

function clickListener1(e) {
	let objId = e.target.id;
	console.log('1:' + objId + 'がクリックされました');
};

function clickListener2(e) {
	let objId = e.target.id;
	console.log('2:' + objId + 'がクリックされました');
}

let myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', clickListener1, false);
myBtn.addEventListener('click', clickListener2, false);

// リスナー関数を取り除く
// removeEventListener(イベント名, リスナー関数, useCapture)
myBtn.removeEventListener('click', clickListener1, false);

// イベントフロー
// イベントは伝番する
// キャプチャリングフェーズ: window->document->body->button
// バブリングフェーズ: button->body->document->window
function eListener(e) {
	console.log('target:' + e.target.id,
				'currentTarget:' + e.currentTarget.id
	);
	if( e.currentTarget.id == 'innerDiv' ){
		e.stopPropagation();	// イベントの伝番を停止
	}
}

let useCapture = true;

let outerDiv = document.getElementById('outerDiv');
outerDiv.addEventListener('click', eListener, useCapture);

let innerDiv = document.getElementById('innerDiv');
innerDiv.addEventListener('click', eListener, useCapture);