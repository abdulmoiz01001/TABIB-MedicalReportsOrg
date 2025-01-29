import React, { useEffect } from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'

const TABIATScoreComp = ({data}) => {
    useEffect(() => {
console.log("data of TABIYAT",data)
    }, [data])
    return (
        <>
            <div className='w-full flex justify-between  items-center h-[20%]  bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
                <div className='w-[50%] large-desktop:pl-8 h-full flex-col flex  justify-center  desktop:gap-4  desktop:items-end large-desktop:items-start border-blue-900' >
                    <h1 className=' mobile:text-[0.7rem] tablet:text-[0.7rem] desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem] text-start font-bold text-black'>Avg. TABIAT Score </h1>
                    <div className='desktop:w-[80%] large-desktop:w-full  flex mobile:justify-center justify-start laptop:gap-4 desktop:gap-5 items-center' >
                        <img src="jamiya.svg" alt="logo" className='desktop:w-[40px] laptop:w-[30px] laptop:h-[30px] large-desktop:w-[90px]  desktop:h-[40px] large-desktop:h-[120px]  ' />
                        {/* <div className='desktop:w-4 large-desktop:w-8 desktop:h-4 large-desktop:h-8 rounded-full bg-[#CC0001]'  >
                         
                        </div> */}

                        <img src="live.gif" alt="live" className='desktop:w-[40px] mobile:w-[30px] mobile:h-[30px] large-desktop:w-[70px] laptop:w-[30px] laptop:h-[30px]  desktop:h-[40px] large-desktop:h-[70px] ' />
                        <span className='desktop:text-[1rem] large-desktop:text-[2rem] ' >Live</span>

                    </div>
                    <h1 className='desktop:text-[1rem] mobile:text-[0.7rem] tablet:text-[0.7rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem]  text-start font-bold text-[#CC0001]'>Hamdard University </h1>
                </div>
                <div className='w-[40%]  h-full large-desktop:h-[80%] flex-col flex  justify-center items-center  border-blue-900' >
                    <DynamicDoughnutChart
                        value={data}
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