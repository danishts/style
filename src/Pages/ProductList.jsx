// // import React from "react";
// // import img from "../assets/02.png";
// // import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; // Importing the search icon

// // const ProductList = () => {
// //   return (
// //     <div className="mt-4 border-2 rounded-lg border-gray-300 p-6  w-full">
// //       {/* Header with title and search bar */}
// //       <div className="flex justify-between items-center mb-4">
// //         <h3 className="text-xl font-semibold">Product List</h3>
// //         <div className="relative w-64">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="border border-gray-300 rounded-md px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
// //         </div>
// //       </div>

// //       {/* Image Grid */}

// //       <div className="flex flex-wrap gap-4">
        
// //         {[1, 2, 3, 4].map((_, index) => (
// //           <img
            
// //             key={index}
// //             src={img}
// //             alt={`product-${index}`}
// //             className="w-1/4 h-40 object-cover rounded-md shadow-md"
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;

// // import React from "react";
// // import img from "../assets/02.png";
// // import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// // const ProductCard = () => (
// //   <div
// //     className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
// //     style={{
// //       width: "278.15px",
// //       height: "261.76px",
// //       backgroundColor: "#F8F8F8",
// //     }}
// //   >
// //     {/* Title */}
// //     <h1 className="text-sm font-semibold text-center">Apple Watch Series 9</h1>

// //     {/* Category */}
// //     <p className="text-xs text-gray-600 text-center">Category Name</p>

// //     {/* Image with arrows */}
// //     <div className="relative flex items-center justify-center mt-1 mb-1">
// //       {/* Left Icon */}
// //       <ChevronLeftIcon className="w-5 h-5 text-gray-500 absolute left-0 cursor-pointer" />

// //       {/* Image */}
// //       <div
// //         style={{
// //           width: "234px",
// //           height: "141px",
// //           borderRadius: "6px",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <img
// //           src={img}
// //           alt="product"
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             objectFit: "cover",
// //           }}
// //         />
// //       </div>

// //       {/* Right Icon */}
// //       <ChevronRightIcon className="w-5 h-5 text-gray-500 absolute right-0 cursor-pointer" />
// //     </div>

// //     {/* Price */}
// //     <p className="text-sm font-bold text-center">$699.00</p>
// //   </div>
// // );

// // const ProductList = () => {
// //   return (
// //     <div className="p-6">
// //       <div className="flex flex-wrap gap-4">
// //         {[1, 2, 3, 4, 5].map((_, index) => (
// //           <ProductCard key={index} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;











// // import React, { useState } from "react";
// // import img from "../assets/02.png";
// // import {
// //   ChevronLeftIcon,
// //   ChevronRightIcon,
// //   MagnifyingGlassIcon,
// // } from "@heroicons/react/24/solid"; // Importing the search icon

// // const ProductCard = () => (
// //   <div
// //     className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
// //     style={{
// //       width: "278.15px",
// //       height: "261.76px",
// //       backgroundColor: "#F8F8F8",
// //     }}
// //   >
// //     {/* Title */}
// //     <h1 className="text-sm font-semibold text-center">Apple Watch Series 9</h1>

// //     {/* Category */}
// //     <p className="text-xs text-gray-600 text-center">Category Name</p>

// //     {/* Image with arrows */}
// //     <div className="relative flex items-center justify-center mt-1 mb-1">
// //       {/* Left Icon */}
// //       <ChevronLeftIcon className="w-5 h-5 text-gray-500 absolute left-0 cursor-pointer" />

// //       {/* Image */}
// //       <div
// //         style={{
// //           width: "234px",
// //           height: "141px",
// //           borderRadius: "6px",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <img
// //           src={img}
// //           alt="product"
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             objectFit: "cover",
// //           }}
// //         />
// //       </div>

// //       {/* Right Icon */}
// //       <ChevronRightIcon className="w-5 h-5 text-gray-500 absolute right-0 cursor-pointer" />
// //     </div>

// //     {/* Price */}
// //     <p className="text-sm font-bold text-center">$699.00</p>
// //   </div>
// // );

