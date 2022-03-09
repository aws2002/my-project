import React from "react";
import {FaStar,FaUserGraduate,FaSignal} from "react-icons/fa";
import {BsGlobe2,BsExclamationOctagonFill} from "react-icons/bs";

export default function HeroSectionsCourseDetail() {
  return (
    <section className="hero-sections-course-detail my-5 bg-color_22 py-44 px-4">
      <div className=" container">
        <div className=" grid grid-cols-12">
          <div className="md:col-span-8 col-span-full my-auto">
            <span className=" text-white font-semibold bg-color_5 px-3 py-1 rounded-md">
              Digital Marketing
            </span>
            <h1 className=" my-5 font-bold text-5xl text-black text-opacity-80">
              The Complete Digital Marketing Course - 12 Courses in 1
            </h1>
            <p className=" text-color_1">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do.
            </p>
            <ul className=" mt-5">
              {[
                { id: 1, title: "4.5/5.0", icon: <FaStar className=" inline text-color_11 text-xl -mt-1"/>},
                { id: 2, title: "12k Enrolled", icon: <FaUserGraduate className="inline text-color_5 text-xl -mt-1"/> },
                { id: 3, title: "All levels", icon: <FaSignal className="inline text-color_9 text-xl -mt-1"/> },
                { id: 4, title: "Last updated 09/2021", icon: <BsExclamationOctagonFill className="inline text-color_10 text-xl -mt-1"/>  },
                { id: 5, title: "English", icon: <BsGlobe2 className="inline text-color_9 text-xl -mt-1"/> },
              ].map((item) => (
                <li key={item.id} className=" mr-5 mb-2 inline-block font-medium icon">{item.icon} {item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
