// 乱数を求める
// random()
// 0以上1未満の乱数を生成する
// for(var i = 0; i < 5; i++){
// 	console.log(Math.random());
// }

// // 0~2のいずれかの整数を生成する
// for (var i = 0; i < 5; i++) {
// 	var rand = Math.random() * 3;
// 	console.log(Math.floor(rand));
// }

// 1~6のいずれかの整数を生成する
// 1)
// for (var i = 0; i < 10; i++) {
// 	var rand = Math.random() * 6;
// 	console.log(Math.ceil(rand));
// }
// 2)
// for (var i = 0; i < 5; i++) {
// 	var rand = Math.random() * 6 + 1;
// 	console.log(Math.floor(rand));
// }

// 演習：おみくじ　ランダムに結果をブラウザに出力する
var rand = Math.floor(Math.random() * 11);
console.log(rand);

switch (rand) {
	case 0:
	case 1:
	case 2:
		console.log("凶");
		break;
	case 3:
	case 4:
	case 5:
		console.log("末吉");
		break;
	case 6:
	case 7:
		console.log("小吉");
		break;
	case 8:
	case 9:
		console.log("中吉");
		break;
	case 10:
		console.log("大吉");
		break;
}

// 演習：じゃんけん
var rand1 = Math.floor(Math.random() * 3);
var rand2 = Math.floor(Math.random() * 3);
var hand = ['グー','チョキ','パー'];
var result = [
	['引き分け','勝ち','負け'],
	['負け', '引き分け', '勝ち'],
	['勝ち', '負け', '引き分け']
]
document.write("<p>自分の手："+ hand[rand1] + "</p>");
document.write("<p>CPUの手：" + hand[rand2] + "</p>");
document.write("<h2>結果：" + result[rand1][rand2] + "</h2>");

// Dateオブジェクトの概要
// 1) 現在時刻のインスタンスを生成
var now = new Date();

// 2) 日付時刻文字列の取得
// (a) toString()メソッド
// 日付時刻を文字列として返す。

// (b) toDateString()メソッド
// 日付を文字列として返す。

// (c) toTimeString()
// 時刻を文字列として返す。