// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const STRAPI_URL = "http://localhost:1337";
  



  // useEffect(() => {
  //   const getCars = async () => {
  //     try {
  //       const res = await axios.get(`${STRAPI_URL}/api/cars?populate=*`);
  //       setCars(res.data.data || []); // Always set empty array if no data
  //       console.log(res.data)

  //     } catch (error) {
  //       console.error("Error fetching cars:", error);
  //     }
  //   };

  //   getCars();
  // }, []);

useEffect(() => {
  const getCars = async () => {
    try {
      console.log("Fetching cars..."); // Debug start
      const res = await axios.get(`${STRAPI_URL}/api/cars?populate=*`);
      console.log("API Response:", res); // Full response check
      setCars(res.data.data || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  getCars();
}, []);




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.length > 0 ? (
        cars.map((car) => {
          const { name, model, price, image } = car.attributes;
          const imageUrl = image?.data
            ? `${STRAPI_URL}${image.data.attributes.url}`
            : null;

          return (
            <div
              key={car.id}
              className="border p-4 rounded shadow bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {name} - {model}
              </h3>
              <p className="mb-2 font-medium text-gray-700">
                Price: Rs. {price}
              </p>

              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-48 object-cover rounded"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500 rounded">
                  No Image here and there 
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-center col-span-full">
          Loading cars...
        </p>
      )}
    </div>
  );
};

export default CarList;












// // src/components/CarList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CarList = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const res = await axios.get('http://localhost:1337/api/cars?populate=*');
//         setCars(res.data.data); // Strapi v4+ returns data in data.data
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       }
//     };

//     getCars();
//   }, []);

//   return (

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {cars.map((car) => (
//     <div key={car.id} className="border p-4 rounded shadow">
//       <h3 className="text-xl font-semibold mb-2">
//         {car.attributes.name} - {car.attributes.model}
//       </h3>
//       <p className="mb-2">Price: Rs. {car.attributes.price}</p>
//       {car.attributes.image?.data && (
//         <img
//           src={`http://localhost:1337${car.attributes.image.data.attributes.url}`}
//           alt={car.attributes.name}
//           className="w-full h-auto"
//         />
//       )}
//     </div>
//   ))}
// </div>

//     // <div>
//     //   <h2>Available Cars</h2>
//     //   <ul>
//     //     {cars.map((car) => (
//     //       <li key={car.id}>
//     //         <h3>{car.attributes.name} - {car.attributes.model}</h3>
//     //         <p>Price: ${car.attributes.price}</p>
//     //         {car.attributes.image && car.attributes.image.data && (
//     //           <img
//     //             src={`http://localhost:1337${car.attributes.image.data.attributes.url}`}
//     //             alt={car.attributes.name}
//     //             width="200"
//     //           />
//     //         )}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// };

// export default CarList;
