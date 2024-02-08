import React from 'react'

const Signup= () => {
  return (
    <div className='h-screen w-screen bg-primary flex justify-center items-center'>
      <div className='h-4/5 w-4/5 flex shadow-lg shadow-textColor rounded-lg'>
        <div id="left" className='bg-textColor/60  h-full w-1/2 flex flex-col justify-center items-center rounded-l-lg  shadow-textColor'>
          <h className="font-bold font-serif text-3xl text-primary">HELLO FRIENDS!</h>
          <p className='text-primary'>Enter your details & start your journey with us</p>
        </div>
        <div id="right" className='bg-gradColor h-full w-1/2  rounded-r-lg  shadow-textColor '>
          <div className='h-full w-full  flex flex-col justify-center items-center'>
            <h1 className='text-5xl mt-10 font-serif font-bold text-textColor'>ECOMOSH</h1>
            <form action="/" className='flex flex-col h-full w-full justify-center items-center'>
                <div className='w-4/5 '>
                <input type="text" placeholder='Hannah' className='my-4 mt-2 h-10 rounded-lg px-2 w-1/2 bg-gradColor text-textColor shadow-xl focus:outline-none' />
                <input type="text" placeholder='Jacob' className='my-4 mt-2 h-10 rounded-lg px-2 w-1/2 bg-gradColor text-textColor shadow-xl focus:outline-none' />
                </div>
              
              <input type="email" placeholder='abc@gmail.com' className='my-4 mt-2 h-10 rounded-lg px-2 w-4/5 bg-gradColor text-textColor shadow-xl focus:outline-none' />
              <input type="password" placeholder='******' className='my-4 mt-2 h-10 rounded-lg px-2 w-4/5 bg-gradColor text-textColor shadow-xl focus:outline-none' />
              <input type="password" placeholder='confirm password' className='my-4 h-10 rounded-lg px-2 w-4/5 bg-gradColor text-textColor shadow-xl focus:outline-none' />
              <button className='mybutton'>Sign Up</button>
              <div className='flex text-xs m-2'>
                <p>Already have an account?</p>
                <button className=' text-indigo-600'>Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup