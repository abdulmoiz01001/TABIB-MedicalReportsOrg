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
         <img src="logo.svg" alt="logo" className="w-[161px] h-[80px] " />
         <h1 className="text-[#CC0001] items-start text-[24px] font-bold" >Your Gateway to Precision Insights and <br /> Patient Well-being</h1>
         <p className="text-[#313131] text-[15px] font-normal" >Step into the nerve center of health monitoring—designed exclusively for administrators. This dashboard provides you with a seamless overview of aggregated temperament and blood pressure results, offering key insights into patient trends at a glance.</p>

       </div>
       <div className="w-[40%] flex flex-col  justify-center items-center gap-8 h-full  " >
         <h1 className="text-[#313131] text-center text-[45px] font-bold" >Login</h1>
         <input type="text" placeholder="Email / Username" className="w-[80%] pl-6 text-[20px] h-[80px] border-2 bg-transparent placeholder:text-[20px] border-red-900 rounded-[15px]  font-normal" />
         <input type="text" placeholder="Password" className="w-[80%] pl-6 text-[20px] h-[80px] border-2 bg-transparent placeholder:text-[20px] border-red-900 rounded-[15px]  font-normal" />
         <div className='flex justify-end items-center w-[80%]' >
            <p className="text-[#313131] font-semibold text-[18px]" >Forgot Password?</p>
         </div>
         <button className='w-[200px] h-[50px] rounded-[15px] bg-[#CC0001] text-[#FFFFFF] z-50' >Login</button>
       </div>
     </div>
    </div>
    </>
  )
}

export default DashboardLoginComp