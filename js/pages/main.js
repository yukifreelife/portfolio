// 🔧 温泉カードを1枚作成する関数
function createOnsenCard(onsen) {
  const card = document.createElement("article");
  card.className = "onsen-card";

  // カードクリックで詳細ページに遷移
  card.addEventListener("click", () => {
    window.location.href = `onsen.html?id=${onsen.id}`;
  });

  // 画像要素
  const img = document.createElement("img");
  img.src = onsen.imageUrl;
  img.alt = `${onsen.name}の画像`;

  // テキスト部分
  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `
    <h3>${onsen.name}（${onsen.prefecture}）</h3>
    <p>${onsen.description}</p>
    <a class="button" href="onsen.html?id=${onsen.id}" onclick="event.stopPropagation();">旅館を見る</a>
  `;

  card.appendChild(img);
  card.appendChild(content);

  return card;
}

// 🔧 温泉リストを表示する関数
function renderOnsenList(onsenArray) {
  const list = document.getElementById("onsenList");
  list.innerHTML = ""; // 一度リセット
  onsenArray.forEach((onsen) => {
    const card = createOnsenCard(onsen);
    list.appendChild(card);
  });
}

// 🔰 初期表示時に実行
document.addEventListener("DOMContentLoaded", () => {
  renderOnsenList(onsenData);

// ▼ フィルター要素を取得
  const typeSelect = document.getElementById("filter-type");
  const prefSelect = document.getElementById("filter-pref");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");


  // ▼ フィルター時の処理関数
  function applyFilters() {
    const selectedType = typeSelect.value;
    const selectedPref = prefSelect.value;
    const searchTerm = searchInput.value.trim();


    const filteredData = onsenData.filter((onsen) => {
      const typeMatch = selectedType === "" || onsen.onsenType === selectedType;
      const prefMatch = selectedPref === "" || onsen.prefecture === selectedPref;
      const nameMatch = searchTerm === "" || onsen.name.includes(searchTerm);
      return typeMatch && prefMatch && nameMatch;
    });

    renderOnsenList(filteredData);
  }

  // ▼ セレクトボックスの変更イベントに紐付け
  typeSelect.addEventListener("change", applyFilters);
  prefSelect.addEventListener("change", applyFilters);
  searchButton.addEventListener("click", applyFilters); 
  searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    applyFilters();
  }
});

});