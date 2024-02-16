import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar';
import { useState } from 'react';


const [show,setshow ] = useState(false)

const inter = Inter({ subsets: ['latin']})
const page = () => {
  const ProductDetails = {
    name: "Baby Swing Set",
    by: "By Parkar & Charlotte",
    cost: "800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    choice: "CHOOSE YOUR COLOR",
    img: "/assets/baby3.png",
    colors: ["yellow", "yellow", "yellow", "yellow"]
  };
  return (
    <>
    <div className='h-screen w-screen bg-primary flex md:flex-row flex-col'>
      <Navbar/>
      
      <div id="left" className='h-full md:w-1/2 w-full flex flex-col justify-end pb-8 items-center ' >
        <div className='h-3/4 w-4/5 flex justify-center items-center rounded-lg bg-gradColor/30'>

          <img className="h-full rounded-md" src={ProductDetails.img} alt="" />
        </div>
        <div className='md:w-1/2 w-4/5 flex justify-between py-2'>
          <div className='w-16 rounded-lg h-16 object-cover flex items-center justify-center bg-gradColor/30 border-2 border-textColor'><img src={ProductDetails.img} className=' h-full' alt="" /> </div>
          <div className='w-16 rounded-lg h-16 object-cover flex items-center justify-center bg-gradColor/30 hover:border-2 hover:border-textColor'><img src={ProductDetails.img} className=' h-full' alt="" /> </div>
          <div className='w-16 rounded-lg h-16 object-cover flex items-center justify-center bg-gradColor/30 hover:border-2 hover:border-textColor'><img src={ProductDetails.img} className=' h-full' alt="" /></div>
          <div className='w-16 rounded-lg h-16 object-cover flex items-center justify-center bg-gradColor/30 hover:border-2 hover:border-textColor'><img src={ProductDetails.img} className=' h-full' alt="" /></div>
        </div>
      </div>
      <div id="right" className=' h-full md:w-1/2 w-full flex justify-evenly items-center flex-col md:pr-20 pt-20'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className={`text-textColor md:text-5xl text-3xl font-bold font-serif my-1`}>{ProductDetails.name}</h1>
          <p className='text-white text-xs font-serif'>{ProductDetails.by}</p>
        </div>
        <h1 className='text-textColor text-2xl font-bold font-sans'>${ProductDetails.cost}</h1>
        <p className='text-textColor text-xs font-serif text-center px-20'>{ProductDetails.description}</p>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-textColor text-xs font-semibold my-2'>{ProductDetails.choice}</p>
          <div className='flex '>
            {ProductDetails.colors.map((colors, index) => {
              return (<div className={`h-5 w-5 rounded-full mx-2`} style={{ backgroundColor: `${colors}`}} key={index}></div>)
            })}
          </div>
        </div>
        <button className='bg-textColor text-white py-2 px-4 rounded-xl my-6 capitalize font-serif"'>ADD TO CART</button>
      </div>
    </div>
    <div className=' h-screen w-screen bg-primary'>

    </div>
    </>
  )
}

export default page
