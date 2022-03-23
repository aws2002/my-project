import Link from "next/link";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineTable } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdDeleteSweep } from "react-icons/md";
import Layout from "../../components/Layouts/Layout ";
export default function WishList() {
  return (
    <section className=" my-5">
      <div className=" container">
        <div className=" grid grid-cols-2">
          <div className=" col-span-full text-center bg-color_22 py-5 rounded-md mb-12">
            <h4 className=" text-5xl font-bold text-black text-opacity-80">
              Wishlist
            </h4>
            <ul>
              {[
                { id: 1, titel: "Home", href: "/" },
                { id: 2, titel: "Courses", href: "" },
              ].map((item) => (
                <li
                  className=" inline-block text-color_1 font-medium"
                  key={item.id}
                >
                  <Link href={item.href}>
                    <a href="" className=" hover:text-color_5 transition-all">
                      {item.titel}
                    </a>
                  </Link>{" "}
                  <span className=" text-5xl">.</span>
                </li>
              ))}{" "}
              <li className=" inline-block text-color_1 font-medium text-opacity-75">
                Wishlist
              </li>
            </ul>
          </div>
          <div className="col-span-1 my-auto">
            <p className=" text-2xl font-semibold">
              You have 4 items in wishlist
            </p>
          </div>
          <div className="col-span-1 ml-auto">
            <button className=" text-color_10 px-7 py-4 font-semibold text-xl transition-all hover:text-white hover:bg-color_10 bg-color_23 rounded-lg">
              <MdDeleteSweep className=" inline text-2xl -mt-1" /> Remove all
            </button>
          </div>
          <div className=" col-span-full mt-10">
            <div className=" grid grid-cols-4 gap-4">
              {[
                {
                  id: 1,
                  image: "./Courses/asset 18.jpeg",
                  level: "All level",
                  styleLevel: "text-color_7 bg-color_6",
                  titel: "Sketch from A to Z: for app designer",
                  subText:
                    "Proposal indulged no do sociable he throwing settling.",
                  rating: "4.0/5.0",
                  star: [
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaRegStar />,
                  ],
                  numOfLectures: "15 lectures",
                  numberOfHours: "12h 56m",
                },
                {
                  id: 2,
                  image: "./Courses/asset 19.jpeg",
                  level: "Beginner",
                  styleLevel: "text-color_9 bg-color_8",
                  titel: "The Complete Web Development in python",
                  subText: "Mention Mr manners opinion if garrets enabled.",
                  rating: "4.5/5.0",
                  star: [
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaRegStar />,
                  ],
                  numOfLectures: "26 lectures",
                  numberOfHours: "10h 00m",
                },
                {
                  id: 3,
                  image: "./Courses/asset 25.jpeg",
                  level: "All level",
                  styleLevel: "text-color_7 bg-color_6",
                  titel: "Sketch from A to Z: for app designer",
                  subText:
                    "Proposal indulged no do sociable he throwing settling.",
                  rating: "4.0/5.0",
                  star: [
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaRegStar />,
                  ],
                  numOfLectures: "15 lectures",
                  numberOfHours: "12h 56m",
                },
                {
                  id: 4,
                  image: "./Courses/asset 29.jpeg",
                  level: "All level",
                  styleLevel: "text-color_7 bg-color_6",
                  titel: "Sketch from A to Z: for app designer",
                  subText:
                    "Proposal indulged no do sociable he throwing settling.",
                  rating: "4.0/5.0",
                  star: [
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaStar />,
                    <FaRegStar />,
                  ],
                  numOfLectures: "15 lectures",
                  numberOfHours: "12h 56m",
                },
              ].map((item) => (
                <div className="col-span-1">
                  <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    layout
                    key={item.id}
                    className=" md:col-span-1 col-span-4 rounded-lg shadow-xl overflow-hidden"
                  >
                    <img src={item.image} alt="" />
                    <div className=" p-4 grid grid-cols-12">
                      <div className="md:col-span-6 col-span-6">
                        <span
                          className={`${item.styleLevel} px-3 py-1 font-medium  rounded-lg`}
                        >
                          {item.level}
                        </span>
                      </div>
                      <div className="md:col-span-6 col-span-6 text-left flex justify-end al text-xl text-color_10 cursor-pointer transition-all hover:text-opacity-90">
                        <BsSuitHeartFill />
                      </div>
                      <div className="md:col-span-12 col-span-12 mt-3">
                        <a
                          href=""
                          className=" font-bold text-xl hover:text-color_5 transition-all text-black text-opacity-80"
                        >
                          {item.titel}
                        </a>
                      </div>
                      <div className="md:col-span-12 col-span-12 mt-1 mb-3">
                        <p className=" text-color_1 font-medium">
                          {item.subText}
                        </p>
                      </div>
                      <div className="md:col-span-4 col-span-4">
                        <i className="iconStar text-color_11 text-lg">
                          {item.star}
                        </i>
                      </div>
                      <div className="md:col-span-8 col-span-8 ml-2 mt-1 flex justify-start items-center">
                        <span className=" font-medium text-black text-opacity-70 text-sm">
                          {item.rating}
                        </span>
                      </div>
                      <div className="md:col-span-12 col-span-12 mt-8 mb-2">
                        <span className="border w-full block bg-color_1 bg-opacity-40"></span>
                      </div>
                      <div className="md:col-span-6 col-span-6">
                        <span>
                          <BiTimeFive className=" inline text-xl text-color_10" />{" "}
                          <span className=" text-md text-color_1 font-medium">
                            {item.numberOfHours}
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-6 text-right col-span-6">
                        <span>
                          <HiOutlineTable className=" inline text-2xl text-orange-500" />{" "}
                          <span className=" text-md text-color_1 font-medium">
                            {item.numOfLectures}
                          </span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
WishList.Layout = Layout;