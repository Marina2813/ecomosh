import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col justify-start w-full p-4">
      <h1 className="text-3xl font-bold">{props.name}</h1>
      <p>{props.link}</p>
      <img src={props.img} alt="" />
      <div className="flex justify-between items-end h-full px-4">
        <div className="font-medium">
          <p className="">brand:</p>
          <p className=" font-bold">{props.brand}</p>
        </div>
        <p className=" font-bold">{props.cost}</p>
      </div>
    </div>
  );
};

export default Card;
