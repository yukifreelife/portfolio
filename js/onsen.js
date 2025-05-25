// URLのクエリパラメータから id を取得
const params = new URLSearchParams(window.location.search);
const onsenId = params.get("id");

// HTML内のタイトル要素（例: <h1 id="onsen-title">）を取得
const titleEl = document.getElementById("onsen-title");

// onsenData から id に一致する温泉データを探す
const matchedOnsen = onsenData.find(onsen => onsen.id === onsenId);

// 一致する温泉があれば表示、なければエラーメッセージ
if (matchedOnsen) {
  titleEl.textContent = `${matchedOnsen.name}の旅館一覧`;
} else {
  titleEl.textContent = "温泉情報が見つかりませんでした";
}


