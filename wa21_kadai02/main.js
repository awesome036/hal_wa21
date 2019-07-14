var num = prompt("数値を入力してください");
checkNum = num%2;
checkNum *= checkNum;
if (num == null){
	alert("キャンセルされました");
}else if(num == ""){
	alert("数値を入力してください1");
}else if(checkNum == 1){
	document.write("<h1>" + num + "は奇数です</h1>");
} else if (checkNum == 0){
	document.write("<h1>"+num+"は偶数です</h1>");
}else{
	alert("数値を入力してください");
}