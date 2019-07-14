// while文
// while(条件式){
// 	処理
// }
// var i = 1;
// while(i<=12){
// 	console.log(i + "月");
// 	i++;
// }

// do while文
// do{
// 	処理
// }while(条件式);
// i = 10;
// do{
// 	if(i%2 == 0){
// 		document.write("ざわ...");
// 	}else{
// 		document.write("ざわざわ...");
// 	}
// 	i--;
// }while(i>=0);
// document.write("圧倒的暴挙！");

// 練習：数値を繰り返し入力させて合計を出力。０が入力されてたら終了
// var inputNum = null;
// var sum = 0;

// while(inputNum != 0){
// 	inputNum = parseInt(prompt("数値を入力してください(0で終了)"));
// 	sum += inputNum;
// }
// console.log("合計値は" + sum);

// var sum = 0;
// do {
// 	var num = parseInt(prompt("数値を入力してください(0で終了)"));
// 	if(num == 0) break;
// 	sum += num;
// }while(num != 0)
// console.log("合計値は" + sum);

// var price = parseInt(prompt("金額を入力してください"));
// while(true){
// 	var num = parseInt(prompt("人数を入力してください"));
// 	if(num == 0){
// 		console.log("0では割れません");
// 		continue;
// 	}
// 	console.log("1人当たり" + price/num);
// 	break;
// }

// var price = parseInt(prompt("金額を入力してください"));
// while (true) {
// 	var num = parseInt(prompt("人数を入力してください"));
// 	if (num == 0) {
// 		console.log("0では割れません");
// 	}else{
// 		console.log("1人当たり" + price / num);
// 		break;
// 	}
// }

// 練習：3の倍数を入力させる。3の倍数でなかったらループの先頭に戻り、3の倍数だったら入力した値を出力する。0が入力されたら終了。
while(true){
	var num = parseInt(prompt("3の倍数を入力してください(0で終了)"));
	if(num == 0){
		console.log("終了！");
		break;
	}
	if(num % 3 != 0){
		continue;
	}
	console.log(num);
}
