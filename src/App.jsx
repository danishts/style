





















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Auth/Login";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/approvals" element={<Approvals />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/categories" element={<Categories />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Auth/Login";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";
// import MainLayout from "./Components/Layout/MainLayout"; // Correct import

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* 🟡 Login page (No layout needed) */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* 🟢 Protected pages with MainLayout */}
//         <Route
//           path="/dashboard"
//           element={
//             <MainLayout>
//               <Dashboard />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <MainLayout>
//               <Users />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/approvals"
//           element={
//             <MainLayout>
//               <Approvals />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/transactions"
//           element={
//             <MainLayout>
//               <Transactions />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/categories"
//           element={
//             <MainLayout>
//               <Categories />
//             </MainLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  // Make sure this path is correct
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";
// import MainLayout from "./Components/Layout/MainLayout";
// import Login from "./Pages/Auth/Login";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Login route, without layout */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/categories" element={<Categories />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;



















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";
// import MainLayout from "./Components/Layout/MainLayout";
// import Login from "./Pages/Auth/Login";

// // Import your new BrandPage and CustomerPage components
// import BrandPage from "./Pages/BrandPage"; // Import BrandPage
// import CustomerPage from "./Pages/CustomerPage"; // Import CustomerPage

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Login route, without layout */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/categories" element={<Categories />} />
          
//           {/* Add routes for Brand and Customer pages */}
//           <Route path="/brand" element={<BrandPage />} /> {/* Brand Page Route */}
//           <Route path="/customer" element={<CustomerPage />} /> {/* Customer Page Route */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";
// import MainLayout from "./Components/Layout/MainLayout";
// import Login from "./Pages/Auth/Login";

// // Import your new BrandPage and CustomerPage components
// import BrandPage from "./Pages/BrandPage";
// import CustomerPage from "./Pages/CustomerPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Login route */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/categories" element={<Categories />} />
//           {/* Add routes for Brand and Customer pages */}
//           <Route path="/brand" element={<BrandPage />} />{" "}
//           {/* Brand Page Route */}
//           <Route path="/customer" element={<CustomerPage />} />{" "}
//           Customer Page Route
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Users from "./Pages/Users";
// import Approvals from "./Pages/Approvals";
// import Transactions from "./Pages/Transactions";
// import Categories from "./Pages/Categories";
// import MainLayout from "./Components/Layout/MainLayout";
// import Login from "./Pages/Auth/Login";

// // Import your new BrandPage and CustomerPage components
// import BrandPage from "./Pages/BrandPage";
// import CustomerPage from "./Pages/CustomerPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Login route */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/brand" element={<BrandPage />} />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/categories" element={<Categories />} />
//           {/* Add routes for Brand and Customer pages */}
//           {/* <Route path="/brand" element={<BrandPage />} />{" "} */}
//           {/* Brand Page Route */}
//           <Route path="/customer" element={<CustomerPage />} /> Customer Page
//           Route
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;























import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Approvals from "./Pages/Approvals";
import Transactions from "./Pages/Transactions";
import Categories from "./Pages/Categories";
import MainLayout from "./Components/Layout/MainLayout";
import Login from "./Pages/Auth/Login";
import BrandPage from "./Pages/BrandPage";
import CustomerPage from "./Pages/CustomerPage";

// Import the new BrandDetails page

import BrandDetails from "./Pages/BrandDetails ";
import CustomerDetails from "./Pages/CustomerDetails";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/brand-details" element={<BrandDetails />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;





