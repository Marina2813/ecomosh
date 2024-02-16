import React from 'react'

const Card = (props) => {
  return (
    
                    <div className='h-1/4 w-3/4 rounded-md bg-white/40 my-3 relative p-2 shadow-lg shadow-textColor'>
                        <div className='w-full flex justify-between items-center pr-3'>
                            <h1 className='font-bold pl-2 pt-2'>{props.title}</h1>
                            <img src="\assets\arrow.svg" alt="" className=' h-4 w-4' />
                        </div>
                        <div className='flex'>
                            <img src={props.img} alt="" className='h-20 w-20 p-2' />
                            <div className='flex flex-col justify-evenly px-3'>
                                <p className='text-xs'>{props.productname}</p>
                                <p className="text-xs text-green-800">{props.msg}</p>
                            </div>
                        </div>
                    </div>
                
  )
}

export default Card
