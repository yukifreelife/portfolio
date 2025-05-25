const onsenData = [
  {
    id: "noboribetsu",
    name: "登別温泉",
    prefecture: "北海道",
    description: "地獄谷が有名。多彩な泉質が魅力。",
    imageUrl: "img/onsen_noboribetsu.jpg",
    officialUrl: "https://noboribetsu-spa.jp",
    longDescription: "登別温泉は北海道有数の温泉地で、9種類もの泉質を持つ「温泉のデパート」と呼ばれる名湯です。特に火山活動によって形成された地獄谷は圧巻で、噴気孔や硫黄の香りが温泉情緒を引き立てます。温泉街には足湯や遊歩道も整備されており、散策を楽しみながら癒しの時間を過ごせます。硫黄泉による美肌効果や殺菌作用も高く、旅の疲れをじっくりと癒やしてくれます。自然と湯けむりの織りなす景観は、まさに北海道ならではのダイナミックな魅力です。"
  },
  {
    id: "naruko",
    name: "鳴子温泉",
    prefecture: "宮城県",
    description: "7種類以上の泉質が楽しめる名湯。",
    imageUrl: "img/onsen_naruko.jpg",
    officialUrl: "https://www.naruko.gr.jp/",
    longDescription: "鳴子温泉は宮城県・大崎市に位置し、国内でも珍しい7種類以上の泉質を楽しめる温泉地です。鳴子峡の紅葉や鳴子こけしなど、地域の伝統と自然美が融合した雰囲気が魅力。源泉かけ流しの湯が多く、湯治場の風情も色濃く残っています。泉質の種類の多さから肌質や体調に合わせた入浴ができ、心身を整えるのに最適な場所です。静かな山あいにありながらアクセスも良く、日帰り旅行にもおすすめの癒やしの地です。"
  },
  {
    id: "kusatsu",
    name: "草津温泉",
    prefecture: "群馬県",
    description: "湯畑がシンボル。日本三名泉の一つ。",
    imageUrl: "img/onsen_kusatsu.jpg",
    officialUrl: "https://www.kusatsu-onsen.ne.jp/",
    longDescription: "草津温泉は日本三名泉のひとつに数えられる、群馬県を代表する温泉地です。名物の湯畑を中心に広がる温泉街は、湯けむりと硫黄の香りに包まれた風情あふれる空間。高温で強酸性の湯は殺菌作用が高く、古くから多くの湯治客を迎えてきました。湯もみや温泉饅頭など、観光としての見どころも豊富。冬には雪景色と温泉のコントラストが美しく、四季を通じて訪れる価値のある温泉地です。"
  },
  {
    id: "gero",
    name: "下呂温泉",
    prefecture: "岐阜県",
    description: "美肌の湯として有名。",
    imageUrl: "img/onsen_gero.jpg",
    officialUrl: "https://www.gero-spa.com/",
    longDescription: "下呂温泉は日本三名泉のひとつとして知られ、なめらかなアルカリ性単純泉が特徴の美肌の湯として人気を集めています。飛騨川沿いに広がる温泉街は、川のせせらぎとともにゆったりとした時間が流れます。足湯スポットや飛騨の文化を感じられる街並みも魅力で、のんびりと散策しながら温泉気分を満喫できます。宿泊施設も多彩で、露天風呂付きの旅館や高台から景色を望む宿もおすすめです。"
  },
  {
    id: "arima",
    name: "有馬温泉",
    prefecture: "兵庫県",
    description: "金泉と銀泉が楽しめる。",
    imageUrl: "img/onsen_arima.jpg",
    officialUrl: "https://www.arima-onsen.com/",
    longDescription: "有馬温泉は日本最古の温泉として古来より人々に親しまれてきた歴史ある温泉地です。金泉・銀泉という異なる泉質を楽しめるのが最大の特徴で、鉄分を含む金泉は血行促進に、ラジウムを含む銀泉は免疫活性に効果が期待されます。神戸市内からのアクセスも良く、都会の喧騒を離れて落ち着いた時間を過ごすのに最適です。和の趣ある街並みと共に、古き良き温泉文化に触れられる特別な場所です。"
  },
  {
    id: "misasa",
    name: "三朝温泉",
    prefecture: "鳥取県",
    description: "ラジウム温泉で健康に良い。",
    imageUrl: "img/onsen_misasa.jpg",
    officialUrl: "https://www.misasa-navi.com/",
    longDescription: "三朝温泉は鳥取県にある、世界有数のラドン含有量を誇る放射能泉です。体内の活性酸素を抑える効果があるとされ、「癒しと健康の湯」として注目されています。三徳川沿いに宿が立ち並び、川のせせらぎと共に静かで穏やかな時間を過ごせます。日帰り湯や足湯も豊富で、気軽に名湯の効果を体感できるのも魅力。温泉と自然、そして科学的にも評価される泉質の三拍子がそろった健康志向の温泉地です。"
  },
  {
    id: "dogo",
    name: "道後温泉",
    prefecture: "愛媛県",
    description: "古くからの歴史を持つ温泉。",
    imageUrl: "img/onsen_dogo.jpg",
    officialUrl: "https://dogo.jp/",
    longDescription: "道後温泉は日本最古の温泉のひとつとされ、『坊っちゃん』でも有名な風情ある温泉地です。道後温泉本館を中心としたレトロな街並みには、浴衣でそぞろ歩きする観光客の姿が絶えません。泉質はさらりとしたアルカリ性単純泉で、刺激が少なく肌に優しいのが特徴。商店街や足湯スポットも充実しており、温泉と観光を同時に楽しめます。歴史とモダンが融合する四国随一の温泉地です。"
  },
  {
    id: "beppu",
    name: "別府温泉",
    prefecture: "大分県",
    description: "多様な温泉が楽しめる。",
    imageUrl: "img/onsen_beppu.jpg",
    officialUrl: "https://www.beppu-navi.jp/",
    longDescription: "別府温泉は日本一の湧出量を誇る大分県の巨大温泉地です。「地獄めぐり」と呼ばれる観光スポットをはじめ、源泉の数は2,000を超えるといわれています。鉄輪、明礬、亀川など多彩なエリアが存在し、それぞれに泉質や風情が異なります。温泉だけでなく蒸し料理などの温泉文化も楽しめるのが別府の魅力。滞在型の温泉旅行にも日帰り旅行にも適した、日本を代表する温泉都市です。"
  },
  {
    id: "yufuin",
    name: "由布院温泉",
    prefecture: "大分県",
    description: "美しい風景とアートが魅力。",
    imageUrl: "https://your-image-url.com/yufuin.jpg",
    officialUrl: "https://yufuin.or.jp/",
    longDescription: "由布院温泉は、由布岳のふもとに広がる自然豊かな温泉地で、静けさと洗練が同居する癒しの空間です。アートギャラリーや雑貨店が立ち並ぶ観光通りは、散策にもぴったり。泉質は柔らかなアルカリ性で、心地よく肌を包み込みます。都会の喧騒から離れた上質な時間を過ごしたい人に特におすすめ。宿泊施設もおしゃれで個性的な宿が多く、女性人気の高い温泉地としても知られています。"
  },
  {
    id: "okuhida",
    name: "奥飛騨温泉郷",
    prefecture: "岐阜県",
    description: "北アルプスの絶景と四季が楽しめる秘湯。",
    imageUrl: "https://your-image-url.com/chatan.jpg",
    officialUrl: "https://www.okuhida.or.jp/",
    longDescription: "奥飛騨温泉郷は、平湯・新穂高・福地など5つの温泉地からなる岐阜県の山間部に広がる温泉郷です。北アルプスの大自然に囲まれた露天風呂では、四季折々の絶景を楽しむことができます。とくに雪見風呂や星空観賞は奥飛騨ならではの贅沢体験。湯は透明感のある単純泉や硫黄泉が多く、肌への優しさも特徴です。静けさと非日常を求める方にぴったりな、秘湯の魅力が詰まったエリアです。"
  }
];
  