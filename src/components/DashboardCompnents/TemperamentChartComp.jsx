import React from 'react'
import TemperamentChart from '../Charts/TemperamentChart'

const TemperamentChartComp = ({data}) => {
  return (
    <>
   <div className='w-full flex h-[35%] flex-col justify-end items-center  bg-[#FAFAFA]  border border-[#CC0001] rounded-[15px] ' >
    {/* <div className='h-full flex justify-end items-end border-2 w-[30%]' > */}
    <div className=' desktop:w-[90%] large-desktop:w-[90%] h-[20%] laptop:px-0 laptop:gap-2 px-2 flex justify-between items-center' >
      <div className="flex justify-end gap-1 items-center" >
         <img  src='square.svg' className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 ' />
         <p className="desktop:text-[1rem] laptop:text-[0.6rem] large-desktop:text-[2.2rem] text-black" >Male</p>
        </div> 
      <h1 className='desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[2.2rem] text-center font-bold text-black' >Temperament with Dominant Qualities</h1>
      <div className="flex justify-start gap-1 items-center" >
         <img  src='square.svg' className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 ' />
         <p className="desktop:text-[1rem] laptop:text-[0.6rem] large-desktop:text-[2.2rem] text-black" >Female</p>
        </div> 


    </div>
    <div className='h-[90%]  w-[90%] flex flex-col justify-end items-center' >

    <TemperamentChart details={data}  />
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