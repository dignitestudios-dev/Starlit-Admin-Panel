import { Outlet } from "react-router";
import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import NoInternetModal from "../components/global/NoInternet";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      // Handle no internet connection
      setOpenNoInternet(true);
    }
  }, []);
  return (
    <div className="w-full h-screen overflow-y-hidden flex justify-start items-start">
      <Sidebar />
      <div className="w-full lg:w-[calc(100%-280px)]  h-full relative flex flex-col justify-start items-start">
        <Navbar />
        <div className="w-full h-[calc(100%-60px)] bg-[#F5F7F7] flex flex-col justify-start items-start">
          <NoInternetModal isOpen={openNoInternet} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
