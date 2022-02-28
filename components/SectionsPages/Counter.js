import { CgScreen } from "react-icons/cg";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import React from "react";
import SkeletonCounter from "../Skeleton/SkeletonCounter";
export default function Counter() {
  const infoCounter = [
    {
      id: 1,
      number: "10K",
      name: "Online Courses",
      image: <CgScreen />,
      bg: "bg-color_12",
      iconColor: "text-color_3",
    },
    {
      id: 2,
      number: "200+",
      name: "Expert Tutors",
      image: <FaUserTie />,
      bg: "bg-color_13",
      iconColor: "text-color_16",
    },
    {
      id: 3,
      number: "10K",
      name: "Online Courses",
      bg: "bg-color_14",
      image: <FaUserGraduate />,
      iconColor: "text-color_17",
    },
    {
      id: 4,
      number: "6K+",
      name: "Certified Courses",
      image: <HiBadgeCheck />,
      bg: "bg-color_15",
      iconColor: "text-color_18",
    },
  ];
  const [profile, setProfile] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      const data = (
        <>
          {infoCounter.map((item) => (
            <div
              className={`md:col-span-1 col-span-4 py-8 px-5 ${item.bg} rounded-lg`}
              key={item.id}
            >
              <div className=" grid grid-cols-2">
                <div className="col-span-1 m-auto">
                  <i className={`text-6xl ${item.iconColor}`}>{item.image}</i>
                </div>
                <div className=" col-span-1">
                  <p className=" text-2xl font-bold text-black text-opacity-80">
                    {item.number}
                  </p>
                  <span className=" font-semibold text-black text-opacity-80">
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      );
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <section className="counter px-5 my-24">
      <div className=" container grid grid-cols-4 gap-4">
        {profile && <>{profile}</>}
        {!profile && [1, 2, 3, 4].map((n) => <SkeletonCounter key={n} />)}
      </div>
    </section>
  );
}
