import React from 'react'
import ProfileForm from './addingForm'

const ProfileCard = (details) => {
    return (

        <div className='h-full w-1/2 flex justify-end pr-4 items-end pb-10'>
            <div className='h-[80%] w-[60%] bg-white absolute left-[30%] top-[10%] z-10'>
                <ProfileForm {...details}/>
            </div>
            <div className='h-[80%] w-[70%] rounded-md mr-2 bg-white/40 relative pl-4 shadow-xl shadow-textColor'>
                <div className='h-32 w-32 bg-slate-400 absolute -top-16 left-4 rounded-full'>
                    <img src="/assets/profile.webp" alt="" className='h-full w-full rounded-full' />
                </div>
                <img src="/assets/pen.svg" alt="" className='absolute top-4 right-4 h-5 w-5' />
                <div>
                    <p className='pt-20'>Good Evening!!</p>
                    <h1 className='font-bold text-xl'>{details.firstName} {details.lastName}</h1>
                </div>
                <div className='h-[70%] w-full flex flex-col justify-evenly'>
                    <div>
                        <h1 className='font-bold text-xs'>ADDRESS: </h1>
                        <p className='text-xs'>{details.address}</p>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold text-xs pr-3'>PHONE: </h1>
                        <p className='text-xs'> {details.phoneNo}</p>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold text-xs pr-3'>EMAIL: </h1>
                        <p className='text-xs'>{details.email}</p>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold text-xs pr-3'>PASSWORD: </h1>
                        <p className='text-xs'>********</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProfileCard
