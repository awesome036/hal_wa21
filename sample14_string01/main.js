// 文字列の基本操作
// 1) lengthプロパティ
// 文字列の長さを調べる
var str = "利根川の焼き土下座";
console.log(str.length);
console.log("3日間続けての豪遊".length);

var str2 = new String("船側からの配慮");
console.log(str2.length);

// 2) charAt(引数)プロパティ
// 引数で指定した位置の文字列を取り出す。(0~)
for(var i = 0; i < str.length; i++){
	console.log(str.charAt(i));
}

// 3) 文字列[インデックス]
// 文字列から指定位置の文字列を返す。(0~)
for (var i = 0; i < str.length; i++) {
	console.log(str2[i]);
}

// 文字列中に指定した文字列が含まれているかを調べる
// 1) starsWith()メソッド
// starsWith(文字列)
// 文字列の先頭が引数で指定した文字で始まっている場合 true を返す
console.log("startline".startsWith("star"));

// 2) endWith()メソッド
// endWith(文字列)
// 文字列の最後が引数で指定した文字で終わっている場合 true を返す
console.log("startline".endsWith("line"));

// 3) indexOf()メソッド
// indexOf(文字列,位置)
// 文字列が含まれているか調べインデックスを返す。
// 複数含まれている場合は最初の開始位置を返す
// 含まれていない場合 -1 を返す。
// 第2引数で検索開始位置を指定できる
console.log(str.indexOf("焼"));

// 文字列から指定した範囲を取り出す
// 1) sliceメソッド, substringメソッド
// slice(開始位置,終了位置)
// 文字列から指定した範囲を取り出して返す
// 終了位置の文字列は取り出されない
var str = "0123456789";
console.log(str.slice(4,8));	// ※4567が取り出される
console.log(str.slice(4));		// 開始位置以降すべて取り出し
console.log(str.slice(-3,-1));		// 文字列の後ろからの場所を開始位置とする。

console.log(str.substring(4, 8));
console.log(str.substring(4));
console.log(str.substring(-3, -1));	// substringではマイナスの値は０とみなされる
console.log(str.substring(8,4));	// (開始位置>終了位置)の場合引数が入れ替えられる->(4,8)