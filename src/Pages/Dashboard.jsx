
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import { FaCalendarAlt, FaSearch } from "react-icons/fa";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import v3Img from "../assets/v3.png"; // Update path if needed
// import Table from "../assets/Table.png";

// import {
//   Chart as ChartJS, LineElement, CategoryScale, LinearScale ,PointElement,  Tooltip, Legend,
// } from "chart.js";

// ChartJS.register(
//   LineElement, CategoryScale,  LinearScale, PointElement, Tooltip,Legend
// );

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const data = {
//     labels: ["Apr 01", "Apr 03", "Apr 05", "Apr 07", "Apr 09", "Apr 11", "Apr 13"],
//     datasets: [
//       {
//         label: "",
//         data: [, 200, 150, 300, 250, 400, 350],
//         borderColor: "#3BCCDA",
//         backgroundColor: "rgba(59, 204, 218, 0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { color: "#4B5563" },
//       },
//       x: {
//         ticks: { color: "#4B5563" },
//       },
//     },
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Chart + Info Boxes */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Chart Box */}
//         <div className="bg-white p-4 border-2 border-[#e3e3e3] rounded-2xl w-full lg:w-3/5">
//           <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Revenue Made
//               </h2>
//               <p className="text-3xl font-bold text-[#65ccda] mt-1">
//                 $12,706.02
//               </p>
//             </div>

//             {/* Calendar Picker */}
//             <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200 relative">
//               <span>{selectedDate.toLocaleDateString()}</span>
//               <FaCalendarAlt />
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="MMM dd, yyyy"
//                 className="absolute top-10 right-0 z-50"
//                 popperPlacement="bottom-end"
//               />
//             </div>
//           </div>

//           {/* Chart */}
//           <div className="h-[290px] w-full pt-4">
//             <Line data={data} options={options} />
//           </div>
//         </div>

//         {/* Info Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/5">
//           {[
//             { label: "Total Users", value: "1,245" },
//             { label: "Total Sales", value: "$58,700" },
//             { label: "Active Sessions", value: "324" },
//             { label: "Pending Orders", value: "87" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-4 border-2 border-[#e3e3e3] rounded-2xl w-full sm:w-[246px] h-[201px] flex flex-col "
//             >
//               <p className="text-2xl font-bold">{item.value}</p>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 {item.label}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recent Orders Box */}
//       <div className="w-full h-auto mt-12 bg-white overflow-hidden rounded-xl border border-[#E3E3E3] p-8">
//         <div className="flex justify-between items-center w-full mb-6">
//           <h2 className="text-[#3F4254] text-[20px] font-semibold">
//             Recent Orders
//           </h2>

//           {/* Search Inputs */}
//           <div className="flex justify-end items-center gap-4 w-[738px]">
//             {/* Search Customer/Brand */}
//             <div className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md flex items-center gap-3 px-3">
//               <div className="w-[38px] h-full flex justify-center items-center bg-[#F9F9F9] rounded-l-md">
//                 <FaSearch className="text-[#A1A5B7] text-sm" />
//               </div>
//               <span className="text-xs font-semibold text-[#7E8299] leading-3">
//                 Search any customer/brand
//               </span>
//             </div>

