import React from 'react'
import BodyTypeLayout from '../Charts/BodyTypeLayout'

const DominantBodyCommunityComp = () => {
    return (
        <>
            <div className='w-full h-[284px] pb-4 bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
              <h1 className='text-[0.625rem] font-bold text-black text-center pt-2' >Dominant Body Composition in Community</h1>
             <BodyTypeLayout />
            </div>
        </>
    )
}

export default DominantBodyCommunityComp