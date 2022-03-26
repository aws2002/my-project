import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import React from "react";
export default function BeInstructor() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  React.useEffect(() => {
    if(inView){
      animation.start({
        x:0,
        transition:{ type: "spring", duration: 1, bounce: 0.3 }
      })
      
    }else{
      animation.start({
        x:"-100vw",
      })
    }
  }, [inView]);
  return (
    <section className="becomeInstructor px-5 my-16" ref={ref}>
      <motion.div
        className=" container"
        animate={animation}
      >
        <div className="grid grid-cols-12 bg-color_2 py-10 md:px-24 px-10 rounded-md relative box">
          <div className=" md:col-span-7 col-span-12 z-50 c mb-7">
            <h3 className=" text-white font-bold text-4xl">
              Become an Instructor!
            </h3>
            <p className=" text-white mt-5">
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced. Yet uncommonly his
              ten who diminution astonished.
            </p>
          </div>
          <div className=" md:col-span-5 col-span-12 text-right md:my-auto my-auto">
            <a
              href=""
              className=" border-2 border-color_3 hover:bg-color_3 hover:text-black transition-all px-6 py-3 rounded-md text-color_3 font-semibold"
            >
              Start Teaching Today
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
