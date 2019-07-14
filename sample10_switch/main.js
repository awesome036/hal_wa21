// // switch文
// // switch(式){
// // 	case 値1:
// // 		式が値１の場合
// // 		break;
// // 	case 値２:
// // 		式が値２の場合
// // 		break;
// // 	default:
// // 		いずれも一致しなかった場合
// // }

// var monthStr = prompt("月を入力してください");
// var month = parseInt(monthStr); 
// var season = prompt("季節を入力してください");

// switch(month){
// 	case 12:
// 	case 1:
// 	case 2:
// 		console.log("冬");
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log("春");
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log("夏");
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log("秋");
// 		break;
// 	default:
// 		console.log("月ではありません");
// }

// switch(season){
// 	case "春":
// 		console.log("Spring");
// 		break;
// 	case "夏":
// 		console.log("Summer");
// 		break;
// 	case "秋":
// 		console.log("Autumn");
// 		break;
// 	case "冬":
// 		console.log("Winter");
// 		break;
// 	default:
// 		console.log("それは季節ではありません");
// // }

// function congratulation(){
// 	var rateStr = prompt("該当する出席率を入力してください\n(1:0~49% 2:50~79% 3:80~100%)");
// 	if(rateStr == null){
// 		alert("キャンセルされました");
// 		return;
// 	}
// 	var rate = parseInt(rateStr);
// 	switch(rate){
// 		case 1:
// 			console.log("科目留年です");
// 			break;
// 		case 2:
// 			console.log("未認定補講です");
// 			break;
// 		case 3:
// 			console.log("認定です");
// 			break;
// 		default:
// 			alert("正しい値を選択してください");
// 			congratulation();
// 	}
// }
// congratulation();


var price = parseInt(prompt("価格を入力してください"));
var rank = prompt("会員ランク（A~C）を入力してください");
var rate = 1.0;
switch(rank){
	case "A":
	case "a":
		rate = 0.8;
		break;
	case "B":
	case "b":
		rate = 0.9;
		break;
	case "C":
	case "c":
		rate = 0.95;
		break;
}
console.log("価格は" + price*rate + "円です");
