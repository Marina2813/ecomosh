'use client';
import React, { useEffect, useState } from 'react'
import {db} from '@/utils/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import LoadingCard from './components/loadingCard';

const Cart = () => {
  const [productDetails, setproductDetails] = useState(null);
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
  const fetchData = async()=>{
    const temp = [];
    const value = await getDocs(collection(db, 'cart'));
    value.forEach((element)=>{
      temp.push(element.data());
      console.log(element);
    })
    setproductDetails(temp);
    setLoading(false)
  }
  fetchData()
  },[])
  return (
    <div className='h-screen w-screen bg-primary flex justify-center items-center'>

      <div className='h-full w-full bg-white pl-20 pr-20 '>
        <div className='flex justify-between w-full h-[20%]'>
          
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Product</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Price</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Quantity</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Total</div>
        </div>
        <div className='h-[80%] w-full overflow-auto'>
         {!loading && <div className='h-full w-full'>
        {productDetails && productDetails.map((item,index)=>{
          return(
            <div className='w-full h-[30%] my-6' key={index}>
          <div className='flex h-full'>
            <div className='w-1/4 h-full p-4 flex flex-col items-center justify-center'>
              <img className='h-20 w-20' src="assets/babyswing3.jpg" alt="" />
              <h1 >{item.Name}</h1>
              <p className='text-xs'>{item.Id}</p>
              <p className='text-xs'>{item.Size}. {item.Color[0]}</p>
            </div>
            <div className='w-1/4 h-full flex items-center justify-center'>
              <div>${item.Price}</div>
            </div>
            <div className='w-1/4 h-full p-4 flex items-center justify-center'>
            <ion-icon name="remove-outline"></ion-icon>
            <p className='px-6'>{item.Quantity}</p>
            <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className='w-1/4 h-full p-4 flex items-center justify-center'>${item.Price*item.Quantity}</div>
          </div>
        </div>
          )
        })}
        </div>}{loading && <>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        </>}
        </div>
        
        
      </div>

      <div className='w-[40%] h-full bg-primary'></div>

    </div>
  )
}

export default Cart