//             {/* Search Order ID */}
//             <div className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md flex items-center gap-3 px-3">
//               <div className="w-[38px] h-full flex justify-center items-center bg-[#F9F9F9] rounded-l-md">
//                 <FaSearch className="text-[#A1A5B7] text-sm" />
//               </div>
//               <span className="text-xs font-semibold text-[#7E8299] leading-3">
//                 Search Order ID
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Brand List */}
//         {/* Orders Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white text-sm text-left text-gray-600">
//             <thead className="border-b border-dotted text-gray-600 font-semibold">
//               <tr>
//                 <th className="px-4 py-3">Order ID</th>
//                 <th className="px-4 py-3">Customer</th>
//                 <th className="px-4 py-3">Product Detail</th>
//                 <th className="px-4 py-3">Brand</th>
//                 <th className="px-4 py-3">Amount</th>
//                 <th className="px-4 py-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 {
//                   id: "#1021",
//                   customer: "John Doe",
//                   product: "Hair Oil - Herbal 250ml",
//                   brand: "Dove",
//                   amount: "$25.00",
//                   status: "Pending",
//                 },
//                 {
//                   id: "#1022",
//                   customer: "Jane Smith",
//                   product: "Face Wash - Aloe Vera",
//                   brand: "Himalaya",
//                   amount: "$18.50",
//                   status: "Completed",
//                 },
//                 {
//                   id: "#1023",
//                   customer: "Ali Khan",
//                   product: "Beard Wax - Organic",
//                   brand: "UrbanGabru",
//                   amount: "$22.00",
//                   status: "Processing",
//                 },
//                 {
//                   id: "#1024",
//                   customer: "Ayesha Bano",
//                   product: "Shampoo - Anti Dandruff",
//                   brand: "Head & Shoulders",
//                   amount: "$30.00",
//                   status: "Cancelled",
//                 },
//               ].map((order, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-dashed hover:bg-gray-50 transition duration-200"
//                 >
//                   {/* Order ID */}
//                   <td className="px-12 py-7 font-medium">{order.id}</td>

//                   {/* Customer */}
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Customer"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.customer}</span>
//                     </div>
//                   </td>

//                   {/* Product Detail */}
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={Table}
//                         alt="Product"
//                         className="w-12 h-12 rounded-md object-cover"
//                       />
//                       <span>{order.product}</span>
//                     </div>
//                   </td>

//                   {/* Brand */}
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Brand"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.brand}</span>
//                     </div>
//                   </td>

//                   {/* Amount */}
//                   <td className="px-4 py-3">{order.amount}</td>

