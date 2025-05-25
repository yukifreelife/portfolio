const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_KEY;

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".onsen-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent;
    const keyword = title.replace(/（|）/g, '').replace(/\s+/g, ' ') + " Japan";

    const img = card.querySelector("img");

    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&per_page=1&order=latest`)

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
