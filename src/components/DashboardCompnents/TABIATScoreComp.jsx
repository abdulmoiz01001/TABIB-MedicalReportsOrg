import React from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'

const TABIATScoreComp = () => {
    return (
        <>
            <div className='w-full flex justify-between  items-center h-[20%]  bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
                <div className='w-[50%]  h-full flex-col flex  justify-center gap-4  desktop:items-end large-desktop:items-start border-blue-900' >
                    <h1 className='desktop:text-[1rem] large-desktop:text-[2.2rem] large-desktop:pl-6 text-center font-bold text-black'>Avg. TABIAT Score </h1>
                    <div className='w-[100%]  border-green-900 flex  justify-end gap-8 items-center' >
                        <img src="jamiya.svg" alt="logo" className='desktop:w-[40px] large-desktop:w-[120px]  desktop:h-[40px] large-desktop:h-[120px]  ' />
                        {/* <div className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 rounded-full bg-[#CC0001]'  >
                         
                        </div> */}

                        <img src="live.gif" alt="live" className='desktop:w-[40px] large-desktop:w-[100px]  desktop:h-[40px] large-desktop:h-[100px] ' />
                        <span className='desktop:text-[0.9rem] large-desktop:text-[2.5rem] ' >Live</span>

                    </div>
                    <h1 className='desktop:text-[1rem] large-desktop:text-[2.2rem] large-desktop:pl-6 text-center font-bold text-[#CC0001]'>Hamdard University </h1>
                </div>
                <div className='w-[40%]  h-full flex-col flex  justify-center items-center  border-blue-900' >
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