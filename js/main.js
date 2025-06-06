document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("onsenList");

  onsenData.forEach((onsen) => {
    // カード全体の要素（<article>タグ）を作成
    const card = document.createElement("article");
    card.className = "onsen-card";
     // カードクリックで遷移させるイベントを追加
     card.addEventListener("click", () => {
      window.location.href = `onsen.html?id=${onsen.id}`;
    });
    
    // 画像要素（<img>タグ）を作成
    const img = document.createElement("img");
    img.src = onsen.imageUrl;
    img.alt = onsen.name;

    // テキスト部分の要素（<div>タグ）を作成
    const content = document.createElement("div");
    content.className = "card-content";
    content.innerHTML = `
      <h3>${onsen.name}（${onsen.prefecture}）</h3>
      <p>${onsen.description}</p>
      <a class="button" href="onsen.html?id=${onsen.id}" onclick="event.stopPropagation();">旅館を見る</a>
    `;

    // 画像とテキストをリンクタグの中に追加
    card.appendChild(img);
    card.appendChild(content);

    // 最終的にカードをリストに追加
    list.appendChild(card);
  });
});
