

const homeData = [
  {
    id: 1,
    Title: { en: "Hino Profia Truck", ja: "日野プロフィア トラック" },
    price: "¥2,100,000 (210万)",
    img: "/Images/image-1.jpeg",
    short: {
      en: "A heavy-duty Japanese truck in excellent condition",
      ja: "状態の良い日本製大型トラック",
    },
    year: { en: "2016", ja: "平成28年" },
    mileage: { en: "1,311,547 km", ja: "1,311,547 km" },
    location: { en: "Osaka, Japan", ja: "大阪、日本" },
    transmission: { en: "Manual", ja: "マニュアル" },
    shaken: { en: "Valid (check document)", ja: "有効（書類を確認）" },
    kittsu: { en: "Available", ja: "記録簿あり" },
    condition: {
      en: "Very clean condition, no major issues, ready to use.",
      ja: "とてもきれいな状態で、大きな問題はなく、すぐに使用可能です。",
    },
    note: {
      en: "Feel free to contact, but only serious buyers. Time-wasters, please avoid.",
      ja: "購入を検討している方のみご連絡ください。冷やかしはご遠慮ください。",
    },
  },

  // --- Vehicle 2: Daihatsu Hijet Dump Truck ---
  {
    id: 2,
    Title: { en: "Daihatsu Hijet Dump Truck", ja: "ダイハツ ハイゼット ダンプトラック" },
    price: "¥300,000 (30万)",
    img: "/Images/hijet-1.jpg",
    short: {
      en: "Reliable 2009 Daihatsu Hijet light dump truck, ideal for farm or export use.",
      ja: "2009年製の信頼性の高い軽ダンプトラック。農場や輸出に最適。",
    },
    year: { en: "2009", ja: "平成21年" },
    mileage: { en: "N/A", ja: "該当なし" },
    location: { en: "Nara, Japan", ja: "奈良、日本" },
    transmission: { en: "5-Speed Manual", ja: "5速マニュアル" },
    shaken: { en: "Expired", ja: "車検切れ" },
    kittsu: { en: "Not specified", ja: "未指定" },
    condition: {
      en: `Engine & gear in good working condition. 
      Dump system fully functional. 
      Manual 4WD. 
      Some rust on body (as seen in photos). 
      Ideal for farm, construction, or export use. 
      Easy to maintain — parts available everywhere in Japan.`,
      ja: `エンジンとギアは良好。ダンプシステム正常。マニュアル4WD。
      ボディに多少の錆あり（写真参照）。農業・建設・輸出に最適。
      日本国内で部品入手容易。`,
    },
    note: {
      en: "Serious buyers only. Contact for inspection or more details. Local & export available.",
      ja: "購入希望者のみ。現車確認や詳細お問い合わせ可能。国内・輸出対応可。",
    },
  },

  // --- Vehicle 3: Komatsu PC20MR-1 Mini Excavator ---
  {
    id: 3,
    Title: { en: "Komatsu PC20MR-1 Mini Excavator", ja: "コマツ PC20MR-1 ミニショベル" },
    price: "¥700,000 (70万)",
    img: "/Images/loder-1.jpeg",
    short: {
      en: "Compact Komatsu excavator with strong hydraulics and clean condition.",
      ja: "油圧性能が高く状態の良いコンパクトなコマツミニショベル。",
    },
    year: { en: "Approx. 2000s", ja: "2000年代頃" },
    mileage: { en: "N/A", ja: "該当なし" },
    location: { en: "Nara, Japan", ja: "奈良、日本" },
    transmission: { en: "Hydraulic Operation", ja: "油圧操作" },
    shaken: { en: "N/A", ja: "該当なし" },
    kittsu: { en: "Available", ja: "記録簿あり" },
    condition: {
      en: `Strong hydraulic power, smooth operation. 
      Blade & bucket both in working condition. 
      Compact size — ideal for small construction or farm work. 
      Rubber tracks in good shape. 
      Japanese domestic use (not imported). 
      Easy to transport and maintain.`,
      ja: `油圧パワー強く、動作良好。ブレード・バケットともに良好。
      コンパクトサイズで小規模工事や農作業に最適。
      ゴムクローラー良好。国内使用車。輸送・整備も容易。`,
    },
    note: {
      en: "Serious buyers only. Local & export available. Easy to transport and maintain.",
      ja: "購入希望者のみ。国内・輸出対応可。輸送・整備が容易。",
    },
  },



  // --- Vehicle 4: Hino Dutro 2005 ---

// {
//   id: 4,
//   Title: { en: "Hino Dutro 2005", ja: "日野デュトロ 2005年式" },
//   price: "¥450,000 (45万)",
//   img: "/Images/dutro-1.jpg",
//   short: {
//     en: "Hino Dutro 2005 in excellent condition — reliable, clean, and business-ready.",
//     ja: "状態の良い2005年式日野デュトロ。信頼性が高く、清潔で業務にすぐ使えます。",
//   },
//   year: { en: "2005", ja: "平成17年" },
//   mileage: { en: "371,414 km", ja: "371,414 km" },
//   location: { en: "Nara, Japan", ja: "奈良、日本" },
//   transmission: { en: "Manual", ja: "マニュアル" },
//   shaken: { en: "Check Document", ja: "書類を確認" },
//   kittsu: { en: "Available", ja: "記録簿あり" },
//   condition: {
//     en: `Very clean and powerful truck.
//     Engine and body both are in good working condition.
//     Perfect for business or export use.
//     Ready to drive — no major issues.`,
//     ja: `とてもきれいでパワフルなトラックです。
//     エンジンとボディは共に良好な状態です。
//     業務または輸出に最適。
//     大きな問題はなく、すぐに走行可能です。`,
//   },
//   note: {
//     en: "📞 Serious buyers only. Feel free to contact for more details.",
//     ja: "📞 購入希望者のみ。詳細についてはお気軽にお問い合わせください。",
//   },
// },

];

export default homeData;