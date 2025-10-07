import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();

  // Normalize language to 'en' or 'ja'
  const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

  // Language set kar URL se
  React.useEffect(() => {
    if (lng && ['en', 'ja'].includes(lng)) {
      i18n.changeLanguage(lng);
    } else {
      i18n.changeLanguage('ja'); // Default to Japanese
    }
  }, [lng, i18n]);

  const contactDetails = {
    address: { en: 'Tokyo, Japan', ja: '日本、東京都' },
    phone: { en: '+81 90-1234-5678', ja: '+81 90-1234-5678' },
    email: { en: 'info@japancars.com', ja: 'info@japancars.com' },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <html lang={currentLanguage} />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_title')}</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">{t('contact_subtitle')}</p>
      </section>

      {/* Contact Info + Form Section */}
      <section className="container mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('get_in_touch')}</h2>
          <p className="text-gray-600 mb-8">{t('get_in_touch_desc')}</p>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-green-600 text-2xl">📍</span>
              <p className="text-gray-700">{contactDetails.address[currentLanguage] || contactDetails.address.en}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-600 text-2xl">📞</span>
              <p className="text-gray-700">{contactDetails.phone[currentLanguage] || contactDetails.phone.en}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-600 text-2xl">✉️</span>
              <p className="text-gray-700">{contactDetails.email[currentLanguage] || contactDetails.email.en}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">{t('form_name')}</label>
            <input
              type="text"
              placeholder={t('form_name_placeholder')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">{t('form_email')}</label>
            <input
              type="email"
              placeholder={t('form_email_placeholder')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">{t('form_message')}</label>
            <textarea
              rows="4"
              placeholder={t('form_message_placeholder')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
          >
            {t('send_message')}
          </button>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.204092004841!2d135.832747515243!3d34.685086480438886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013b90b0a2b3f7%3A0xb36e2cfa8b9860f!2sNara%2C%20Nara%20Prefecture%2C%20Japan!5e0!3m2!1sen!2sjp!4v1695838167895!5m2!1sen!2sjp"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}























// // src/pages/Contact.jsx
// import React from "react";

// export default function Contact() {
//     return (
//         <div className="bg-gray-50 min-h-screen">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 text-center">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//                 <p className="max-w-2xl mx-auto text-lg opacity-90">
//                     Have a question or want to buy a car? Fill the form below, and we'll get back to you.
//                 </p>
//             </section>

//             {/* Contact Info + Form Section */}
//             <section className="container mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
//                 {/* Left Side - Info */}
//                 <div>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">
//                         Get in Touch
//                     </h2>
//                     <p className="text-gray-600 mb-8">
//                         We’d love to hear from you! Our team is here to help you with car
//                         inquiries, pricing, and any other questions you might have.
//                     </p>

//                     {/* Contact Details */}
//                     <div className="space-y-6">
//                         <div className="flex items-center space-x-4">
//                             <span className="text-green-600 text-2xl">📍</span>
//                             <p className="text-gray-700">Tokyo, Japan</p>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <span className="text-green-600 text-2xl">📞</span>
//                             <p className="text-gray-700">+81 90-1234-5678</p>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <span className="text-green-600 text-2xl">✉️</span>
//                             <p className="text-gray-700">info@japancars.com</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Form */}
//                 <form className="bg-white rounded-xl shadow-md p-8 space-y-6">
//                     <div>
//                         <label className="block text-gray-700 font-medium mb-2">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-700 font-medium mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="you@example.com"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-700 font-medium mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             rows="4"
//                             placeholder="Write your message here..."
//                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
//                     >
//                         Send Message
//                     </button>
//                 </form>
//             </section>

//             {/* Google Map */}
//             <section className="w-full h-[400px]">

//                 <iframe
//                     title="map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.204092004841!2d135.832747515243!3d34.685086480438886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013b90b0a2b3f7%3A0xb36e2cfa8b9860f!2sNara%2C%20Nara%20Prefecture%2C%20Japan!5e0!3m2!1sen!2sjp!4v1695838167895!5m2!1sen!2sjp"
//                     width="100%"
//                     height="400"
//                     style={{ border: 0, borderRadius: "12px" }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 />

//                 {/* <iframe
//           title="map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4140.376751064066!2d139.69170631477668!3d35.6894879801928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0a0b0a8f4f%3A0x2a6bcb0c3f49f68a!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sjp!4v1637588890583!5m2!1sen!2sjp"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe> */}
//             </section>

//         </div>
//     );
// }
