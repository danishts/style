
import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import login from "../assets/login.png";
import Vector from "../assets/Vector.png";
import dollar from "../assets/dollar.png";
import user from "../assets/user.png";
import profile from "../assets/profile.png";
import general from "../assets/general.png";
import { RxDashboard } from "react-icons/rx";

function Menubar() {
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

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between h-[120px] items-center w-full px-[150px] py-5 bg-white shadow-md border border-[#F1F1F2]">
        <img className="w-[100.12px] h-[39.97px]" src={logo1} alt="Logo" />

        <div className="flex gap-8 justify-center items-center text-sm font-inter font-semibold">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center gap-2 px-4 py-2 rounded-lg border border-[#5fc1ce] bg-[linear-gradient(62.29deg,_#3bccda_5.83%,_#22b2c0_94.17%)] text-white w-[90px] h-[70px] justify-center"
                  : "flex flex-col items-center gap-2 px-4 py-2 rounded-lg text-[#5E6278] w-[90px] h-[70px] justify-center"
              }
            >
              {({ isActive }) => (
                <>
                  <span>
                    {item.isReactIcon ? (
                      <item.icon
                        size={20}
                        className={`${
                          isActive ? "text-white" : "text-[#5E6278]"
                        }`}
                      />
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={`w-5 h-5 ${
                          isActive
                            ? "filter invert brightness-200"
                            : "filter brightness-0 invert-[30%] sepia-[10%] saturate-[200%] hue-rotate-[180deg] contrast-[90%]"
                        }`}
                      />
                    )}
                  </span>
                  <span
                    className={`${
                      isActive ? "text-white" : "text-[#5E6278]"
                    } font-semibold`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="px-2 py-2 overflow-hidden rounded-xl border-2 border-dashed border-[#E1E3EA] inline-flex items-center gap-[10px]">
          <div className="w-[50px] h-[50px] relative rounded-md">
            <img
              className="w-[47px] h-[43px] absolute left-0 top-0 rounded-md"
              src={login}
              alt="Profile"
            />
          </div>
          <div className="w-[90px] flex flex-col items-start gap-2">
            <div className="text-[#181C32] text-[14px] font-inter font-semibold leading-[14px]">
              Jacob Jones
            </div>
            <div className="text-[#A1A5B7] text-[12px] font-inter font-semibold leading-[12px]">
              Admin
            </div>
          </div>
          <div className="w-[47px] p-[9px] rounded-md flex justify-center items-center">
            <NavLink to="/login">
              <div className="w-[25px] h-[25px] cursor-pointer">
                <img src={Vector} alt="login" className="text-[#A1A5B7]" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;

