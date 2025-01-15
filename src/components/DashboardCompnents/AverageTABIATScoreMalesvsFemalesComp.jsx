import React from 'react'

const AverageTABIATScoreMalesvsFemalesComp = () => {
    const maleScore = 70; // Replace with dynamic values
    const femaleScore = 80; // Replace with dynamic values

    return (
        <>
            <div className='w-full h-[40%] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
                <h1 className='text-[1rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
                <div className='flex h-[90%] w-full justify-evenly items-center' >
                    <div className='h-full w-[20px] flex flex-col-reverse justify-center gap-[1px] items-center' >
                       <span className="text-[0.8rem]" >0 </span>
                       <span className="text-[0.8rem]" >2</span>
                       <span className="text-[0.8rem]" >3</span>
                       <span className="text-[0.8rem]" >4</span>
                       <span className="text-[0.8rem]" >5</span>
                       <span className="text-[0.8rem]" >6</span>
                       <span className="text-[0.8rem]" >7</span>
                       <span className="text-[0.8rem]" >8</span>
                       <span className="text-[0.8rem]" >9</span>
                       <span className="text-[0.8rem]" >10</span>
                    </div>
                    <img src='male.svg' alt='image'   />
                    <img src='line.svg' alt='image' />
                    <img src='female.svg' alt='image'   />
                </div>
            </div>
        </>
    )
}

export default AverageTABIATScoreMalesvsFemalesComp