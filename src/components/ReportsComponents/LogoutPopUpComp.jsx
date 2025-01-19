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
        <div className="w-[353px] h-[202px] bg-[#FFDDDA] rounded-[15px] flex flex-col justify-center items-center p-6 gap-6">
          <h1 className="text-[#FF0000] text-center text-[24px] font-bold">
            Are you sure <br /> you want to logout?
          </h1>
          <div className="w-full flex justify-center items-center gap-4">
            <button
              className="w-[123px] h-[40px] bg-[#FFFFFF] rounded-[15px] text-[#CC0001] font-medium"
              onClick={() => setShow(false)} // Close the pop-up on cancel
            >
              Cancel
            </button>
            <button
              className="w-[123px] h-[40px] bg-[#CC0001] rounded-[15px] text-[#FFFFFF] font-medium"
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
