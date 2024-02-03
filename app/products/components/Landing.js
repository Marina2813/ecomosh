"use client";
import React from "react";
import Card from "./Card";
const Landing = () => {
  const ProductList = [
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Johnson",
    },
    {
      name: "Babywear1",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Vicks",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
      cost: "Rs. 1000",
      brand: "Xrg",
    },
    
    
    
  ];

  const productDetails = {
    name: "Babywear",
    price: "Rs. 1000",
    colors: ["yellow", "blue", "green"],
  }

  return (
    <div
    className="h-screen w-screen p-8 grid grid-cols-2 "
    style={{ gridTemplateColumns: "0.4fr 1fr" }}
  >
    <div id="left" className="h-full w-4/5 z-0  flex flex-col items-start ">
      <div id="up" className="h-1/3 w-full bg-green-200">
        upper
      </div>
      <div id="lower" className="h-2/3 w-full bg-red-200 ">
        
      </div>
    </div>
    <div id="right" className="flex flex-wrap  h-full overflow-visible  z-10">
      {ProductList.map((product, key) => {
        return (
          <div className={`flex h-[60vh] w-1/4 py-1 cell-item transform transition duration-300 hover:scale-110 hover:z-50 bg-white border-y-4 border-x-2`}>
            <Card key={key} name={product.name} img={product.img} link={product.link} cost={product.cost} brand={product.brand} />
          </div>
        );
      })}
    </div>
  </div>
  
  );
};

export default Landing;
