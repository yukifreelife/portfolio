document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("onsenList");

  onsenData.forEach((onsen) => {
    const card = document.createElement("article");
    card.className = "onsen-card";

     // 🔽 温泉画像を読み込む
    const img = document.createElement("img");
    img.src = onsen.imageUrl;
    img.alt = onsen.name;

      // 🔽 テキスト部分
    const content = document.createElement("div");
    content.className = "card-content";
    content.innerHTML = `
      <h3>${onsen.name}（${onsen.prefecture}）</h3>
      <p>${onsen.description}</p>
      <a class="button" href="onsen.html?id=${onsen.id}">旅館を見る</a>
    `;

    // 🔽 DOMに追加
    card.appendChild(img);
    card.appendChild(content);
    list.appendChild(card);
  });
});
