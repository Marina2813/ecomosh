import React, { useEffect, useState } from "react";
import Product from "./product";
import {db} from '@/utils/firebaseConfig'
import { getDocs,collection} from "firebase/firestore";

const ProductName = () => {
  const [popularProducts, setpopularProducts] = useState(null);
  useEffect(()=>{
    const fetchData = async() =>{
      const temp=[];
      const value=await getDocs(collection(db,'products'))
      value.forEach((element) => {
        temp.push(element.data())
      });
      setpopularProducts(temp)
    };
    fetchData();
  },[]);


  return (
    <div className="md:grid grid-cols-4 w-full  ">
      {popularProducts && popularProducts.map((item) => (
        <Product item={item} key={item.key} />
      ))}
    </div>
  );
};

export default ProductName;
