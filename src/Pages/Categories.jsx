

// import React, { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";

// function Categories() {
//   const [categories, setCategories] = useState([
//     "Category 1",
//     "Category 2",
//     "Category 3",
//     "Category 4",
//     "Category 5",
//     "Category 6",
//     "Category 7",
//     "Category 8",
//   ]);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false); // New state for Add Modal
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
//   const [editedCategoryName, setEditedCategoryName] = useState("");
//   const [newCategoryName, setNewCategoryName] = useState(""); // New state for input

//   const handleDelete = () => {
//     const updated = categories.filter(
//       (_, index) => index !== selectedCategoryIndex
//     );
//     setCategories(updated);
//     setShowDeleteModal(false);
//   };

//   const handleEdit = () => {
//     const updatedCategories = [...categories];
//     updatedCategories[selectedCategoryIndex] = editedCategoryName;
//     setCategories(updatedCategories);
//     setShowEditModal(false);
//   };

//   const handleAdd = () => {
//     if (newCategoryName.trim() === "") return; // Prevent adding empty category
//     setCategories([...categories, newCategoryName]);
//     setShowAddModal(false);
//     setNewCategoryName(""); // Clear input after adding
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Header Section */}
//       <div className="flex justify-between shadow-lg rounded-lg mb-6 py-6 px-4 bg-white">
//         <h1 className="text-2xl font-semibold">Product Categories</h1>

//         {/* Search bar and + icon */}
//         <div className="flex items-center gap-4">
//           <div className="flex items-center w-[228px] bg-gray-100 rounded-lg px-4 py-2">
//             <svg
//               className="w-5 h-5 text-gray-500 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
//               />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search Categories..."
//               className="w-full text-sm text-gray-600 outline-none bg-transparent"
//             />
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)} // Show Add Modal when clicked
//             className="flex items-center justify-center bg-black text-white rounded-lg w-10 h-10 text-2xl font-bold"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Categories List */}
//       <div className="bg-white shadow rounded-lg p-4 space-y-4">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center border-b pb-2"
//           >
//             <span className="text-gray-800 font-medium">{cat}</span>
//             <div className="flex items-center gap-4 text-gray-500">
//               <FaEdit
//                 className="cursor-pointer hover:text-blue-500"
//                 onClick={() => {
//                   setSelectedCategoryIndex(index);
//                   setEditedCategoryName(categories[index]);
//                   setShowEditModal(true);
//                 }}
//               />
//               <FaTrash
//                 className="cursor-pointer hover:text-red-500"
//                 onClick={() => {
//                   setSelectedCategoryIndex(index);
//                   setShowDeleteModal(true);
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Delete Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-2xl font-semibold">Remove Category</h1>
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="text-gray-600"
//                 style={{ fontSize: "1.5rem" }}
//               >
//                 ×
//               </button>
//             </div>
//             <div className="text-center mb-4">
//               <div className="flex justify-center">
//                 <FaTrashAlt className="text-red-500 text-7xl mb-4" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">
//                 Are you sure you want to remove{" "}
//                 <span className="font-semibold text-red-500">
//                   "{categories[selectedCategoryIndex]}"
//                 </span>{" "}
//                 from the list?
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 This action cannot be undone.
//               </p>
//             </div>
//             <div className="border-t border-gray-300 my-4"></div>
//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 No
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//               >
//                 Yes, Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {showEditModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-white p-8 rounded-lg w-[1200px] border-2 relative">
//             {/* Header Row: Input + Save + Close */}
//             <div className="flex justify-between items-center w-full mb-4 pb-2">
//               <input
//                 type="text"
//                 value={editedCategoryName}
//                 onChange={(e) => setEditedCategoryName(e.target.value)}
//                 className="w-full p-3 border-b border-gray-300 mr-4"
//                 placeholder="Edit category name"
//               />

//               <button
//                 onClick={handleEdit}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-lg mr-2"
//               >
//                 Save
//               </button>

//               <button
//                 onClick={() => setShowEditModal(false)}
//                 className="text-gray-600 text-2xl"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Image Upload Box with + Icon and Text */}
//             <label className="mb-4 border border-dashed h-32 w-32 border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-500">
//               <span className="text-3xl">+</span>
//               <span className="text-sm mt-1">Upload Image</span>
//               <input type="file" className="hidden" />
//             </label>
//           </div>
//         </div>
//       )}

