console.log("問１");
var str1 = prompt("文字列を入力してください");
for (var i = 0; i < str1.length; i++) {
	if(i % 2 == 1){
		console.log(str1.charAt(i));
	}
}

console.log("問2");
var str2 = "もしたもしドッタピオですた。";
for (var i = 0; i < str2.length; i++) {
	if (str2.charAt(i) != "た" && str2.charAt(i) != "タ") {
		console.log(str2.charAt(i));
	}
}

console.log("問3");
var str3 = "11011001";
var count = 0;
for (var i = 0; i < str3.length; i++) {
	if (str3.charAt(i) == "1") {
		// str[i]でも可
		count++;
	}
}
console.log(str3 + "中の1の数は" + count);

console.log("問4");
for (var i = 1; i <= 50; i++) {
	if (i % 3 == 0) {
		console.log(i + "は3の倍数です");
		continue;
	}
	console.log(i);
}

console.log("問4のオプション");
for (var i = 1; i <= 50; i++) {
	var str4 = new String(i);
	// str4 = i.toString()でも可
	if (i % 3 != 0) {
		if(str4.indexOf("3") != -1){
			// str4.indexOf("3") >= 0 でも可
			console.log(i + "は３よりです");
		}else{
			console.log(i);
		}
	}else{
		if (str4.indexOf("3") != -1) {
			console.log(i + "は超３です");
		} else {
			console.log(i + "は3の倍数です");
		}
	}
}