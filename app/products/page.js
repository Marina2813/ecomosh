import React from 'react';

const Page = () => {
  const details = {
    colors: ["red", "green"]
  };

  return (
    <div className="h-screen w-screen">
      hi
      {details.colors.map((color, index) => (
        <div key={index} className={`h-20 w-20 bg-${color}-200`}>
          hi
        </div>
      ))}
    </div>
  );
};

export default Page;
