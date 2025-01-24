// // import React from 'react'

// // const AverageTABIATScoreMalesvsFemalesComp = ({data}) => {
// //     const maleScore = data.male // Replace with dynamic values
// //     const femaleScore = data.female; // Replace with dynamic values

// //     return (
// //         <>
// //             <div className='w-full h-[35%] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
// //                 <h1 className='desktop:text-[1rem] large-desktop:text-[2.2rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
// //                 <div className='flex h-[90%] w-full justify-evenly items-center' >
// //                     <div className='h-full w-[20px] flex flex-col-reverse justify-center gap-[1px] items-center' >
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >0 </span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >2</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >3</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >4</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >5</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >6</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >7</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >8</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >9</span>
// //                         <span className="desktop:text-[0.8rem] large-desktop:text-[2rem] " >10</span>
// //                     </div>

// //                     {/* <img src='male.svg' alt='image' className='large-desktop:w-[200px]'  /> */}
// //                     <img src='line.svg' alt='image' className='large-desktop:h-[300px]' />
                   
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default AverageTABIATScoreMalesvsFemalesComp


// import React from 'react';

// const AverageTABIATScoreMalesvsFemalesComp = ({ data }) => {
//     const maleScore = data.male || 10; // Dynamic male score
//     const femaleScore = data.female || 10; // Dynamic female score
  
//     // Calculate male score percentage and round to nearest 5
//     const totalScore = maleScore + femaleScore;
//     const roundToNearestFive = (value) => Math.round(value / 5) * 5;
//     const malePercentage = roundToNearestFive((maleScore / totalScore) * 100);

//   // Determine the image based on the male percentage
//   const renderImageBasedOnPercentage = () => {
//     if (malePercentage === 0) return 'male1.svg';
//     if (malePercentage === 5) return 'male2.svg';
//     if (malePercentage === 10) return 'male3.svg';
//     if (malePercentage === 15) return 'male4.svg';
//     if (malePercentage === 20) return 'male5.svg';
//     if (malePercentage === 25) return 'male6.svg';
//     if (malePercentage === 30) return 'male7.svg';
//     // if (malePercentage === 35) return 'male8.svg';
//     if (malePercentage === 40) return 'male8.svg';
//     if (malePercentage === 45) return 'male9.svg';
//     if (malePercentage === 50) return 'male10.svg';
//     if (malePercentage === 55) return 'male11.svg';
//     if (malePercentage === 60) return 'male12.svg';
//     if (malePercentage === 65) return 'male13.svg';
//     if (malePercentage === 70) return 'male14.svg';
//     if (malePercentage === 75) return 'male15.svg';
//     // if (malePercentage === 80) return 'male16.svg';
//     if (malePercentage === 85) return 'male16.svg';
//     if (malePercentage === 90) return 'male17.svg';
//     // if (malePercentage === 95) return 'male.svg';
//     return 'male18.svg'; // For percentages >= 100
//   };

//   //  do foe female also 




//   const selectedImage = renderImageBasedOnPercentage();
//   // do for female also

//   return (
//     <>
//       <div className="w-full h-[35%] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex border border-[#CC0001] rounded-[15px]">
//         <h1 className="desktop:text-[1rem] large-desktop:text-[2.2rem] font-bold text-black">
//           Average TABIAT Score of Males vs Females
//         </h1>
//         <div className="flex h-[90%] w-full justify-evenly items-center">
//           <div className="h-full w-[20px] flex flex-col-reverse justify-center gap-[1px] items-center">
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">0</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">2</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">3</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">4</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">5</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">6</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">7</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">8</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">9</span>
//             <span className="desktop:text-[0.8rem] large-desktop:text-[2rem]">10</span>
//           </div>

//           {/* Dynamic image based on percentage */}
//           <img
//             src={selectedImage}
//             alt="Percentage Based Image"
//             className="large-desktop:w-[200px]  desktop:w-[100px] "
//           />
//           {/* Existing static image */}
//           <img src="line.svg" alt="image" className="large-desktop:h-[300px]" />
//           {/* do here for female */}
//           <img
//             src={"for female"}
//             alt="Percentage Based Image"
//             className="large-desktop:w-[200px]  desktop:w-[100px] "
//           />