// // const ProductList = () => {
// //   const [searchTerm, setSearchTerm] = useState(""); // State for search term
// //   const [category, setCategory] = useState("All Categories"); // State for category filter
// //   const [sortOrder, setSortOrder] = useState("latest"); // State for sorting (latest first)

// //   // Handle search input change
// //   const handleSearchChange = (e) => setSearchTerm(e.target.value);

// //   // Handle category change
// //   const handleCategoryChange = (e) => setCategory(e.target.value);

// //   // Handle sort order change (latest first)
// //   const handleSortChange = (e) => setSortOrder(e.target.value);

// //   return (
// //     <div className="p-6">
// //       {/* Container for Search bar and filters in one line */}
// //       <div className="flex items-center gap-4 mb-4">
// //         {/* Search Bar with Icon inside */}
// //         <div className="relative w-64 flex-shrink-0">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             value={searchTerm}
// //             onChange={handleSearchChange}
// //             className="border border-gray-300 rounded-md px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />{" "}
// //           {/* Search icon */}
// //         </div>

// //         {/* Categories Dropdown */}
// //         <select
// //           value={category}
// //           onChange={handleCategoryChange}
// //           className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
// //         >
// //           <option>All Categories</option>
// //           <option>Electronics</option>
// //           <option>Clothing</option>
// //           <option>Home Appliances</option>
// //           {/* Add more categories as needed */}
// //         </select>

// //         {/* Sort by Latest First */}
// //         <select
// //           value={sortOrder}
// //           onChange={handleSortChange}
// //           className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
// //         >
// //           <option value="latest">Latest First</option>
// //           <option value="oldest">Oldest First</option>
// //         </select>
// //       </div>

// //       {/* Display Product List */}
// //       <div className="flex flex-wrap gap-4">
// //         {[1, 2, 3, 4, 5].map((_, index) => (
// //           <ProductCard key={index} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;









// import React, { useState } from "react";
// import img from "../assets/02.png";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid"; // Importing the search icon

// const ProductCard = () => (
//   <div
//     className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
//     style={{
//       width: "278.15px",
//       height: "261.76px",
//       backgroundColor: "#F8F8F8",
//     }}
//   >
//     {/* Title */}
//     <h1 className="text-sm font-semibold text-center">Apple Watch Series 9</h1>

//     {/* Category */}
//     <p className="text-xs text-gray-600 text-center">Category Name</p>

//     {/* Image with arrows */}
//     <div className="relative flex items-center justify-center mt-1 mb-1">
//       {/* Left Icon */}
//       <ChevronLeftIcon className="w-5 h-5 text-gray-500 absolute left-0 cursor-pointer" />

//       {/* Image */}
//       <div
//         style={{
//           width: "234px",
//           height: "141px",
//           borderRadius: "6px",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src={img}
//           alt="product"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* Right Icon */}
//       <ChevronRightIcon className="w-5 h-5 text-gray-500 absolute right-0 cursor-pointer" />
//     </div>

//     {/* Price */}
//     <p className="text-sm font-bold text-center">$699.00</p>
//   </div>
// );

// const ProductList = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term
//   const [category, setCategory] = useState("All Categories"); // State for category filter
//   const [sortOrder, setSortOrder] = useState("latest"); // State for sorting (latest first)

//   // Handle search input change
//   const handleSearchChange = (e) => setSearchTerm(e.target.value);

//   // Handle category change
//   const handleCategoryChange = (e) => setCategory(e.target.value);

//   // Handle sort order change (latest first)
//   const handleSortChange = (e) => setSortOrder(e.target.value);

//   // Number of products to display (For now we are displaying 5)
//   const numberOfProducts = 5;

//   return (
//     <div className="p-6">
//       {/* Display "Product List" title and count */}
//       <div className="mb-4 flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">
//           Products ({numberOfProducts})
//         </h1>

//         {/* Container for Search bar and filters in one line */}
//         <div className="flex items-center gap-4 mb-4">
//           {/* Search Bar with Icon inside */}

