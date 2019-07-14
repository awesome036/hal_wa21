'use strict';

$(document).on('click', '#osunayo', function(){
	alert("絶対に押すなよ！");
});

$('#myBtn3').on('click', function(){
	alert(this.id + 'が入力されました');
});

window.onload = function() {
	let myBtn4 = document.getElementById('myBtn4');
	console.log(myBtn4);
	myBtn4.onclick = function() {
		console.log(this.id + 'がクリックされました。');
	};
};

// 1つのイベントに対して複数のコールバック関数（リスナー関数）を登録できる。
// ・リスナー関数の登録
// addEventListener(イベント名, リスナー関数, useCapture)
// useCapture: イベント伝番モード(true: キャプチャリングフェーズ, false: バブリングフェーズ)