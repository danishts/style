// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Action from "../assets/action.png";

// function CustomerDetails() {
//   const { state } = useLocation();
//   const { customer } = state || {};

//   if (!customer) {
//     return <div>No customer data found.</div>;
//   }

//   const navigate = useNavigate();

//   const handleNavigateBack = () => {
//     navigate("/customer");
//   };

//   const [sortOption, setSortOption] = useState("All Orders");
//   const [searchTerm, setSearchTerm] = useState("");

//   const recentOrders = [
//     {
//       orderId: "ORD001",
//       total: 250,
//       date: "2023-04-25",
//       product: "Wireless Mouse",
//       status: "Delivered",
//     },
//     {
//       orderId: "ORD002",
//       total: 500,
//       date: "2023-04-22",
//       product: "Bluetooth Headphones",
//       status: "Pending",
//     },
//     {
//       orderId: "ORD003",
//       total: 150,
//       date: "2023-04-20",
//       product: "Keyboard",
//       status: "Cancelled",
//     },
//     {
//       orderId: "ORD004",
//       total: 300,
//       date: "2023-04-18",
//       product: "Monitor",
//       status: "Shipped",
//     },
//     {
//       orderId: "ORD005",
//       total: 200,
//       date: "2023-04-15",
//       product: "USB-C Hub",
//       status: "Delivered",
//     },
//   ];

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredOrders = recentOrders.filter((order) =>
//     order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedOrders = filteredOrders.sort((a, b) => {
//     if (sortOption === "High Order") {
//       return b.total - a.total;
//     } else if (sortOption === "Low Order") {
//       return a.total - b.total;
//     }
//     return 0;
//   });

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       <div
//         className="flex p-4 gap-2 cursor-pointer"
//         onClick={handleNavigateBack}
//       >
//         <img
//           src={Action}
//           alt="icon"
//           className="w-8 h-8 transition-transform transform hover:scale-125"
//         />
//         <h1 className="text-3xl font-semibold">Customer Details</h1>
//       </div>

//       <div className="border p-6 rounded-lg bg-white shadow">
//         {/* Image and Name */}
//         <div className="flex items-center mb-6">
//           <img
//             src={customer.img}
//             alt={customer.name}
//             className="w-24 h-24 rounded-full object-cover mr-6"
//           />
//           <h2 className="text-2xl font-bold">{customer.name}</h2>
//         </div>

//         {/* Recent Orders Section */}
//         <div className="mt-6 border-[3px] border-black rounded-xl p-6">
//           <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
//             <h3 className="text-2xl font-bold">
//               Recent Orders ({recentOrders.length})
//             </h3>

//             <div className="flex gap-4">
//               <select
//                 value={sortOption}
//                 onChange={handleSortChange}
//                 className="border-2 border-gray-300 rounded-lg px-4 py-2 text-sm"
//               >
//                 <option value="All Orders">All Orders</option>
//                 <option value="High Order">High Order</option>
//                 <option value="Low Order">Low Order</option>
//               </select>

//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search by Order ID"
//                 className="border-2 border-gray-300 rounded-lg px-4 py-2 text-sm"
//               />
//             </div>
//           </div>

//           <table className="min-w-full text-sm text-left text-gray-700 bg-white rounded-lg overflow-hidden">
//             <thead className="bg-gray-100 font-semibold">
//               <tr>
//                 <th className="px-4 py-3 border-b">Order ID</th>
//                 <th className="px-4 py-3 border-b">Product Detail</th>
//                 <th className="px-4 py-3 border-b">Amount</th>
//                 <th className="px-4 py-3 border-b">Order Date</th>
//                 <th className="px-4 py-3 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedOrders.length > 0 ? (
//                 sortedOrders.map((order) => (
//                   <tr
//                     key={order.orderId}
//                     className="hover:bg-gray-50 border-b last:border-0"
//                   >
//                     <td className="px-4 py-3">{order.orderId}</td>
//                     <td className="px-4 py-3">{order.product}</td>
//                     <td className="px-4 py-3">${order.total}</td>
//                     <td className="px-4 py-3">{order.date}</td>
//                     <td className="px-4 py-3">{order.status}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-400">
//                     No matching orders found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerDetails;

















import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Action from "../assets/action.png";

function CustomerDetails() {
  const { state } = useLocation();
  const { customer } = state || {};

  if (!customer) {
    return <div>No customer data found.</div>;
  }

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/customer");
  };

  const [sortOption, setSortOption] = useState("All Orders");
  const [searchTerm, setSearchTerm] = useState("");

  const recentOrders = [
    {
      orderId: "ORD001",
      product: "Shoes",
      total: 250,
      date: "2023-04-25",
      status: "Delivered",
    },
    {
      orderId: "ORD002",
      product: "Shirt",
      total: 500,
      date: "2023-04-22",
      status: "Pending",
    },
    {
      orderId: "ORD003",
      product: "Bag",
      total: 150,
      date: "2023-04-20",
      status: "Shipped",
    },
    {
      orderId: "ORD004",
      product: "Watch",
      total: 300,
      date: "2023-04-18",
      status: "Cancelled",
    },
    {
      orderId: "ORD005",
      product: "Cap",
      total: 200,
      date: "2023-04-15",
      status: "Delivered",
    },
  ];

  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredOrders = recentOrders.filter((order) =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortOption === "High Order") return b.total - a.total;
    if (sortOption === "Low Order") return a.total - b.total;
    return 0;
  });

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      <div
        className="flex p-4 gap-2 cursor-pointer"
        onClick={handleNavigateBack}
      >
        <img
          src={Action}
          alt="icon"
          className="w-8 h-8 transition-transform transform hover:scale-125"
        />
        <h1 className="text-3xl font-semibold">Customer Details</h1>
      </div>

      <div className="border p-6 border-[#e3e3e3] rounded-lg bg-white shadow">
        <div className="flex items-center mb-6">
          <img
            src={customer.img}
            alt={customer.name}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <h2 className="text-2xl font-bold">{customer.name}</h2>
        </div>

        <div className="mt-6">
          {/* Outer wrapper with overflow handling */}
          <div className="w-full border-[3px] border-[#e3e3e3] rounded-xl p-4 sm:p-6 overflow-auto">
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <h3 className="text-2xl font-bold">
                Recent Orders ({recentOrders.length})
              </h3>

              <div className="flex gap-4">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="border-2 border-borderColour rounded-lg px-4 py-2 text-sm"
                >
                  <option value="All Orders">All Orders</option>
                  <option value="High Order">High Order</option>
                  <option value="Low Order">Low Order</option>
                </select>

                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by Order ID"
                    className="pl-10 pr-4 py-2 border-2 border-borderColour rounded-lg text-sm w-full"
                  />
                </div>
              </div>
            </div>

            {/* Table for Orders */}
            <table className="min-w-full text-sm text-left text-gray-700 bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b">Order ID</th>
                  <th className="px-4 py-3 border-b">Product Detail</th>
                  <th className="px-4 py-3 border-b">Amount</th>
                  <th className="px-4 py-3 border-b">Order Date</th>
                  <th className="px-4 py-3 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.length > 0 ? (
                  sortedOrders.map((order) => (
                    <tr
                      key={order.orderId}
                      className="hover:bg-gray-50 border-b last:border-0"
                    >
                      <td className="px-4 py-3">{order.orderId}</td>
                      <td className="px-4 py-3">{order.product}</td>
                      <td className="px-4 py-3">${order.total}</td>
                      <td className="px-4 py-3">{order.date}</td>
                      <td className="px-4 py-3">{order.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-400">
                      No matching orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
