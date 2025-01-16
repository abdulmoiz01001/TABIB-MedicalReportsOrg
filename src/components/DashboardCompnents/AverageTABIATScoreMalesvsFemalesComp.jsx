import React from 'react'

const AverageTABIATScoreMalesvsFemalesComp = () => {
    const maleScore = 70; // Replace with dynamic values
    const femaleScore = 80; // Replace with dynamic values

    return (
        <>
            <div className='w-full h-[35%] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
                <h1 className='desktop:text-[1rem] large-desktop:text-[2.2rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
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
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" className="desktop:w-[100px] large-desktop:w-[200px] h-auto" viewBox="0 0 325 744.5">
                        <defs>
                            {/* <style>
                                .cls-1, .cls-2 {
                                    fill: none;
                                stroke: #000;
                                stroke-miterlimit: 10;
                                stroke-width: 22px;
      }

                                .cls-2 {
                                    stroke - linecap: round;
      }
                            </style> */}
                        </defs>
                        <g id="Layer_1-2" data-name="Layer 1">
                            <circle   className="stroke-black stroke-[22px] fill-none" class="cls-1" cx="163" cy="81" r="70" />
                            <path class="cls-1" d="m63.11,191h198.78c28.76,0,52.11,23.35,52.11,52.11v221.89H11v-221.89c0-28.76,23.35-52.11,52.11-52.11Z" />
                            <path class="cls-2" d="m230.5,272.08c13.24,8.51,22,23.36,22,40.27v421.15H74.5v-421.15c0-16.48,8.33-31.01,21-39.62" />
                            <line class="cls-1" x1="162.5" y1="505.5" x2="162.5" y2="737.5" />
                        </g>
                    </svg>
                    {/* <img src='male.svg' alt='image' className='large-desktop:w-[200px]'  /> */}
                    <img src='line.svg' alt='image' className='large-desktop:h-[300px]' />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.68 744.5" className="desktop:w-[100px] large-desktop:w-[200px] h-auto">
                        <g>
                            {/* Rectangle */}
                            <rect
                                x="91.61"
                                y="577.5"
                                width="178"
                                height="156"
                                className="stroke-black stroke-[22px] fill-none"
                            />
                            {/* Vertical Line */}
                            <line
                                x1="179.61"
                                y1="567.5"
                                x2="179.61"
                                y2="737.5"
                                className="stroke-black stroke-[22px]"
                            />
                            {/* Circle */}
                            <circle
                                cx="180.11"
                                cy="81"
                                r="70"
                                className="stroke-black stroke-[22px] fill-none"
                            />
                            {/* Additional Paths */}
                            <path
                                d="m292.61,465.5l11-.5h27.5v-221.89c0-28.78-23.33-52.11-52.11-52.11H80.22c-28.78,0-52.11,23.33-52.11,52.11v221.89l11.5.5,27-.5"
                                className="stroke-black stroke-[22px] fill-none"
                            />
                            <path
                                d="m342.61,577.5H16.61l75-177,3-74.1c0-19.96,28.42-50.81,47.85-36.14l40.15,24.17,42.15-24.17c17.42-13.16,47.85,16.18,47.85,36.14l2,76.1,68,175Z"
                                className="stroke-black stroke-[22px] fill-none"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default AverageTABIATScoreMalesvsFemalesComp