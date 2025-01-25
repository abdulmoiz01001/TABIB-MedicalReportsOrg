import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutPopUpComp from "./ReportsComponents/LogoutPopUpComp";


// Sidebar Links Array
const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: "dashbord.svg",
  },
  {
    name: "Report",
    path: "/report",
    icon: "report.svg",
  },
  // {
  //   name: "About",
  //   path: "/about",
  //   icon: "about.svg",
  // },
];

const DashboardSideBarComp = () => {
  const [logoutPopuUpShow, setLogoutPopuUpShow] = useState(false);
  const navigate = useNavigate();
  const [hide, setHide] = useState(true); // Sidebar initially hidden

  // Active Link Styling
  const linkClasses = ({ isActive }) =>
    `flex w-full flex-col justify-center items-center gap-2 p-2 text-white ${
      isActive ? "border-l-4 border-red-600" : ""
    }`;

  return (
    // Wrapper div to detect mouse hover on the left edge

    <div
      onMouseEnter={() => setHide(false)}  // Show sidebar when hovered
      onMouseLeave={() => setHide(true)}   // Hide sidebar when cursor leaves
      className="fixed top-0 left-0 h-screen w-[20px] z-50"
    >
      <LogoutPopUpComp show={logoutPopuUpShow} setShow={setLogoutPopuUpShow} />
      {/* Sidebar */}
      <div
        className={`desktop:h-[30%] large-desktop:h-[50%] py-4 laptop:h-[50%] laptop:w-[100px] tablet:w-[80px] tablet:h-[50%] mobile:w-[60px] mobile:h-[30%] large-desktop:w-[220px] rounded-[15px] absolute top-1/2 -translate-y-1/2 ${
          hide ? "-translate-x-[91%] mobile:-translate-x-[88%]" : "translate-x-0"
        } transition-transform duration-300  desktop:w-[81px] bg-[#313131] flex flex-col justify-between gap-8 items-center py-4 shadow-lg`}
      >
        <div className="flex w-full justify-center items-center large-desktop:pt-4 flex-col gap-4">
          {/* Dynamic Navigation Links */}
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              <img src={link.icon} alt={link.name} className="desktop:w-[30px] large-desktop:w-[70px] desktop:h-[30px] large-desktop:h-[70px]" />
              <span className="hidden desktop:text-[12px] large-desktop:text-[2rem] md:block">{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => setLogoutPopuUpShow(!logoutPopuUpShow)}
          className="flex items-center gap-2 p-4 text-white"
        >
          <img src="logout.svg" alt="Logout" className="desktop:w-[30px] large-desktop:w-[70px] desktop:h-[30px] large-desktop:h-[70px]" />
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBarComp;
