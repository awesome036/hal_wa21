// ユーザ定義関数
// function 関数名(引数,・・・){
// 	処理
// 	return 戻り値;
// }

// 関数の呼び出し
// 関数名([引数,・・・]);
// 変数名 = 関数名([引数,・・・]);

// 例 引数で文字列を渡し、長いほうの文字列を返す関数
function longerStr(str1,str2){
	if(str1.length >= str2.length){
		return str1;
	}else{
		return str2;
	}
}
var lstr = longerStr("Hello","ciao");
console.log(lstr);

var s1 = "hogehoge";
var s2 = "foofoo";
lstr = longerStr(s1,s2);
console.log(lstr);

// // 練習　文字列を入力させて、関数に渡す
// s1 = prompt("文字列1を入力");
// s2 = prompt("文字列2を入力");
// lstr = longerStr(s1,s2);
// console.log(lstr);

// 演習 文字列を入力させて、3~8文字ならtrue そうでなければfalseを返す関数
// function varidStr(str){
// 	if(str.length >= 3 && str.length <= 8){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
// var str = prompt("文字列を入力");
// console.log(varidStr(str));

function getAge(birthday){
	var now = new Date();
	var age = now.getFullYear() - birthday.getFullYear();
	var bithdateThisyear = new Date(
		now.getFullYear(),
		birthday.getMonth(),
		birthday.getDate()
	);
	if(now < bithdateThisyear){
		age++;
	}
	return age;
}
var birthday = new Date(1995,5,3);
var age = getAge(birthday);
console.log(age);

// // 生年月日（例　2018/01/03）を入力させて関数に渡す。
// var str = String(prompt("生年月日を入力してください。（例　2018/01/03）"));
// var year = str.substring(0,4);
// var month = str.substring(5,7);
// var date = str.substring(8,10);
// if(month.indexOf(0) == "0"){
// 	month = month.substring(1,2);
// }
// if (date.indexOf(0) == "0") {
// 	date = date.substring(1, 2);
// }
// birthday = new Date(year,month,date);
// age = getAge(birthday);
// console.log(age);

var grobalVal;

function func01(){
	var localVal01;
}

function func02() {
	var localVal02;
}
