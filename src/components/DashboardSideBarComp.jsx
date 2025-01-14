import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  {
    name: "About",
    path: "/about",
    icon: "about.svg",
  },
];

const DashboardSideBarComp = () => {
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
      {/* Sidebar */}
      <div
        className={`h-[450px] rounded-[15px] absolute top-[20%] ${
          hide ? "-translate-x-[91%]" : "translate-x-0"
        } transition-transform duration-300 my-auto w-[81px] bg-[#313131] flex flex-col justify-between gap-8 items-center py-4 shadow-lg`}
      >
        <div className="flex w-full justify-center items-center flex-col gap-4">
          {/* Dynamic Navigation Links */}
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              <img src={link.icon} alt={link.name} className="w-[30px] h-[30px]" />
              <span className="hidden text-[12px] md:block">{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 p-4 text-white"
        >
          <img src="logout.svg" alt="Logout" className="w-[30px] h-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBarComp;
