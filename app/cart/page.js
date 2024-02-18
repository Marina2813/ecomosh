import React from 'react'

const Cart = () => {
  const productDetails =[{
    name:'baby swings',
    id:'#23457987624578',
    size: '36',
    color:'white',
    price: '235',
    quantity: '1',
  },
  {
    name:'baby swings',
    id:'#23457987624578',
    size: '36',
    color:'white',
    price: '235',
    quantity: '1',
  },
  {
    name:'baby swings',
    id:'#23457987624578',
    size: '36',
    color:'white',
    price: '235',
    quantity: '1',
  }]
  return (
    <div className='h-screen w-screen bg-primary flex justify-center items-center'>

      <div className='h-full w-full bg-white pl-20 pr-20'>
        <div className='flex justify-between w-full h-[20%]'>
          
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Product</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Price</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Quantity</div>
          <div className='w-1/4 flex justify-center items-center h-full font-bold'>Total</div>
        </div>
        {productDetails.map((item,index)=>{
          return(
            <div className='w-full h-[30%]' key={index}>
          <div className='flex h-full'>
            <div className='w-1/4 h-full p-4 flex flex-col items-center justify-center'>
              <img className='h-20 w-20' src="assets/babyswing3.jpg" alt="" />
              <h1 >{item.name}</h1>
              <p className='text-xs'>{item.id}</p>
              <p className='text-xs'>Size 36 . Color white</p>
            </div>
            <div className='w-1/4 h-full flex items-center justify-center'>
              <div>$235</div>
            </div>
            <div className='w-1/4 h-full p-4 flex items-center justify-center'>
            <ion-icon name="remove-outline"></ion-icon>
            <p className='px-6'>{index}</p>
            <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className='w-1/4 h-full p-4 flex items-center justify-center'>$235</div>
          </div>
        </div>
          )
        })}
        
      </div>

      <div className='w-[40%] h-full bg-primary'></div>

    </div>
  )
}

export default Cart
