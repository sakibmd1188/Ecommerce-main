// // src/components/CategoryDetail.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoryDetail = ({ match }) => {
//   const [categoryData, setCategoryData] = useState(null);

//   useEffect(() => {
//     const categoryId = match.params.id;
//     axios.get(`http://localhost:3000/categories/${categoryId}`)
//       .then(response => {
//         setCategoryData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching category data:', error);
//       });
//   }, [match.params.id]);

//   if (!categoryData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{categoryData.name}</h2>
//       <p>{categoryData.description}</p>
//       {/* Display more category details here */}
//     </div>
//   );
// };

// export default CategoryDetail;
