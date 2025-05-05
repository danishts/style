// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import Action from "../assets/action.png"; // Action icon for navigation
// import Logo1 from "../assets/logo1.png"; // Assuming logo1.png is the logo you want to display
// import ProductList from "./ProductList"; // Import ProductList component
// import Order from "./Order"; // Import Order component

// const BrandDetails = () => {
//   const { state } = useLocation();
//   const { brand } = state;

//   // State to handle the visibility of "Product List" and "Order" sections
//   const [showProductList, setShowProductList] = useState(false);
//   const [showOrder, setShowOrder] = useState(false);

//   // State to track the active section
//   const [activeSection, setActiveSection] = useState(null); // null, 'product', or 'order'

//   // Initialize the useNavigate hook for programmatic navigation
//   const navigate = useNavigate();

//   // Navigate back to the BrandPage when the icon is clicked
//   const handleNavigateBack = () => {
//     navigate("/brand"); // This will redirect the user to the BrandPage
//   };

//   // Toggle visibility of Product List and set active section
//   const toggleProductList = () => {
//     setShowProductList(!showProductList);
//     setActiveSection("product"); // Set the active section to "product"
//     setShowOrder(false); // Hide the order section
//   };

//   // Toggle visibility of Order section and set active section
//   const toggleOrder = () => {
//     setShowOrder(!showOrder);
//     setActiveSection("order"); // Set the active section to "order"
//     setShowProductList(false); // Hide the product list section
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Action icon with an arrow that redirects to BrandPage */}
//       <div
//         className="flex p-4 gap-2 cursor-pointer"
//         onClick={handleNavigateBack}
//       >
//         <img
//           src={Action}
//           alt="icon"
//           className="w-8 h-8 transition-transform transform hover:scale-125" // Hover effect to enlarge
//         />
//         <h1 className="text-3xl font-semibold">Brand Details</h1>
//       </div>

//       <div className="border-2 border-gray-300 rounded-lg w-full min-h-screen">
//         <div className="bg-white p-6">
//           {/* Logo Above the Image */}
//           <div className="flex flex-col mb-4">
//             <img
//               src={Logo1}
//               alt="Logo"
//               className="w-32 h-32 object-contain" // Logo size and margin below it
//             />
//           </div>

//           {/* Brand Name */}
//           <div className="flex space-x-5 items-center mb-4">
//             {/* Brand Image at the Top */}
//             <img
//               src={brand.img}
//               alt={brand.name}
//               className="w-32 h-32 object-cover mb-4" // Square image with no rounding
//             />
//             <h2 className="text-xl font-semibold text-center mb-4">
//               {brand.name}
//             </h2>
//           </div>

//           <p>
//             <strong>Revenue Made: </strong>${brand.revenue.toLocaleString()}
//           </p>
//           <p>
//             <strong>Commission Revenue: </strong>${" "}
//             {brand.commission.toLocaleString()}
//           </p>

//           {/* Product List and Order Section with a full-width line */}
//           <div className="flex mt-4 border-b border-gray-300 pb-2">
//             <h1
//               className={`mr-4 cursor-pointer ${
//                 activeSection === "product" ? "font-semibold text-blue-500" : ""
//               }`}
//               onClick={toggleProductList} // Toggle Product List visibility
//             >
//               Product List
//             </h1>
//             <h1
//               className={`cursor-pointer ${
//                 activeSection === "order" ? "font-semibold text-blue-500" : ""
//               }`}
//               onClick={toggleOrder} // Toggle Order visibility
//             >
//               Order
//             </h1>
//           </div>

//           {/* Conditionally render Product List component */}
//           {showProductList && <ProductList />}

//           {/* Conditionally render Order component */}
//           {showOrder && <Order />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandDetails;





























// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import Action from "../assets/action.png";
// import Logo1 from "../assets/logo1.png";
// import ProductList from "./ProductList";
// import Order from "./Order";

// const BrandDetails = () => {
//   const { state } = useLocation();
//   const { brand } = state;

//   const [showProductList, setShowProductList] = useState(false);
//   const [showOrder, setShowOrder] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);

//   const navigate = useNavigate();

//   const handleNavigateBack = () => {
//     navigate("/brand");
//   };

//   const toggleProductList = () => {
//     setShowProductList(!showProductList);
//     setActiveSection("product");
//     setShowOrder(false);
//   };

