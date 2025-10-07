import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function About() {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();

  // Normalize language to 'en' or 'ja'
  const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

  // Language set kar URL se
  useEffect(() => {
    if (lng && ['en', 'ja'].includes(lng)) {
      i18n.changeLanguage(lng);
    } else {
      i18n.changeLanguage('ja');
    }
  }, [lng, i18n]);

  const teamMembers = [
    {
  name: { en: 'Hafiz Zakaria', ja: 'ハーフィズ・ザカリア' }, // Hafiz Zakaria
  role: { en: 'Founder & CEO', ja: '創業者兼CEO' },
  img: '/Images/ZakariyaBh.jpeg',
},
{
  name: { en: '#', ja: '#' },
  role: { en: 'Operations Manager', ja: 'オペレーションマネージャー' }, // Correct form
  img: '#',
},
{
  name: { en: 'Ashfaque Ahmed', ja: 'アシュファク・アフメド' }, // Ashfaque Ahmed
  role: { en: 'Customer Support', ja: 'カスタマーサポート' },
  img: '/Images/Ashfaq.jpg',
},

  ];

  // Helper to generate language-prefixed links
  const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <html lang={currentLanguage} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about_title')}</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">{t('about_subtitle')}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/Images/CarOne.avif"
            alt={t('mission_alt')}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('mission_title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t('mission_desc1')}</p>
            <p className="text-gray-600 leading-relaxed">{t('mission_desc2')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('team_title')}</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name[currentLanguage] || member.name.en}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name[currentLanguage] || member.name.en}
                </h3>
                <p className="text-green-600 font-medium">{member.role[currentLanguage] || member.role.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('cta_work_title')}</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">{t('cta_work_desc')}</p>
        <Link
          to={getLink('/contact')}
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
        >
          {t('contact_us')}
        </Link>
      </section>
    </div>
  );
}











// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { useParams } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// export default function About() {
//   const { t, i18n } = useTranslation();
//   const { lng } = useParams();

//   // Normalize language to 'en' or 'ja'
//   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

//   // Language set kar URL se
//   React.useEffect(() => {
//     if (lng && ['en', 'ja'].includes(lng)) {
//       i18n.changeLanguage(lng);
//     } else {
//       i18n.changeLanguage('ja'); // Default to Japanese
//     }
//   }, [lng, i18n]);

//   const teamMembers = [
//     {
//       name: { en: 'Ali Raza', ja: 'アリ・ラザ' },
//       role: { en: 'Founder & CEO', ja: '創業者兼CEO' },
//       img: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       name: { en: 'Hina Khan', ja: 'ヒナ・カーン' },
//       role: { en: 'Operations Manager', ja: '運営マネージャー' },
//       img: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//       name: { en: 'Zeeshan Malik', ja: 'ゼーシャン・マリク' },
//       role: { en: 'Customer Support', ja: 'カスタマーサポート' },
//       img: 'https://randomuser.me/api/portraits/men/65.jpg',
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Helmet>
//         <html lang={currentLanguage} />
//       </Helmet>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
//         <div className="container mx-auto px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about_title')}</h1>
//           <p className="max-w-2xl mx-auto text-lg opacity-90">{t('about_subtitle')}</p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
//           <img
//             src="https://images.unsplash.com/photo-1517940720702-083259893b49?q=80&w=1200&auto=format&fit=crop"
//             alt={t('mission_alt')}
//             className="rounded-2xl shadow-lg"
//           />
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('mission_title')}</h2>
//             <p className="text-gray-600 leading-relaxed mb-4">{t('mission_desc1')}</p>
//             <p className="text-gray-600 leading-relaxed">{t('mission_desc2')}</p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('team_title')}</h2>
//           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//             {teamMembers.map((member, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
//               >
//                 <img
//                   src={member.img}
//                   alt={member.name[currentLanguage] || member.name.en}
//                   className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {member.name[currentLanguage] || member.name.en}
//                 </h3>
//                 <p className="text-green-600 font-medium">{member.role[currentLanguage] || member.role.en}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('cta_work_title')}</h2>
//         <p className="text-gray-600 max-w-lg mx-auto mb-6">{t('cta_work_desc')}</p>
//         <a
//           href="/contact"
//           className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
//         >
//           {t('contact_us')}
//         </a>
//       </section>
//     </div>
//   );
// }






















// // // src/pages/About.jsx
// // import React from "react";

// // export default function About() {
// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
// //         <div className="container mx-auto px-6 lg:px-8 text-center">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
// //           <p className="max-w-2xl mx-auto text-lg opacity-90">
// //             We are passionate about connecting buyers with the best Japanese cars.
// //             Our mission is to make car buying simple, transparent, and hassle-free.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Mission Section */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
// //           {/* <img
// //             src="https://images.unsplash.com/photo-1517940720702-083259893b49?q=80&w=1200&auto=format&fit=crop"
// //             alt="Our Mission"
// //             className="rounded-2xl shadow-lg"
// //           /> */}
// //           <img
// //             src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
// //             alt="Our Mission"
// //             className="rounded-xl shadow-lg object-cover w-full h-full"
// //           />

// //           <div>
// //             <h2 className="text-3xl font-bold text-gray-800 mb-4">
// //               Our Mission
// //             </h2>
// //             <p className="text-gray-600 leading-relaxed mb-4">
// //               We aim to bring the most reliable Japanese cars to our customers
// //               with full transparency. Whether you’re looking for a family car or
// //               a sports car, we provide detailed information, verified images, and
// //               fair prices.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed">
// //               With years of experience in car exports, we know exactly what
// //               customers need — trust, quality, and smooth transactions.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section */}
// //       <section className="bg-white py-16">
// //         <div className="container mx-auto px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
// //             Meet Our Team
// //           </h2>
// //           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
// //             {/* Team Member */}
// //             {[
// //               {
// //                 name: "Hafiz Zakaria",
// //                 role: "Founder & CEO",
// //                 img: "/Images/ZakariyaBh.jpeg",
// //               },
// //               {
// //                 name: "......",
// //                 role: "Operations Manager",
// //                 img: "#",
// //               },
// //               {
// //                 name: "Ashfaque Ahmed",
// //                 role: "Customer Support",
// //                 img: "/Images/Ashfaq.jpg",
// //               },
// //             ].map((member, idx) => (
// //               <div
// //                 key={idx}
// //                 className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
// //               >
// //                 <img
// //                   src={member.img}
// //                   alt={member.name}
// //                   className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
// //                 />
// //                 <h3 className="text-xl font-semibold text-gray-800">
// //                   {member.name}
// //                 </h3>
// //                 <p className="text-green-600 font-medium">{member.role}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-16 bg-gray-100 text-center">
// //         <h2 className="text-3xl font-bold text-gray-800 mb-4">
// //           Want to work with us?
// //         </h2>
// //         <p className="text-gray-600 max-w-lg mx-auto mb-6">
// //           We are always looking for talented people to join our mission of
// //           making car buying easy for everyone.
// //         </p>
// //         <a
// //           href="/contact"
// //           className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
// //         >
// //           Contact Us
// //         </a>
// //       </section>
// //     </div>
// //   );
// // }
