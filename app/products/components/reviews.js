"use client";
import React,{useState,useEffect} from "react";
const reviews = [
  {
    name: "John Doe",
    photo: "https://i.imgur.com/b1fVDPB.jpg",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "John Doe",
    photo: "https://i.imgur.com/b1fVDPB.jpg",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "John Doe",
    photo: "https://i.imgur.com/b1fVDPB.jpg",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "John Doe",
    photo: "https://i.imgur.com/b1fVDPB.jpg",
    rating: 2,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
    );
    console.log(currentSlide);
  };
  useEffect(() => {
    const slider = document.getElementById("slider");
    console.log(currentSlide);
    if (currentSlide > 1) {
      slider.style.transform = "translateX(-800%)";
    } else {
      slider.style.transform = "translateX(0)";
    }
  }, [currentSlide]);

  return (
    <div className="md:h-screen relative w-full flex flex-col justify-center items-center md:text-5xl text-xl text-textColorPrimary font-bold">
      <h1 className="my-10 px-6 text-center">
       Reviews
      </h1>
      <div className="md:w-3/4 relative overflow-auto">
        <div className={`w-full flex flex-col md:flex-row gap-0 lg:gap-10`} id="slider">
          {reviews.map((item, index) => (
            <div
              key={index}
              className={`py-5 ${
                index === currentSlide ? "md:opacity-100" : "md:opacity-50"
              }`}
            >
              <div className="bg-grad_hero rounded-lg shadow-md px-7 lg:px-14  w-full md:w-[25rem] md:h-[20rem] flex flex-col items-center py-6  text-textPrimaryColor">
                <div className="h-24 w-24  font-bold   my-6 text-center">
                  <img src={item.photo} className=" h-full w-full rounded-full object-cover" alt="" />
                </div>
                <p className="md:text-3xl text-lg font-bold text-center">
                  {item.name}
                </p>
                <p className=" md:text-base text-sm font-light">
                  {item.review}
                </p>
                <div className=" flex font-light">
                {[...Array(item.rating)].map((_, i) => (
                    <img
                      key={i}
                      src="https://i.imgur.com/4sIrwGO.png"
                      className="object-cover h-8 w-8 rounded-full drop-shadow-md"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex absolute top-[50%] px-10 w-screen left-0 hidden justify-between mt-5">
        <button
          className={`mr-2 ${
            currentSlide === 0
              ? " text-textColor/20"
              : " hover:bg-textColor/20 hover:rounded-full text-textColor"
          }   font-bold p-5 `}
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          &lt;
        </button>
        <button
          className={`${
            currentSlide === reviews.length - 1
              ? " text-textColor/20"
              : " hover:bg-textColor/20 hover:rounded-full text-textColor"
          }  font-bold p-4  flex items-center justify-center`}
          onClick={nextSlide}
          disabled={currentSlide === reviews.length - 1}
        >
          &gt;
        </button>
      </div>
      <div className="md:flex justify-center mt-5 hidden">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