//   const toggleOrder = () => {
//     setShowOrder(!showOrder);
//     setActiveSection("order");
//     setShowProductList(false);
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Action icon with an arrow that redirects to BrandPage */}
//       <div
//         className="flex p-4 gap-2 cursor-pointer"
//         onClick={handleNavigateBack}
//       >
//         <img
//           src={Action}
//           alt="icon"
//           className="w-8 h-8 transition-transform transform hover:scale-125"
//         />
//         <h1 className="text-3xl font-semibold">Brand Details</h1>
//       </div>

//       <div className="border-2 border-gray-300 rounded-lg w-full min-h-screen">
//         <div className="bg-white p-6">
//           {/* Logo Above the Image */}
//           <div className="flex flex-col mb-4">
//             <img src={Logo1} alt="Logo" className="w-32 h-32 object-contain" />
//           </div>

//           {/* Brand Name */}
//           <div
//             onClick={() =>
//               navigate(`/brand-details/${brand.id}`, { state: { brand } })
//             }
//             className="cursor-pointer"
//           >
//             <img
//               src={brand.img}
//               alt={brand.name}
//               className="w-32 h-32 object-cover mb-4"
//             />
//           </div>

//           <p>
//             <strong>Revenue Made: </strong>${brand.revenue.toLocaleString()}
//           </p>
//           <p>
//             <strong>Commission Revenue: </strong>$
//             {brand.commission.toLocaleString()}
//           </p>

//           {/* Product List and Order Section with active underline */}
//           <div className="flex mt-4 border-b border-gray-300 pb-2">
//             <h1
//               className={`mr-4 cursor-pointer pb-2 ${
//                 activeSection === "product"
//                   ? "font-semibold text-blue-500 border-b-2 border-blue-500"
//                   : ""
//               }`}
//               onClick={toggleProductList}
//             >
//               Product Listed
//             </h1>
//             <h1
//               className={`cursor-pointer pb-2 ${
//                 activeSection === "order"
//                   ? "font-semibold text-blue-500 border-b-2 border-blue-500"
//                   : ""
//               }`}
//               onClick={toggleOrder}
//             >
//               Order
//             </h1>
//           </div>

//           {/* Conditionally render Product List component */}
//           {showProductList && <ProductList />}

//           {/* Conditionally render Order component */}
//           {showOrder && <Order />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandDetails;




































import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Action from "../assets/action.png";
import Logo1 from "../assets/logo1.png";
import ProductList from "./ProductList";
import Order from "./Order";

const BrandDetails = () => {
  const { state } = useLocation();
  const { brand } = state; // Getting brand from state

  const [showProductList, setShowProductList] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/brand"); // Navigate back to the list
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
    setActiveSection("product");
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setActiveSection("order");
    setShowProductList(false);
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      {/* Action icon with an arrow that redirects to BrandList */}
      <div
        className="flex p-4 gap-2 cursor-pointer"
        onClick={handleNavigateBack}
      >
        <img
          src={Action}
          alt="icon"
          className="w-8 h-8 transition-transform transform hover:scale-125"
        />
        <h1 className="text-3xl font-semibold">Brand Details</h1>
      </div>

      <div className="border-2 border-[#e3e3e3] rounded-lg w-full min-h-screen">
        <div className="bg-white p-6">
          {/* Logo */}
          <div className="flex flex-col mb-4">
            <img src={Logo1} alt="Logo" className="w-32 h-32 object-contain" />
          </div>

          {/* Brand Name and Image */}
          <div className="cursor-pointer">
            <img
              src={brand.img}
              alt={brand.name}
              className="w-32 h-32 object-cover mb-4"
            />
          </div>

          <p>
            <strong>Revenue Made: </strong>${brand.revenue.toLocaleString()}
          </p>
          <p>
            <strong>Commission Revenue: </strong>$
            {brand.commission.toLocaleString()}
          </p>

          {/* Sections for Product and Order */}
          <div className="flex mt-4 border-b border-[#e3e3e3] pb-2">
            <h1
              className={`mr-4 cursor-pointer pb-2 ${
                activeSection === "product"
                  ? "font-semibold text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={toggleProductList}
            >
              Product Listed
            </h1>
            <h1
              className={`cursor-pointer pb-2 ${
                activeSection === "order"
                  ? "font-semibold text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={toggleOrder}
            >
              Order
            </h1>
          </div>

          {/* Conditionally render Product List and Order */}
          {showProductList && <ProductList />}
          {showOrder && <Order />}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
