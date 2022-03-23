import React from "react";
import CardCourseDetail from "../../components/Data/CardCourseDetail";
import Card from "../../components/SectionsPages/Card";
import { BsShareFill, BsPlayFill } from "react-icons/bs";
import { FaBookOpen,FaClock,FaSignal,FaGlobeAmericas,FaUserClock,FaMedal} from "react-icons/fa";
import HeroSectionsCourseDetail from "../../components/SectionsPages/HeroSectionsCourseDetail";
import Layout from "../../components/Layouts/Layout ";
export default function CourseDetail() {
  const [active, setActive] = React.useState(1);
  return (
    <>
      <HeroSectionsCourseDetail />
      <section className=" main-CourseDetail my-5 px-4">
        <div className=" grid grid-cols-12 gap-9 container">
          <div className=" md:col-span-8 col-span-full shadow-xl rounded-lg p-8 h-min">
            {[
              { id: 1, name: "Overview", cardNumber: 1 },
              { id: 2, name: "Curriculum", cardNumber: 2, style: "ml-10" },
              { id: 3, name: "Instructor", cardNumber: 3, style: "ml-10" },
              { id: 4, name: "Reviews", cardNumber: 4, style: "ml-10" },
              { id: 5, name: "FAQs ", cardNumber: 5, style: "ml-10" },
            ].map((item) => (
              <button
                onClick={() => setActive(`${item.cardNumber}`)}
                key={item.id}
                className={
                  active == item.cardNumber
                    ? `${item.style} text-color_5 font-medium bg-color_15 px-3 py-2 rounded-lg`
                    : `${item.style} text-color_5 font-medium px-3 py-2`
                }
              >
                {item.name}
              </button>
            ))}
            <div className=" bg-color_1 h-[1.5px] rounded-lg bg-opacity-20 mt-4"></div>
            <div className="mt-10">
              {active == 1 && <Card data={CardCourseDetail} cardIndex={0} />}
              {active == 2 && <Card data={CardCourseDetail} cardIndex={1} />}
              {active == 3 && <Card data={CardCourseDetail} cardIndex={2} />}
              {active == 4 && <Card data={CardCourseDetail} cardIndex={3} />}
              {active == 5 && <Card data={CardCourseDetail} cardIndex={4} />}
            </div>
          </div>
          <div className=" md:col-span-4 col-span-full ">
            <div className=" grid grid-cols-1 gap-y-4">
              <div className="col-span-full shadow-xl rounded-lg">
                <div className="p-2 relative">
                  <img
                    src="./Courses/asset 25.jpeg"
                    alt=""
                    className="rounded-lg"
                  />
                  <a
                    className="ml-5 absolute md:top-32 top-36 left-44 md:left-40"
                    href=""
                  >
                    <BsPlayFill className="vidoeo-play-btn rounded-full  w-14 h-14 inline text-white bg-color_5" />
                  </a>
                </div>
                <div className=" grid grid-cols-12 px-4 py-4">
                  <div className=" col-span-8">
                    <span className=" text-4xl font-bold text-black text-opacity-80 mr-3">
                      $150
                    </span>
                    <del className=" text-color_1 -mt-9 mr-2">$350</del>
                    <span className=" bg-color_27 px-2 rounded-md text-white">
                      60% off
                    </span>
                  </div>
                  <div className=" col-span-4 my-auto ml-auto mt-4 cursor-pointer">
                    <i className="bg-color_8 rounded-md p-3">
                      <BsShareFill className=" inline text-xl" />
                    </i>
                  </div>
                  <div className=" col-span-12 mt-1">
                    <p className=" text-color_10 font-semibold">
                      5 days left at this price
                    </p>
                  </div>
                  {[
                    {
                      id: 1,
                      name: "Free trial",
                      style:
                        "border-color_5 border-2 px-3 py-2 text-lg font-semibold rounded-md text-color_5 transition-all hover:bg-color_5 hover:text-white",
                      href: "",
                    },
                    {
                      id: 2,
                      name: "Buy course",
                      style:
                        "bg-color_9  px-3 py-2 text-lg font-semibold rounded-md text-white",
                      style2: "ml-auto",
                      href: "",
                    },
                  ].map((item) => (
                    <div className={`${item.style2} col-span-6 mt-5 mb-3`}>
                      <a href={item.href} className={item.style} key={item.id}>
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-full shadow-xl rounded-lg p-4 py-5">
                <div className=" grid grid-cols-12">
                  <div className=" col-span-full mb-3">
                    <h4 className=" font-bold text-2xl">
                      This course includes
                    </h4>
                  </div>
                  {[
                    { id: 1, text: "Lectures",icon:<FaBookOpen className=" inline mr-2 text-lg text-color_5"/> },
                    { id: 2, text: "30", style: "ml-auto" },
                    { id: 3, text: "Duration",icon:<FaClock className=" inline mr-2 text-lg text-color_5"/> },
                    { id: 4, text: "4h 50m", style: "ml-auto" },
                    { id: 5, text: "Skills" ,icon:<FaSignal className=" inline mr-2 text-lg text-color_5"/> },
                    { id: 6, text: "Beginner", style: "ml-auto" },
                    { id: 7, text: "Language" ,icon:<FaGlobeAmericas className=" inline mr-2 text-lg text-color_5"/>  },
                    { id: 8, text: "English", style: "ml-auto" },
                    { id: 9, text: "Deadline" ,icon:<FaUserClock className=" inline mr-2 text-lg text-color_5"/> },
                    { id: 10, text: "Nov 30 2021", style: "ml-auto" },
                    { id: 9, text: "Certificate",icon:<FaMedal className=" inline mr-2 text-lg text-color_5"/>  },
                    { id: 10, text: "Yes", style: "ml-auto" },
                  ].map((item) => (
                    <div
                      className={`${item.style} col-span-6 mb-3`}
                      key={item.id}
                    >
                      <p className="">{item.icon}{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
CourseDetail.Layout = Layout;