//           {/* Categories Dropdown */}
//           <select
//             value={sortOrder}
//             onChange={handleSortChange}
//             className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
//           >
//             <option value="latest">Latest First</option>
//             <option value="oldest">Oldest First</option>
//           </select>
//           <select
//             value={category}
//             onChange={handleCategoryChange}
//             className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
//           >
//             <option>All Categories</option>
//             <option>Electronics</option>
//             <option>Clothing</option>
//             <option>Home Appliances</option>
//             {/* Add more categories as needed */}
//           </select>

//           {/* Sort by Latest First */}
//         <div className="relative w-64 flex-shrink-0">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="border border-gray-300 rounded-md px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />{" "}
//           {/* Search icon */}
//         </div>
//         </div>
//       </div>

//       {/* Display Product List */}
//       <div className="flex flex-wrap gap-4">
//         {[...Array(numberOfProducts)].map((_, index) => (
//           <ProductCard key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

















// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Importing Link from react-router-dom
// import img from "../assets/02.png";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid"; // Importing the search icon

// const ProductCard = ({ product }) => (
//   <div
//     className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
//     style={{
//       width: "278.15px",
//       height: "261.76px",
//       backgroundColor: "#F8F8F8",
//     }}
//   >
//     {/* Title */}
//     <h1 className="text-sm font-semibold text-center">{product.name}</h1>

//     {/* Category */}
//     <p className="text-xs text-gray-600 text-center">{product.category}</p>

//     {/* Image with arrows */}
//     <div className="relative flex items-center justify-center mt-1 mb-1">
//       {/* Left Icon */}
//       <ChevronLeftIcon className="w-5 h-5 text-gray-500 absolute left-0 cursor-pointer" />

//       {/* Image */}
//       <div
//         style={{
//           width: "234px",
//           height: "141px",
//           borderRadius: "6px",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src={img}
//           alt="product"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* Right Icon */}
//       <ChevronRightIcon className="w-5 h-5 text-gray-500 absolute right-0 cursor-pointer" />
//     </div>

//     {/* Price */}
//     <p className="text-sm font-bold text-center">${product.price}</p>

//     {/* Add Link to Product Detail Page */}
//     <Link
//       to={`/product/${product.id}`} // Navigate to the product details page
//       className="text-blue-500 mt-2 text-sm"
//     >
//       View Details
//     </Link>
//   </div>
// );

// const ProductList = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term
//   const [category, setCategory] = useState("All Categories"); // State for category filter
//   const [sortOrder, setSortOrder] = useState("latest"); // State for sorting (latest first)

//   // Example products data
//   const products = [
//     {
//       id: 1,
//       name: "Apple Watch Series 9",
//       category: "Electronics",
//       price: 699,
//     },
//     { id: 2, name: "Samsung Galaxy S21", category: "Electronics", price: 799 },
//     { id: 3, name: "Nike Air Zoom Pegasus", category: "Clothing", price: 120 },
//     {
//       id: 4,
//       name: "Sony Headphones WH-1000XM4",
//       category: "Electronics",
//       price: 349,
//     },
//     { id: 5, name: "Dell XPS 13", category: "Electronics", price: 999 },
//   ];

//   // Handle search input change
//   const handleSearchChange = (e) => setSearchTerm(e.target.value);

//   // Handle category change
//   const handleCategoryChange = (e) => setCategory(e.target.value);

//   // Handle sort order change (latest first)
//   const handleSortChange = (e) => setSortOrder(e.target.value);

//   return (
//     <div className="p-6">
//       {/* Display "Product List" title and count */}
//       <div className="mb-4 flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Products ({products.length})</h1>
//       </div>

//       {/* Container for Search bar and filters in one line */}
//       <div className="flex items-center gap-4 mb-4">
//         {/* Search Bar with Icon inside */}
//         <div className="relative w-64 flex-shrink-0">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="border border-gray-300 rounded-md px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />{" "}
//         </div>

//         {/* Categories Dropdown */}
//         <select
//           value={category}
//           onChange={handleCategoryChange}
//           className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
//         >
//           <option>All Categories</option>
//           <option>Electronics</option>
//           <option>Clothing</option>
//           <option>Home Appliances</option>
//         </select>

