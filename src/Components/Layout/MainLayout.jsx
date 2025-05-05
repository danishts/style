// import React, { useState, useEffect } from "react";
// // MobileBar import
// import { Outlet } from "react-router-dom";
// import Menubar from "../Menubar";
// import MobileBar from "./mobliebar";

// const MainLayout = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       {isMobile ? <MobileBar /> : <Menubar />}{" "}
//       {/* Show MenuBar or MobileBar based on screen size */}
//       <div className="content">
//         <Outlet />{" "}
//         {/* This renders the child components like Dashboard, Users, etc. */}
//       </div>
//     </div>
//   );
// };

// export default MainLayout;






import React, { useState, useEffect } from "react";
// MobileBar import
import { Outlet } from "react-router-dom"; // Renders child components like Dashboard, Users, etc.
import Menubar from "../Menubar";
import MobileBar from "./mobliebar";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <MobileBar /> : <Menubar />}{" "}
      {/* Show MenuBar or MobileBar based on screen size */}
      <div className="content">
        {/* Outlet renders the active page component like Dashboard, Users, etc. */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
