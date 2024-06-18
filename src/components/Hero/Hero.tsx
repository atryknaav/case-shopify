import React from 'react'

const Hero = () => {
  return (
    <div className=' z-0'>
        <div className=' w-full h-[1000px] bg-slate-900'>
          <img src="/hero1.png" alt=""/>

          <div className=' absolute bottom-0 left-0 pb-[30vh] pl-[5vw] text-white text-9xl font-bold'>
            HELOO
          </div>

        </div>

        <div className=' flex h-[650px]'>
            <div className=' w-[50%] bg-slate-700'>

            </div>

            <div className=' w-[50%] bg-[#E0E0E0]'>

            </div>
        </div>
    </div>
  )
}

export default Hero