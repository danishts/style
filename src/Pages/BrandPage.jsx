// import React, { useState } from "react";
// import { FaSearch, FaTrashAlt, FaChevronDown, FaTimes } from "react-icons/fa";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import v3Image from "../assets/v3.png"; // Adjust this path if needed

// function BrandPage() {
//   const [searchBrand, setSearchBrand] = useState("");
//   const [selectedOption, setSelectedOption] = useState("Default");

//   const [currentPage, setCurrentPage] = useState(1);
//   const brandsPerPage = 8;

//   const [brands, setBrands] = useState([
//     {
//       id: 1,
//       name: "Nike",
//       revenue: 12500,
//       commission: 1200,
//       totalOrders: 48,
//       ordersInQueue: 5,
//       img: v3Image,
//     },
//     {
//       id: 2,
//       name: "Adidas",
//       revenue: 9800,
//       commission: 850,
//       totalOrders: 32,
//       ordersInQueue: 2,
//       img: v3Image,
//     },
//     {
//       id: 3,
//       name: "Puma",
//       revenue: 7200,
//       commission: 650,
//       totalOrders: 27,
//       ordersInQueue: 3,
//       img: v3Image,
//     },
//     {
//       id: 4,
//       name: "Reebok",
//       revenue: 9800,
//       commission: 1100,
//       totalOrders: 34,
//       ordersInQueue: 6,
//       img: v3Image,
//     },
//     {
//       id: 5,
//       name: "Under Armour",
//       revenue: 8600,
//       commission: 920,
//       totalOrders: 40,
//       ordersInQueue: 4,
//       img: v3Image,
//     },
//     {
//       id: 6,
//       name: "New Balance",
//       revenue: 5400,
//       commission: 500,
//       totalOrders: 22,
//       ordersInQueue: 1,
//       img: v3Image,
//     },
//     {
//       id: 7,
//       name: "Asics",
//       revenue: 11000,
//       commission: 1150,
//       totalOrders: 45,
//       ordersInQueue: 3,
//       img: v3Image,
//     },
//     {
//       id: 8,
//       name: "Fila",
//       revenue: 6500,
//       commission: 700,
//       totalOrders: 30,
//       ordersInQueue: 4,
//       img: v3Image,
//     },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [brandToDelete, setBrandToDelete] = useState(null);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const openDeleteModal = (brand) => {
//     setBrandToDelete(brand);
//     setIsModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setBrandToDelete(null);
//     setIsModalOpen(false);
//   };

//   const handleDelete = () => {
//     const updatedBrands = brands.filter((b) => b.id !== brandToDelete.id);
//     setBrands(updatedBrands);
//     window.alert(`Brand "${brandToDelete.name}" deleted successfully.`);
//     closeDeleteModal();
//   };

//   // Sorting logic
//   const sortedBrands = [...brands].sort((a, b) => {
//     if (selectedOption === "Revenue High") return b.revenue - a.revenue;
//     if (selectedOption === "Orders High") return b.totalOrders - a.totalOrders;
//     return 0;
//   });

//   const filteredBrands = sortedBrands.filter((brand) =>
//     brand.name.toLowerCase().includes(searchBrand.toLowerCase())
//   );

//   const indexOfLastBrand = currentPage * brandsPerPage;
//   const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
//   const currentBrands = filteredBrands.slice(
//     indexOfFirstBrand,
//     indexOfLastBrand
//   );
//   const totalPages = Math.ceil(filteredBrands.length / brandsPerPage);

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       <div className="border-2 border-gray-300 rounded-lg w-full min-h-screen p-6">
//         {/* Header + Filters */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800">All Brands</h2>

//           <div className="flex flex-wrap items-center gap-4 justify-end w-full sm:w-auto">
//             {/* Sorting */}
//             <div className="relative w-[150px]">
//               <select
//                 value={selectedOption}
//                 onChange={(e) => setSelectedOption(e.target.value)}
//                 className="appearance-none border-2 border-gray-300 rounded-lg py-2 px-4 pr-10 w-full bg-white text-sm text-gray-700"
//               >
//                 <option value="Default">Default</option>
//                 <option value="Revenue High">Revenue High</option>
//                 <option value="Orders High">Orders High</option>
//               </select>
//               <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
//             </div>

//             {/* Search */}
//             <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-3 py-2 w-[238px]">
//               <FaSearch className="text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search by brand"
//                 value={searchBrand}
//                 onChange={(e) => setSearchBrand(e.target.value)}
//                 className="w-full bg-transparent outline-none text-sm"
//               />
//             </div>

