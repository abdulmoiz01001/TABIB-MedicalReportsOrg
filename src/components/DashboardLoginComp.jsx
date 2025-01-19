import React from 'react'

const DashboardLoginComp = () => {
  return (
    <>
    <div 
    style={{
        backgroundImage: `url("loginbg.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    }}
    className='w-full h-screen flex justify-center items-center' >
     <div className='w-[80%] h-[70%] flex justify-evenly items-center rounded-[16px] bg-[#FFFEFE] opacity-75' >
       <div className="w-[35%] flex flex-col justify-center gap-8 items-start h-full  " >
         <img src="logo.svg" alt="logo" className="desktop:w-[161px] desktop:h-[80px] large-desktop:w-[350px] large-desktop:h-[200px] " />
         <h1 className="text-[#CC0001] items-start desktop:text-[22px] large-desktop:text-[46px] font-bold" >Your Gateway to Precision Insights and <br /> Patient Well-being</h1>
         <p className="text-[#313131] desktop:text-[15px] large-desktop:text-[30px] font-normal" >Step into the nerve center of health monitoring—designed exclusively for administrators. This dashboard provides you with a seamless overview of aggregated temperament and blood pressure results, offering key insights into patient trends at a glance.</p>
       </div>
       <div className="w-[40%] flex flex-col justify-center items-center desktop:gap-8 large-desktop:gap-16 h-full  " >
         <h1 className="text-[#313131] text-center desktop:text-[45px] large-desktop:text-[95px]  font-bold" >Login</h1>
         <input type="text" placeholder="Email / Username" className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px]  font-normal" />
         <input type="password" placeholder="Password" className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px]  font-normal" />
         {/* <input type="text" placeholder="Password" className="w-[80%] pl-6 text-[20px] h-[80px] border-2 bg-transparent placeholder:text-[20px] border-red-900 rounded-[15px]  font-normal" /> */}
         <div className='flex justify-end items-center w-[80%]' >
            <p className="text-[#313131] font-semibold desktop:text-[18px] large-desktop:text-[30px]" >Forgot Password?</p>
         </div>
         <button className='desktop:w-[200px] large-desktop:w-[400px] large-desktop:h-[100px] desktop:h-[50px] rounded-[15px] desktop:text-[20px] large-desktop:text-[40px] bg-[#CC0001] text-[#FFFFFF] z-50' >Login</button>
       </div>
     </div>
    </div>
    </>
  )
}

export default DashboardLoginComp