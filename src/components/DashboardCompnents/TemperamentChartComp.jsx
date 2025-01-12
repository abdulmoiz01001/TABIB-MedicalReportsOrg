import React from 'react'
import TemperamentChart from '../Charts/TemperamentChart'

const TemperamentChartComp = () => {
  return (
    <>
   <div className='w-full flex h-[217px] border-2 flex-col justify-end items-center  bg-[#FAFAFA]  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' > */}
    <div className='w-full h-[20%] px-2 flex justify-between items-center' >
      <div className="flex justify-center gap-2 items-center" >
         <img  src='square.svg' className='w-4 h-4 ' />
         <p className="text-[10px] text-black" >Male</p>
        </div> 
      <h1 className='text-[10px] font-bold text-black' >Temperament with Dominant Qualities</h1>
      <div className="flex justify-center gap-2 items-center" >
         <img  src='square.svg' className='w-4 h-4 ' />
         <p className="text-[10px] text-black" >Female</p>
        </div> 


    </div>
    <div className='h-[80%]' >

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