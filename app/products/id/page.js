import React from 'react'

const page = () => {
  const ProductDetails = {
    name: "Baby Swing Set",
    by: "By Parkar & Charlotte",
    cost: "800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    choice: "CHOOSE YOUR COLOR",
    colors: ["yellow", "yellow", "yellow", "yellow"]
  };
  return (
    <div className='h-screen w-screen bg-primary flex'>
      <div id="left" className='h-full w-1/2 flex justify-center items-center' >
        <img className="h-4/5 rounded-md" src="\assets\swing.jpg" alt="" />
      </div>
      <div id="right" className=' h-full w-1/2 flex justify-evenly items-center flex-col pr-20'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className="text-textColor text-5xl font-bold font-serif my-1">{ProductDetails.name}</h1>
          <p className='text-white text-xs font-serif'>{ProductDetails.by}</p>
        </div>
        <h1 className='text-textColor text-2xl font-bold font-sans'>${ProductDetails.cost}</h1>
        <p className='text-textColor text-xs font-serif text-center'>{ProductDetails.description}</p>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-textColor text-xs font-semibold my-2'>{ProductDetails.choice}</p>
          <div className='flex '>
            {ProductDetails.colors.map((colors, index) => {
              return (<div className={`h-5 w-5 bg-${colors}-200 rounded-full mx-2`} key={index}></div>)
            })}
          </div>
        </div>
        <button className='bg-textColor text-white py-2 px-4 rounded-xl my-6 capitalize font-serif"'>ADD TO CART</button>
      </div>
    </div>
  )
}

export default page