//       {/* Add Category Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-white p-8 rounded-lg w-[1200px] border-2 relative">
//             {/* Header Row: Input + Save + Close */}
//             <div className="flex justify-between items-center w-full mb-4 pb-2">
//               {/* Name Input */}
//               <input
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//                 className="w-full p-3 border-b border-gray-300 mr-4"
//                 placeholder="Type new category"
//               />

//               {/* Save Button */}
//               <button
//                 onClick={handleAdd}
//                 className="px-6 py-2 bg-green-500 text-white rounded-lg mr-2"
//               >
//                 Save
//               </button>

//               {/* Close Button */}
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="text-gray-600 text-2xl"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Image Upload */}
//             <label className="mb-4 border border-dashed h-32 w-32 border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-500">
//               <span className="text-3xl">+</span>
//               <span className="text-sm mt-1">Upload Image</span>
//               <input type="file" className="hidden" />
//             </label>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Categories;

















































// ya ok ha code

// import React, { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";

// function Categories() {
//   const [categories, setCategories] = useState([
//     { name: "Category 1", image: "" },
//     { name: "Category 2", image: "" },
//     { name: "Category 3", image: "" },
//     { name: "Category 4", image: "" },
//     { name: "Category 5", image: "" },
//     { name: "Category 6", image: "" },
//     { name: "Category 7", image: "" },
//     { name: "Category 8", image: "" },
//   ]);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
//   const [editedCategoryName, setEditedCategoryName] = useState("");
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [newCategoryImage, setNewCategoryImage] = useState(null); // New state for image
//   const [editedCategoryImage, setEditedCategoryImage] = useState(null); // New state for image in edit

//   const handleDelete = () => {
//     const updated = categories.filter(
//       (_, index) => index !== selectedCategoryIndex
//     );
//     setCategories(updated);
//     setShowDeleteModal(false);
//   };

//   const handleEdit = () => {
//     const updatedCategories = [...categories];
//     updatedCategories[selectedCategoryIndex] = {
//       name: editedCategoryName,
//       image: editedCategoryImage
//         ? editedCategoryImage
//         : categories[selectedCategoryIndex].image, // Use existing image if no new image
//     };
//     setCategories(updatedCategories);
//     setShowEditModal(false);
//   };

//   const handleAdd = () => {
//     if (newCategoryName.trim() === "") return; // Prevent adding empty category
//     const newCategory = { name: newCategoryName, image: newCategoryImage };
//     setCategories([...categories, newCategory]);
//     setShowAddModal(false);
//     setNewCategoryName(""); // Clear input after adding
//     setNewCategoryImage(null); // Clear image after adding
//   };

//   const handleImageChange = (e, isEdit = false) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (isEdit) {
//           setEditedCategoryImage(reader.result); // Set edited image
//         } else {
//           setNewCategoryImage(reader.result); // Set new image
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center flex-wrap sm:flex-nowrap shadow-lg rounded-lg mb-6 py-6 px-4 bg-white gap-4 overflow-x-auto">
//         <h1 className="text-[16px]  font-semibold font-inter text-[#3F4254] whitespace-nowrap">
//           Product Categories
//         </h1>

//         <div className="flex items-center gap-4">
//           {/* Search Box */}
//           <div className="flex items-center w-[228px] bg-gray-100 rounded-lg px-4 py-2">
//             <svg
//               className="w-5 h-5 text-gray-500 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
//               />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search "
//               className="w-full text-sm text-gray-600 outline-none bg-transparent"
//             />
//           </div>

