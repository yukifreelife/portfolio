const PIXABAY_API_KEY = '50356956-3cbefdb1d3e812503c7824d83'; // ← あなたのAPIキーを入力
const onsenList = document.querySelectorAll('.onsen-card');

onsenList.forEach((card) => {
  const title = card.querySelector('h3').textContent;
  const keyword = title.replace(/（.*）/, '').trim(); // 地名だけ抽出（例：草津温泉）

  const imageElement = card.querySelector('img');

  fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&per_page=3`)
    .then(res => res.json())
    .then(data => {
      if (data.hits && data.hits.length > 0) {
        imageElement.src = data.hits[0].webformatURL;
      } else {
        console.warn(`画像が見つかりませんでした: ${keyword}`);
      }
    })
    .catch(err => {
      console.error('Pixabay APIの取得エラー:', err);
    });
});
