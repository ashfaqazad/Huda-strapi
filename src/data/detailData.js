const detailData = [
  {
    id: 1,
    title: { en: "Hino Profia Truck", ja: "日野プロフィア トラック" },
    price: "¥2,100,000 (210万)",
    year: { en: "2016", ja: "平成28年" },
    mileage: { en: "1,311,547 km", ja: "1,311,547 km" },
    location: { en: "Osaka, Japan", ja: "大阪、日本" },
    transmission: { en: "Manual", ja: "マニュアル" },
    shaken: { en: "Valid (check document)", ja: "有効（書類を確認）" },
    kittsu: { en: "Available", ja: "記録簿あり" },

    condition: {
      en: "Engine: Diesel, Transmission: Manual, Condition: Excellent, Record Book: Available",
      ja: "エンジン: ディーゼル, トランスミッション: マニュアル, 状態: 良好, 記録簿: あり",
    },
    note: {
      en: "A durable and powerful heavy-duty truck, perfect for logistics and transport. Maintained with proper inspection and ready for work.",
      ja: "物流や輸送に最適な耐久性とパワーを備えた大型トラック。適切な点検を受け、すぐに使用可能です。",
    },

    images: [
      "/Images/image-2.jpeg",
      "/Images/image-3.jpeg",
      "/Images/image-4.jpeg",
      "/Images/image-5.jpeg",
      "/Images/image-6.jpg",
      "/Images/image-7.jpg",
      "/Images/image-8.jpg",
      "/Images/image-9.jpg",
      "/Images/image-10.jpg",
    ],
  },

  // --- ID: 2 Daihatsu Hijet Dump Truck ---
  {
    id: 2,
    title: { en: "Daihatsu Hijet Dump Truck", ja: "ダイハツ ハイゼット ダンプトラック" },
    price: "¥300,000 (30万)",
    year: { en: "2009 (Heisei 21)", ja: "平成21年" },
    mileage: { en: "-", ja: "-" },
    location: { en: "Nara, Japan", ja: "奈良、日本" },
    transmission: { en: "5-Speed Manual", ja: "5速マニュアル" },
    shaken: { en: "Expired (車検切れ)", ja: "車検切れ" },
    kittsu: { en: "Available", ja: "記録簿あり" },
    video: "/Videos/hijet.mp4",

    condition: {
      en: `
🚛 Daihatsu Hijet Dump Truck for Sale

📍 Location: Nara, Japan
💴 Price: 30万円 (300,000 yen)
📅 Year: 平成21年 (2009 model)
🔢 Chassis No.: S210P-0021788
⚙️ Model: GD-S210P
⛽ Fuel: Gasoline (Petrol)
🕹 Transmission: 5-Speed Manual
⚖️ Car Weight: 940 kg
🛻 Engine Capacity: 660cc
⚒ Type: Light Dump Truck (軽ダンプ)
📄 Shaken (Inspection): Expired (車検切れ)

⸻

🧰 Condition & Features
• Engine & gear in good working condition
• Dump system fully functional
• Manual 4WD system
• Some rust on the body (as seen in photos)
• Ideal for farm, construction, or export use
• Easy to maintain — parts available everywhere in Japan

⸻

📞 Contact
Serious buyers only please.
Feel free to contact for inspection or more details.
🚗 Local and export available.
  `,
      ja: `
🚛 ダイハツ ハイゼット ダンプトラック 販売中

📍 所在地: 奈良県、日本
💴 価格: 30万円（300,000円）
📅 年式: 平成21年（2009年式）
🔢 車台番号: S210P-0021788
⚙️ 型式: GD-S210P
⛽ 燃料: ガソリン
🕹 トランスミッション: 5速マニュアル
⚖️ 車両重量: 940kg
🛻 エンジン排気量: 660cc
⚒ タイプ: 軽ダンプトラック
📄 車検: 切れ（車検切れ）

⸻

🧰 コンディション・特徴
• エンジンとギアは良好な状態です。
• ダンプシステムは完全に動作します。
• マニュアル式4WDシステム搭載。
• ボディに一部サビあり（写真参照）。
• 農業・建設・輸出用途に最適。
• メンテナンスが容易で、日本全国で部品入手可能。

⸻

📞 お問い合わせ
購入希望者のみご連絡ください。
現車確認・詳細についてお気軽にお問い合わせください。
🚗 国内販売および輸出対応可能です。
  `,
    },
    images: [
      "/Images/hijet-1.jpg",
      "/Images/hijet-2.jpg",
      "/Images/hijet-3.jpg",
      "/Images/hijet-4.jpg",
      "/Images/hijet-5.jpg",
      "/Images/hijet-6.jpg",
      "/Images/hijet-7.jpg",
      "/Images/hijet-8.jpg",
      "/Images/hijet-9.jpg",
      "/Images/hijet-10.jpg",
      "/Images/hijet-11.jpg",
      "/Images/hijet-12.jpg",
      "/Images/hijet-13.jpg",
      "/Images/hijet-14.jpg",
      "/Images/hijet-15.jpg",
      "/Images/hijet-16.jpg",
      "/Images/hijet-17.jpg",
      "/Images/hijet-18.jpg",
    ],
  },


  {
  id: 3,
  title: { 
    en: "Komatsu PC20MR-1 Mini Excavator", 
    ja: "コマツ PC20MR-1 ミニショベル" 
  },
  price: "¥700,000 (70万)",
  year: { en: "-", ja: "-" },
  mileage: { en: "-", ja: "-" },
  location: { en: "Nara, Japan", ja: "奈良、日本" },
  transmission: { en: "Hydraulic System", ja: "油圧システム" },
  shaken: { en: "N/A", ja: "なし" },
  kittsu: { en: "Available", ja: "記録簿あり" },
  video: "/Videos/loder.mp4",

  condition: {
    en: `
🚜 Komatsu PC20MR-1 Mini Excavator for Sale

📍 Location: Nara, Japan
💴 Price: 70万円 (700,000 yen)
🏗 Model: PC20MR-1
🔢 Serial No.: 12848
🏢 Manufacturer: Komatsu Ltd., Tokyo, Japan
⚙️ Engine Power: Approx. 20HP class
⚖️ Operating Weight: Around 2 tons
🔧 Condition: Used / Working Condition

⸻

🔍 Features
• Strong hydraulic power, smooth operation
• Blade & bucket both in working condition
• Compact size — ideal for small construction or farm work
• Rubber tracks in good shape
• Japanese domestic use (not imported)
• Easy to transport and maintain
• Clean and well-maintained body

⸻

🧰 Perfect For
✅ Farm use
✅ Construction sites
✅ Export to other countries
✅ Yard work or small-scale digging

⸻

📞 Contact
Serious buyers only please.
Feel free to inspect or ask for more details.
Local and export sales available.
    `,
    ja: `
🚜 コマツ PC20MR-1 ミニショベル 販売中

📍 所在地: 奈良県、日本
💴 価格: 70万円（700,000円）
🏗 型式: PC20MR-1
🔢 シリアル番号: 12848
🏢 メーカー: 株式会社コマツ（東京都、日本）
⚙️ エンジン出力: 約20馬力クラス
⚖️ 運転質量: 約2トン
🔧 状態: 中古／良好な動作状態

⸻

🔍 特徴
• 強力な油圧システムでスムーズな操作
• ブレードとバケットはどちらも動作良好
• コンパクトサイズで農作業や小規模建設に最適
• ゴムクローラーの状態良好
• 日本国内使用車（輸入車ではありません）
• 輸送やメンテナンスが容易
• クリーンで良く整備された外観

⸻

🧰 最適な用途
✅ 農作業
✅ 建設現場
✅ 海外輸出
✅ 庭作業や小規模掘削作業

⸻

📞 お問い合わせ
購入希望者のみご連絡ください。
現車確認・詳細についてお気軽にお問い合わせください。
🚗 国内販売および輸出対応可能です。
    `,
  },

  note: {
    en: "Strong hydraulics, smooth operation, ideal for farm or export.",
    ja: "油圧強力、スムーズな操作、農業・輸出に最適。",
  },

  images: [
    "/Images/loder-1.jpeg",
    "/Images/loder-2.jpeg",
    "/Images/loder-3.jpeg",
    "/Images/loder-4.jpeg",
    "/Images/loder-5.jpeg",
    "/Images/loder-6.jpeg",
    "/Images/loder-7.jpeg",
    "/Images/loder-8.jpeg",
    "/Images/loder-9.jpeg",
    "/Images/loder-10.jpeg",
    "/Images/loder-11.jpeg",
    "/Images/loder-12.jpeg",
    "/Images/loder-13.jpeg",
    "/Images/loder-14.jpeg",
    "/Images/loder-15.jpeg",
  ],

  specs: {
    en: "20HP Class, 2 Ton, Blade & Bucket Functional, Rubber Tracks",
    ja: "20馬力クラス, 約2トン, ブレード・バケット作動, ゴムキャタ良好",
  },

  description: {
    en: "Komatsu PC20MR-1 is a compact excavator ideal for small-scale construction and farm use. Smooth hydraulic performance and strong build quality.",
    ja: "PC20MR-1は小規模工事や農作業に適したコンパクトショベル。油圧性能が優れています。",
  },
},



// --- ID: 4 Hino Dutro 2005 ---
{
  id: 4,
  title: { en: "Hino Dutro 2005", ja: "日野デュトロ 2005年式" },
  price: "¥450,000 (45万)",
  year: { en: "2005", ja: "平成17年" },
  mileage: { en: "371,414 km", ja: "371,414 km" },
  location: { en: "Nara, Japan", ja: "奈良、日本" },
  transmission: { en: "Manual", ja: "マニュアル" },
  shaken: { en: "Check Document", ja: "書類を確認" },
  kittsu: { en: "Available", ja: "記録簿あり" },
  // video: "/Videos/hino-dutro.mp4",

  condition: {
    en: `
🚛 Hino Dutro 2005 — Excellent Condition

💴 Price: ¥450,000 (45 Man)
📍 Location: Nara, Japan
📅 Year: 2005
📏 Mileage: 371,414 km
⚙️ Model: PB-XZU301X
🔧 Engine Type: S05D Diesel
⚖️ Load Capacity: 2,000 kg
🚚 Gross Weight: 6,411 kg
🕹 Drive Type: Manual

⸻

🧰 Condition & Features
• Very clean and powerful truck  
• Engine and body both in good working condition  
• Perfect for business or export use  
• Ready to drive — no major issues  

⸻

📞 Contact
Serious buyers only please.  
Feel free to contact for more details.
    `,
    ja: `
🚛 日野デュトロ 2005年式 — 良好な状態

💴 価格: 45万円 (¥450,000)
📍 所在地: 奈良県、日本
📅 年式: 平成17年 (2005年)
📏 走行距離: 371,414 km
⚙️ 型式: PB-XZU301X
🔧 エンジンタイプ: S05D ディーゼル
⚖️ 最大積載量: 2,000 kg
🚚 車両総重量: 6,411 kg
🕹 駆動方式: マニュアル

⸻

🧰 コンディション・特徴
• とてもきれいでパワフルなトラック  
• エンジンとボディはどちらも良好な状態  
• 業務または輸出に最適  
• すぐに運転可能で、大きな問題なし  

⸻

📞 お問い合わせ
購入希望者のみご連絡ください。  
詳細についてはお気軽にお問い合わせください。
    `,
  },

  note: {
    en: "Very clean, reliable truck — perfect for business or export use. Contact only if serious.",
    ja: "清潔で信頼性の高いトラック。業務・輸出に最適。購入希望者のみご連絡ください。",
  },

  images: [
    "/Images/dutro-1.jpg",
    "/Images/dutro-2.jpg",
    "/Images/dutro-3.jpg",
    "/Images/dutro-4.jpg",
    "/Images/dutro-5.jpg",
    "/Images/dutro-5.jpg",

  ],

  specs: {
    en: "S05D Diesel Engine, 2,000 kg Load, 6,411 kg Gross Weight, Manual Drive",
    ja: "S05Dディーゼルエンジン, 最大積載2,000kg, 総重量6,411kg, マニュアル駆動",
  },

  description: {
    en: "Hino Dutro 2005 is a clean, durable, and reliable truck ideal for business or export. Engine and body are in solid working condition.",
    ja: "2005年式の日野デュトロは、業務・輸出に最適な清潔で信頼性の高いトラックです。エンジンとボディは良好な状態です。",
  },
},



{
  id: 5,
  title: { en: "Komatsu PC75UU-1 Excavator", ja: "コマツ PC75UU-1 油圧ショベル" },
  price: "¥800,000",
  year: { en: "", ja: "" },  // agar year available ho to daal sakte ho
  mileage: { en: "3,500 hrs", ja: "3,500時間" },
  location: { en: "Kyoto, Japan", ja: "京都、日本" },
  transmission: { en: "", ja: "" }, // Excavator me manual/auto usually nahi
  shaken: { en: "", ja: "" },
  kittsu: { en: "", ja: "" },

  condition: {
    en: `
🔸 Condition: Good working condition
🔸 Engine & pump working properly
🔸 Hour meter: 3,500 hrs
🔸 Model: PC75UU-1 (Serial No. 2979)
🔸 Location: Kyoto
🔸 Price: ¥800,000
🔸 Suitable for construction and digging work
✅ Serious buyers, feel free to contact.
📍 Local & export both available.
    `,
    ja: `
🔸 状態：良好・動作確認済み
🔸 稼働時間：3,500時間
🔸 モデル：PC75UU-1（製造番号 2979）
🔸 場所：京都
🔸 価格：80万円
🔸 土木・掘削作業に最適
✅ 興味のある方はお気軽にお問い合わせください。
📍 国内販売・輸出対応可能。
    `,
  },

  note: {
    en: "Komatsu PC75UU-1 Excavator — good condition, ready for construction work. Contact serious buyers only.",
    ja: "コマツ PC75UU-1 油圧ショベル — 良好な状態、すぐに作業可能。購入希望者のみご連絡ください。",
  },

  images: [
    "/Images/Excavator-1.jpg",
    "/Images/Excavator-2.jpg",
    "/Images/Excavator-3.jpg",
    "/Images/Excavator-4.jpg",
    "/Images/Excavator-5.jpg",
    "/Images/Excavator-6.jpg",
    "/Images/Excavator-7.jpg",
    "/Images/Excavator-8.jpg",
    "/Images/Excavator-9.jpg",
    "/Images/Excavator-10.jpg",
  ],

  specs: {
    en: "PC75UU-1, 3,500 hrs, Good working condition, Excavator for construction and digging work",
    ja: "PC75UU-1, 3,500時間, 良好な状態, 建設・掘削作業用油圧ショベル",
  },

  description: {
    en: "Komatsu PC75UU-1 Excavator in good working condition. Engine and pump are functional. Suitable for construction and digging tasks. Local and export options available.",
    ja: "コマツ PC75UU-1 油圧ショベルは良好な状態です。エンジンとポンプは正常に作動します。建設・掘削作業に最適。国内販売・輸出対応可能。",
  },
},




{
  id: 6,
  title: { en: "ISUZU Dump Truck", ja: "いすゞ ダンプトラック" },
  price: "¥1,800,000",
  year: { en: "1996", ja: "1996年" },
  mileage: { en: "N/A", ja: "N/A" },
  location: { en: "Nara, Japan", ja: "奈良、日本" },
  transmission: { en: "Manual", ja: "マニュアル" },
  shaken: { en: "Available", ja: "車検証あり" },
  kittsu: { en: "", ja: "" },

  condition: {
    en: `
🔸 Condition: Good working condition  
🔸 Engine: Diesel / 4HL1  
🔸 Model: KC-NRR33C2GD  
🔸 Transmission: Manual  
🔸 Body: Strong, Dump up–down working perfectly  
🔸 Year: 1996  
🔸 Price: ¥1,800,000  
🔸 Location: Nara, Japan  
📞 Feel free to contact for more details or inspection.  
✅ Local and export both available — your satisfaction is our priority!
    `,
    ja: `
🔸 状態：良好な作業状態  
🔸 エンジン：ディーゼル / 4HL1  
🔸 モデル：KC-NRR33C2GD  
🔸 トランスミッション：マニュアル  
🔸 ボディ：頑丈・ダンプ上下動作良好  
🔸 年式：1996年  
🔸 価格：180万円  
🔸 場所：奈良、日本  
📞 詳細や点検についてはお気軽にお問い合わせください。  
✅ 国内販売・輸出どちらも対応可能 — お客様の満足が最優先です！
    `,
  },

  note: {
    en: "ISUZU Dump Truck — good condition, manual transmission, diesel engine, ready to work.",
    ja: "いすゞ ダンプトラック — 良好な状態、マニュアルトランスミッション、ディーゼルエンジン、すぐに使用可能。",
  },

  images: [
    "/Images/truck-1.jpg",
    "/Images/truck-2.jpg",
    "/Images/truck-3.jpg",
    "/Images/truck-4.jpg",
    "/Images/truck-5.jpg",
    "/Images/truck-6.jpg",
    "/Images/truck-7.jpg",
    "/Images/truck-8.jpg",
    "/Images/truck-9.jpg",

  ],

  specs: {
    en: "ISUZU Dump Truck, Diesel 4HL1, Manual, Good condition, Nara Japan",
    ja: "いすゞ ダンプトラック, ディーゼル 4HL1, マニュアル, 良好な状態, 奈良 日本",
  },

  description: {
    en: "ISUZU Dump Truck in good condition with diesel 4HL1 engine and manual transmission. Strong body and perfectly working dump. Located in Nara, Japan. Local and export both available.",
    ja: "ディーゼル4HL1エンジンとマニュアルトランスミッションを搭載した良好な状態のいすゞダンプトラック。頑丈なボディでダンプ動作も良好。奈良に所在。国内販売・輸出対応可能。",
  },
}







];

export default detailData;

