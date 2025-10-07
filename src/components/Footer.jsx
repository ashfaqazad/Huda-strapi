import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const contactDetails = {
    address: {
      en: 'Comfort Sanjo 403, 1-3-12 Sanjo-oji, Nara City, Nara Prefecture, Japan',
      ja: '奈良県奈良市三条大路1-3-12 コンフォート三条403',
    },
    phone: { en: '+81 90-4616-2378', ja: '+81 90-4616-2378' },
    email: { en: 'info@hudatraders.com', ja: 'info@hudatraders.com' },
  };

  // Normalize language to 'en' or 'ja'
  const currentLanguage = t('i18n.language', { returnObjects: true }).startsWith('日本語') ? 'ja' : 'en';

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{t('footer_logo')}</h2>
          <p className="text-sm text-gray-400">
            {t('footer_desc', { address: contactDetails.address[currentLanguage] || contactDetails.address.en })}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t('footer_quick_links')}</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400 transition">{t('navbar_home')}</Link></li>
            <li><Link to="/cars" className="hover:text-green-400 transition">{t('navbar_cars')}</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition">{t('navbar_about')}</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">{t('navbar_contact')}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t('footer_contact')}</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{contactDetails.address[currentLanguage] || contactDetails.address.en}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-400" />
              <span>{contactDetails.phone[currentLanguage] || contactDetails.phone.en}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-400" />
              <span>{contactDetails.email[currentLanguage] || contactDetails.email.en}</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t('footer_follow_us')}</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        {t('footer_copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}

























// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// export default function Footer() {
//   const { t } = useTranslation();

//   const contactDetails = {
//     address: {
//       en: 'Comfort Sanjo 403, 1-3-12 Sanjo-oji, Nara City, Nara Prefecture, Japan',
//       ja: '奈良県奈良市三条大路1-3-12 コンフォート三条403',
//     },
//     phone: { en: '+81 90-4616-2378', ja: '+81 90-4616-2378' },
//     email: { en: 'info@hudatraders.com', ja: 'info@hudatraders.com' },
//   };

//   // Normalize language to 'en' or 'ja'
//   const currentLanguage = t('i18n.language', { returnObjects: true }).startsWith('ja') ? 'ja' : 'en';

//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-16">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">{t('footer_logo')}</h2>
//           <p className="text-sm text-gray-400">{t('footer_desc', { address: contactDetails.address[currentLanguage] })}</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">{t('footer_quick_links')}</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="hover:text-green-400 transition">
//                 {t('navbar_home')}
//               </Link>
//             </li>
//             <li>
//               <Link to="/cars" className="hover:text-green-400 transition">
//                 {t('navbar_cars')}
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-green-400 transition">
//                 {t('navbar_about')}
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-green-400 transition">
//                 {t('navbar_contact')}
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">{t('footer_contact')}</h3>
//           <ul className="space-y-3">
//             <li className="flex items-center space-x-3">
//               <MapPin className="w-5 h-5 text-green-400" />
//               <span>{contactDetails.address[currentLanguage] || contactDetails.address.en}</span>
//             </li>
//             <li className="flex items-center space-x-3">
//               <Phone className="w-5 h-5 text-green-400" />
//               <span>{contactDetails.phone[currentLanguage] || contactDetails.phone.en}</span>
//             </li>
//             <li className="flex items-center space-x-3">
//               <Mail className="w-5 h-5 text-green-400" />
//               <span>{contactDetails.email[currentLanguage] || contactDetails.email.en}</span>
//             </li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">{t('footer_follow_us')}</h3>
//           <div className="flex space-x-4">
//             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
//         {t('footer_copyright', { year: new Date().getFullYear() })}
//       </div>
//     </footer>
//   );
// }





















// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-gray-900 text-gray-300 mt-16">
// //       {/* Top Section */}
// //       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
// //         {/* Brand */}
// //         <div>
// //           <h2 className="text-2xl font-bold text-white mb-4">Huda Trading Japan</h2>
// //           <p className="text-sm text-gray-400">
// // Huda Trading Japan Co., Ltd. located at Comfort Sanjo 403, 1-3-12 Sanjo-oji, Nara City, Nara Prefecture.          </p>
// //         </div>

// //         {/* Quick Links */}
// //         <div>
// //           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
// //           <ul className="space-y-2">
// //             <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
// //             <li><Link to="/cars" className="hover:text-green-400 transition">Cars</Link></li>
// //             <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
// //             <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
// //           </ul>
// //         </div>

// //         {/* Contact Info */}
// //         <div>
// //           <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-center space-x-3">
// //               <MapPin className="w-5 h-5 text-green-400" />
// //               <span>Nara City, Japan</span>
// //             </li>
// //             <li className="flex items-center space-x-3">
// //               <Phone className="w-5 h-5 text-green-400" />
// //               <span>+81 90-4616-2378</span>
// //             </li>
// //             <li className="flex items-center space-x-3">
// //               <Mail className="w-5 h-5 text-green-400" />
// //               <span>info@hudatraders.com</span>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Social Links */}
// //         <div>
// //           <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
// //           <div className="flex space-x-4">
// //             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
// //               <Facebook className="w-5 h-5" />
// //             </a>
// //             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
// //               <Instagram className="w-5 h-5" />
// //             </a>
// //             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
// //               <Twitter className="w-5 h-5" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Section */}
// //       <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
// //         © {new Date().getFullYear()} Huda Traders. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // }



