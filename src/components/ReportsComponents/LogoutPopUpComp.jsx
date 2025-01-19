import React from "react";

const LogoutPopUpComp = ({ show, setShow }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-300 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50`}
      >
        {/* Pop-up */}
        <div className="desktop:w-[353px] desktop:h-[202px] large-desktop:w-[700px] large-desktop:h-[404px] bg-[#FFDDDA] rounded-[15px] flex flex-col justify-center items-center p-6 gap-6">
          <h1 className="text-[#FF0000] text-center desktop:text-[24px] large-desktop:text-[36px] font-bold">
            Are you sure <br /> You want to logout?
          </h1>
          <div className="w-full flex justify-center items-center desktop:gap-4 large-desktop:gap-16">
            <button
              className="desktop:w-[123px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px] bg-[#FFFFFF] rounded-[15px] large-desktop:text-[30px] active:scale-90 text-[#CC0001] font-medium"
              onClick={() => setShow(false)} // Close the pop-up on cancel
            >
              Cancel
            </button>
            <button
              className="desktop:w-[123px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px] bg-[#CC0001] rounded-[15px] large-desktop:text-[30px] active:scale-90 text-[#FFFFFF] font-medium"
            //   onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPopUpComp;
