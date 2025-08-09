import React, { useState } from "react";
import profile from "../../assets/profile picture.JPG";
import {
  FaUser,
  FaBriefcase,
  FaBookmark,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    { id: "overview", label: "Overview", icon: FaChartBar },
    { id: "profile", label: "My Profile", icon: FaUser },
    { id: "application", label: "Applied Jobs", icon: FaBriefcase },
    { id: "saved", label: "Saved Jobs", icon: FaBookmark },
  ];

  const handleLogout = () => {
    console.log("logging out...");
  };

  return (
    <>
      <div className="w-1/5 h-full bg-white overflow-y-auto scrollbar-hide flex flex-col">
        <div className="p-4 flex-grow">
          <h1 className="text-xl font-bold text-gray-800 mb-4">
            Lovelesh's Dashboard
          </h1>
          <nav>
            {sidebarItems.map((items) => (
              <button
                key={items.id}
                onClick={() => setActiveTab(items.id)}
                className={`flex items-center w-full px-4 py-2 mt-2 text-sm rounded-lg ${
                  activeTab === items.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }
                
                `}
              >
                <items.icon className="w-5 h-5 mr-3" />
                {items.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-400 ">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm rounded-lg text-red-600 hover:bg-red-50"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
