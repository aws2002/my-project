import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Heart from "../Tools/Heart";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineTable } from "react-icons/hi";
export default function Courses({ menuItem }) {
  const [Favorite, setFavorite] = React.useState(menuItem);
  function toggleFavorite() {
    setFavorite((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <div className=" container mt-20">
      <div className=" grid grid-cols-4 gap-5">
        <AnimatePresence>
          {menuItem.map((item) => (
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
                <div className="md:col-span-6 col-span-6 text-left flex justify-end al ">
                  <Heart
                    isFilled={Favorite.isFavorite}
                    handleClick={toggleFavorite}
                    index={item.id}
                  />
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
                  <p className=" text-color_1 font-medium">{item.subText}</p>
                </div>
                <div className="md:col-span-4 col-span-4"><i className="iconStar text-color_11 text-lg">{item.star}</i>
                  
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
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