//             {/* Tabs */}
//             <div className="flex items-center gap-2 text-sm font-medium">
//               <button
//                 className={`px-4 py-2 rounded ${
//                   location.pathname === "/brand"
//                     ? "text-black font-bold bg-gray-200"
//                     : "text-gray-600"
//                 }`}
//               >
//                 Brand
//               </button>
//               <Link to="/customer">
//                 <span
//                   className={`px-4 py-2 rounded ${
//                     location.pathname === "/customer"
//                       ? "text-black font-bold bg-gray-200"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   Customer
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Brand Table */}
//         <div className="bg-white p-6 rounded-xl">
//           <table className="min-w-full text-sm text-left text-gray-600">
//             <thead className="border-b font-semibold">
//               <tr>
//                 <th className="px-4 py-3">Brand Name</th>
//                 <th className="px-4 py-3">Revenue Made</th>
//                 <th className="px-4 py-3">Commission Revenue</th>
//                 <th className="px-4 py-3">Total Orders</th>
//                 <th className="px-4 py-3">Orders In Queue</th>
//                 <th className="px-4 py-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBrands.map((brand) => (
//                 <tr
//                   key={brand.id}
//                   className="border-b border-dashed hover:bg-gray-50 transition"
//                 >
//                   <td className="px-4 py-4 flex items-center gap-3 font-medium">
//                     <img
//                       src={brand.img}
//                       alt={brand.name}
//                       className="w-8 h-8 rounded-full object-cover"
//                     />
//                     {brand.name}
//                   </td>
//                   <td className="px-4 py-3">
//                     ${brand.revenue.toLocaleString()}
//                   </td>
//                   <td className="px-4 py-3">
//                     ${brand.commission.toLocaleString()}
//                   </td>
//                   <td className="px-4 py-3">{brand.totalOrders}</td>
//                   <td className="px-4 py-3">{brand.ordersInQueue}</td>
//                   <td className="px-4 py-3">
//                     <button
//                       onClick={() => openDeleteModal(brand)}
//                       className="text-red-500 hover:text-red-700"
//                       title="Delete"
//                     >
//                       <FaTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {currentBrands.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-gray-400">
//                     No brands found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center gap-4 mt-4">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-4 py-2 rounded-lg ${
//                 currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Delete Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-2xl font-semibold">Remove Brand</h1>
//               <button
//                 onClick={closeDeleteModal}
//                 className="text-gray-600 text-xl"
//               >
//                 <FaTimes />
//               </button>
//             </div>
//             <div className="text-center mb-4">
//               <div className="flex justify-center">
//                 <FaTrashAlt className="text-red-500 text-6xl mb-4" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">
//                 Are you sure you want to remove "{brandToDelete?.name}" from
//                 Styyl?
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 This action cannot be undone.
//               </p>
//             </div>
//             <div className="border-t border-gray-300 my-4"></div>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={closeDeleteModal}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 No
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrandPage;






















