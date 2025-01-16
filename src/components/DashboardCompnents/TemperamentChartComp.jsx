import React from 'react'
import TemperamentChart from '../Charts/TemperamentChart'

const TemperamentChartComp = () => {
  return (
    <>
   <div className='w-full flex h-[40%] flex-col justify-end items-center  bg-[#FAFAFA]  border border-[#CC0001] rounded-[15px] ' >
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' > */}
    <div className=' desktop:w-[90%] large-desktop:w-[80%] h-[20%] px-2 flex justify-between items-center' >
      <div className="flex justify-end gap-1 items-center" >
         <img  src='square.svg' className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 ' />
         <p className="desktop:text-[1rem] large-desktop:text-[2.2rem] text-black" >Male</p>
        </div> 
      <h1 className='desktop:text-[1rem] large-desktop:text-[2rem] text-center font-bold text-black' >Temperament with Dominant Qualities</h1>
      <div className="flex justify-start gap-1 items-center" >
         <img  src='square.svg' className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 ' />
         <p className="desktop:text-[1rem] large-desktop:text-[2.2rem] text-black" >Female</p>
        </div> 


    </div>
    <div className='h-[90%]  w-[90%] flex justify-center items-center' >

    <TemperamentChart  />
    </div>
    {/* </div> */}
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' >

    <TemperamentChart  />
    </div>
    <div className='h-full flex justify-end items-end border-2 w-[30%]' >

    <TemperamentChart  />
    </div> */}
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' >

    <TemperamentChart  />
    </div> */}
    {/* <TemperamentChart  />
    <TemperamentChart  /> */}

    </div>
    </>
  )
}

export default TemperamentChartComp