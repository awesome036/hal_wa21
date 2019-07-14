// 問1
document.write("<h2>問1</h2>");
var str1 = String(prompt("文章を入力してください。"));
var str2 = String(prompt("調べる文字列を入力してください。"));
if(str1.indexOf(str2) >= 0){
	msg = "含まれています。";
}else{
	msg = "含まれていません。";
}
document.write("<p>「" + str1 + "」中に「" + str2 + "」は" + msg + "</p>");

// 問2
document.write("<h2>問2</h2>");
var maxVal = Math.max(76, 50, 41, 58, 61, 94);
var minVal = Math.min(76, 50, 41, 58, 61, 94);
document.write("<p>「76,50,41,58,61,94」の数値の中で最大値は" + maxVal + "、最小値は" + minVal + "です。");

// 問3
document.write("<h2>問3</h2>");
var str1 = "HONDA「やったぜ日産！」";
var str2 = "桜田大臣「パソコンは使っておりません」";
var str3 = "ライザップ「赤字転落！結果にコミットせず。。。」";
var str4 = "松井知事「大阪万博万歳！！！！！」";
var rand = Math.floor(Math.random() * 4);
switch(rand){
	case 0:
		msg = str1;
		break;
	case 1:
		msg = str2;
		break;
	case 2:
		msg = str3;
		break;
	case 3:
		msg = str4;
		break;
}
document.write("<p>" + msg + "</p>");

// 問4
document.write("<h2>問4</h2>");
var now = new Date();
var weekends = "日月火水木金土";
var day = weekends[now.getDay()];	// 曜日を取得
var month = now.getMonth() + 1;		// 月を取得
var date = now.getDate();			// 日にちを取得
var hours = now.getHours();			// 時を取得
var minutes = now.getMinutes();		// 分を取得
var seconds = now.getSeconds();		// 秒を取得
document.write("<p>今日は" + month + "月" + date + "日、" + day + "曜日。現在" + hours + "時" + minutes + "分" + seconds + "秒です。</p>");

// 問5
document.write("<h2>問5</h2>");
var newDay = new Date();
newDay.setMonth(12);
newDay.setDate(1);
now = new Date();
time = newDay.getTime() - now.getTime();
day = Math.floor(time / 1000 / 60 / 60 / 24);
document.write("<p>今年も残すところ" + day + "日になりました。</p>");