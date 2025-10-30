import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function CarDetail() {
  const { t, i18n } = useTranslation();
  const { lng, id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const currentLanguage = i18n.language.startsWith("ja") ? "ja" : "en";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (lng && ["en", "ja"].includes(lng)) i18n.changeLanguage(lng);
    else i18n.changeLanguage("ja");
  }, [lng, i18n]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const strapiUrl = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
        const response = await axios.get(
          `${strapiUrl}/api/cars?filters[id][$eq]=${id}&populate=image`
        );
        const fetchedCar = response.data.data[0];
        setCar(fetchedCar);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">{t("loading", { defaultValue: "Loading..." })}</p>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">{t("no_car_found", { defaultValue: "Car not found" })}</p>
      </div>
    );
  }

  const attributes = car;
  const imageUrl =
    attributes.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${attributes.image.url}`
      : null;

  // slider handle
  const images = [imageUrl];
  const totalSlides = images.length;
  const nextImage = () => setCurrentImage((p) => (p + 1) % totalSlides);
  const prevImage = () => setCurrentImage((p) => (p - 1 + totalSlides) % totalSlides);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang={currentLanguage} />
        <title>{attributes[`title_${currentLanguage}`]}</title>
      </Helmet>

      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <Link
            to={`/${currentLanguage}/cars`}
            className="inline-block mb-4 text-sm hover:underline"
          >
            ← {t("back_to_cars", { defaultValue: "Back to Cars" })}
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Slider */}
            <div className="relative">
              {imageUrl ? (
                <img
                  src={images[currentImage]}
                  alt={attributes[`title_${currentLanguage}`]}
                  className="w-full h-100 object-cover rounded-xl shadow-lg transition-all duration-500"
                />
              ) : (
                <div className="w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center">
                  <p>No Image Available</p>
                </div>
              )}

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
              >
                ›
              </button>
            </div>

            {/* Car Info */}
            <div>
              <h1 className="text-4xl font-bold mb-3">
                {attributes[`title_${currentLanguage}`]}
              </h1>
              <p className="text-2xl font-semibold text-green-200 mb-3">
                {attributes.price_display}
              </p>
              <p className="text-lg mb-1">📍 {attributes[`location_${currentLanguage}`]}</p>
              <p className="text-lg mb-1">🚘 {attributes[`mileage_${currentLanguage}`]}</p>
              <p className="text-lg mb-1">🗓️ {attributes[`year_${currentLanguage}`]}</p>
              <p className="text-lg mb-1">⚙️ {attributes[`transmission_${currentLanguage}`]}</p>
              <p className="text-lg mb-1">✅ Shaken: {attributes[`shaken_${currentLanguage}`]}</p>
              <p className="text-lg mb-1">📘 Kittsu: {attributes[`kittsu_${currentLanguage}`]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Specs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              {t("car_description", { defaultValue: "Description" })}
            </h2>
            <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed text-[15px]">
              {attributes[`condition_${currentLanguage}`]}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              {t("car_specs", { defaultValue: "Specifications" })}
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>{attributes[`year_${currentLanguage}`]}</li>
              <li>{attributes[`transmission_${currentLanguage}`]}</li>
              <li>{attributes[`location_${currentLanguage}`]}</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">📞 Contact Us</h3>
          <p className="text-lg text-gray-700 mb-3">+81 90-4616-2378</p>
          <a
            href="tel:+819046162378"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            📱 Call Now
          </a>
        </div>
      </section>
    </div>
  );
}



















// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import axios from "axios";

// export default function CarDetail() {
//   const { t, i18n } = useTranslation();
//   const { lng, id } = useParams();
//   const [car, setCar] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const currentLanguage = i18n.language.startsWith("ja") ? "ja" : "en";

//   // 🌐 Language set kar URL se
//   useEffect(() => {
//     if (lng && ["en", "ja"].includes(lng)) {
//       i18n.changeLanguage(lng);
//     } else {
//       i18n.changeLanguage("ja");
//     }
//   }, [lng, i18n]);






//   // 🚗 Car fetch from Strapi
//   useEffect(() => {
//     const fetchCar = async () => {

//       if (!id) {
//         setError("Car ID nahi mila!");
//         setLoading(false);
//         return;
//       }

//       try {
//         const strapiUrl =
//           import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

//         // ✅ populate=image tak zaroor likho warna image URL nahi milega
//         const response = await axios.get(
//           `${strapiUrl}/api/cars?filters[id][$eq]=${id}&populate=image`
//         );

//         console.log("📦 Raw response:", response.data);

//         if (!response.data.data || response.data.data.length === 0) {
//           setError("Car data nahi mila!");
//           setLoading(false);
//           return;
//         }

//         const carData = response.data.data[0];
//         const attributes = carData.attributes;

//         const mappedCar = {
//           id: carData.id,
//           title: {
//             en: attributes.title_en || "N/A",
//             ja: attributes.title_ja || "N/A",
//           },
//           price: parseInt(attributes.price, 10) || 0,
//           year: attributes.year_en || "N/A",
//           mileage: {
//             en: formatMileage(attributes.mileage_en),
//             ja: formatMileage(attributes.mileage_ja),
//           },
//           img:
//             attributes.image?.data?.[0]?.attributes?.url &&
//             `${strapiUrl}${attributes.image.data[0].attributes.url}`,
//           description: {
//             en:
//               attributes.description_en ||
//               "No description available in English.",
//             ja:
//               attributes.description_ja ||
//               "英語の説明が利用できません。",
//           },
//           specifications: {
//             engine: {
//               en: attributes.engine_en || "N/A",
//               ja: attributes.engine_ja || "N/A",
//             },
//             transmission: {
//               en: attributes.transmission_en || "N/A",
//               ja: attributes.transmission_ja || "N/A",
//             },
//             fuel: {
//               en: attributes.fuel_en || "N/A",
//               ja: attributes.fuel_ja || "N/A",
//             },
//             color: {
//               en: attributes.color_en || "N/A",
//               ja: attributes.color_ja || "N/A",
//             },
//           },
//         };

//         setCar(mappedCar);
//         console.log("✅ Car fetched:", mappedCar);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Car fetch nahi hua, Strapi check kar!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const formatMileage = (mileage) => {
//       if (!mileage) return "N/A";
//       const num = parseInt(mileage, 10);
//       return num.toLocaleString() + " km";
//     };

//     fetchCar();
//   }, [id]);




//   const getLink = (path) => `/${currentLanguage}${path === "/" ? "" : path}`;

//   // ⏳ Loading
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-lg text-gray-600">Car details load ho rahe hain...</p>
//       </div>
//     );
//   }

//   // ❌ Error
//   if (error || !car) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-red-600 mb-4">{error || "Car nahi mili!"}</p>
//           <Link to={getLink("/cars")} className="text-green-600 hover:underline">
//             {t("back_to_cars")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Render
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-8 py-10">
//         <Link
//           to={getLink("/cars")}
//           className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50"
//         >
//           ← {t("back_to_cars")}
//         </Link>

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
//           {/* 🖼 Image */}
//           {car.img ? (
//             <img
//               src={car.img}
//               alt={car.title[currentLanguage] || car.title.en}
//               className="w-full h-96 object-cover"
//             />
//           ) : (
//             <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
//               <span className="text-gray-500">No Image Available</span>
//             </div>
//           )}

//           {/* 🧾 Details */}
//           <div className="p-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               {car.title[currentLanguage] || car.title.en}
//             </h1>
//             <div className="text-green-600 text-2xl font-bold mb-4">
//               PKR {car.price.toLocaleString()}
//             </div>

//             <div className="space-y-2 text-gray-600 mb-6">
//               <p>
//                 <span className="font-semibold">{t("car_year")}:</span>{" "}
//                 {car.year}
//               </p>
//               <p>
//                 <span className="font-semibold">{t("car_mileage")}:</span>{" "}
//                 {car.mileage[currentLanguage] || car.mileage.en}
//               </p>
//             </div>

//             {/* 📘 Description */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 {t("car_description")}
//               </h2>
//               <p className="text-gray-700 leading-relaxed">
//                 {car.description[currentLanguage] || car.description.en}
//               </p>
//             </section>

//             {/* ⚙️ Specifications */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 {t("car_specifications")}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {Object.entries(car.specifications).map(([key, valueObj]) => (
//                   <div key={key} className="bg-gray-50 p-3 rounded-lg">
//                     <span className="font-semibold text-gray-700 capitalize">
//                       {key}:
//                     </span>
//                     <p className="text-gray-600">
//                       {valueObj[currentLanguage] || valueObj.en}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* ☎️ Button */}
//             <button className="mt-6 w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
//               {t("contact_seller")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








































// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import axios from 'axios';

// // export default function CarDetail() {
// //   const { t, i18n } = useTranslation();
// //   const { lng, id } = useParams(); // lng aur id dono le lo URL se
// //   const [car, setCar] = useState(null); // Single car data
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Normalize language to 'en' or 'ja'
// //   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

// //   // Language set kar URL se
// //   useEffect(() => {
// //     if (lng && ['en', 'ja'].includes(lng)) {
// //       i18n.changeLanguage(lng);
// //     } else {
// //       i18n.changeLanguage('ja'); // Default to Japanese
// //     }
// //   }, [lng, i18n]);



// //   // Strapi se single car fetch karne ka useEffect (ID pe depend karta hai)
// //   useEffect(() => {
// //     const fetchCar = async () => {
// //       if (!id) {
// //         setError('Car ID nahi mila!');
// //         setLoading(false);
// //         return;
// //       }
// //       try {
// //         // ✅ Vite ke liye updated version
// //         const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
// //         const response = await axios.get(`${strapiUrl}/api/cars?filters[id][$eq]=${id}&populate=image`);

// //         const mappedCar = {
// //           id: response.data.data.id,
// //           title: {
// //             en: response.data.data.title_en,
// //             ja: response.data.data.title_ja,
// //           },
// //           price: parseInt(response.data.data.price, 10),
// //           year: response.data.data.year,
// //           mileage: {
// //             en: formatMileage(response.data.data.mileage_en),
// //             ja: formatMileage(response.data.data.mileage_ja),
// //           },
// //           img: response.data.data.image && response.data.data.image.length > 0
// //             ? `${strapiUrl}${response.data.data.image[0].url}`
// //             : null,
// //           // Description: Bilingual fields assume kar rahe hain Strapi mein
// //           description: {
// //             en: response.data.data.description_en || 'No description available in English.',
// //             ja: response.data.data.description_ja || '英語の説明が利用できません。',
// //           },
// //           // Specifications: Assume Strapi mein JSON field hai jaise { engine: {en: '2.0L', ja: '2.0L'}, fuel: {en: 'Petrol', ja: 'ガソリン'} }
// //           // Ya separate fields (specifications_engine_en etc.), but yahan simple object bana rahe hain for list
// //           specifications: response.data.data.specifications
// //             ? JSON.parse(response.data.data.specifications) // Agar string JSON, parse kar
// //             : {  // Default fallback if no field
// //               engine: { en: 'N/A', ja: 'N/A' },
// //               transmission: { en: 'N/A', ja: 'N/A' },
// //               fuel: { en: 'N/A', ja: 'N/A' },
// //               color: { en: 'N/A', ja: 'N/A' },
// //             },
// //         };
// //         setCar(mappedCar);
// //         console.log('Fetched single car with description & specs:', mappedCar); // Debug
// //       } catch (err) {
// //         setError(`Car ${id} fetch nahi hua, Strapi check kar!`);
// //         console.error('Fetch error:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     // Helper function for mileage formatting (e.g., 80000 -> "80,000 km")
// //     const formatMileage = (mileage) => {
// //       if (!mileage) return 'N/A km';
// //       const num = parseInt(mileage, 10);
// //       return num.toLocaleString() + ' km';
// //     };

// //     fetchCar();
// //   }, [id]); // ID change pe re-fetch

// //   // Helper to generate language-prefixed links
// //   const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <p className="text-lg text-gray-600">Car details load ho rahe hain...</p>
// //       </div>
// //     );
// //   }

// //   // Error state
// //   if (error || !car) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <p className="text-lg text-red-600 mb-4">{error || 'Car nahi mili!'}</p>
// //           <Link to={getLink('/cars')} className="text-green-600 hover:underline">
// //             {t('back_to_cars')}
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-6 lg:px-8 py-10">
// //         {/* Back Button */}
// //         <Link
// //           to={getLink('/cars')}
// //           className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50"
// //         >
// //           ← {t('back_to_cars')}
// //         </Link>

// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
// //           {/* Image */}
// //           {car.img ? (
// //             <img
// //               src={car.img}
// //               alt={car.title[currentLanguage] || car.title.en}
// //               className="w-full h-96 object-cover"
// //             />
// //           ) : (
// //             <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
// //               <span className="text-gray-500">No Image Available</span>
// //             </div>
// //           )}

// //           {/* Details */}
// //           <div className="p-8">
// //             <h1 className="text-3xl font-bold text-gray-800 mb-2">
// //               {car.title[currentLanguage] || car.title.en}
// //             </h1>
// //             <div className="text-green-600 text-2xl font-bold mb-4">
// //               {t('car_price', { price: car.price.toLocaleString() })}
// //             </div>
// //             <div className="space-y-2 text-gray-600 mb-6">
// //               <p>
// //                 <span className="font-semibold">{t('car_year')}:</span> {car.year}
// //               </p>
// //               <p>
// //                 <span className="font-semibold">{t('car_mileage')}:</span> {car.mileage[currentLanguage] || car.mileage.en}
// //               </p>
// //             </div>

// //             {/* Description Section */}
// //             <section className="mb-6">
// //               <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('car_description')}</h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 {car.description[currentLanguage] || car.description.en}
// //               </p>
// //             </section>

// //             {/* Specifications Section */}
// //             <section className="mb-6">
// //               <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('car_specifications')}</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {Object.entries(car.specifications).map(([key, valueObj]) => (
// //                   <div key={key} className="bg-gray-50 p-3 rounded-lg">
// //                     <span className="font-semibold text-gray-700 capitalize">{key}:</span>
// //                     <p className="text-gray-600">{valueObj[currentLanguage] || valueObj.en}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* Action Button – Jaise Contact or Buy */}
// //             <button className="mt-6 w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
// //               {t('contact_seller')}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }













































// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import axios from 'axios';

// // export default function CarDetail() {
// //   const { t, i18n } = useTranslation();
// //   const { lng, id } = useParams(); // lng aur id dono le lo URL se
// //   const [car, setCar] = useState(null); // Single car data
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Normalize language to 'en' or 'ja'
// //   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

// //   // Language set kar URL se
// //   useEffect(() => {
// //     if (lng && ['en', 'ja'].includes(lng)) {
// //       i18n.changeLanguage(lng);
// //     } else {
// //       i18n.changeLanguage('ja'); // Default to Japanese
// //     }
// //   }, [lng, i18n]);

// //   // Strapi se single car fetch karne ka useEffect (ID pe depend karta hai)
// //   useEffect(() => {
// //     const fetchCar = async () => {
// //       if (!id) {
// //         setError('Car ID nahi mila!');
// //         setLoading(false);
// //         return;
// //       }
// //       try {
// //         // Safe process.env with fallback
// //         const strapiUrl = (typeof process !== 'undefined' && process.env.REACT_APP_STRAPI_URL)
// //           ? process.env.REACT_APP_STRAPI_URL
// //           : 'http://localhost:1337';
// //         const response = await axios.get(`${strapiUrl}/api/cars/${id}?populate=image`); // Single car by ID
// //         // API data ko component structure mein map kar (jaise Cars.jsx mein)
// //         const mappedCar = {
// //           id: response.data.data.id,
// //           title: {
// //             en: response.data.data.title_en,
// //             ja: response.data.data.title_ja,
// //           },
// //           price: parseInt(response.data.data.price, 10),
// //           year: response.data.data.year,
// //           mileage: {
// //             en: `${response.data.data.mileage_en} km`,
// //             ja: `${response.data.data.mileage_ja} km`,
// //           },
// //           img: response.data.data.image && response.data.data.image.length > 0
// //             ? `${strapiUrl}${response.data.data.image[0].url}`
// //             : null,
// //           // Extra fields add kar sakte ho jaise description if Strapi mein hai
// //         };
// //         setCar(mappedCar);
// //         console.log('Fetched single car:', mappedCar); // Debug
// //       } catch (err) {
// //         setError(`Car ${id} fetch nahi hua, Strapi check kar!`);
// //         console.error('Fetch error:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCar();
// //   }, [id]); // ID change pe re-fetch

// //   // Helper to generate language-prefixed links
// //   const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <p className="text-lg text-gray-600">Car details load ho rahe hain...</p>
// //       </div>
// //     );
// //   }

// //   // Error state
// //   if (error || !car) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <p className="text-lg text-red-600 mb-4">{error || 'Car nahi mili!'}</p>
// //           <Link to={getLink('/cars')} className="text-green-600 hover:underline">
// //             {t('back_to_cars')}
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-6 lg:px-8 py-10">
// //         {/* Back Button */}
// //         <Link
// //           to={getLink('/cars')}
// //           className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50"
// //         >
// //           ← {t('back_to_cars')}
// //         </Link>

// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
// //           {/* Image */}
// //           {car.img ? (
// //             <img
// //               src={car.img}
// //               alt={car.title[currentLanguage] || car.title.en}
// //               className="w-full h-96 object-cover"
// //             />
// //           ) : (
// //             <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
// //               <span className="text-gray-500">No Image Available</span>
// //             </div>
// //           )}

// //           {/* Details */}
// //           <div className="p-8">
// //             <h1 className="text-3xl font-bold text-gray-800 mb-2">
// //               {car.title[currentLanguage] || car.title.en}
// //             </h1>
// //             <div className="text-green-600 text-2xl font-bold mb-4">
// //               {t('car_price', { price: car.price.toLocaleString() })}
// //             </div>
// //             <div className="space-y-2 text-gray-600">
// //               <p>
// //                 <span className="font-semibold">{t('car_year')}:</span> {car.year}
// //               </p>
// //               <p>
// //                 <span className="font-semibold">{t('car_mileage')}:</span> {car.mileage[currentLanguage] || car.mileage.en}
// //               </p>
// //               {/* Extra fields jaise description add kar if needed:
// //               <p>{car.description}</p> */}
// //             </div>

// //             {/* Action Button – Jaise Contact or Buy */}
// //             <button className="mt-6 w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
// //               {t('contact_seller')}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



















// // // src/pages/CarDetail.jsx
// // import React, { useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import { Helmet } from 'react-helmet';

// // const allCars = [
// //   {
// //     id: 1,
// //     title: { en: 'Toyota Corolla', ja: 'トヨタ カローラ' },
// //     price: 3500000,
// //     year: 2018,
// //     mileage: { en: '80,000 km', ja: '80,000 km' },
// //     img: '/Images/Corolla.jpg',
// //     description: { en: 'A comfortable and reliable sedan perfect for daily commutes. Fuel-efficient and spacious interior.', ja: '毎日の通勤に最適な快適で信頼性の高いセダン。燃費が良く、広々としたインテリア。' },
// //     specs: { en: 'Engine: 1.8L, Transmission: Automatic, Fuel: Petrol', ja: 'エンジン: 1.8L, トランスミッション: 自動, 燃料: ガソリン' },
// //   },
// //   {
// //     id: 2,
// //     title: { en: 'Nissan Skyline', ja: '日産スカイライン' },
// //     price: 7200000,
// //     year: 2016,
// //     mileage: { en: '60,000 km', ja: '60,000 km' },
// //     img: '/Images/Nissan.jpg',
// //     description: { en: 'Sporty and powerful coupe with excellent handling. Ideal for performance enthusiasts.', ja: '優れたハンドリングのスポーティでパワフルなクーペ。パフォーマンス愛好家に最適。' },
// //     specs: { en: 'Engine: 3.0L Twin Turbo, Transmission: Manual, Fuel: Petrol', ja: 'エンジン: 3.0Lツインターボ, トランスミッション: マニュアル, 燃料: ガソリン' },
// //   },
// //   {
// //     id: 3,
// //     title: { en: 'Honda Civic', ja: 'ホンダ シビック' },
// //     price: 4200000,
// //     year: 2019,
// //     mileage: { en: '45,000 km', ja: '45,000 km' },
// //     img: '/Images/Civic.avif',
// //     description: { en: 'Efficient city car with modern features and great fuel economy.', ja: '現代的な機能と優れた燃費を備えた効率的なシティカー。' },
// //     specs: { en: 'Engine: 1.5L Turbo, Transmission: CVT, Fuel: Petrol', ja: 'エンジン: 1.5Lターボ, トランスミッション: CVT, 燃料: ガソリン' },
// //   },
// //   {
// //     id: 4,
// //     title: { en: 'Suzuki Swift', ja: 'スズキ スイフト' },  // Corrected ja title
// //     price: 2500000,
// //     year: 2020,
// //     mileage: { en: '30,000 km', ja: '30,000 km' },  // Matched en
// //     img: '/Images/Swift.avif',
// //     description: { en: 'Compact hatchback with agile handling and low running costs. Perfect for urban driving.', ja: '機敏なハンドリングと低ランニングコストのコンパクトハッチバック。都市部運転に最適。' },  // Customized for Suzuki
// //     specs: { en: 'Engine: 1.2L, Transmission: Manual, Fuel: Petrol', ja: 'エンジン: 1.2L, トランスミッション: マニュアル, 燃料: ガソリン' },
// //   },
// //   {
// //     id: 5,
// //     title: { en: 'Mazda Demio', ja: 'マツダ デミオ' },  // Corrected ja title
// //     price: 2100000,
// //     year: 2017,
// //     mileage: { en: '92,000 km', ja: '92,000 km' },  // Corrected to match en
// //     img: '/Images/Mazda.jpg',
// //     description: { en: 'Stylish subcompact with premium feel and efficient engine. Great for city use.', ja: 'プレミアム感のあるスタイリッシュなサブコンパクト。効率的なエンジンで都市部に最適。' },  // Customized for Mazda
// //     specs: { en: 'Engine: 1.3L, Transmission: Automatic, Fuel: Petrol', ja: 'エンジン: 1.3L, トランスミッション: 自動, 燃料: ガソリン' },
// //   },
// // ];

// // export default function CarDetail() {
// //   const { t, i18n } = useTranslation();
// //   const { lng, id } = useParams();  // Extract lng and id from URL

// //   // Normalize language
// //   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

// //   // Language set from URL
// //   useEffect(() => {
// //     if (lng && ['en', 'ja'].includes(lng)) {
// //       i18n.changeLanguage(lng);
// //     } else {
// //       i18n.changeLanguage('ja');
// //     }
// //   }, [lng, i18n]);

// //   // Find car by ID
// //   const car = allCars.find(c => c.id === parseInt(id));

// //   if (!car) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <p className="text-gray-600">{t('no_car_found', { defaultValue: 'Car not found' })}</p>
// //       </div>
// //     );
// //   }

// //   // Helper for links
// //   const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Helmet>
// //         <html lang={currentLanguage} />
// //         <title>{car.title[currentLanguage] || car.title.en}</title>
// //       </Helmet>
// //       {/* Hero Image & Basic Info */}
// //       <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
// //         <div className="container mx-auto px-6 lg:px-8">
// //           <Link to={getLink('/cars')} className="inline-block mb-4 text-sm hover:underline">
// //             ← {t('back_to_cars', { defaultValue: 'Back to Cars' })}
// //           </Link>
// //           <div className="grid md:grid-cols-2 gap-8 items-center">
// //             <img
// //               src={car.img}
// //               alt={car.title[currentLanguage] || car.title.en}
// //               className="w-full h-96 object-cover rounded-xl shadow-lg"
// //             />
// //             <div>
// //               <h1 className="text-4xl font-bold mb-4">{car.title[currentLanguage] || car.title.en}</h1>
// //               <p className="text-3xl font-bold text-green-200 mb-4">
// //                 {t('car_price', { price: car.price.toLocaleString() })}
// //               </p>
// //               <p className="text-lg mb-2">{t('car_year', { year: car.year })}</p>
// //               <p className="text-lg">{car.mileage[currentLanguage] || car.mileage.en}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Description & Specs */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-6 lg:px-8">
// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div>
// //               <h2 className="text-2xl font-bold mb-4">{t('car_description', { defaultValue: 'Description' })}</h2>
// //               <p className="text-gray-600 leading-relaxed">
// //                 {car.description[currentLanguage] || car.description.en}
// //               </p>
// //             </div>
// //             <div>
// //               <h2 className="text-2xl font-bold mb-4">{t('car_specs', { defaultValue: 'Specifications' })}</h2>
// //               <ul className="space-y-2 text-gray-600">
// //                 <li>• {car.specs[currentLanguage] || car.specs.en}</li>
// //                 {/* Add more specs as needed */}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-16 bg-gray-100 text-center">
// //         <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('purchase_title', { defaultValue: 'Ready to Purchase?' })}</h2>
// //         <p className="text-gray-600 max-w-lg mx-auto mb-6">{t('purchase_desc', { defaultValue: 'Contact us for inspection, shipping, and documentation.' })}</p>
// //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //           <a
// //             href="https://wa.me/1234567890"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
// //           >
// //             {t('contact_whatsapp', { defaultValue: 'Contact via WhatsApp' })}
// //           </a>
// //           <Link
// //             to={getLink('/contact')}
// //             className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition"
// //           >
// //             {t('contact_form', { defaultValue: 'Send Inquiry' })}
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }