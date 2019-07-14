// リンクを設定
// 2) link()メソッド
// link(URL名#アンカー名)
var link1 = "目次へ".link("index.html#index");
document.write("<p>" + link1 + "</p>");

var link2 = "google".link("https://www.google.co.jp/");
document.write("<p>" + link2 + "</p>");