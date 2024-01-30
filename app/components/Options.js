import React from 'react'
import Image from 'next/image'

const Options = () => {
  return (
    <div className="h-screen w-screen">
      <div id="up" className='md:h-1/2 h-full w-full flex md:flex-row flex-col justify-evenly items-center bg-gradColor/60'>
        <div className='md:h-4/5 h-1/5 md:w-1/5 w-4/5 bg-textColor/95 flex justify-center items-center'>
            <div className='h-4/5 w-4/5 bg-textColor/80  border-primary border-2 grid place-items-center font-serif text-primary' >NEW IN</div>
        </div>
        <div className='md:h-4/5 h-1/5 md:w-1/5 w-4/5 bg-primary/80 flex justify-center items-center'>
            <div className='h-4/5 w-4/5 bg-primary/80 border-textColor/60 border-2 grid place-items-center font-serif text-textColor'>BABY</div>
        </div>
        <div className='md:h-4/5 h-1/5 md:w-1/5 w-4/5 bg-textColor/80 flex justify-center items-center'>
            <div className='h-4/5 w-4/5 bg-textColor/ border-primary border-2 grid place-items-center font-serif text-primary'>LIFESTYLE</div>
        </div>
        <div className='md:h-4/5 h-1/5 md:w-1/5 w-4/5 bg-boxcolor flex justify-center items-center'>
            <div className='h-4/5 w-4/5 bg-boxcolor border-textColor border-2 grid place-items-center font-serif text-textColor'>GIFTS</div>
        </div>
      </div>
      <div id="lower" className='h-1/2 w-full bg-primary flex'>
        <div id="left" className="h-full md:w-1/2 w-full flex justify-center items-center flex-col">
            <p className='text-textColor font-serif'>find the</p>
            <p className='mt-2 font-bold text-white font-serif text-3xl'>PERFECT GIFT</p>
            <p className='text-textColor cursivefont text-2xl'>to celebrate a special moment</p>
        </div>
        <div id="right" className="md:flex justify-center items-center h-full w-1/2 hidden">
            <Image className="h-full" src="/assets/babywear.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Options
