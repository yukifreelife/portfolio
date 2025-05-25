// URLのクエリパラメータから id を取得
const params = new URLSearchParams(window.location.search);
const onsenId = params.get("id");

// HTML内のタイトル要素（例: <h1 id="onsen-title">）を取得
const titleEl = document.getElementById("onsen-title");

// onsenData から id に一致する温泉データを探す
const matchedOnsen = onsenData.find(onsen => onsen.id === onsenId);

// 一致する温泉があれば表示、なければエラーメッセージ
if (matchedOnsen) {
  titleEl.textContent = `${matchedOnsen.name}の見どころ＆旅館情報`;
} else {
  titleEl.textContent = "温泉情報が見つかりませんでした";
}

// 🔽 紹介文を生成して #onsen-description に表示
const descEl = document.getElementById("onsen-description");
if (matchedOnsen && descEl) {
    // longDescription がある場合はそれを使う、なければ fallback
    const fullText = matchedOnsen.longDescription || `${matchedOnsen.name}は${matchedOnsen.prefecture}にある人気の温泉地です。${matchedOnsen.description}`;
    descEl.textContent = fullText;
  }

const infoEl = document.getElementById("onsen-info");

if (matchedOnsen && infoEl) {
  // Googleマップ検索用URL
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(matchedOnsen.name)}`;

  infoEl.innerHTML = `
    <img src="${matchedOnsen.imageUrl}" alt="${matchedOnsen.name}">
    <p>${matchedOnsen.description}</p>
    <p>
      📍 <a href="${mapUrl}" target="_blank" rel="noopener noreferrer">
      ${matchedOnsen.name} を地図で見る（Googleマップ）</a>
    </p>
    `;
        // Googleマップの iframe（APIキー不要バージョン）
    const iframe = document.createElement("iframe");
    iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(matchedOnsen.name)}&output=embed`;
    iframe.width = "50%";
    iframe.height = "400";
    iframe.style = "border:0; border-radius:8px; margin-top:1.5rem;";
    iframe.loading = "lazy";

// infoEl（紹介カード）の末尾に追加
infoEl.appendChild(iframe);

}




// 🔽 観光協会公式サイト + Google検索リンクの表示
const linksEl = document.getElementById("onsen-links");

if (matchedOnsen && linksEl) {
  // 公式サイトリンク
  const officialLink = document.createElement("a");
  officialLink.href = matchedOnsen.officialUrl;
  officialLink.textContent = `${matchedOnsen.name}観光協会公式サイト`;
  officialLink.target = "_blank";
  officialLink.rel = "noopener noreferrer";

  // Google検索リンク
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(matchedOnsen.name + " 旅館")}`;
  const searchLink = document.createElement("a");
  searchLink.href = searchUrl;
  searchLink.textContent = `"${matchedOnsen.name} 旅館" をGoogle検索`;
  searchLink.target = "_blank";
  searchLink.rel = "noopener noreferrer";

  // 表示
  linksEl.innerHTML = `
  <a class="button-link" href="${matchedOnsen.officialUrl}" target="_blank" rel="noopener noreferrer">
    観光協会公式サイト
  </a>
  <a class="button-link" href="https://www.google.com/search?q=${encodeURIComponent(matchedOnsen.name + " 旅館")}" target="_blank" rel="noopener noreferrer">
    Googleで旅館を検索
  </a>
`;}


