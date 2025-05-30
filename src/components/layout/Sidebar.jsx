import { NavLink, useNavigate } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Logo } from "../../assets/export";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  // State for controlling the drawer visibility
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle Drawer (Mobile)
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="lg:hidden fixed top-4 left-4 z-50 text-[#074F57]"
      >
        {isDrawerOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>
      <div
        className={`fixed lg:static top-0 left-0 w-[280px] bg-[#041324] border-r border-gray-300 py-4  flex flex-col justify-start items-start transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 h-screen overflow-y-auto`}
      >
        <div className=" flex justify-start items-center w-full pl-4">
          <NavLink to="/">
            <img src={Logo} alt="perfectboat_logo" className="h-[60px] " />
          </NavLink>
        </div>
        <div className="w-full flex-grow overflow-y-auto mt-4 px-4 space-y-4">
          {sidebarData?.map((sidebar) => {
            return (
              <NavLink
                key={sidebar?.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm w-full h-10 px-6 space-x-3 flex items-center justify-start text-[12px] bg-secondary text-[#181818] rounded-small font-medium "
                    : "text-sm w-full h-10 px-6 space-x-3 flex items-center justify-start rounded-md text-[12px] font-normal  text-[#ffffff] hover:bg-secondary hover:text-[#181818] rounded-small"
                }
                to={sidebar?.link}
              >
                <p className="text-[14px]">{sidebar?.icon}</p>
                <p className="text-xs">{sidebar?.title}</p>
              </NavLink>
            );
          })}
          <div
            onClick={() => navigate("/auth/login")}
            className={`cursor-pointer text-sm w-full h-10 px-6 space-x-3 flex items-center justify-start text-[12px] hover:bg-secondary hover:text-[#181818] text-[#ffffff] rounded-small font-medium `}
          >
            <span>
              <IoLogOutOutline size={20} />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div
          onClick={handleCloseDrawer}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
