import React, { useEffect, useState } from "react";
import Sidebar from "../../components/UserDashboard/Sidebar";
import Overview from "../../components/UserDashboard/Overview";
import Profile from "../../components/UserDashboard/Profile";
import SavedJobs from "../../components/UserDashboard/SavedJobs";
import Application from "../../components/UserDashboard/Application";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const userDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const { isLogin, isRecruiter, isAdmin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else if (isRecruiter || isAdmin) {
      navigate("/notfound");
    }
  }, [isLogin, navigate]);

  return (
    <>
      {isLogin && !isRecruiter && !isAdmin && (
        <div className="flex h-[90vh] bg-gray-100 overflow-hidden">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="w-4/5 h-full overflow-auto scrollbar-hide">
            {activeTab == "overview" && <Overview />}
            {activeTab == "profile" && <Profile />}
            {activeTab == "application" && <Application />}
            {activeTab == "saved" && <SavedJobs />}
          </div>
        </div>
      )}
    </>
  );
};

export default userDashboard;
