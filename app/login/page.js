import React from 'react'

const Login = () => {
  return (
    <div className='bg-primary h-screen max-w-screen  flex justify-center items-center'>
        <form action="/" className='flex flex-col h-full w-full justify-center items-center'>
            <input type="email" placeholder='abc@gmail.com'  className='my-4 h-10 rounded-lg px-2 w-1/4 bg-gradColor text-textColor'/>
            <input type="password" placeholder='******'  className='my-4 h-10 rounded-lg px-2 w-1/4 bg-gradColor text-textColor'/>
            <div className='mybox h-1/4 w-1/4 flex justify-center items-center'>
              hi
            </div>
        </form>
    </div>
  )
}

export default Login
