import React from 'react'
import Landing from './components/Landing'

const Page = () => {
  const details = {
    colors: ["red", "green"]
  };

  return (
    <div className='bg-primary min-h-screen'>
      <Landing />
    </div>
  );
};

export default Page;
