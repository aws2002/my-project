import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { FaSignOutAlt } from "react-icons/fa";

import {
  BsCardChecklist,
  BsBasket,
  BsCreditCard2Front,
  BsCartCheck,
  BsTrash,
} from "react-icons/bs";

export default function StudentDashboardLayout({ children }) {
  const [active, setActive] = React.useState(1);
  return (
    <>
      <Navbar />
      <section className="pt-5 pb-28">
        <div className="relative">
          <div className="bg-img-student-dashboard py-24 bg-color_16"></div>
          <div className=" bg-color_3 -mt-10 container">
            <div className=" grid grid-cols-12">
              <div className="col-span-3 h-32 w-32 bg-color_5 rounded-full">

              </div>
              <div className="col-span-9 ml-auto my-auto">
                <button className=""> test</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard my-5 px-4">
        <div className=" container">
          <div className=" grid grid-cols-12 gap-8">
            <div className=" md:col-span-3 col-span-full bg-color_28 text-white p-6 rounded-lg">
              <ul>
                {[
                  {
                    id: 1,
                    name: "Dashboard",
                    href: "",
                    icon: <MdOutlineDashboard className=" inline text-lg" />,
                  },
                  {
                    id: 2,
                    name: "My Subscriptions",
                    href: "subscription",
                    icon: <BsCartCheck className=" inline text-lg" />,
                  },
                  {
                    id: 3,
                    name: "My Courses",
                    href: "course-list",
                    icon: <BsBasket className=" inline text-lg" />,
                  },
                  {
                    id: 4,
                    name: "Payment info",
                    href: "payment-info",
                    icon: <BsCreditCard2Front className=" inline text-lg" />,
                  },
                  {
                    id: 5,
                    name: "Wishlist",
                    href: "bookmark",
                    icon: <BsCardChecklist className=" inline text-lg" />,
                  },
                  {
                    id: 6,
                    name: "Edit Profile",
                    href: "edit-profile",
                    icon: <HiOutlinePencilAlt className=" inline text-lg" />,
                  },
                  {
                    id: 7,
                    name: "Settings",
                    href: "setting",
                    icon: <VscSettingsGear className=" inline text-lg" />,
                  },
                  {
                    id: 8,
                    name: "Delete Profile",
                    href: "delete-account",
                    icon: <BsTrash className=" inline text-lg" />,
                  },
                ].map((item) => (
                  <Link href={`/student-dashboard/${item.href}`}>
                    <li
                      onClick={() => setActive(`${item.id}`)}
                      className={
                        active == item.id
                          ? `block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5 bg-white text-black`
                          : `block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5`
                      }
                    >
                     {item.icon}{" "}{item.name}
                    </li>
                  </Link>
                ))}
                <Link href={`/sign-in`}>
                  <li className="block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5">
                    <FaSignOutAlt className=" inline text-lg" /> Sign Out
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" col-span-9 bg-color_2">{children}</div>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}
