import React from 'react'

const AverageTABIATScoreMalesvsFemalesComp = () => {
    const maleScore = 70; // Replace with dynamic values
    const femaleScore = 80; // Replace with dynamic values

    return (
        <>
            <div className='w-full h-[40%] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
                <h1 className='desktop:text-[1rem] large-desktop:text-[2rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
                <div className='flex h-[90%] w-full justify-evenly items-center' >
                    <div className='h-full w-[20px] flex flex-col-reverse justify-center gap-[1px] items-center' >
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >0 </span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >2</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >3</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >4</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >5</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >6</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >7</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >8</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >9</span>
                       <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >10</span>
                    </div>
                    <img src='male.svg' alt='image' className='large-desktop:w-[200px]'  />
                    <img src='line.svg' alt='image' className='large-desktop:h-[300px]' />
                    <img src='female.svg' alt='image'  className='large-desktop:w-[360px]' />
                </div>
            </div>
        </>
    )
}

export default AverageTABIATScoreMalesvsFemalesComp