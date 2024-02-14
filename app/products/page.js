import React from 'react'
import Landing from './components/Landing'

const Page = () => {
  const details = {
    colors: ["red", "green"]
  };

  return (
    <div className='bg-primary'>
      <Landing />
    </div>
  );
};

export default Page;
