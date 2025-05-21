import { onsenData } from "./onsenData.js";

const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_KEY;

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("onsenList");

  onsenData.forEach((onsen) => {
    const card = document.createElement("article");
    card.className = "onsen-card";

    card.innerHTML = `
      <img src="" alt="${onsen.name}">
      <div class="card-content">
        <h3>${onsen.name}（${onsen.prefecture}）</h3>
        <p>${onsen.description}</p>
        <a class="button" href="onsen.html?id=${onsen.id}">旅館を見る</a>
      </div>
    `;

    list.appendChild(card);

    // Pixabay 画像取得処理
    const keyword = onsen.name + " hot spring Japan";
    const img = card.querySelector("img");

    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&per_page=3`)
      .then(response => response.json())
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
      });
  });
});
