'use client';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProfileCard from './components/profileCard'
import Cards from './components/Card'
import { db } from '@/utils/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link';

// const details = {
//     firstName: 'Sara',
//     lastName: 'Jacob',
//     profilePic: '/assets/profile.webp',
//     gender: 'female',
//     phoneNo: '1234567890',
//     email: 'abc@gmail.com',
//     address: '4-Block-B, Indraprastha Estate, New Delhi 110002 Delhi, Balmiki Basti, Vikram Nagar',
//     order: []
// }
const Profile = () => {
    const [details,setDetails] = useState({})
    const [flag,setFlag] = useState(true)
    
  useEffect(() => {
        const fetchDetails = async () => {
            const id = localStorage.getItem('id');
            if (id) {
                setFlag(true);
                const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setDetails(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                setFlag(false);
            }
            }
            else{
                setFlag(false);
            }
            
        }
        fetchDetails()
    }, [])

    return (
        <div className='h-screen w-screen flex bg-primary justify-center items-center relative'>
            {flag&&<>
                <div className='h-full w-1/5 bg-white/20 '>
                <div className='h-full w-full flex flex-col justify-evenly items-center font-bold text-xl text-textColor'>
                    <h1 className='pb-10 text-3xl font-serif'>Ecomosh</h1>
                    <h1>Dashboard</h1>
                    <h1>Wishlist</h1>
                    <h1>Payements</h1>
                    <h1>Complaints</h1>
                    <h1>Support</h1>
                    <h1 className='cursor-pointer hover:bg-textColor hover:text-primary w-full text-center h-24 flex justify-center items-center' onClick={()=>{
                        localStorage.removeItem('id');
                        setFlag(false);
                    }}>Logout</h1>
                </div>
            </div>
            <div className='h-full w-full flex '>
                <ProfileCard {...details} />
                <div className='h-full w-1/2 flex  flex-col justify-end pb-8 items-start pl-8 '>
                    <Cards title="Your Orders" img="/assets/babyswing2.jpg" productname="Windson craft Baby swingset for kids with pillows 6 months to 4 years in white,grey" msg="Delivered Yesterday"/>
                    <Cards title="Your Cart" img="/assets/babyswing2.jpg" productname="Windson craft Baby swingset for kids with pillows 6 months to 4 years in white,grey" msg="Checkout"/>
                    <Cards title="Rewards & Coupons" productname="Many amazing offers are waiting for you, come join us............"/>
                </div>
            </div>
            
            </>
            }
            {
                !flag && (
                    <h1 className='text-3xl font-serif text-textColor'>
                        You are not logged in   
                        <br/>
                        
                        <div className='font-bold text-center'><a href='/login'>Login</a></div>
                    </h1>
                )
            }

        </div>

    )
}

export default Profile
