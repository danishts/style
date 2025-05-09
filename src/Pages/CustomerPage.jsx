



// import React, { useState } from "react";
// import { FaSearch, FaTrashAlt, FaChevronDown, FaTimes } from "react-icons/fa";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import v3Image from "../assets/v3.png"; // Adjust this path if needed

// function CustomerPage() {
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

//   const filteredBrands = brands.filter((brand) =>
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
//       <div className="border-2 border-gray-300 rounded-r-2xl w-full min-h-screen p-6">
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
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50  z-10">
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

// export default CustomerPage;








// import React, { useState } from "react";
// import { FaSearch, FaTrashAlt, FaChevronDown, FaTimes } from "react-icons/fa";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import v3Image from "../assets/v3.png"; // User image asset

// function CustomerPage() {
//   const [searchCustomerBrand, setSearchCustomerBrand] = useState("");
//   const [selectedOption, setSelectedOption] = useState("Both");

//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 8;

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       brand: "Nike",
//       spending: 250,
//       productsBought: 5,
//       email: "john@example.com",
//       joinedAt: "2023-11-20",
//       img: v3Image,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       brand: "Adidas",
//       spending: 300,
//       productsBought: 3,
//       email: "jane@example.com",
//       joinedAt: "2023-09-10",
//       img: v3Image,
//     },
//     // Add more users if needed
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);

//   const navigate = useNavigate();
//   const location = useLocation(); // Get current route

//   const openDeleteModal = (user) => {
//     setUserToDelete(user);
//     setIsModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setUserToDelete(null);
//     setIsModalOpen(false);
//   };

//   const handleDelete = () => {
//     const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
//     setUsers(updatedUsers);
//     window.alert(`User ${userToDelete.name} has been successfully deleted.`);
//     closeDeleteModal();
//   };

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchCustomerBrand.toLowerCase()) ||
//       user.brand.toLowerCase().includes(searchCustomerBrand.toLowerCase())
//   );

