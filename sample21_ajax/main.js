// ロードするファイルのパス
let path = "data.txt";

// ボタンのクリックのイベント
let btn = document.getElementById("myBtn");
btn.addEventListener("click", loadFile, false);

// テキストファイルをロードする
function loadFile() {
  let req = new XMLHttpRequest();
  req.responseType = "text";
  req.open("GET", path, true);
  // loadイベントのイベントリスナーを設定
  req.addEventListener("load", function(ev) {
    if ((ev.target.status == 200) && (ev.target.readyState == 4)) {
      document.getElementById("myArea").innerHTML = ev.target.responseText;
    } else {
      console.log("読み込めませんでした");
    }
  });
  req.send(null);
}
