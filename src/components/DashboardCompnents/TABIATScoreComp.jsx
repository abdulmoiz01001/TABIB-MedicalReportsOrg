import React from 'react'
import SingleDoughnutChart from '../Charts/SingleDoughnutChart'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'

const TABIATScoreComp = () => {
    return (
        <>
            <div className='w-full flex justify-center  items-center h-[138px]  bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
                <div className='w-[50%]   h-full flex-col  justify-center py-4 items-center  border-blue-900' >
                    <h1 className='text-[13px] text-center font-bold text-black'>Avg. TABIAT Score </h1>
                    <div className='w-full  border-green-900 flex my-2 justify-center gap-6 items-center' >
                        <img src="jamiya.svg" alt="logo" className='w-[40px] h-[40px] ' />
                        <div className='w-4 h-4 rounded-full bg-[#CC0001]'  >

                        </div>
                        <span className='text-[13px]' >Live</span>

                    </div>
                    <h1 className='text-[13px] text-center font-bold text-[#CC0001]'>Hamdard University </h1>
                </div>
                <div className='w-[50%]  h-full flex-col  justify-center items-center  border-blue-900' >
                    <DynamicDoughnutChart
                        value={61.79}
                        showCenterValue={true}
                        showSegmentLines={false}
                        lay={{
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10,
                          }}
                    />
                </div>

            </div>
        </>
    )
}

export default TABIATScoreComp