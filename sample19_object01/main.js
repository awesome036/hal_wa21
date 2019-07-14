'use strict';

// Objectオブジェクト
// Objectオブジェクトは全ての元となるオブジェクト
// データをプロパティと値のペアで管理できる。
// {
// 	プロパティ1:値1,
// 	プロパティ2:値2,
// 	プロパティ3: 値3,
// 		・
// 		・
// 	プロパティ: 値
// };

// プロパティへのアクセスの仕方
// 変数名.プロパティ名;
// 変数名['プロパティ名'];

let seasons = {
	'spring': '春',
	'summer': '夏',
	'autumn': '秋',
	'winter': '冬'
};
console.log(seasons.spring);
console.log(seasons['summer']);
console.log(seasons);

// プロパティの追加
// 変数名.プロパティ名 = 値;
// 変数名['プロパティ名'] = 値;

let person = {
	name: '山田太郎',
	age: 18
};
person.height = 180;
console.log(person);

// プロパティを調べる
// hasOwnProperty(プロパティ名)

let colors = {
	red: '赤',
	black: '黒',
	white: '白',
	orange: 'オレンジ',
	blue: '青'
};

let c = 'white';
if(colors.hasOwnProperty(c)){
	document.write(c + ':' + colors[c]);
}else{
	document.write(c + 'はありません');
}

delete colors.red;
console.log(colors);

let person2 = new Object();
person2.name = '山本太郎';
person2.age = 16;
console.log(person2);

// 全てのプロパティにアクセス
for(let season in seasons){
	console.log(season + ':' + seasons[season]);
}

// コンストラクタを使った生成
// keys(オブジェクト)
// 全てのプロパティを配列で取得

let props = Object.keys(seasons);
console.log(props);

for(let i = 0; i < props.length; i++){
	let season = props[i];
	console.log(season + ':' + seasons[season]);
}

// プロパティにメソッドを設定
let customer = {
	name: '山本太郎',
	age: 20,
	hello: function() {
		console.log('私は' + this.name + 'です');
	}
};
customer.hello();
console.log(customer);

// 後からメソッドを追加
customer.showAge = function() {
	console.log('私の年齢は' + this.age + 'です');
};
customer.showAge();

// オブジェクトを階層化
let customers = {
	a01: {
		name: '山本太郎',
		age: 17,
		points: [10, 12, 0]
	},
	a02: {
		name: '山田太郎',
		age: 52,
		points: [100, 90, 120]
	}
};
console.log(customers.a01.points);