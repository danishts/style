import React, { useState } from "react";
import BrandLogo from "../assets/v3.png"; // Used for both Brand and Product

function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Changed from 1 to 5

  // Dummy data for multiple rows
  const transactionData = [
    {
      brand: "ZARA",
      products: "Skirt",
      date: "12/01/2023",
      amount: 499.0,
      commission: 49.9,
    },
    {
      brand: "ZARA",
      products: "Skirt",
      date: "12/01/2023",
      amount: 499.99,
      commission: 50.0,
    },
    {
      brand: "ZARA",
      products: "Skirt",
      date: "12/01/2023",
      amount: 399.99,
      commission: 39.99,
    },
    {
      brand: "ZARA",
      products: "Dress",
      date: "14/01/2023",
      amount: 599.0,
      commission: 59.9,
    },
  
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = transactionData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(transactionData.length / rowsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      {/* Revenue Summary Boxes */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/2 h-48 flex flex-col p-8 border-2 border-[#e3e3e3] text-xl font-bold rounded-lg">
          <span className="text-[34px] font-inter text-[#74D5B3]">
            €2,786.22
          </span>
          <span className="text-[14px] font-inter text-[#A1A5B7] mt-2">
            Revenue Generated
          </span>
        </div>
        <div className="w-full md:w-1/2 h-48 flex flex-col p-8 border-2 border-[#e3e3e3] text-xl font-bold rounded-lg">
          <span className="text-[34px] font-inter text-[#3F4254]">
            €2,786.22
          </span>
          <span className="text-[14px] font-inter text-[#A1A5B7] mt-2">
            Revenue Generated
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="overflow-x-auto border-2 p-6 border-[#e3e3e3] rounded-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <h1 className="text-[20px] font-inter text-[#3F4254] ">
            Transactions
          </h1>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Time Filter */}
            <div className="relative w-[174px] h-[38px]">
              <select className="appearance-none border border-gray-300  bg-[#F9F9F9] text-[12px]  font-semibold font-inter text-[#7E8299] text-sm px-3 py-2 rounded-md w-full h-full pr-8">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Sort Order */}
            <div className="relative w-[174px] h-[38px]">
              <select className="appearance-none border text-[12px] font-inter text-[#7E8299] font-semibold border-gray-300 bg-[#F9F9F9] text-sm px-3 py-2 rounded-md w-full h-full pr-8">
                <option>Highest to Lowest</option>
                <option>Lowest to Highest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-[238px] h-[38px] text-[12px]  font-semibold font-inter text-[#7E8299] bg-[#F9F9F9] border-2 border-gray-300 rounded-md px-3">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by Restaurant"
                className="w-full text-sm outline-none  text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[700px] md:min-w-full text-left ">
            <thead>
              <tr
                className="text-sm text-gray-700"
                style={{ borderBottom: "2px dashed #d1d5db" }}
              >
                <th className="py-3 text-[16px] font-inter text-[#A1A5B7] px-4">
                  Brand Name
                </th>
                <th className="py-3 text-[16px] font-inter text-[#A1A5B7] px-4">
                  Product Detail
                </th>
                <th className="py-3 text-[16px] font-inter text-[#A1A5B7] px-4">
                  Order Date
                </th>
                <th className="py-3 text-[16px] font-inter text-[#A1A5B7] px-4">
                  Product Amount
                </th>
                <th className="py-3 text-[16px] font-inter text-[#A1A5B7] px-4">
                  Commission 10%
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 text-sm text-gray-700"
                  style={{ borderBottom: "2px dashed #d1d5db" }}
                >
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={BrandLogo}
                      alt="Brand"
                      className="w-10 h-10  rounded-full object-cover"
                    />
                    <sapn
                      sapn
                      className="ml-3 text-sm text-[16px]  font-semibold font-inter text-[#7E8299]"
                    >
                      {row.brand}
                    </sapn>
                  </td>

                  <td className=" flexpy-3   px-4">
                    <div className="flex items-center ">
                      <img
                        src={BrandLogo}
                        alt="Product"
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <span className="ml-3 text-sm text-[16px]  font-semibold font-inter text-[#7E8299]">
                        {row.products}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 ml-3 text-sm text-[16px]  font-semibold font-inter text-[#7E8299]">
                    {row.date}
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-xl  py-3 px-4 text-[16px]  font-semibold font-inter text-[#7E8299]">
                      ${row.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="py-3 px-4 text-[16px]  font-semibold font-inter text-[#50CD89]">
                      ${row.commission.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
