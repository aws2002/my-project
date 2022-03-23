import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
export default function CollapseFAQs({ data}) {
  const [activ, setActiv] = React.useState(false);
  const toggle = (index) => {
    if (activ === index) {
      return setActiv(null);
    }
    setActiv(index);
  };
  return (
    <div>
      {data.map((item, index) => (
        <div
          className=" grid grid-cols-1 cursor-pointer border-b-2 py-1"
          key={item.id}
          onClick={() => toggle(index)}
        >
          <div className="col-span-1 py-3">
            <div className=" grid grid-cols-12">
              <div className="col-span-10">
                <h1 className="font-bold text-black text-opacity-80 text-md">
                  <span className=" text-color_1 mr-4">{item.id}</span>
                  {item.titel}
                </h1>
              </div>
              <div className="col-span-2 ml-auto">
                {activ === index ? (
                  <motion.div
                    animate={{
                      rotate: activ ? 360 : -360,
                    }}
                    transition={{ duration: 1 }}
                  >
                    <IoIosArrowUp className=" inline" />
                  </motion.div>
                ) : (
                  <motion.div transition={{ duration: 1 }}>
                    <IoIosArrowDown className=" inline" />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className=" col-span-1 ml-8 ">
            {activ === index ? (
              <motion.div
                animate={{ opacity: 1, y: 5 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
              >
                <p className=" text-color_1">{item.text}</p>
                <p className=" text-color_1 mt-4">{item.text2}</p>
                <p className=" text-color_1 mt-4 mb-3">{item.text3}</p>
              </motion.div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