//           {/* Plus Icon Button */}
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center justify-center bg-black text-white rounded-lg w-10 h-10 text-lg font-bold leading-none"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Categories List */}
//       <div className="bg-white shadow rounded-lg p-4 space-y-4">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center shadow-  h-16 rounded border  shadow-lg border-gray-100 pl-3 pr-3 pb-2"
//           >
//             <div className="flex items-center">
//               {/* Display category name */}
//               <span className="text-gray-800 font-medium mr-4">{cat.name}</span>
//               {/* Display category image */}
//               {cat.image && (
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="h-12 w-12 object-cover rounded-full"
//                 />
//               )}
//             </div>
//             <div className="flex items-center gap-4 text-gray-500">
//               <FaEdit
//                 className="cursor-pointer hover:text-blue-500"
//                 onClick={() => {
//                   setSelectedCategoryIndex(index);
//                   setEditedCategoryName(categories[index].name);
//                   setEditedCategoryImage(categories[index].image);
//                   setShowEditModal(true);
//                 }}
//               />
//               <FaTrash
//                 className="cursor-pointer hover:text-red-500"
//                 onClick={() => {
//                   setSelectedCategoryIndex(index);
//                   setShowDeleteModal(true);
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Delete Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-2xl font-semibold">Remove Category</h1>
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="text-gray-600"
//                 style={{ fontSize: "1.5rem" }}
//               >
//                 ×
//               </button>
//             </div>
//             <div className="text-center mb-4">
//               <div className="flex justify-center">
//                 <FaTrashAlt className="text-red-500 text-7xl mb-4" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">
//                 Are you sure you want to remove{" "}
//                 <span className="font-semibold text-red-500">
//                   "{categories[selectedCategoryIndex].name}"
//                 </span>{" "}
//                 from the list?
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 This action cannot be undone.
//               </p>
//             </div>
//             <div className="border-t border-gray-300 my-4"></div>
//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 No
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//               >
//                 Yes, Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {showEditModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
//           <div className="bg-white p-8 rounded-lg w-[1200px]  relative">
//             {/* Header Row: Input + Save + Close */}
//             <div className="flex justify-between items-center w-full mb-4 pb-2">
//               <input
//                 type="text"
//                 value={editedCategoryName}
//                 onChange={(e) => setEditedCategoryName(e.target.value)}
//                 className="w-full p-3 border-b border-gray-300 mr-4"
//                 placeholder="Edit category name"
//               />

//               <button
//                 onClick={handleEdit}
//                 className="px-6 py-2 bg-black text-white rounded-lg mr-2"
//               >
//                 Save
//               </button>

//               <button
//                 onClick={() => setShowEditModal(false)}
//                 className="text-gray-600 text-2xl"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Image Upload Box with + Icon and Text */}
//             <label className="mb-4 border border-dashed h-32 w-32 border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-500">
//               <span className="text-3xl">+</span>
//               <span className="text-sm mt-1">Upload Image</span>
//               <input
//                 type="file"
//                 className="hidden"
//                 onChange={(e) => handleImageChange(e, true)}
//               />
//               {editedCategoryImage && (
//                 <img
//                   src={editedCategoryImage}
//                   alt="Edited Category"
//                   className="h-16 w-16 object-cover rounded-full mt-2"
//                 />
//               )}
//             </label>
//           </div>
//         </div>
//       )}

//       {/* Add Category Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 flex justify-center items-center  bg-opacity-40 z-10 px-4">
//           <div className="bg-white p-6 rounded-lg w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]  relative">
//             {/* Header Row: Input + Save + Close */}
//             <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
//               <input
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//                 className="flex-1 p-3 border-b border-gray-300"
//                 placeholder="Type new category"
//               />

//               <div className="flex gap-2 justify-end">
//                 <button
//                   onClick={handleAdd}
//                   className="px-6 py-2 bg-black text-white rounded-lg"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setShowAddModal(false)}
//                   className="text-gray-600 text-2xl"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>

//             {/* Image Upload */}
//             <div className="flex justify-center sm:justify-start w-full">
//               <label className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center text-gray-500 cursor-pointer relative">
//                 {!newCategoryImage && (
//                   <>
//                     <span className="text-3xl">+</span>
//                     <span className="text-sm mt-1">Upload Image</span>
//                   </>
//                 )}

//                 <input
//                   type="file"
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                   onChange={(e) => handleImageChange(e)}
//                 />

//                 {newCategoryImage && (
//                   <img
//                     src={newCategoryImage}
//                     alt="New Category"
//                     className="h-16 w-16 object-cover rounded-full mt-2"
//                   />
//                 )}
//               </label>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Categories;
























































































