import React from 'react'
import BodyTypeLayout from '../Charts/BodyTypeLayout'

const DominantBodyCommunityComp = () => {
    return (
        <>
            <div className='w-full h-[39%] pb-4 bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
              <h1 className='text-[0.9rem] font-bold text-black text-center py-2' >Dominant Body Composition in Community</h1>
             <BodyTypeLayout />
            </div>
        </>
    )
}

export default DominantBodyCommunityComp