import React from 'react'
import SingleDoughnutChart from '../Charts/SingleDoughnutChart'

const TABIATScoreComp = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center h-[20%] pb-4 bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
                <div className='w-[50%] h-full flex-col justify-center py-4 items-center  border-blue-900' >
                    <h1 className='text-[13px] text-center font-bold text-black'>Avg. TABIAT Score </h1>
                    <div className='w-full flex  justify-evenly items-center' >
                        <img src="jamiya.svg" alt="logo" className='w-[40px] h-[40px] ' />
                        <div className='w-4 h-4 rounded-full bg-[#CC0001]'  >

                        </div>
                        <span className='text-[13px]' >Live</span>

                    </div>
                    <h1 className='text-[13px] text-center font-bold text-[#CC0001]'>Hamdard University </h1>
                </div>
                <div className='w-[50%] h-full flex-col justify-start items-center  border-blue-900' >
                   <SingleDoughnutChart />
                </div>

            </div>
        </>
    )
}

export default TABIATScoreComp