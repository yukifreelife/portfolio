// URLのクエリパラメータから ?id=◯◯ を取得
const params = new URLSearchParams(window.location.search);
const onsenId = params.get("id");

// 温泉IDと表示名の対応表（仮）
const onsenNames = {
  noboribetsu: "登別温泉",
  naruko: "鳴子温泉",
  kusatsu: "草津温泉",
  gero: "下呂温泉",
  arima: "有馬温泉",
  misasa: "三朝温泉",
  dogo: "道後温泉",
  beppu: "別府温泉",
  yufuin: "由布院温泉",
  chatan: "北谷温泉"
};

// h1のテキストを書き換え
const titleEl = document.getElementById("onsen-title");

if (onsenId && onsenNames[onsenId]) {
  titleEl.textContent = `${onsenNames[onsenId]}の旅館一覧`;
} else {
  titleEl.textContent = "温泉情報が見つかりませんでした";
}
