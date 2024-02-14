import React from 'react'
import Navbar from '../components/Navbar'
import profileCard from './components/profileCard'

const details = {
    firstName: 'Sara',
    lastName: 'Jacob',
    profilePic: '/assets/profile.webp',
    gender: 'female',
    phoneNo: '1234567890',
    email: 'abc@gmail.com',
    address: '4-Block-B, Indraprastha Estate, New Delhi 110002 Delhi, Balmiki Basti, Vikram Nagar',
    order: []
}
const Profile = () => {
    return (
        <div className='h-screen w-screen flex bg-primary justify-center items-center'>
            <div className='h-full w-1/5 bg-white/20 '>
                <div className='h-full w-full flex flex-col justify-evenly items-center font-bold text-xl text-textColor'>
                    <h1>Dashboard</h1>
                    <h1>Wishlist</h1>
                    <h1>Payements</h1>
                    <h1>Complaints</h1>
                    <h1>Support</h1>
                </div>
            </div>
            <div className='h-full w-full flex '>
            <profileCard/>
                <div className='h-full w-1/2 flex  flex-col justify-end pb-8 items-start pl-8 '>
                    <div className='h-1/4 w-3/4 rounded-md bg-blue-200 my-3'></div>
                    <div className='h-1/4 w-3/4 rounded-md bg-blue-200 my-3'></div>
                    <div className='h-1/4 w-3/4 rounded-md bg-blue-200 my-3'></div>
                </div>
            </div>

        </div>

    )
}

export default Profile
