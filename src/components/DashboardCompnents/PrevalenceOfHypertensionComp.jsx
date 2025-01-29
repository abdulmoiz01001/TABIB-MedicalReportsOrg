import React from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'
import PieCharts from '../Charts/PieCharts'
import { useMediaQuery } from 'react-responsive';

const PrevalenceOfHypertensionComp = ({data}) => {
    const isLargeDesktop = useMediaQuery({ minWidth: 2560 });  
      const isMobile = useMediaQuery({ maxWidth: 639 });          // 2xl
    return (
        <>
            <div className='w-full h-[32.5%] bg-[#FAFAFA] flex tablet:flex tablet:flex-row tablet:justify-center tablet:items-center  mobile:justify-center large-desktop:justify-center large-desktop:items-center mobile:items-center border border-[#CC0001] rounded-[15px] ' >
                <div className='w-[65%] flex-col flex  justify-center  items-center h-full ' >
                    <h1 className='desktop:text-[1rem] tablet:text-[0.7rem] mobile:text-[0.7rem] text-center desktop:mt-2 desktop:leading-4 laptop:text-[0.7rem] large-desktop:text-[1.5rem] font-bold' >Prevalence of Hypertension</h1>
                    <div className='w-full flex  justify-center items-center h-[85%]' >


                    <DynamicDoughnutChart
                        value={data.total}
                        showCenterValue={false}
                        showSegmentLines={true}
                        lay={{
                            top: 60,
                            bottom: 60,
                            left: isLargeDesktop ? 90 : isMobile ? 50 : 30 ,
                            right: isLargeDesktop ? 90 : isMobile ? 50 : 30,
                        }}
                        
                        />
                        </div>
                </div>
                <div className='w-[45%] desktop:w-[20%]  flex flex-col justify-center mobile:justify-center tablet:justify-center laptop:justify-around items-center h-full laptop:gap-0 large-desktop:gap-4 gap-2' >
                   
                    <PieCharts firstValue={data.male} firstColor="#CC0001" secondColor="#FFB1B1" title="Males" />

                  
                    <PieCharts firstValue={data.female} firstColor="#CC0001" secondColor="#FFB1B1" title="Females" />

                   
                </div>

            </div>
        </>
    )
}

export default PrevalenceOfHypertensionComp