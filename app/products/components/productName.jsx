import React from "react";
import Product from "./product";

const ProductName = () => {
  const popularProducts = [
    {
      id: 1,
      img: "/assets/dress.png",
      name: "Dress",
      price: "300",
    },
    {
      id: 1,
      img: "/assets/baby3.png",
      name: "Cradle",
      price: "300",
    },
    {
      id: 1,
      img: "/assets/baby4.png",
      name: "Baby Dress",
      price: "300",
    },
    {
      id: 1,
      img: "/assets/baby1.png",
      name: "Baby Dress",
      price: "300",
    },
    {
      id: 1,
      img: "/assets/baby5.png",
      name: "Baby Dress",
      price: "300",
    },
    {
        id: 1,
        img: "/assets/baby1.png",
        name: "Baby Dress",
        price: "300",
      },
      {
        id: 1,
        img: "/assets/baby3.png",
        name: "Cradle",
        price: "300",
      }
    ,
    {
        id: 1,
        img: "/assets/baby1.png",
        name: "Baby Dress",
        price: "300",
      },
  ];
  return (
    <div className="md:grid grid-cols-4 w-full  ">
      {popularProducts.map((item) => (
        <Product item={item} key={item.key} />
      ))}
    </div>
  );
};

export default ProductName;
