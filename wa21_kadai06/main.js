// ロードするファイルのパス
let path = "student.json";

// // ボタンのクリックのイベント
// let btn = document.getElementById("myBtn");
// btn.addEventListener("click", loadFile, false);

// // テキストファイルをロードする
// function loadFile() {
//   let req = new XMLHttpRequest();
//   req.responseType = "json";
//   req.open("GET", path, true);
//   // loadイベントのイベントリスナーを設定
//   req.addEventListener("load", function(ev) {
//     if ((ev.target.status == 200) && (ev.target.readyState == 4)) {
// 		showData(ev.target.response);
//     } else {
//       console.log("読み込めませんでした");
//     }
//   });
//   req.send(null);
// }

function showData(res) {
	let persons = res.persons;
	let str = '';
	for(let i = 0; i < persons.length; i++){
		str += persons[i].name + ' ' + persons[i].activity + ' ' + persons[i].comment + '<br>';
	}
	$('#myArea').html(str);
}

$('#myBtn').on('click', function(){
	$.ajax({
		async: true,
		url: path,
		type: 'get',
		dataType: 'json'
	}).done(function(res){
		showData(res);
	});
});