//         </div>
//       </div>
//     </>
//   );
// };

// export default AverageTABIATScoreMalesvsFemalesComp;


import React from 'react';

const AverageTABIATScoreMalesvsFemalesComp = ({ data }) => {
  const maleScore = data.male || 10; // Dynamic male score
  const femaleScore = data.female || 10; // Dynamic female score

  console.log(maleScore)
  console.log(femaleScore)

  // Function to calculate percentage and round to nearest 5
  const calculatePercentage = (score) => Math.round((score / 10) * 10 / 5) * 5;

  // Determine the male image based on the percentage
  const getMaleImage = (percentage) => {
    console.log("percentage", percentage)
    switch (percentage) {
      case 0: return 'male0.svg';
      case 5: return 'male1.svg';
      case 10: return 'male2.svg';
      case 15: return 'male2.svg';
      case 20: return 'male3.svg';
      case 25: return 'male3.svg';
      case 30: return 'male4.svg';
      case 40: return 'male4.svg';
      case 45: return 'male5.svg';
      case 50: return 'male5.svg';
      case 55: return 'male6.svg';
      case 60: return 'male6.svg';
      case 65: return 'male7.svg';
      case 70: return 'male7.svg';
      case 75: return 'male8.svg';
      case 85: return 'male8.svg';
      case 90: return 'male9.svg';
      case 95: return 'male9.svg';
      case 100: return 'male9.svg'
      // default: return 'male9.svg'; // For percentages >= 95
    }
  };

  // Determine the female image based on the percentage
  const getFemaleImage = (percentage) => {
    console.log("percentage", percentage)
    switch (percentage) {
      case 0: return 'female0.svg';
      case 5: return 'female1.svg';
      case 10: return 'female1.svg';
      case 15: return 'female2.svg';
      case 20: return 'female2.svg';
      case 25: return 'female3.svg';
      case 30: return 'female3.svg';
      case 40: return 'female4.svg';
      case 45: return 'female4.svg';
      case 50: return 'female5.svg';
      case 55: return 'female5.svg';
      case 60: return 'female6.svg';
      case 65: return 'female6.svg';
      case 70: return 'female7.svg';
      case 75: return 'female8.svg';
      case 85: return 'female8.svg';
      case 90: return 'female9.svg';
      case 100: return 'female9.svg'
      // default: return 'female9.svg'; // For percentages >= 95
    }
  };

  const malePercentage = calculatePercentage(maleScore);
  const femalePercentage = calculatePercentage(femaleScore);

  console.log(malePercentage)
  console.log(femalePercentage)

  const maleImage = getMaleImage(malePercentage);
  const femaleImage = getFemaleImage(femalePercentage);

  return (
    <div className=" w-full h-[35%] flex-col justify-between items-center laptop:p-2 p-4 bg-[#FAFAFA] flex border border-[#CC0001] rounded-[15px]">
      <h1 className="desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[2.2rem] font-bold text-black">
        Average TABIAT Score of Males vs Females
      </h1>
      <div className="flex  h-[70%] w-[90%]  grid-background justify-between items-center">
        {/* Left Y-axis for scale */}
        
        <div className="h-full w-[20px]  flex flex-col-reverse justify-center gap-[1px] items-center">
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">0</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">10</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">20</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">30</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">40</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">50</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">60</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">70</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">80</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">90</span>
          <span className="desktop:text-[0.8rem] laptop:text-[0.5rem] large-desktop:text-[2rem]">100</span>
        </div>

        {/* Male Score */}
        <div className="flex  flex-col justify-center items-center">
          <img
            src={maleImage}
            alt="Male Score"
            className="large-desktop:w-[200px] laptop:w-[60px] desktop:h-[205px] desktop:w-[100px]"
          />
      
        </div>

        {/* Line Divider */}
        <img src="line.svg" alt="Divider" className="large-desktop:h-[300px]" />

        {/* Female Score */}
        <div className="flex flex-col justify-center  items-center">
          <img
            src={femaleImage}
            alt="Female Score"
            className="large-desktop:w-[200px] laptop:w-[65px] desktop:h-[300px] desktop:w-[98px]"
          />
       
        </div>
      </div>
    </div>
  );
};

export default AverageTABIATScoreMalesvsFemalesComp;
