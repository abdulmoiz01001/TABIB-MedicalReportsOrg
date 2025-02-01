import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutPopUpComp from "./ReportsComponents/LogoutPopUpComp";
import clsx from "clsx";

// Sidebar Links Array
const navLinks = [
  { name: "Dashboard", path: "/", icon: "dashbord.svg" },
  { name: "Report", path: "/report", icon: "report.svg" },
  { name: "About", path: "/about", icon: "about.svg" },
];

const DashboardSideBarComp = () => {
  const [logoutPopuUpShow, setLogoutPopuUpShow] = useState(false);
  const [hide, setHide] = useState(true);

  // Sidebar container classes
  const sidebarClasses = clsx(
    "fixed top-0 left-0 h-screen w-[20px] z-50"
  );

  // Sidebar panel classes
  const sidebarPanelClasses = clsx(
    "py-4 rounded-[15px] absolute top-1/2 -translate-y-1/2 transition-transform duration-300",
    "bg-[#313131] flex flex-col justify-between gap-8 items-center shadow-lg",
    "desktop:h-[50%] large-desktop:h-[50%] laptop:h-[70%] laptop:w-[100px]",
    "tablet:w-[80px] tablet:h-[50%] mobile:w-[60px] mobile:h-[50%] large-desktop:w-[220px] desktop:w-[81px]",
    hide ? "-translate-x-[91%] mobile:-translate-x-[88%]" : "translate-x-0"
  );

  // Active Link Styling
  const linkClasses = ({ isActive }) =>
    clsx(
      "flex w-full flex-col justify-center items-center gap-2 p-2 text-white",
      isActive && "border-l-4 border-red-600"
    );

  // Logout button classes
  const logoutButtonClasses = clsx("flex items-center gap-2 p-4 text-white");

  const containerClasses = clsx("flex w-full justify-center items-center large-desktop:pt-4 mobile:pt-2 desktop:pt-4 flex-col gap-4")
   const imageClass = clsx("desktop:w-[30px] large-desktop:w-[70px] desktop:h-[30px] large-desktop:h-[70px]")
   const linkClass = clsx("hidden desktop:text-[12px] large-desktop:text-[2rem] md:block")
   const logoutClass = clsx("desktop:w-[30px] large-desktop:w-[70px] desktop:h-[30px] large-desktop:h-[70px]")

   return (
    <div
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      className={sidebarClasses}
    >
      <LogoutPopUpComp show={logoutPopuUpShow} setShow={setLogoutPopuUpShow} />
      <div className={sidebarPanelClasses}>
        <div className={containerClasses}>
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              <img
                src={link.icon}
                alt={link.name}
                className={imageClass}
              />
              <span className={linkClass}>
                {link.name}
              </span>
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => setLogoutPopuUpShow(!logoutPopuUpShow)}
          className={logoutButtonClasses}
        >
          <img
            src="logout.svg"
            alt="Logout"
            className={logoutClass}
          />
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBarComp;
