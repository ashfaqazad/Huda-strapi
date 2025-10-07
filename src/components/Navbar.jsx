import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Normalize language to 'en' or 'ja'
  const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

  // Language toggle karne ka function
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
    let newPath = location.pathname;
    if (newPath.startsWith(`/${currentLanguage}`)) {
      newPath = newPath.replace(`/${currentLanguage}`, `/${newLang}`);
    } else {
      newPath = `/${newLang}${newPath === '/' ? '' : newPath}`;
    }
    navigate(newPath);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to generate language-prefixed links
  const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to={getLink('/')} className="text-2xl font-bold text-green-600">
            {t('navbar_logo')}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to={getLink('/')} className="hover:text-green-600 font-medium">
              {t('navbar_home')}
            </Link>
            <Link to={getLink('/cars')} className="hover:text-green-600 font-medium">
              {t('navbar_cars')}
            </Link>
            <Link to={getLink('/about')} className="hover:text-green-600 font-medium">
              {t('navbar_about')}
            </Link>
            <Link to={getLink('/contact')} className="hover:text-green-600 font-medium">
              {t('navbar_contact')}
            </Link>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              <span className="mr-2">{currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              {t('navbar_whatsapp')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link to={getLink('/')} className="block hover:text-green-600" onClick={toggleMenu}>
              {t('navbar_home')}
            </Link>
            <Link to={getLink('/cars')} className="block hover:text-green-600" onClick={toggleMenu}>
              {t('navbar_cars')}
            </Link>
            <Link to={getLink('/about')} className="block hover:text-green-600" onClick={toggleMenu}>
              {t('navbar_about')}
            </Link>
            <Link to={getLink('/contact')} className="block hover:text-green-600" onClick={toggleMenu}>
              {t('navbar_contact')}
            </Link>
            {/* Language Toggle Button for Mobile */}
            <button
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="block w-full text-left px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              {t('navbar_toggle_language')} ({currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'})
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
              onClick={toggleMenu}
            >
              {t('navbar_whatsapp')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}









































// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Normalize language to 'en' or 'ja'
//   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

//   // Language toggle karne ka function
//   const toggleLanguage = () => {
//     const newLang = currentLanguage === 'en' ? 'ja' : 'en';
//     i18n.changeLanguage(newLang);
//     let newPath = location.pathname;
//     if (newPath.startsWith(`/${currentLanguage}`)) {
//       newPath = newPath.replace(`/${currentLanguage}`, `/${newLang}`);
//     } else {
//       newPath = `/${newLang}${newPath === '/' ? '' : newPath}`;
//     }
//     navigate(newPath);
//   };

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Helper to generate language-prefixed links
//   const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to={getLink('/')} className="text-2xl font-bold text-green-600">
//             {t('navbar_logo')}
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to={getLink('/')} className="hover:text-green-600 font-medium">
//               {t('navbar_home')}
//             </Link>
//             <Link to={getLink('/cars')} className="hover:text-green-600 font-medium">
//               {t('navbar_cars')}
//             </Link>
//             <Link to={getLink('/about')} className="hover:text-green-600 font-medium">
//               {t('navbar_about')}
//             </Link>
//             <Link to={getLink('/contact')} className="hover:text-green-600 font-medium">
//               {t('navbar_contact')}
//             </Link>
//             {/* Language Toggle Button */}
//             <button
//               onClick={toggleLanguage}
//               className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//             >
//               <span className="mr-2">{currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'}</span>
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M7 16l-4-4m0 0l4-4m-4 4h18"
//                 />
//               </svg>
//             </button>
//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
//             >
//               {t('navbar_whatsapp')}
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-4 py-4 space-y-4">
//             <Link to={getLink('/')} className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_home')}
//             </Link>
//             <Link to={getLink('/cars')} className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_cars')}
//             </Link>
//             <Link to={getLink('/about')} className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_about')}
//             </Link>
//             <Link to={getLink('/contact')} className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_contact')}
//             </Link>
//             {/* Language Toggle Button for Mobile */}
//             <button
//               onClick={() => {
//                 toggleLanguage();
//                 toggleMenu();
//               }}
//               className="block w-full text-left px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//             >
//               {t('navbar_toggle_language')} ({currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'})
//             </button>
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
//               onClick={toggleMenu}
//             >
//               {t('navbar_whatsapp')}
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



















// // src/components/Navbar.jsx
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';  // useLocation add kiya for current path
// import { useTranslation } from 'react-i18next';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();  // Current path le lene ke liye

//   // Normalize language to 'en' or 'ja'
//   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

//   // Language toggle karne ka function (fixed logic)
//   const toggleLanguage = () => {
//     const newLang = currentLanguage === 'en' ? 'ja' : 'en';
//     i18n.changeLanguage(newLang);
    
//     // Current path se language prefix nikaal aur naye lang ke saath add kar
//     let newPath = location.pathname;
//     if (newPath.startsWith(`/${currentLanguage}`)) {
//       newPath = newPath.replace(`/${currentLanguage}`, `/${newLang}`);
//     } else {
//       // Agar prefix nahi hai, toh add kar (e.g., /cars → /ja/cars)
//       newPath = `/${newLang}${location.pathname}`;
//     }
//     navigate(newPath);
//   };

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-green-600">
//             {t('navbar_logo')}
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className="hover:text-green-600 font-medium">
//               {t('navbar_home')}
//             </Link>
//             <Link to="/cars" className="hover:text-green-600 font-medium">
//               {t('navbar_cars')}
//             </Link>
//             <Link to="/about" className="hover:text-green-600 font-medium">
//               {t('navbar_about')}
//             </Link>
//             <Link to="/contact" className="hover:text-green-600 font-medium">
//               {t('navbar_contact')}
//             </Link>
//             {/* Language Toggle Button */}
//             <button
//               onClick={toggleLanguage}
//               className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//             >
//               <span className="mr-2">{currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'}</span>
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M7 16l-4-4m0 0l4-4m-4 4h18"
//                 />
//               </svg>
//             </button>
//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
//             >
//               {t('navbar_whatsapp')}
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-4 py-4 space-y-4">
//             <Link to="/" className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_home')}
//             </Link>
//             <Link to="/cars" className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_cars')}
//             </Link>
//             <Link to="/about" className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_about')}
//             </Link>
//             <Link to="/contact" className="block hover:text-green-600" onClick={toggleMenu}>
//               {t('navbar_contact')}
//             </Link>
//             {/* Language Toggle Button for Mobile */}
//             <button
//               onClick={() => {
//                 toggleLanguage();
//                 toggleMenu();
//               }}
//               className="block w-full text-left px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//             >
//               {t('navbar_toggle_language')} ({currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'})
//             </button>
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
//               onClick={toggleMenu}
//             >
//               {t('navbar_whatsapp')}
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



















// // import { useState } from 'react';
// // import { Menu, X } from 'lucide-react';
// // import { Link, useNavigate, useParams } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const { t, i18n } = useTranslation();
// //   const navigate = useNavigate();
// //   const { lng } = useParams();

// //   // Normalize language to 'en' or 'ja'
// //   const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

// //   // Language toggle karne ka function
// //   const toggleLanguage = () => {
// //     const newLang = currentLanguage === 'en' ? 'ja' : 'en';
// //     i18n.changeLanguage(newLang);
// //     // Agar current page /:lng route pe hai, toh language switch karte waqt URL update karo
// //     if (lng) {
// //       navigate(`/${newLang}${window.location.pathname.replace(`/${lng}`, '')}`);
// //     } else {
// //       navigate(`/${newLang}${window.location.pathname}`);
// //     }
// //   };

// //   const toggleMenu = () => setIsOpen(!isOpen);

// //   return (
// //     <nav className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16 items-center">
// //           {/* Logo */}
// //           <Link to="/" className="text-2xl font-bold text-green-600">
// //             {t('navbar_logo')}
// //           </Link>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex space-x-8 items-center">
// //             <Link to="/" className="hover:text-green-600 font-medium">
// //               {t('navbar_home')}
// //             </Link>
// //             <Link to="/cars" className="hover:text-green-600 font-medium">
// //               {t('navbar_cars')}
// //             </Link>
// //             <Link to="/about" className="hover:text-green-600 font-medium">
// //               {t('navbar_about')}
// //             </Link>
// //             <Link to="/contact" className="hover:text-green-600 font-medium">
// //               {t('navbar_contact')}
// //             </Link>
// //             {/* Language Toggle Button */}
// //             <button
// //               onClick={toggleLanguage}
// //               className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
// //             >
// //               <span className="mr-2">{currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'}</span>
// //               <svg
// //                 className="w-5 h-5"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M7 16l-4-4m0 0l4-4m-4 4h18"
// //                 />
// //               </svg>
// //             </button>
// //             {/* WhatsApp Button */}
// //             <a
// //               href="https://wa.me/1234567890"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
// //             >
// //               {t('navbar_whatsapp')}
// //             </a>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={toggleMenu}
// //             className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
// //           >
// //             {isOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white shadow-lg">
// //           <div className="px-4 py-4 space-y-4">
// //             <Link to="/" className="block hover:text-green-600" onClick={toggleMenu}>
// //               {t('navbar_home')}
// //             </Link>
// //             <Link to="/cars" className="block hover:text-green-600" onClick={toggleMenu}>
// //               {t('navbar_cars')}
// //             </Link>
// //             <Link to="/about" className="block hover:text-green-600" onClick={toggleMenu}>
// //               {t('navbar_about')}
// //             </Link>
// //             <Link to="/contact" className="block hover:text-green-600" onClick={toggleMenu}>
// //               {t('navbar_contact')}
// //             </Link>
// //             {/* Language Toggle Button for Mobile */}
// //             <button
// //               onClick={() => {
// //                 toggleLanguage();
// //                 toggleMenu();
// //               }}
// //               className="block w-full text-left px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
// //             >
// //               {t('navbar_toggle_language')} ({currentLanguage === 'en' ? '🇬🇧 EN' : '🇯🇵 JA'})
// //             </button>
// //             <a
// //               href="https://wa.me/1234567890"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
// //               onClick={toggleMenu}
// //             >
// //               {t('navbar_whatsapp')}
// //             </a>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }


















// // // import { useState } from "react";
// // // import { Menu, X } from "lucide-react";
// // // import { Link } from "react-router-dom"; // Agar tum React Router use kar rahe ho

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const toggleMenu = () => setIsOpen(!isOpen);

// // //   return (
// // //     <nav className="bg-white shadow-md sticky top-0 z-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between h-16 items-center">
// // //           {/* Logo */}
// // //           <Link to="/" className="text-2xl font-bold text-green-600">
// // //             Huda Trading Japan
// // //           </Link>

// // //           {/* Desktop Menu */}
// // //           <div className="hidden md:flex space-x-8">
// // //             <Link to="/" className="hover:text-green-600 font-medium">
// // //               Home
// // //             </Link>
// // //             <Link to="/cars" className="hover:text-green-600 font-medium">
// // //               Cars
// // //             </Link>
// // //             <Link to="/about" className="hover:text-green-600 font-medium">
// // //               About Us
// // //             </Link>
// // //             <Link to="/contact" className="hover:text-green-600 font-medium">
// // //               Contact
// // //             </Link>
// // //           </div>

// // //           {/* Call Button */}
// // //           <div className="hidden md:block">
// // //             <a
// // //               href="https://wa.me/1234567890"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
// // //             >
// // //               WhatsApp
// // //             </a>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             onClick={toggleMenu}
// // //             className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
// // //           >
// // //             {isOpen ? <X size={24} /> : <Menu size={24} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isOpen && (
// // //         <div className="md:hidden bg-white shadow-lg">
// // //           <div className="px-4 py-4 space-y-4">
// // //             <Link to="/" className="block hover:text-green-600" onClick={toggleMenu}>
// // //               Home
// // //             </Link>
// // //             <Link to="/cars" className="block hover:text-green-600" onClick={toggleMenu}>
// // //               Cars
// // //             </Link>
// // //             <Link to="/about" className="block hover:text-green-600" onClick={toggleMenu}>
// // //               About Us
// // //             </Link>
// // //             <Link to="/contact" className="block hover:text-green-600" onClick={toggleMenu}>
// // //               Contact
// // //             </Link>

// // //             <a
// // //               href="https://wa.me/1234567890"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
// // //               onClick={toggleMenu}
// // //             >
// // //               WhatsApp
// // //             </a>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }
