import React, { useEffect, useState } from "react";
import Product from "./product";
import {db} from '@/utils/firebaseConfig'
import { getDocs,collection} from "firebase/firestore";
import LoadingProduct from "./LoadingProduct";

const ProductName = () => {
  const [popularProducts, setpopularProducts] = useState(null);
  const [loading, setLoading] = useState(true); 
  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true);
      try{
      const temp=[];
      const value=await getDocs(collection(db,'products'))
      value.forEach((element) => {
        temp.push(element.data())
      });
      setpopularProducts(temp);
      setLoading(false);
      console.log(loading);
    }
    catch(error){
      console.log(error);
      setLoading(true);
      console.log(loading);
    }
      
    };
    fetchData();
  },[]);


  return (
    <div className="md:grid  grid-cols-4 w-full  ">
      {!loading&&popularProducts && popularProducts.map((item) => (
        <Product item={item} key={item.key} />
      ))}
      {
        loading && <div className="h-full w-full">
        hiiiii 
        {loading && <div className="grid grid-cols-4 w-screen justify-evenly">
          <LoadingProduct /><LoadingProduct /><LoadingProduct /><LoadingProduct />jwha
        </div>}
        </div>
      }
    </div>
  );
};

export default ProductName;
