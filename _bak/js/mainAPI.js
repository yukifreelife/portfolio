document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("onsenList");

  onsenData.forEach((onsen) => {
    const card = document.createElement("article");
    card.className = "onsen-card";

    const img = document.createElement("img");
    img.alt = onsen.name;

    const content = document.createElement("div");
    content.className = "card-content";
    content.innerHTML = `
      <h3>${onsen.name}（${onsen.prefecture}）</h3>
      <p>${onsen.description}</p>
      <a class="button" href="onsen.html?id=${onsen.id}">旅館を見る</a>
    `;

    card.appendChild(img);
    card.appendChild(content);
    list.appendChild(card);

    // 🔽 Pixabay APIから画像取得
    const keyword = `${onsen.englishName} 温泉`;
    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&per_page=3`)
      .then(res => res.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          img.src = data.hits[randomIndex].webformatURL;
        } else {
          img.alt = "画像が見つかりませんでした";
        }
      })
      .catch(error => {
        console.error("Pixabay APIエラー:", error);
        img.alt = "読み込みエラー";
      });
  });
});
