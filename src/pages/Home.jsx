import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Layout from '../components/Layout';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();

  const [query, setQuery] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Normalize language ---
  const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

  // --- URL se language set karna ---
  useEffect(() => {
    if (lng && ['en', 'ja'].includes(lng)) {
      i18n.changeLanguage(lng);
    } else {
      i18n.changeLanguage('ja'); // Default language
    }
  }, [lng, i18n]);

  // --- Helper function for mileage formatting ---
  const formatMileage = (mileage) => {
    if (!mileage) return 'N/A km';
    const num = parseInt(mileage, 10);
    if (Number.isNaN(num)) return 'N/A km';
    return num.toLocaleString() + ' km';
  };

  // --- Strapi se data fetch karna ---
  /* eslint-disable no-undef */
  useEffect(() => {
    const fetchCars = async () => {
      try {
        
        // const strapiUrl = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
        const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
        const response = await axios.get(`${strapiUrl}/api/cars?populate=image`);
        console.log('Strapi URL:', strapiUrl);
        // console.log('ENV CHECK:', {
        //   process: typeof process,
        //   env: process?.env,
        //   reactApp: process?.env?.REACT_APP_STRAPI_URL,
        //   importMeta: import.meta?.env,
        //   viteUrl: import.meta?.env?.VITE_STRAPI_URL
        // });


        
        const mappedCars = response.data.data.map((car) => ({
          id: car.id,
          Title: {
            en: car.title_en,
            ja: car.title_ja,
          },
          price: parseInt(car.price, 10),
          year: car.year,
          mileage: {
            en: formatMileage(car.mileage_en),
            ja: formatMileage(car.mileage_ja),
          },
          img:
            car.image && car.image.length > 0
              ? `${strapiUrl}${car.image[0].url}`
              : null,
          short: {
            en: 'A reliable used car ready for new adventures',
            ja: '新しい冒険に備えた信頼できる中古車',
          },
        }));




        // Sirf pehli 3 cars featured ke liye
        setCars(mappedCars.slice(0, 3));
        console.log('Fetched featured cars from Strapi:', mappedCars.slice(0, 3));
      } catch (err) {
        setError('Featured cars fetch nahi hue, Strapi check kar!');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  /* eslint-enable no-undef */

  // --- Helper to generate language-prefixed links ---
  const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

  // --- Search filtering ---
  const filtered = cars.filter((c) => {
    const title = c.Title[currentLanguage] || c.Title.en;
    return title?.toLowerCase().includes(query.trim().toLowerCase());
  });

  // --- Loading state ---
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
          <p className="text-lg text-gray-600">Featured cars load ho rahe hain...</p>
        </div>
      </Layout>
    );
  }

  // --- Error state ---
  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

  // --- Main Render ---
  return (
    <Layout>
      <div className="min-h-screen bg-gray-200 text-gray-800">
        {/* --- HERO --- */}
        <header className="relative">
          <div
            className="h-[60vh] sm:h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10,10,10,0.45), rgba(10,10,10,0.45)), url('https://images.unsplash.com/photo-1502873780-1cb2f3f8a6c7?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                  {t('hero_title')}
                </h1>
                <p className="mt-4 text-sm sm:text-lg font-bold">{t('hero_subtitle')}</p>

                {/* Search Box */}
                <div className="mt-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={t('search_placeholder')}
                      className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <Link
                      to={getLink('/cars')}
                      className="inline-flex items-center justify-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                    >
                      {t('browse_cars')}
                    </Link>
                  </div>
                  <p className="mt-2 text-sm text-green-200">
                    {t('showing_results', { query: query || t('showing_all') })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* --- Featured Cars --- */}
        <main className="container mx-auto px-6 lg:px-8 mt-4">
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t('featured_cars')}</h2>
              <Link
                to={getLink('/cars')}
                className="text-sm text-green-600 hover:underline"
              >
                {t('view_all_cars')}
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(query ? filtered : cars).map((car) => (
                <article
                  key={car.id}
                  className="border rounded-lg overflow-hidden bg-white"
                >
                  <div className="relative">
                    {car.img ? (
                      <img
                        src={car.img}
                        alt={car.Title[currentLanguage] || car.Title.en}
                        className="w-full h-44 object-cover"
                      />
                    ) : (
                      <div className="w-full h-44 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-40 text-white px-2 py-1 rounded">
                      {t('car_year', { year: car.year })}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      {car.Title[currentLanguage] || car.Title.en}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {car.short[currentLanguage] || car.short.en}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <div className="text-green-600 font-bold">
                          {t('car_price', {
                            price: car.price.toLocaleString(),
                          })}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t('car_mileage', {
                            mileage:
                              car.mileage[currentLanguage] || car.mileage.en,
                          })}
                        </div>
                      </div>
                      <Link
                        to={getLink(`/cars/${car.id}`)}
                        className="inline-block px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                      >
                        {t('view_car')}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* --- How it works --- */}
          <section className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">{t('how_it_works_browse')}</h4>
                <p className="text-sm text-gray-600">
                  {t('how_it_works_browse_desc')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">{t('how_it_works_inspect')}</h4>
                <p className="text-sm text-gray-600">
                  {t('how_it_works_inspect_desc')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">{t('how_it_works_shipping')}</h4>
                <p className="text-sm text-gray-600">
                  {t('how_it_works_shipping_desc')}
                </p>
              </div>
            </div>
          </section>

          {/* --- CTA Banner --- */}
          <section className="mt-8 mb-6 bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{t('cta_title')}</h3>
              <p className="mt-1 text-sm">{t('cta_subtitle')}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a
                href="https://wa.me/REPLACE_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white text-green-600 rounded font-semibold hover:bg-gray-100"
              >
                {t('cta_button')}
              </a>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
