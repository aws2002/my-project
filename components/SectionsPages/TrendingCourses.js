import Slider from "react-slick";
import Bookmark from "../Tools/Bookmark";
import React from "react";
import { FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineTable } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
export default function TrendingCourses() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const DataTrendingCourses = [
    {
      id: 1,
      img: "/Courses/asset 31.jpeg",
      specialization: "Design",
      level: "Beginner",
      titel: "Time Management Mastery: Do More, Stress Less",
      isFavorite: true,
      rating: "4.0",
      numRating: 7000,
      numStudent: 4000,
      numOfLectures: "15 lectures",
      numberOfHours: "12h 56m",
      lecturerImage:"/Courses/asset 9.jpeg",
      lecturerName:"Billy Vasquez"
    },
    {
      id: 2,
      img: "/Courses/asset 32.jpeg",
      specialization: "Development",
      level: "Beginner",
      isFavorite: true,
      titel: "Time Management Mastery: Do More, Stress Less",
      rating: "4.0",
      numRating: 7000,
      numStudent: 4000,
      numOfLectures: "15 lectures",
      numberOfHours: "12h 56m",
      lecturerImage:"/Courses/asset 16.jpeg",
      lecturerName:"Larry Lawson"
    },

    {
      id: 3,
      img: "/Courses/asset 33.jpeg",
      specialization: "Design",
      level: "Beginner",
      isFavorite: true,
      titel: "The complete Digital Marketing Course - 8 Course in 1",
      rating: "4.0",
      numRating: 7000,
      numStudent: 4000,
      numOfLectures: "15 lectures",
      numberOfHours: "12h 56m",
      lecturerImage:"/Courses/asset 15.jpeg",
      lecturerName:"Lori Stevens"
    },
    {
      id: 4,
      img: "/Courses/asset 34.jpeg",
      specialization: "Development",
      level: "All level",
      isFavorite: true,
      titel: "Angular – The Complete Guide (2021 Edition)",
      rating: "4.0",
      numRating: 7000,
      numStudent: 4000,
      numOfLectures: "15 lectures",
      numberOfHours: "12h 56m",
      lecturerImage:"/Courses/asset 14.jpeg",
      lecturerName:"Frances Guerrero"
    },
  ];
  const [Favorite, setFavorite] = React.useState(DataTrendingCourses);
  function toggleFavorite() {
    setFavorite((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <section className="TrendingCourses my-16 py-5">
      <div className="container overflow-hidden">
        <div className=" grid grid-cols-12">
          <div className="col-span-12 text-center">
            <h2 className="text-6xl font-bold mb-3 text-black text-opacity-80">
              Our Trending Courses
            </h2>
            <span className="text-color_1 font-semibold">
              Check out most 🔥 courses in the market
            </span>
          </div>
          <div className="col-span-12 mt-8">
            <Slider {...settings}>
              {DataTrendingCourses.map((item) => (
                <div className="my-10 px-3 active--Box-Trending--Courses" key={item.id}>
                  <div className="border-2 rounded-lg ">
                    <img className="w-full" src={item.img} alt="" />
                    <div className="p-4 pb-5">
                      <div className="grid grid-cols-12">
                        <div className="col-span-8">
                          <span className="font-semibold bg-color_4 text-color_5 px-3 py-1 rounded-lg">
                            {item.specialization}
                          </span>
                          <span className="font-semibold ml-3 bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg">
                            {item.level}
                          </span>
                        </div>
                        <div className="col-span-4 text-right flex justify-end">
                          <span className=" text-text_color">
                            <Bookmark
                              isFilled={Favorite.isFavorite}
                              handleClick={toggleFavorite}
                            />
                          </span>
                        </div>
                        <div className="col-span-12 mt-7  font-bold text-xl hover:text-color_5 transition-all text-black text-opacity-80">
                          <a href="">{item.titel}</a>
                        </div>
                        <div className="col-span-8 mt-2">
                          <span className=" text-color_11">
                            <span className=" text-md font-semibold">
                              {item.rating}
                            </span>{" "}
                            <FaStar className=" inline text-md -mt-1" />
                          </span>
                          <span className="ml-2 text-color_1 text-[14px] font-bold">
                            ({item.numRating})
                          </span>
                        </div>
                        <div className="col-span-4 mt-2 text-right text-color_1 font-bold">
                          <span className="">{item.numStudent}</span>
                          <span className="ml-2 text-color_1 text-[14px] font-bold">
                            (Student)
                          </span>
                        </div>
                        <div className="col-span-12 mt-2">
                          <span>
                            <BiTimeFive className=" inline text-xl text-color_10" />{" "}
                            <span className=" text-md text-color_1 font-medium">
                              {item.numberOfHours}
                            </span>
                          </span>
                          <span className="ml-2">
                            <HiOutlineTable className=" inline text-2xl text-orange-500" />{" "}
                            <span className=" text-md text-color_1 font-medium">
                              {item.numOfLectures}
                            </span>
                          </span>
                        </div>
                        <div className="col-span-12 mt-8 mb-2">
                          <span className="border w-full block bg-color_1 bg-opacity-40"></span>
                        </div>
                        <div className="col-span-6">
                          <div className=" grid grid-cols-12">
                            <div className=" col-span-4 ">
                              <img src={item.lecturerImage} className="w-12 rounded-md" alt="" />
                            </div>
                            <div className=" col-span-8 flex items-center">
                              <p className="">{item.lecturerName}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right col-span-6 flex justify-end items-center">
                          <span className="activeHover-text text-3xl font-bold text-color_9">
                            Free
                          </span>
                          <a href="" className="activeHover bg-color_20 text-color_21 px-3 py-1 rounded-md transition-all hover:bg-color_21 hover:text-white"><BsCartFill className=" inline text-xl -mt-1"/> Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
