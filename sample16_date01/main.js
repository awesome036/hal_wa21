// Dateオブジェクトの概要
// 1) 現在時刻のインスタンスを生成
var now = new Date();

// 2) 日付時刻文字列の取得
// (a) toString()メソッド
// 日付時刻を文字列として返す。
console.log(now.toString());

// (b) toDateString()メソッド
// 日付を文字列として返す。
console.log(now.toDateString());

// (c) toTimeString()
// 時刻を文字列として返す。
console.log(now.toTimeString());

// (d) toLocaleString()メソッド
// 日付時刻をロケールに応じた文字列として返す。
console.log(now.toLocaleString());

// (e) toLocaleDateString()メソッド
// 日付をロケールに応じた文字列として返す。
console.log(now.toLocaleDateString());

// (f) toLocaleTimeString()メソッド
// 時刻をロケールに応じた文字列として返す。
console.log(now.toLocaleTimeString());

// 3)日付時刻を指定してインスタンス生成
// コンストラクタ
// Date(year,month[,date,hour,minute,second,milisecond])

// year 西暦4桁
// month 0(1月)~11(12月)
// day 日(デフォルトは1)
// hour 時(デフォルトは0)
// minute 分(デフォルトは0)
// second 秒(デフォルトは0)
// milisecond ミリ秒(デフォルトは0)

var date = new Date(2017,9,6,11);
console.log(date.toLocaleString());

////////////////////////////////////////////////////////////////////

// 日付時刻の取得と設定
// 1)取得するメソッド
// (a)getFullYear()メソッド
// 西暦の年を返す
console.log(now.getFullYear());
// (b)getMonth()メソッド
// 月の値を返す(0:11月~11:12月)
console.log(now.getMonth());
// (c)getDate()メソッド
// 日にちを返す
console.log(now.getDate());
// (d)getDay()メソッド
// 曜日を表す数値(0:日曜日~6:土曜日)を返す
console.log(now.getDay());
// (e)getHours()メソッド
// 24時間形式の時間を返す
console.log(now.getHours());
// (f)getMinutes()メソッド
// 分を返す
console.log(now.getMinutes());
// (g)getSeconds()メソッド
// 秒を返す
console.log(now.getSeconds());
// (h)getTime()メソッド
// 1970年1月1日0時00分00秒からの経過時間をミリ秒単位で返す
console.log(now.getTime());

// 練習　今日を〇年〇月〇日の形式で表示
// var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
document.write("<p>今日は" + year + "年" + month + "月" + date + "日</p>");

// 曜日の表示
var weekends = "日月火水木金土";
document.write(weekends[now.getDay()] + "曜日");

// 演習　11月19日（月）を表示
var now = new Date(2018,10,19);
var str = (now.getMonth() + 1) + "月"
			+ now.getDate() + "日"
			+ "(" + weekends[now.getDay()] + ")";
document.write("<p>" + str + "</p>");

// 2)設定するメソッド
// (a)setFullYear()メソッド
// 西暦の年を設定する
now.setFullYear(1995);
// (b)setMonth()メソッド
// 月を設定する
now.setMonth(5);
// (c)setDate()メソッド
// 日にちを設定する
now.setDate(3);
// (d)setHours()メソッド
// 時間を設定する
now.setHours(8);
// (e)setMinutes()メソッド
// 分を設定する
now.setMinutes(45);
// (f)setSeconds()メソッド
// 秒を設定する
now.setSeconds(30);
// (g)setTime()メソッド
// 1970年1月1日0時00分00秒からの経過時間をミリ秒単位で設定する

console.log(now.toLocaleString());

// 今月の最終日を確認
now = new Date();
var month = now.getMonth();
now.setMonth(month + 1);
now.setDate(0);
console.log("今月の最終日は" + now.getDate() + "日です");
console.log(now.toLocaleString());

// 今日が始まってからの経過時間
date = new Date(2019,0,0);
console.log(date.toLocaleDateString());
var today = new Date(now.getFullYear(),
						now.getMonth(),
						now.getDate());
var time = now.getTime() - today.getTime();
console.log(time + "ミリ秒");
console.log(Math.ceil(time / 1000) + "秒");
console.log(Math.ceil(time / 1000 / 60) + "分");
console.log(Math.floor(time / 1000 / 60 / 60) + "時間");

// 今月の残り日数
var newDay = new Date(2018,11,1);
now = new Date();
time = newDay.getTime() - now.getTime();
var day = Math.ceil(time / 1000 / 60 / 60 / 24);
document.write("今月は残り" + day + "日");

// 今年の残り日数
var newDay = new Date();
newDay.setMonth(12);
newDay.setDate(1);
now = new Date();
time = newDay.getTime() - now.getTime();
var day = Math.floor(time / 1000 / 60 / 60 / 24);
document.write("今年は残り" + day + "日");

// 演習：1限目開始から何時間何分何秒経過したか
now = new Date();
var start = new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate(),
				9,50
)
time = now.getTime() - start.getTime();
var hours = Math.floor(time / 1000 / 60 / 60);
var minutes = Math.floor(time / 1000 / 60 % 60);
var seconds = Math.floor(time / 1000 % 60);
console.log(hours + "時間" + minutes + "分" + seconds + "秒");

// ユーザ定義関数
// function 関数名(引数,・・・){
// 	処理
// 	return 戻り値;
// }

// 関数の呼び出し
// 関数名([引数,・・・]);
// 変数名 = 関数名([引数,・・・]);

// 例 引数で文字列を渡し、長いほうの文字列を返す関数