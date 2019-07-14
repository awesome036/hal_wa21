// 条件分岐

// if文
// if(条件式){
// 	ステートメント
// }

// if-else文
// if(条件式){
// 	ステートメント１
// }else{
// 	ステートメント２
// }

// if-else if文
// if(条件式1){
// 	ステートメント１
// }else if(条件式2){
// 	ステートメント２
// }else{
// 	ステートメント３
// }

// 入れ子
// if(条件式){
// 	・
// 	・
// 	if(条件式){
// 		・
// 		・
// 	}
// }

function howOld(){
	var ageStr = prompt("年齢を入力してください");
	if(ageStr == null){
		alert("キャンセルされました。");
		return;
	}
	var age = parseInt(ageStr);
	if(age < 0){
		alert("正しい値を入力してください");
		howOld();
	}else{
		if(age < 30){
			console.log(age + "才は平成です。");
			if(age == 20){
				console.log("そしてハタチです。");
			}
		}else if(age < 92){
			console.log(age + "才は昭和です。");
		}else if(age < 106){
			console.log(age + "才は大正です。");
		}else{
			console.log(age + "才は明治以前です。");
		}
	}
	if(age == 3 || age == 5 || age == 7){
		console.log("七五三");
	}
	var gendar = prompt("性別を入力してください");
	if(gendar == "女" && (age == 3 || age == 7)
		|| gendar == "男" && age == 5){
		console.log(age + "才は" + gendar + "の子の七五三です。");
	}
}
howOld();

// 条件演算式(三項演算子)
// (条件式)?値１:値２
var score = prompt("点数を入力して下さい");
var result;
// result = (score >= 60)?"合格":"不合格";
if(score >= 60){
	result = "合格";
}else{
	result = "不合格";
}
console.log(result);


var s1 = "the world!";
var s2 = "the world!";
console.log("s1 == s2 -> " + (s1==s2));			// true
console.log("s1 === s2 -> " + (s1 === s2));		// true

var o1 = new String("star");
var o2 = new String("star");
console.log("o1 == o2 -> " + (o1 == o2));		// false
console.log("o1 === o2 -> " + (o1 === o2));		// false

var o3 = o2;
console.log("o3 == o2 -> " + (o3 == o2));		// true
console.log("o3 === o2 -> " + (o3 === o2));		// true



// 補　ブロック
// 「{」と「}」で囲まれた範囲をブロックという。
// 一連のステートメントをまとめるために使用される。

// 課題：ダイアログ表示
// テキスト入力ダイアログで数値を入力させ、入力した数値が偶数か奇数かを表示する。
// 	偶数を入力：「〇〇は偶数です」をブラウザに表示
// 	奇数を入力：「〇〇は奇数です」をブラウザに表示
// 	キャンセル：「キャンセルされました」をalert
// 	未入力：「数値を入力してください」をalert
// wa21_kadai02
// 	|-index.html
// 	|-main.js