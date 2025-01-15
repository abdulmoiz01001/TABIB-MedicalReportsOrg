import React from 'react'
import TemperamentChart from '../Charts/TemperamentChart'

const TemperamentChartComp = () => {
  return (
    <>
   <div className='w-full flex h-[40%] flex-col justify-end items-center  bg-[#FAFAFA]  border border-[#CC0001] rounded-[15px] ' >
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' > */}
    <div className=' desktop:w-[90%] h-[20%] px-2 flex justify-between items-center' >
      <div className="flex justify-end gap-1 items-center" >
         <img  src='square.svg' className='w-4 h-4 ' />
         <p className="text-[1rem] text-black" >Male</p>
        </div> 
      <h1 className='text-[1rem] text-center font-bold text-black' >Temperament with Dominant Qualities</h1>
      <div className="flex justify-start gap-1 items-center" >
         <img  src='square.svg' className='w-4 h-4 ' />
         <p className="text-[1rem] text-black" >Female</p>
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