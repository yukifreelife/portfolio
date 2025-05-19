const PIXABAY_API_KEY = "50356956-3cbefdb1d3e812503c7824d83";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".onsen-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent;
    const keyword = title.replace(/（.*）/, '').trim() + " 温泉";

    const img = card.querySelector("img");

    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&per_page=1`)
      .then(response => response.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          img.src = data.hits[0].webformatURL;
        } else {
          img.alt = "画像が見つかりませんでした";
        }
      })
      .catch(error => {
        console.error("Pixabay APIエラー:", error);
      });
  });
});