//                   {/* Status */}
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1  text-xs font-semibold ${
//                         order.status === "Completed"
//                           ? "bg-green-100 text-green-600"
//                           : order.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-600"
//                           : order.status === "Cancelled"
//                           ? "bg-red-100 text-red-600"
//                           : "bg-blue-100 text-blue-600"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






































// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import { FaCalendarAlt, FaSearch } from "react-icons/fa";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import v3Img from "../assets/v3.png";
// import Table from "../assets/Table.png";

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [searchCustomerBrand, setSearchCustomerBrand] = useState("");
//   const [searchOrderID, setSearchOrderID] = useState("");

//   const orders = [
//     {
//       id: "#1021",
//       customer: "John Doe",
//       product: "Hair Oil - Herbal 250ml",
//       brand: "Dove",
//       amount: "$25.00",
//       status: "Pending",
//     },
//     {
//       id: "#1022",
//       customer: "Jane Smith",
//       product: "Face Wash - Aloe Vera",
//       brand: "Himalaya",
//       amount: "$18.50",
//       status: "Completed",
//     },
//     {
//       id: "#1023",
//       customer: "Ali Khan",
//       product: "Beard Wax - Organic",
//       brand: "UrbanGabru",
//       amount: "$22.00",
//       status: "Processing",
//     },
//     {
//       id: "#1024",
//       customer: "Ayesha Bano",
//       product: "Shampoo - Anti Dandruff",
//       brand: "Head & Shoulders",
//       amount: "$30.00",
//       status: "Cancelled",
//     },
//   ];

//   const filteredOrders = orders.filter((order) => {
//     const matchesCustomerOrBrand =
//       order.customer
//         .toLowerCase()
//         .includes(searchCustomerBrand.toLowerCase()) ||
//       order.brand.toLowerCase().includes(searchCustomerBrand.toLowerCase());

//     const matchesOrderID = order.id
//       .toLowerCase()
//       .includes(searchOrderID.toLowerCase());

//     return matchesCustomerOrBrand && matchesOrderID;
//   });

//   const data = {
//     labels: [
//       "Apr 01",
//       "Apr 03",
//       "Apr 05",
//       "Apr 07",
//       "Apr 09",
//       "Apr 11",
//       "Apr 13",
//     ],
//     datasets: [
//       {
//         label: "",
//         data: [, 200, 150, 300, 250, 400, 350],
//         borderColor: "#3BCCDA",
//         backgroundColor: "rgba(59, 204, 218, 0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { color: "#4B5563" },
//       },
//       x: {
//         ticks: { color: "#4B5563" },
//       },
//     },
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Chart + Info Boxes */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="bg-white p-4 border-2 border-[#e3e3e3] rounded-2xl w-full lg:w-3/5">
//           <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Revenue Made
//               </h2>
//               <p className="text-3xl font-bold text-[#65ccda] mt-1">
//                 $12,706.02
//               </p>
//             </div>

//             <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200 relative">
//               <span>{selectedDate.toLocaleDateString()}</span>
//               <FaCalendarAlt />
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="MMM dd, yyyy"
//                 className="absolute top-10 right-0 z-50"
//                 popperPlacement="bottom-end"
//               />
//             </div>
//           </div>

//           <div className="h-[290px] w-full pt-4">
//             <Line data={data} options={options} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/5">
//           {[
//             { label: "Total Users", value: "1,245" },
//             { label: "Total Sales", value: "$58,700" },
//             { label: "Active Sessions", value: "324" },
//             { label: "Pending Orders", value: "87" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-4 border-2 border-[#e3e3e3] rounded-2xl w-full sm:w-[246px] h-[201px] flex flex-col"
//             >
//               <p className="text-2xl font-bold">{item.value}</p>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 {item.label}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recent Orders Section */}
//       <div className="w-full h-auto mt-12 bg-white overflow-hidden rounded-xl border border-[#E3E3E3] p-8">
//         <div className="flex justify-between items-center w-full mb-6">
//           <h2 className="text-[#3F4254] text-[20px] font-semibold">
//             Recent Orders
//           </h2>

//           <div className="flex justify-end items-center gap-4 w-[738px]">
//             <input
//               type="text"
//               placeholder="Search any customer/brand"
//               value={searchCustomerBrand}
//               onChange={(e) => setSearchCustomerBrand(e.target.value)}
//               className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
//             />

//             <input
//               type="text"
//               placeholder="Search Order ID"
//               value={searchOrderID}
//               onChange={(e) => setSearchOrderID(e.target.value)}
//               className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white text-sm text-left text-gray-600">
//             <thead className="border-b border-dotted text-gray-600 font-semibold">
//               <tr>
//                 <th className="px-4 py-3">Order ID</th>
//                 <th className="px-4 py-3">Customer</th>
//                 <th className="px-4 py-3">Product Detail</th>
//                 <th className="px-4 py-3">Brand</th>
//                 <th className="px-4 py-3">Amount</th>
//                 <th className="px-4 py-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredOrders.map((order, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-dashed hover:bg-gray-50 transition duration-200"
//                 >
//                   <td className="px-12 py-7 font-medium">{order.id}</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Customer"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.customer}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={Table}
//                         alt="Product"
//                         className="w-12 h-12 rounded-md object-cover"
//                       />
//                       <span>{order.product}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Brand"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.brand}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">{order.amount}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 text-xs font-semibold ${
//                         order.status === "Completed"
//                           ? "bg-green-100 text-green-600"
//                           : order.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-600"
//                           : order.status === "Cancelled"
//                           ? "bg-red-100 text-red-600"
//                           : "bg-blue-100 text-blue-600"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//               {filteredOrders.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-gray-400">
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
// };

// export default Dashboard;
















// import React, { useState, useRef, useMemo } from "react";
// import { Line } from "react-chartjs-2";
// import { FaCalendarAlt, FaSearch } from "react-icons/fa";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import v3Img from "../assets/v3.png";
// import Table from "../assets/Table.png";

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import ReactPaginate from "react-paginate"; // Importing React Paginate

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [searchCustomerBrand, setSearchCustomerBrand] = useState("");
//   const [searchOrderID, setSearchOrderID] = useState("");
//   const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
//   const datePickerRef = useRef(null); // Ref for DatePicker

//   const orders = [
//     {
//       id: "#1021",
//       customer: "John Doe",
//       product: "Hair Oil - Herbal 250ml",
//       brand: "Dove",
//       amount: "$25.00",
//       status: "Pending",
//     },
//     {
//       id: "#1022",
//       customer: "Jane Smith",
//       product: "Face Wash - Aloe Vera",
//       brand: "Himalaya",
//       amount: "$18.50",
//       status: "Completed",
//     },
//     {
//       id: "#1023",
//       customer: "Ali Khan",
//       product: "Beard Wax - Organic",
//       brand: "UrbanGabru",
//       amount: "$22.00",
//       status: "Processing",
//     },
//     {
//       id: "#1024",
//       customer: "Ayesha Bano",
//       product: "Shampoo - Anti Dandruff",
//       brand: "Head & Shoulders",
//       amount: "$30.00",
//       status: "Cancelled",
//     },
//   ];

//   // Use memo to optimize search filter calculations
//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const matchesCustomerOrBrand =
//         order.customer
//           .toLowerCase()
//           .includes(searchCustomerBrand.toLowerCase()) ||
//         order.brand.toLowerCase().includes(searchCustomerBrand.toLowerCase());

//       const matchesOrderID = order.id
//         .toLowerCase()
//         .includes(searchOrderID.toLowerCase());

//       return matchesCustomerOrBrand && matchesOrderID;
//     });
//   }, [searchCustomerBrand, searchOrderID]);

//   // Pagination setup
//   const itemsPerPage = 3;
//   const pageCount = Math.ceil(filteredOrders.length / itemsPerPage);
//   const offset = currentPage * itemsPerPage;
//   const currentItems = filteredOrders.slice(offset, offset + itemsPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   const data = {
//     labels: [
//       "Apr 01",
//       "Apr 03",
//       "Apr 05",
//       "Apr 07",
//       "Apr 09",
//       "Apr 11",
//       "Apr 13",
//     ],
//     datasets: [
//       {
//         label: "",
//         data: [, 200, 150, 300, 250, 400, 350],
//         borderColor: "#3BCCDA",
//         backgroundColor: "rgba(59, 204, 218, 0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { color: "#4B5563" },
//       },
//       x: {
//         ticks: { color: "#4B5563" },
//       },
//     },
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Chart + Info Boxes */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="bg-white p-4 border-2 border-[#e3e3e3] rounded-2xl w-full lg:w-3/5">
//           <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Revenue Made
//               </h2>
//               <p className="text-3xl font-bold text-[#65ccda] mt-1">
//                 $12,706.02
//               </p>
//             </div>

//             {/* Date Picker */}
//             <div className="relative">
//               <div
//                 className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200"
//                 onClick={() => datePickerRef.current.setOpen(true)}
//               >
//                 <span>{selectedDate.toLocaleDateString()}</span>
//                 <FaCalendarAlt />
//               </div>
//               <DatePicker
//                 ref={datePickerRef}
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="MMM dd, yyyy"
//                 className="mt-2 z-50"
//                 popperPlacement="bottom-end"
//               />
//             </div>
//           </div>

//           <div className="h-[290px] w-full pt-4">
//             <Line data={data} options={options} />
//           </div>
//         </div>

//         {/* Info Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/5">
//           {[
//             { label: "Total Users", value: "1,245" },
//             { label: "Total Sales", value: "$58,700" },
//             { label: "Active Sessions", value: "324" },
//             { label: "Pending Orders", value: "87" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-4 border-2 border-[#e3e3e3] rounded-2xl w-full sm:w-[246px] h-[201px] flex flex-col"
//             >
//               <p className="text-2xl font-bold">{item.value}</p>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 {item.label}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recent Orders Section */}
//       <div className="w-full h-auto mt-12 bg-white overflow-hidden rounded-xl border border-[#E3E3E3] p-8">
//         <div className="flex justify-between items-center w-full mb-6">
//           <h2 className="text-[#3F4254] text-[20px] font-semibold">
//             Recent Orders
//           </h2>

//           <div className="flex justify-end items-center gap-4 w-[738px]">
//             <input
//               type="text"
//               placeholder="Search any customer/brand"
//               value={searchCustomerBrand}
//               onChange={(e) => setSearchCustomerBrand(e.target.value)}
//               className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Search Order ID"
//               value={searchOrderID}
//               onChange={(e) => setSearchOrderID(e.target.value)}
//               className="w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white text-sm text-left text-gray-600">
//             <thead className="border-b border-dotted text-gray-600 font-semibold">
//               <tr>
//                 <th className="px-4 py-3">Order ID</th>
//                 <th className="px-4 py-3">Customer</th>
//                 <th className="px-4 py-3">Product Detail</th>
//                 <th className="px-4 py-3">Brand</th>
//                 <th className="px-4 py-3">Amount</th>
//                 <th className="px-4 py-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map((order, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-dashed hover:bg-gray-50 transition duration-200"
//                 >
//                   <td className="px-12 py-7 font-medium">{order.id}</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Customer"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.customer}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={Table}
//                         alt="Product"
//                         className="w-12 h-12 rounded-md object-cover"
//                       />
//                       <span>{order.product}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={v3Img}
//                         alt="Brand"
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <span>{order.brand}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">{order.amount}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 text-xs font-semibold ${
//                         order.status === "Completed"
//                           ? "bg-green-100 text-green-600"
//                           : order.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-600"
//                           : order.status === "Cancelled"
//                           ? "bg-red-100 text-red-600"
//                           : "bg-blue-100 text-blue-600"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//               {currentItems.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-gray-400">
//                     No matching orders found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         {filteredOrders.length > itemsPerPage && (
//           <div className="mt-6 flex justify-center">
//             <ReactPaginate
//               breakLabel="..."
//               nextLabel="Next →"
//               onPageChange={handlePageClick}
//               pageRangeDisplayed={2}
//               marginPagesDisplayed={1}
//               pageCount={pageCount}
//               previousLabel="← Prev"
//               containerClassName="flex items-center space-x-2 text-sm"
//               pageClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
//               activeClassName="bg-[#3BCCDA] text-white font-semibold"
//               previousClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
//               nextClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
//               disabledClassName="opacity-50 cursor-not-allowed"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


























import React, { useState, useRef, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import v3Img from "../assets/v3.png";
import Table from "../assets/Table.png";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import ReactPaginate from "react-paginate"; // Importing React Paginate

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchCustomerBrand, setSearchCustomerBrand] = useState("");
  const [searchOrderID, setSearchOrderID] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
  const datePickerRef = useRef(null); // Ref for DatePicker

  const orders = [
    {
      id: "#1021",
      customer: "John Doe",
      product: "Hair Oil - Herbal 250ml",
      brand: "Dove",
      amount: "$25.00",
      status: "Pending",
    },
    {
      id: "#1022",
      customer: "Jane Smith",
      product: "Face Wash - Aloe Vera",
      brand: "Himalaya",
      amount: "$18.50",
      status: "Completed",
    },
    {
      id: "#1023",
      customer: "Ali Khan",
      product: "Beard Wax - Organic",
      brand: "UrbanGabru",
      amount: "$22.00",
      status: "Processing",
    },
    {
      id: "#1024",
      customer: "Ayesha Bano",
      product: "Shampoo - Anti Dandruff",
      brand: "Head & Shoulders",
      amount: "$30.00",
      status: "Cancelled",
    },
  ];

  // Use memo to optimize search filter calculations
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesCustomerOrBrand =
        order.customer
          .toLowerCase()
          .includes(searchCustomerBrand.toLowerCase()) ||
        order.brand.toLowerCase().includes(searchCustomerBrand.toLowerCase());

      const matchesOrderID = order.id
        .toLowerCase()
        .includes(searchOrderID.toLowerCase());

      return matchesCustomerOrBrand && matchesOrderID;
    });
  }, [searchCustomerBrand, searchOrderID]);

  // Pagination setup
  const itemsPerPage = 3;
  const pageCount = Math.ceil(filteredOrders.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredOrders.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const data = {
    labels: [
      "Apr 01",
      "Apr 03",
      "Apr 05",
      "Apr 07",
      "Apr 09",
      "Apr 11",
      "Apr 13",
    ],
    datasets: [
      {
        label: "",
        data: [, 200, 150, 300, 250, 400, 350],
        borderColor: "#3BCCDA",
        backgroundColor: "rgba(59, 204, 218, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#4B5563" },
      },
      x: {
        ticks: { color: "#4B5563" },
      },
    },
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      {/* Chart + Info Boxes */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white p-4 border-2 border-[#e3e3e3] rounded-2xl w-full lg:w-3/5">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Revenue Made
              </h2>
              <p className="text-3xl font-bold text-[#65ccda] mt-1">
                $12,706.02
              </p>
            </div>

            {/* Date Picker */}
            <div className="relative">
              <div
                className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200"
                onClick={() => datePickerRef.current.setOpen(true)}
              >
                <span>{selectedDate.toLocaleDateString()}</span>
                <FaCalendarAlt />
              </div>
              <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMM dd, yyyy"
                className="mt-2 z-50"
                popperPlacement="bottom-end"
              />
            </div>
          </div>

          <div className="h-[290px] w-full pt-4">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/5">
          {[
            { label: "Total Users", value: "1,245" },
            { label: "Total Sales", value: "$58,700" },
            { label: "Active Sessions", value: "324" },
            { label: "Pending Orders", value: "87" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border-2 border-[#e3e3e3] rounded-2xl w-full sm:w-[246px] h-[201px] flex flex-col"
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="w-full h-auto mt-12 bg-white overflow-hidden rounded-xl border border-[#E3E3E3] p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 gap-4">
          <h2 className="text-[#3F4254] text-[20px] font-semibold">
            Recent Orders
          </h2>

          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search any customer/brand"
              value={searchCustomerBrand}
              onChange={(e) => setSearchCustomerBrand(e.target.value)}
              className="w-full sm:w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Search Order ID"
              value={searchOrderID}
              onChange={(e) => setSearchOrderID(e.target.value)}
              className="w-full sm:w-[238px] h-[38px] bg-[#F9F9F9] rounded-md px-3 text-xs font-semibold text-[#7E8299] focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full w-full bg-white text-sm text-left text-gray-600">
            <thead className="border-b border-dotted text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Product Detail</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b border-dashed hover:bg-gray-50 transition duration-200"
                  >
                    <td className="px-12 py-7 font-medium">{order.id}</td>

                    {/* Customer Column */}
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={v3Img}
                          alt="Customer"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className="whitespace-nowrap">
                          {order.customer}
                        </span>
                      </div>
                    </td>

                    {/* Product Column */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={Table}
                          alt="Product"
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <span className="whitespace-nowrap">
                          {order.product}
                        </span>
                      </div>
                    </td>

                    {/* Brand Column */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={v3Img}
                          alt="Brand"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className="whitespace-nowrap">{order.brand}</span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-3">{order.amount}</td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : order.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-400">
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {filteredOrders.length > itemsPerPage && (
          <div className="mt-6 flex justify-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next →"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="← Prev"
              containerClassName="flex items-center space-x-2 text-sm"
              pageClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
              activeClassName="bg-[#3BCCDA] text-white font-semibold"
              previousClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
              nextClassName="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
