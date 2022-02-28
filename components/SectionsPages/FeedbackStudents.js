import React from "react";
import {
  FaStarHalfAlt,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
export default function FeedbackStudents() {
  const DataCard = [
    {
      id: 1,
      img: "./Courses/asset 9.jpeg",
      name: "Lori Stevens",
      tutor: "Tutor of physic",
    },
    {
      id: 2,
      img: "./Courses/asset 10.jpeg",
      name: "Billy Vasquez",
      tutor: "Tutor of chemistry",
    },
    {
      id: 3,
      img: "./Courses/asset 15.jpeg",
      name: "Larry Lawson",
      tutor: "Tutor of technology",
    },
    {
      id: 4,
      img: "./Courses/asset 14.jpeg",
      name: "Larry Lawson",
      tutor: "Tutor of technology",
    },
  ];
  return (
    <section className="feedback--students relative bg-color_22 my-10 py-24 px-5">
      <div className="bg_img_2 fill-danger">
        <svg enableBackground="new 0 0 160.7 159.8" height="180px">
          <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2" />
          <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
          <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z" />
          <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
          <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
          <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2" />
          <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2" />
          <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2" />
          <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
          <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2" />
          <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2" />
          <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
          <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
          <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
          <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2" />
          <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
          <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
          <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
          <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
          <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
          <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
          <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
          <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
          <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z" />
        </svg>
      </div>
      <div className="container grid grid-cols-12 gap-7">
        <div className="md:col-span-7 ">
          <div className=" grid grid-cols-12 gap-10">
            <div className="md:col-span-7 col-span-12 md:mb-0 mb-20 z-50 bg-white px-10 py-7 rounded-md shadow-lg text-center">
              <div className=" flex justify-center">
                <img
                  src="./Courses/asset 9.jpeg"
                  alt=""
                  className=" w-24 rounded-full"
                />
              </div>
              <p className=" text-color_1 font-semibold mb-5 mt-3">
                {" "}
                <FaQuoteLeft className=" inline" /> Moonlight newspaper up its
                enjoyment agreeable depending. Timed voice share led him to
                widen noisy young. At weddings believed laughing{" "}
                <FaQuoteRight className=" inline" />
              </p>
              <i className=" text-color_11">
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStarHalfAlt className=" inline" />
              </i>
              <p className=" font-bold">Carolyn Ortiz</p>
            </div>
            <div className="px-6 md:block hidden md:col-span-4 col-span-12 z-50 relative bg-white h-[295px] pt-3 -mt-10  text-center rounded-md shadow-lg">
              <h4 className="text-black text-opacity-80 font-bold">
                100+ Verified Mentors
              </h4>
              {DataCard.map((item) => (
                <div className=" grid grid-cols-12 mt-3 gap-3" key={item.id}>
                  <div className="col-span-4">
                    <img src={item.img} className=" rounded" alt="" />
                  </div>
                  <div className=" col-span-8 text-left">
                    <p className=" font-bold text-black text-opacity-80">
                      {item.name}
                    </p>
                    <span className=" text-xs font-semibold text-color_1">
                      {item.tutor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-7 md:block hidden bg-color_5 w-52 h-28 ml-auto  rounded-md shadow-lg overflow-hidden">
              <div className="bg_img_1 h-full text-center p-4">
                <p className=" font-bold text-2xl text-white">4.5/5.0</p>
                <i className=" text-color_11">
                  <FaStar className=" inline" />
                  <FaStar className=" inline" />
                  <FaStar className=" inline" />
                  <FaStar className=" inline" />
                  <FaStarHalfAlt className=" inline" />
                </i>
                <p className=" text-white font-semibold">
                  Based on 3265 ratings
                </p>
              </div>
            </div>
            <div className="md:col-span-5 col-span-full z-50 relative bg-white -mt-24 py-6 text-center rounded-md shadow-lg">
              <div className=" flex justify-center">
                <img
                  src="./Courses/asset 10.jpeg"
                  alt=""
                  className=" w-24 rounded-full"
                />
              </div>
              <p className=" text-color_1 font-semibold mb-5 mt-3 px-3">
                {" "}
                <FaQuoteLeft className=" inline" /> At weddings believed
                laughing although the Moonlight newspaper up its enjoyment
                agreeable depending. <FaQuoteRight className=" inline" />
              </p>
              <i className=" text-color_11">
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStar className=" inline" />
                <FaStarHalfAlt className=" inline" />
              </i>
              <p className=" font-bold">Dennis Barrett</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-full m-auto">
          <h2 className=" text-4xl font-bold mb-3 text-black text-opacity-80">
            Some valuable feedback from our students
          </h2>
          <p className="text-color_1 font-semibold mb-7">
            Supposing so be resolving breakfast am or perfectly. It drew a hill
            from me. Valley by oh twenty direct me so. Departure defective
            arranging rapturous did believe him all had supported. Family months
            lasted simple set nature vulgar him. Picture for attempt joy excited
            ten carried manners talking how.
          </p>

          <a
            href=""
            className=" bg-color_5 text-white px-3 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all"
          >
            View Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
