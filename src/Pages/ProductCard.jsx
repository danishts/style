// import React from "react";
// import img from "../assets/02.png";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Importing the left and right icons

// // ProductCard will accept props for the product details
// const ProductCard = ({ product, onClick }) => (
//   <div
//     className="rounded-lg shadow-md flex flex-col items-center justify-between px-4 py-3"
//     style={{
//       width: "278.15px",
//       height: "261.76px",
//       backgroundColor: "#F8F8F8",
//     }}
//     onClick={() => onClick(product)} // Trigger onClick when the card is clicked
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
//           src={product.image}
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
//   </div>
// );

// export default ProductCard;
