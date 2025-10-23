import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Layout from '../components/Layout'; // Home se same

export default function Cars() {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('latest');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Normalize language to 'en' or 'ja'
  const currentLanguage = i18n.language.startsWith('ja') ? 'ja' : 'en';

  // Set language based on URL
  useEffect(() => {
    if (lng && ['en', 'ja'].includes(lng)) {
      i18n.changeLanguage(lng);
    } else {
      i18n.changeLanguage('ja'); // Default to Japanese
    }
  }, [lng, i18n]);

  // Helper function for mileage formatting (e.g., 80000 -> "80,000 km")
  const formatMileage = (mileage) => {
    if (!mileage) return 'N/A km';
    const num = parseInt(mileage, 10);
    return num.toLocaleString() + ' km';
  };

  // Fetch all cars from Strapi (no slice – full list)
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
        console.log('Strapi URL:', strapiUrl);
        const response = await axios.get(`${strapiUrl}/api/cars?populate=image`);

        const mappedCars = response.data.data.map((car) => ({
          id: car.id,
          Title: {  // Consistent naming
            en: car.title_en || '',
            ja: car.title_ja || '',
          },
          price: parseInt(car.price, 10) || 0,  // String to number
          year: car.year || 'N/A',
          mileage: {
            en: formatMileage(car.mileage_en),  // Direct access
            ja: formatMileage(car.mileage_ja),
          },
          img: car.image?.url 
            ? `${strapiUrl}${car.image.url}` 
            : null,
          short: {
            en: 'A reliable used car ready for new adventures',
            ja: '新しい冒険に備えた信頼できる中古車',
          },
        }));

        setCars(mappedCars);  // All cars, no slice(0,3) – yeh Cars page hai
        console.log('Fetched all cars from Strapi:', mappedCars);
      } catch (err) {
        setError('Cars fetch nahi hue, Strapi check kar!');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);  // Empty dependency – sirf ek baar

  // Helper to generate language-prefixed links
  const getLink = (path) => `/${currentLanguage}${path === '/' ? '' : path}`;

  // Safe filtering + sorting
  const filtered = cars
    .filter((c) => {
      const title = c.Title[currentLanguage] || c.Title.en;  // FIXED: Title (capital T)
      return title?.toLowerCase().includes(query.trim().toLowerCase());
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'latest') return b.year - a.year;  // Latest = newer year first
      return 0;
    });

  // Loading state
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-lg text-gray-600">Cars load ho rahe hain...</p>
        </div>
      </Layout>
    );
  }

  // Error state
  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 py-10">
          {/* Heading + Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{t('cars_title')}</h1>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-3">
              {/* Search Box */}
              <input
                type="text"
                placeholder={t('search_car_placeholder')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-300 outline-none w-full md:w-auto"
              />
              {/* Sorting Dropdown */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              >
                <option value="latest">{t('sort_latest')}</option>
                <option value="price-low">{t('sort_price_low')}</option>
                <option value="price-high">{t('sort_price_high')}</option>
              </select>
            </div>
          </div>

          {/* Cars Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow hover:shadow-xl transition duration-200"
                >
                  {/* Image conditional */}
                  {car.img ? (
                    <img
                      src={car.img}
                      alt={car.Title[currentLanguage] || car.Title.en}  // FIXED: Title
                      className="w-full h-80 object-cover rounded-t-xl"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-t-xl flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">
                      {car.Title[currentLanguage] || car.Title.en}
                    </h2>
                    <div className="text-green-600 font-bold mt-1">
                      {t('car_price', { price: car.price.toLocaleString() })}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {t('car_year', { year: car.year })} • 
                      {car.mileage[currentLanguage] || car.mileage.en}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{car.short[currentLanguage] || car.short.en}</p>

                    <Link
                      to={getLink(`/cars/${car.id}`)}
                      className="inline-block px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm mt-3"
                    >
                      {t('view_details')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center text-lg">{t('no_cars_found')}</p>
          )}
        </div>
      </div>
    </Layout>
  );
}