import React, { useState } from "react";
import { FaSearch, FaTrashAlt, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import v3Image from "../assets/v3.png"; // Adjust this path if needed

function BrandPage() {
  const [searchBrand, setSearchBrand] = useState("");
  const [selectedOption, setSelectedOption] = useState("Default");

  const [currentPage, setCurrentPage] = useState(1);
  const brandsPerPage = 8;

  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Nike",
      revenue: 12500,
      commission: 1200,
      totalOrders: 48,
      ordersInQueue: 5,
      img: v3Image,
    },
    {
      id: 2,
      name: "Adidas",
      revenue: 9800,
      commission: 850,
      totalOrders: 32,
      ordersInQueue: 2,
      img: v3Image,
    },
    {
      id: 3,
      name: "Puma",
      revenue: 7200,
      commission: 650,
      totalOrders: 27,
      ordersInQueue: 3,
      img: v3Image,
    },
    {
      id: 4,
      name: "Reebok",
      revenue: 9800,
      commission: 1100,
      totalOrders: 34,
      ordersInQueue: 6,
      img: v3Image,
    },
    {
      id: 5,
      name: "Under Armour",
      revenue: 8600,
      commission: 920,
      totalOrders: 40,
      ordersInQueue: 4,
      img: v3Image,
    },
    {
      id: 6,
      name: "New Balance",
      revenue: 5400,
      commission: 500,
      totalOrders: 22,
      ordersInQueue: 1,
      img: v3Image,
    },
    {
      id: 7,
      name: "Asics",
      revenue: 11000,
      commission: 1150,
      totalOrders: 45,
      ordersInQueue: 3,
      img: v3Image,
    },
    {
      id: 8,
      name: "Fila",
      revenue: 6500,
      commission: 700,
      totalOrders: 30,
      ordersInQueue: 4,
      img: v3Image,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const openDeleteModal = (brand) => {
    setBrandToDelete(brand);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setBrandToDelete(null);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const updatedBrands = brands.filter((b) => b.id !== brandToDelete.id);
    setBrands(updatedBrands);
    window.alert(`Brand "${brandToDelete.name}" deleted successfully.`);
    closeDeleteModal();
  };

  // Sorting logic
  const sortedBrands = [...brands].sort((a, b) => {
    if (selectedOption === "Revenue High") return b.revenue - a.revenue;
    if (selectedOption === "Orders High") return b.totalOrders - a.totalOrders;
    return 0;
  });

  const filteredBrands = sortedBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const indexOfLastBrand = currentPage * brandsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
  const currentBrands = filteredBrands.slice(
    indexOfFirstBrand,
    indexOfLastBrand
  );
  const totalPages = Math.ceil(filteredBrands.length / brandsPerPage);

  // Navigate to Brand Details on row click
  const handleBrandClick = (brand) => {
    navigate("/brand-details", { state: { brand } });
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      <div className="border-2 border-gray-300 rounded-lg  overflow   w-full min-h-screen p-6">
        {/* Header + Filters */}

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className=" text-[20px] font-inter text-[#3F4254]">All Brands</h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full sm:w-auto">
            {/* Sorting Dropdown */}
            <div className="relative w-full sm:w-[150px]">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="appearance-none border-2 border-gray-300 rounded-lg py-2 px-4 pr-10 w-full  bg-white font-inter text-[12px] text-[#7E8299]"
              >
                <option value="Default ">Default</option>
                <option value="Revenue High">Revenue High</option>
                <option value="Orders High">Orders High</option>
              </select>
              <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-3 py-2 font-inter text-[12px] text-[#7E8299]  w-full sm:w-[238px]">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search by brand"
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            {/* Tabs (fixed alignment) */}
            <div className="flex items-center gap-2 text-sm font-inter text-[13px] text-[#7E8299] h-full">
              <button
                className={`px-4 py-2 rounded ${
                  location.pathname === "/brand"
                    ? "text-black font-bold bg-gray-200"
                    : "text-[#A1A5B7]"
                }`}
              >
                Brand
              </button>
              <Link to="/customer">
                <span
                  className={`px-4 py-2 rounded ${
                    location.pathname === "/customer"
                      ? "text-black font-bold bg-gray-200"
                      : "text-gray-600"
                  }`}
                >
                  Customer
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Table */}
        <div className="bg-white   text-[16px] font-inter text-[#7E8299]  p-6 rounded-xl">
          <table className="min-w-full  text-sm text-left text-gray-600">
            <thead className="border-dashed border-b border-[#E3E3E3] font-inter text-[16px] text-[#A1A5B7]">
              <tr>
                <th className="px-4 py-3">Brand Name</th>
                <th className="px-4 py-3">Revenue Made</th>
                <th className="px-4 py-3">Commission Revenue</th>
                <th className="px-4 py-3">Total Orders</th>
                <th className="px-4 py-3">Orders In Queue</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBrands.map((brand) => (
                <tr
                  key={brand.id}
                  className="border-dashed border-b border-[#E3E3E3]  font-inter text-[16px] text-[#7E8299]  hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleBrandClick(brand)} // Handle row click
                >
                  <td className="px-4 py-4 flex items-center gap-3 font-medium">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {brand.name}
                  </td>
                  <td className="px-4 font-inter text-[16px] text-[#252525]  py-3">
                    ${brand.revenue.toLocaleString()}
                  </td>
                  <td className="px-4 font-inter text-[16px] text-[#50CD89]  py-3">
                    ${brand.commission.toLocaleString()}
                  </td>
                  <td className="px-4 font-inter text-[16px] text-[#7E8299]  py-3">
                    {brand.totalOrders}
                  </td>
                  <td className="px-4 font-inter text-[16px] text-[#7E8299]  py-3">
                    {brand.ordersInQueue}
                  </td>
                  <td className="px-4 font-inter text-[16px] text-[#7E8299]  py-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click event from firing
                        openDeleteModal(brand);
                      }}
                      className="text-[#A1A5B7]   bg-[#F1F1F2] w-[30px] h-[37px] flex justify-center items-center hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrashAlt className=" bg-[#f1f1f2] w-[12px] h-[16px]" />
                    </button>
                  </td>
                </tr>
              ))}
              {currentBrands.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-400">
                    No brands found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-4">
          {/* Pagination buttons */}
        </div>

        {/* Delete Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
            <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Remove Brand</h1>
                <button
                  onClick={closeDeleteModal}
                  className="text-gray-600 text-xl"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="text-center mb-4">
                <div className="flex justify-center">
                  <FaTrashAlt className="text-red-500 text-6xl mb-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Are you sure you want to remove "{brandToDelete?.name}" from
                  Styyl?
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  This action cannot be undone.
                </p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                >
                  No
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrandPage;
