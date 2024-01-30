import React from 'react'

const LandingPage = () => {
    return (
        <div className="h-screen w-screen bg-primary md:flex">
            <div id="left" className="flex justify-center md:items-center items-end md:h-full md:w-1/2 h-1/2 w-full">
                <img className="h-full" src="/assets/baby2.png" alt="" />
            </div>
            <div id="right" className="md:h-full md:w-1/2 h-1/2 w-full flex justify-center items-center flex-col" >
                <p className="my-6 font-serif">New Collection</p>
                <p className="mb-6 text-textColor2 cursivefont text-3xl">Shop Ours</p>
                <h1 className="text-textColor text-5xl font-bold font-serif">BABYWEAR</h1>
                <button className="bg-textColor text-primary py-2 px-4 rounded-xl my-6 capitalize font-serif">SHOP NOW</button>
            </div>
        </div>
    )
}

export default LandingPage