import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function Categories() {
  const [categories, setCategories] = useState([
    { name: "Category 1", image: "" },
    { name: "Category 2", image: "" },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState(null);
  const [editedCategoryImage, setEditedCategoryImage] = useState(null);

  const handleDelete = () => {
    const updated = categories.filter(
      (_, index) => index !== selectedCategoryIndex
    );
    setCategories(updated);
    setShowDeleteModal(false);
  };

  const handleEdit = () => {
    const updatedCategories = [...categories];
    updatedCategories[selectedCategoryIndex] = {
      name: editedCategoryName,
      image: editedCategoryImage
        ? editedCategoryImage
        : categories[selectedCategoryIndex].image,
    };
    setCategories(updatedCategories);
    setShowEditModal(false);
  };

  const handleAdd = () => {
    if (newCategoryName.trim() === "") return; // Prevent adding empty category
    const newCategory = { name: newCategoryName, image: newCategoryImage };
    setCategories([...categories, newCategory]);
    setShowAddModal(false);
    setNewCategoryName(""); // Clear input after adding
    setNewCategoryImage(null); // Clear image after adding
  };

  const handleImageChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) {
          setEditedCategoryImage(reader.result);
        } else {
          setNewCategoryImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap sm:flex-nowrap shadow-lg rounded-lg mb-6 py-6 px-4 bg-white gap-4 overflow-x-auto">
        <h1 className="text-[16px] font-semibold font-inter text-[#3F4254] whitespace-nowrap">
          Product Categories
        </h1>

        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="flex items-center w-[228px] bg-gray-100 rounded-lg px-4 py-2">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
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
              placeholder="Search "
              className="w-full text-sm text-gray-600 outline-none bg-transparent"
            />
          </div>

          {/* Plus Icon Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center bg-black text-white rounded-lg w-10 h-10 text-lg font-bold leading-none"
          >
            +
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div
        className={`bg-white shadow rounded-lg p-4  space-y-4 transition-all duration-300 ${
          showAddModal ? "translate-y-[150px]" : ""
        }`}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex justify-between items-center shadow- border-2 border-[#E3E3E3] h-16 rounded-lg    pl-3 pr-3 pb-2"
          >
            <div className="flex items-center">
              <span className="text-gray-800 font-medium mr-4">{cat.name}</span>
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-12 w-12 object-cover rounded-full"
                />
              )}
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"
                onClick={() => {
                  setSelectedCategoryIndex(index);
                  setEditedCategoryName(categories[index].name);
                  setEditedCategoryImage(categories[index].image);
                  setShowEditModal(true);
                }}
              >
                <FaEdit className="text-gray-500 hover:text-[#A1A5B7] text-sm" />
              </div>

              <div
                className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"
                onClick={() => {
                  setSelectedCategoryIndex(index);
                  setShowDeleteModal(true);
                }}
              >
                <FaTrash className="text-gray-500 hover:text-[#A1A5B7] text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">
          <div className="bg-gray-200 p-6 rounded-lg max-w-sm w-full relative">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold">Remove Category</h1>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-600"
                style={{ fontSize: "1.5rem" }}
              >
                ×
              </button>
            </div>
            <div className="text-center mb-4">
              <div className="flex justify-center">
                <FaTrashAlt className="text-red-500 text-7xl mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Are you sure you want to remove{" "}
                <span className="font-semibold text-red-500">
                  "{categories[selectedCategoryIndex].name}"
                </span>{" "}
                from the list?
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                This action cannot be undone.
              </p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0  flex justify-center items-center bg-opacity-50 z-10">
          <div className="bg-white border-[#E3E3E3] border-2 p-8 rounded-lg w-[1200px] relative">
            <div className="flex justify-between items-center w-full mb-4 pb-2">
              <input
                type="text"
                value={editedCategoryName}
                onChange={(e) => setEditedCategoryName(e.target.value)}
                className="w-full p-3 border-b border-gray-300 mr-4"
                placeholder="Edit category name"
              />

              <button
                onClick={handleEdit}
                className="px-6 py-2 bg-black text-white rounded-lg mr-2"
              >
                Save
              </button>

              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <label className="mb-4 border border-dashed h-32 w-32 border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-500">
              <span className="text-3xl">+</span>
              <span className="text-sm mt-1">Upload Image</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, true)}
              />
              {editedCategoryImage && (
                <img
                  src={editedCategoryImage}
                  alt="Edited Category"
                  className="h-16 w-16 object-cover rounded-full mt-2"
                />
              )}
            </label>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddModal && (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-opacity-50 z-20 transform transition-all duration-300 ${
            showAddModal ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] relative shadow-md border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="flex-1 p-3 border-b border-gray-300"
                placeholder="Type new category"
              />

              <div className="flex gap-2 justify-end">
                <button
                  onClick={handleAdd}
                  className="px-6 py-2 bg-black text-white rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start w-full">
              <label className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center text-gray-500 cursor-pointer relative">
                {!newCategoryImage && (
                  <>
                    <span className="text-3xl">+</span>
                    <span className="text-sm mt-1">Upload Image</span>
                  </>
                )}

                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleImageChange(e)}
                />

                {newCategoryImage && (
                  <img
                    src={newCategoryImage}
                    alt="New Category"
                    className="h-16 w-16 object-cover rounded-full mt-2"
                  />
                )}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;




























































































