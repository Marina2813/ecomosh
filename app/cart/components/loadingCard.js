import React from 'react'

const LoadingCard = () => {
    return (
        <div className='h-32 w-full bg-slate-500/10 animate-pulse flex rounded-sm my-3'>
            <div className='h-full w-1/4 flex items-center justify-center '>
                <div className='h-4/5 w-4/5 bg-slate-500/20 rounded-md'></div>
            </div>
            <div className='h-full w-1/4 flex items-center justify-center'>
                <div className='h-3 w-1/2 bg-slate-500/20'></div>
            </div>
            <div className='h-full w-1/4 flex items-center justify-center'>
                <div className='h-3 w-1/2 bg-slate-500/20'></div>
            </div>
            <div className='h-full w-1/4 flex items-center justify-center'>
                <div className='h-3 w-1/2 bg-slate-500/20'></div>
            </div>
        </div>
    )
}

export default LoadingCard