//   const sortedUsers = filteredUsers.sort((a, b) => {
//     if (selectedOption === "Best Sellers First")
//       return b.productsBought - a.productsBought;
//     if (selectedOption === "Highest Spending First")
//       return b.spending - a.spending;
//     return 0;
//   });

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const navigateToBrand = () => {
//     navigate("/brand");
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       <div className="border-2 border-gray-300 rounded-lg w-full min-h-screen p-6">
//         {/* Filters */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800">All Users</h2>

//           <div className="flex flex-wrap items-center gap-4 flex-grow justify-end relative">
//             {/* Sorting */}
//             <div className="relative w-[143.67px]">
//               <select
//                 value={selectedOption}
//                 onChange={(e) => setSelectedOption(e.target.value)}
//                 className="appearance-none border-2 border-gray-300 rounded-lg py-2 px-4 pr-10 w-full bg-white text-sm text-gray-700"
//               >
//                 <option value="Both">Both</option>
//                 <option value="Best Sellers First">High Spending</option>
//                 <option value="Highest Spending First">Low Spending</option>
//               </select>
//               <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
//             </div>

//             {/* Search */}
//             <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-3 py-2 max-w-xs w-[238px]">
//               <FaSearch className="text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search by customer or brand"
//                 value={searchCustomerBrand}
//                 onChange={(e) => setSearchCustomerBrand(e.target.value)}
//                 className="w-full bg-transparent outline-none text-sm"
//               />
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex items-center gap-2 text-sm font-medium h-full">
//               <button
//                 onClick={navigateToBrand}
//                 className={`px-4 py-2 flex items-center h-full cursor-pointer rounded ${
//                   location.pathname === "/brand"
//                     ? "text-black font-bold bg-gray-200"
//                     : "text-gray-600"
//                 }`}
//               >
//                 Brand
//               </button>
//               <Link to="/customer">
//                 <span
//                   className={`px-4 py-2 flex items-center h-full cursor-pointer rounded ${
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

//         {/* Users Table */}
//         <div className="bg-white p-6 rounded-xl">
//           <table className="min-w-full text-sm text-left text-gray-600">
//             <thead className="border-b border-dotted font-semibold">
//               <tr>
//                 <th className="px-4 py-3">Customer</th>
//                 <th className="px-4 py-3">Email</th>
//                 <th className="px-4 py-3">Total Spendings</th>
//                 <th className="px-4 py-3">Joined At</th>
//                 <th className="px-4 py-3">Active</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.map((user) => (
//                 <tr
//                   key={user.id}
//                   className="border-b border-dashed hover:bg-gray-50 transition duration-200"
//                 >
//                   <td className="px-4 py-4 font-medium flex items-center gap-3">
//                     <img
//                       src={user.img}
//                       alt={user.name}
//                       className="w-8 h-8 rounded-full object-cover"
//                     />
//                     {user.name}
//                   </td>
//                   <td className="px-4 py-3">{user.email}</td>
//                   <td className="px-4 py-3">${user.spending}</td>
//                   <td className="px-4 py-3">{user.joinedAt}</td>
//                   <td className="px-4 py-3">
//                     <button
//                       onClick={() => openDeleteModal(user)}
//                       className="text-red-500 hover:text-red-700 transition"
//                       title="Delete"
//                     >
//                       <FaTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {currentUsers.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-400">
//                     No matching users found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center gap-4 mt-4">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`px-4 py-2 rounded-lg ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-3xl font-semibold">Remove User</h1>
//               <button
//                 onClick={closeDeleteModal}
//                 className="text-gray-600"
//                 style={{ fontSize: "1.5rem" }}
//               >
//                 <FaTimes />
//               </button>
//             </div>
//             <div className="text-center mb-4">
//               <div className="flex justify-center">
//                 <FaTrashAlt className="text-red-500 text-7xl mb-4" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">
//                 Are you sure you want to remove{" "}
//                 <span className="font-semibold text-red-500">
//                   "{userToDelete?.brand}"
//                 </span>{" "}
//                 from Styyl?
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 You won’t be able to recover it.
//               </p>
//             </div>
//             <div className="border-t border-gray-300 my-4"></div>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={closeDeleteModal}
//                 className="px-4 w-72 py-2 bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 No
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 w-72 py-2 bg-red-500 text-white rounded-lg"
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

// export default CustomerPage;






































import React, { useState } from "react";
import { FaSearch, FaTrashAlt, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import v3Image from "../assets/v3.png";

function CustomerPage() {
  const [searchCustomerBrand, setSearchCustomerBrand] = useState("");
  const [selectedOption, setSelectedOption] = useState("Both");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      brand: "Nike",
      spending: 250,
      productsBought: 5,
      email: "john@example.com",
      joinedAt: "2023-11-20",
      img: v3Image,
    },
    {
      id: 2,
      name: "Jane Smith",
      brand: "Adidas",
      spending: 300,
      productsBought: 3,
      email: "jane@example.com",
      joinedAt: "2023-09-10",
      img: v3Image,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setUserToDelete(null);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(updatedUsers);
    window.alert(`User ${userToDelete.name} has been successfully deleted.`);
    closeDeleteModal();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchCustomerBrand.toLowerCase()) ||
      user.brand.toLowerCase().includes(searchCustomerBrand.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (selectedOption === "Best Sellers First")
      return b.productsBought - a.productsBought;
    if (selectedOption === "Highest Spending First")
      return b.spending - a.spending;
    return 0;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigateToBrand = () => navigate("/brand");

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      <div className="border-2 border-gray-300 overflow  rounded-lg w-full min-h-screen p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className=" text-[20px] font-inter text-[#3F4254]">All Users</h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full sm:w-auto">
            {/* Sorting */}
            <div className="relative w-full sm:w-[143.67px]">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="appearance-none border-2 text-[12px] font-inter text-[#3F4254] border-gray-300 rounded-lg py-2 px-4 pr-10 w-full bg-white text-sm"
              >
                <option value="Both">Both</option>
                <option value="Best Sellers First">High Spending</option>
                <option value="Highest Spending First">Low Spending</option>
              </select>
              <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 border-2 text-[1px] font-inter text-[#3F4254] border-gray-300 rounded-lg px-3 py-2 w-full sm:w-[238px]">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search by customer or brand"
                value={searchCustomerBrand}
                onChange={(e) => setSearchCustomerBrand(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 text-sm font-medium h-full">
              <button
                onClick={navigateToBrand}
                className={`px-4 py-2 flex items-center h-full cursor-pointer rounded ${
                  location.pathname === "/brand"
                    ? "text-black font-bold bg-gray-200"
                    : "text-gray-600"
                }`}
              >
                Brand
              </button>
              <Link to="/customer">
                <span
                  className={`px-4 py-2 flex items-center h-full cursor-pointer rounded ${
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

        {/* Users Table */}
        <div className="bg-white overflow-x-scroll p-6 rounded-xl">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="border-dashed border-b border-[#E3E3E3] text-[16px] font-inter text-[#A1A5B7]">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Total Spendings</th>
                <th className="px-4 py-3">Joined At</th>
                <th className="px-4 py-3">Active</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  onClick={() =>
                    navigate("/customer-details", { state: { customer: user } })
                  }
                  className="border-dashed border-b border-[#E3E3E3] hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <td className="px-4 py-4 font-medium text-[16px] font-inter text-[#7E8299]  flex items-center gap-3">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-8 h-8 rounded-full  object-cover"
                    />
                    {user.name}
                  </td>
                  <td className="px-4 text-[16px] font-inter text-[#7E8299] py-3">
                    {user.email}
                  </td>
                  <td className="px-4 text-[16px] font-inter text-[#252525] py-3">
                    ${user.spending}
                  </td>
                  <td className="px-4 text-[16px] font-inter text-[#7E8299] py-3">
                    {user.joinedAt}
                  </td>
                  <td className="px-4 text-[16px] font-inter text-[#7E8299] py-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Stop navigation on delete click
                        openDeleteModal(user);
                      }}
                      className="text-[#A1A5B7] flex items-center justify-center  bg-[#F1F1F2] w-[30px] h-[37px] hover:text-red-700 transition"
                      title="Delete"
                    >
                      <FaTrashAlt className=" bg-[#f1f1f2] w-[12px] h-[16px]" />
                    </button>
                  </td>
                </tr>
              ))}
              {currentUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-400">
                    No matching users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10 bg-black/30">
          <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-semibold">Remove User</h1>
              <button
                onClick={closeDeleteModal}
                className="text-gray-600 text-xl"
              >
                <FaTimes />
              </button>
            </div>
            <div className="text-center mb-4">
              <div className="flex  justify-center">
                <FaTrashAlt className="text-red-500 text-7xl mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Are you sure you want to remove{" "}
                <span className="font-semibold text-red-500">
                  "{userToDelete?.brand}"
                </span>{" "}
                from Styyl?
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                You won’t be able to recover it.
              </p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeDeleteModal}
                className="px-4 w-72 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                className="px-4 w-72 py-2 bg-red-500 text-white rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerPage;
