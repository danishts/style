import React, { useState } from "react";
import BrandLogo from "../assets/v3.png";
import TickIcon from "../assets/tick.png";
import CrossIcon from "../assets/cross.png";
import { Toaster, toast } from "react-hot-toast";

function Approvals() {
  const [selectedOption, setSelectedOption] = useState("Pending");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const options = ["Approved", "Pending", "Rejected"];

const [data, setData] = useState([
  {
    id: 1,
    brand: "ABC Store",
    address: "123 Street, City",
    description: "Retail Business",
    submittedAt: "2025-04-30",
    status: "pending",
  },
  {
    id: 2,
    brand: "XYZ Mart",
    address: "456 Avenue, Town",
    description: "Wholesale Distributor",
    submittedAt: "2025-04-29",
    status: "pending",
  },
  {
    id: 3,
    brand: "Fresh Market",
    address: "789 Lane, Village",
    description: "Groceries",
    submittedAt: "2025-04-28",
    status: "approved",
  },
  {
    id: 4,
    brand: "Old Goods",
    address: "111 Street, Metro",
    description: "Second Hand Items",
    submittedAt: "2025-04-27",
    status: "rejected",
  },
  {
    id: 5,
    brand: "Fresh Foods",
    address: "123 Elm St.",
    description: "Fresh produce",
    submittedAt: "2025-04-26",
    status: "approved",
  },
  {
    id: 6,
    brand: "Tech Hub",
    address: "123 Tech Road",
    description: "Electronics",
    submittedAt: "2025-04-25",
    status: "pending",
  },
  {
    id: 7,
    brand: "Fashion World",
    address: "789 Fashion St.",
    description: "Clothing",
    submittedAt: "2025-04-24",
    status: "rejected",
  },
  {
    id: 8,
    brand: "Book Barn",
    address: "32 Read Lane",
    description: "Books and Stationery",
    submittedAt: "2025-04-23",
    status: "pending",
  },
  {
    id: 9,
    brand: "Kitchen Pro",
    address: "55 Cook Street",
    description: "Kitchen Supplies",
    submittedAt: "2025-04-22",
    status: "approved",
  },
  {
    id: 10,
    brand: "Outdoor Zone",
    address: "88 Camp Road",
    description: "Outdoor Gear",
    submittedAt: "2025-04-21",
    status: "rejected",
  },
  {
    id: 11,
    brand: "Mobile Plus",
    address: "102 Phone Ave",
    description: "Mobile Accessories",
    submittedAt: "2025-04-20",
    status: "pending",
  },
  {
    id: 12,
    brand: "Toy Universe",
    address: "75 Fun St.",
    description: "Children’s Toys",
    submittedAt: "2025-04-19",
    status: "approved",
  },
]);


  const handleApprove = (row) => {
    const updatedData = data.map((item) =>
      item.id === row.id ? { ...item, status: "approved" } : item
    );
    setData(updatedData);
    toast.success(`${row.brand} approved!`);
  };

  const handleReject = (row) => {
    const updatedData = data.map((item) =>
      item.id === row.id ? { ...item, status: "rejected" } : item
    );
    setData(updatedData);
    toast.error(`${row.brand} rejected.`);
  };

  // Filter by selected status and search query
  const filteredData = data.filter(
    (item) =>
      item.status === selectedOption.toLowerCase() &&
      (
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
        <div className="border-2 overflow border-gray-300 rounded-lg w-full min-h-screen p-6">
          {/* Header */}
          <div className="w-full inline-flex justify-between items-center flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-inter text-[#3F4254]">
                Approvals
              </span>
              <span className="text-teal-400 text-xl font-semibold font-['Inter']">
                ({filteredData.length} Found)
              </span>
            </div>

            {/* Filter & Search */}
            <div className="flex overflow-scroll items-center gap-4">
              {/* Dropdown */}
              <div className="relative w-44">
                <div
                  className="bg-stone-50 px-3 py-2 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span className="text-slate-500 text-xs font-semibold font-['Inter']">
                    Status: {selectedOption}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 ml-2"
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
                {showDropdown && (
                  <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow z-10">
                    {options.map((option) => (
                      <li
                        key={option}
                        onClick={() => {
                          setSelectedOption(option);
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex items-center w-60 bg-stone-50 rounded-md px-3 py-2">
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
                  placeholder="Search by brand, address or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-stone-50 text-xs text-slate-500 font-semibold font-['Inter'] outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[800px] w-full text-left border-dotted border-spacing-y-2">
              <thead>
                <tr className="text-[#A1A5B7] text-[16px] text-sm font-inter border-b-2 border-[#E3E3E3] border-dashed">
                  <th className="py-6 px-11">Brand</th>
                  <th className="py-6 px-11">Address</th>
                  <th className="py-6 px-11">Description</th>
                  <th className="py-6 px-11">Submitted At</th>
                  <th className="py-6 px-11">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-400">
                      No results found.
                    </td>
                  </tr>
                ) : (
                  currentItems.map((row) => (
                    <tr
                      key={row.id}
                      className="border-dashed border-b-2 border-[#E3E3E3]"
                    >
                      <td className="py-6 flex items-center gap-3">
                        <img
                          src={BrandLogo}
                          alt="Brand"
                          className="w-8 h-8  object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-125"
                        />
                        {row.brand}
                      </td>
                      <td className="py-6 px-11 font-inter text-[16px] text-[#7E8299]  ">
                        {row.address}
                      </td>
                      <td className="py-6 px-11 font-inter text-[16px] text-[#7E8299] ">
                        {row.description}
                      </td>
                      <td className="py-6 px-11 font-inter text-[16px] text-[#7E8299] ">
                        {row.submittedAt}
                      </td>
                      <td className="py-6 px-11 font-inter text-[16px] text-[#7E8299] ">
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleApprove(row)}
                            title="Approve"
                          >
                            <img
                              src={TickIcon}
                              alt="Approve"
                              className="w-8 h-8 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                          </button>
                          <button
                            onClick={() => handleReject(row)}
                            title="Reject"
                          >
                            <img
                              src={CrossIcon}
                              alt="Reject"
                              className="w-8 h-8 hover:scale-125  transition-transform duration-300 ease-in-out"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#74D5B3] text-white rounded-md"
            >
              First
            </button>

            <span className="px-4 py-2 text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-teal-400 text-white rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approvals;
