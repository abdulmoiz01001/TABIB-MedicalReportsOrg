import React from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'
import PieCharts from '../Charts/PieCharts'
import { useMediaQuery } from 'react-responsive';

const PrevalenceOfHypertensionComp = ({data}) => {
    const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
    return (
        <>
            <div className='w-full h-[32.5%]  bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
                <div className='w-[55%] flex-col flex justify-center  items-center h-full ' >
                    <h1 className='desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[2.5rem] font-bold' >Prevalence of Hypertension</h1>
                    <div className='w-full flex justify-center items-center h-[85%]' >


                    <DynamicDoughnutChart
                        value={data.total}
                        showCenterValue={false}
                        showSegmentLines={true}
                        lay={{
                            top: 30,
                            bottom: 30,
                            left: isLargeDesktop ? 70 : 40 ,
                            right: isLargeDesktop ? 70 : 40,
                        }}
                        
                        />
                        </div>
                </div>
                <div className='w-[45%] flex flex-col  justify-center laptop:justify-around items-center h-full laptop:gap-0 gap-2' >
                   
                    <PieCharts firstValue={data.male} firstColor="#CC0001" secondColor="#FFB1B1" title="In Males" />

                  
                    <PieCharts firstValue={data.female} firstColor="#CC0001" secondColor="#FFB1B1" title="In Females" />

                   
                </div>

            </div>
        </>
    )
}

export default PrevalenceOfHypertensionComp