//         {/* Sort by Latest First */}
//         <select
//           value={sortOrder}
//           onChange={handleSortChange}
//           className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
//         >
//           <option value="latest">Latest First</option>
//           <option value="oldest">Oldest First</option>
//         </select>
//       </div>

//       {/* Display Product List */}
//       <div className="flex flex-wrap gap-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;







































import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import img from "../assets/02.png"; // Product image (can replace with dynamic product image)
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"; // Importing the search icon

const ProductCard = ({ product, onClick }) => (
  <div
    className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
    style={{
      width: "278.15px",
      height: "261.76px",
      backgroundColor: "#F8F8F8",
    }}
    onClick={() => onClick(product)} // Trigger onClick when the card is clicked
  >
    {/* Title */}
    <h1 className="text-sm font-semibold text-center">{product.name}</h1>

    {/* Category */}
    <p className="text-xs text-gray-600 text-center">{product.category}</p>

    {/* Image with arrows */}
    <div className="relative flex items-center justify-center mt-1 mb-1">
      {/* Left Icon */}
      <ChevronLeftIcon className="w-5 h-5 text-gray-500 absolute left-0 cursor-pointer" />

      {/* Image */}
      <div
        style={{
          width: "234px",
          height: "141px",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          alt="product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right Icon */}
      <ChevronRightIcon className="w-5 h-5 text-gray-500 absolute right-0 cursor-pointer" />
    </div>

    {/* Price */}
    <p className="text-sm font-bold text-center">${product.price}</p>

    {/* View Details Link */}
    <Link
      to={`/product/${product.id}`} // Navigate to the product details page
      className="text-blue-500 mt-2 text-sm"
    >
      View Details
    </Link>
  </div>
);

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [category, setCategory] = useState("All Categories"); // State for category filter
  const [sortOrder, setSortOrder] = useState("latest"); // State for sorting (latest first)
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  // Example products data
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      category: "Electronics",
      price: 699,
    },
    { id: 2, name: "Samsung Galaxy S21", category: "Electronics", price: 799 },
    { id: 3, name: "Nike Air Zoom Pegasus", category: "Clothing", price: 120 },
    {
      id: 4,
      name: "Sony Headphones WH-1000XM4",
      category: "Electronics",
      price: 349,
    },
    { id: 5, name: "Dell XPS 13", category: "Electronics", price: 999 },
  ];

  // Handle search input change
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Handle category change
  const handleCategoryChange = (e) => setCategory(e.target.value);

  // Handle sort order change (latest first)
  const handleSortChange = (e) => setSortOrder(e.target.value);

  // Handle product card click to show product details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-6">
      {/* Check if a product is selected */}
      {selectedProduct ? (
        <div className="mt-6 p-6  rounded-lg bg-white shadow-md">
          {/* Back Button */}
          <button
            onClick={() => setSelectedProduct(null)} // Go back to product list
            className="mb-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Back
          </button>

          {/* Product Image */}
          <div className="flex items-center  mb-4">
          <div className="flex  mb-4">
            <img
              src={img}
              alt={selectedProduct.name}
              className="w-64 h-64 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col ">
          {/* Product Details */}
          <h2 className="text-2xl font-semibold text-center mb-2">
            {selectedProduct.name}
          </h2>
          <p className="text-center mb-2">
            <strong>Category:</strong> {selectedProduct.category}
          </p>
          <p className="text-center mb-4">
            <strong>Price:</strong> ${selectedProduct.price}
          </p>

          
          </div>
          </div>
        </div>
      ) : (
        <>
          {/* Display "Product List" title and count */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">
              Products ({products.length})
            </h1>

          {/* Search bar and filters */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-64 flex-shrink-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
            </div>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
              >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <select
              value={category}
              onChange={handleCategoryChange}
              className="border border-gray-300 rounded-md px-4 py-2 flex-shrink-0"
              >
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home Appliances</option>
            </select>

              </div>
          </div>

          {/* Display Product List */}
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
               // Add cursor pointer for clickable cards
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
