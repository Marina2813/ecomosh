import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-primary flex">
      <div className="left h-full w-1/2"></div>
      <div id="right" className="h-full w-1/2 flex justify-center items-center flex-col" >
        <p className="my-6">New Collection</p>
        <p className="mb-6">Shop Ours</p>
        <h1 className="text-textColor text-5xl font-bold">BABYWEAR</h1>
        <button className="bg-textColor text-primary py-2 px-4 rounded-xl my-6">Shop Now</button>
      </div>
    </div>
  );
}
