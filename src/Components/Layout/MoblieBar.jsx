// src/components/MobileBar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import general from "../../assets/general.png";
import profile from "../../assets/profile.png";
import user from "../../assets/user.png";
import dollar from "../../assets/dollar.png";
import logo1 from "../../assets/logo1.png";
import { RxDashboard } from "react-icons/rx";

const menuItems = [
  {
    name: "dashboard",
    icon: general,
    label: "Dashboard",
    path: "/dashboard",
    isReactIcon: false,
  },
  {
    name: "users",
    icon: profile,
    label: "Users",
    path: "/brand",
    isReactIcon: false,
  },
  {
    name: "approvals",
    icon: user,
    label: "Approvals",
    path: "/approvals",
    isReactIcon: false,
  },
  {
    name: "transactions",
    icon: dollar,
    label: "Transactions",
    path: "/transactions",
    isReactIcon: false,
  },
  {
    name: "categories",
    icon: RxDashboard,
    label: "Categories",
    path: "/categories",
    isReactIcon: true,
  },
];

function MobileBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header with logo and hamburger */}
      <div className="flex items-center justify-between bg-white px-4 py-3 shadow-md">
        <img src={logo1} alt="Logo" className="h-10" />
        <button onClick={() => setOpen(true)}>
          <RxHamburgerMenu size={24} />
        </button>
      </div>

      {/* Sidebar drawer */}
      {open && (
        <div className="fixed top-0 left-0 h-full w-[75%] bg-white shadow-lg z-50 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <RxCross2 size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-gradient-to-r from-[#3bccda] to-[#22b2c0] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setOpen(false)} // auto close on link click
              >
                {item.isReactIcon ? (
                  <item.icon size={20} />
                ) : (
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                )}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileBar;



