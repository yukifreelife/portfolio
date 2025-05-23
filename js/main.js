document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("onsenList");
  
    onsenData.forEach((onsen) => {
      const card = document.createElement("article");
      card.className = "onsen-card";
  
      card.innerHTML = `
        <img src="https://source.unsplash.com/featured/?${encodeURIComponent(onsen.name)}+hot+spring" alt="${onsen.name}">
        <div class="card-content">
          <h3>${onsen.name}（${onsen.prefecture}）</h3>
          <p>${onsen.description}</p>
          <a class="button" href="onsen.html?id=${onsen.id}">旅館を見る</a>
        </div>
      `;
  
      list.appendChild(card);
    });
  });
  