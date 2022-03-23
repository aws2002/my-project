import { RiCloseLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { XIcon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import Layout from "../../components/Layouts/Layout ";
export default function Cart() {
    const[toggleClose,setToggleClose]=React.useState(true)
  return (
    <section className="cart px-5 my-6">
      <div className=" grid container grid-cols-12 gap-x-14">
        <div className=" col-span-full text-center bg-color_22 py-5 rounded-md mb-12">
          <h4 className=" text-5xl font-bold text-black text-opacity-80">
            My cart
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
                  </Link>
                {" "}
                <span className=" text-5xl">.</span>
              </li>
            ))}{" "}
            <li className=" inline-block text-color_1 font-medium text-opacity-75">
              Cart
            </li>
          </ul>
        </div>
        <div className=" md:col-span-8 col-span-full shadow-2xl rounded-lg pb-6 overflow-hidden ">
            {toggleClose && (
                <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <span className=" text-3xl">
                      🔥
                      </span>
                      <p className="ml-3 font-medium text-white truncate">
                        <span className="md:hidden">
                          We announced a new product!
                        </span>
                        <span className="hidden md:inline">
                           These courses are at a limited discount, please checkout within2 days and 18 hours
                        </span>
                      </p>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                      <button
                        type="button"
                        className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        onClick={()=>setToggleClose(!toggleClose)}
                      >
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          
          {[
            {
              id: 1,
              titel: "Building Scalable APIs with GraphQL",
              preic: 350,
              img: "./Courses/asset 24.jpeg",
            },

            {
              id: 2,
              titel: "Bootstrap 5 From Scratch",
              preic: 240,
              img: "./Courses/asset 30.jpeg",
            },
          ].map((item) => (
            <div className=" grid grid-cols-12 p-5" key={item.id}>
              <div className=" md:col-span-9 col-span-full">
                <div className=" grid grid-cols-12 gap-x-14 md:mb-0 mb-5">
                  <div className=" col-span-2 w-24 rounded-md overflow-hidden inline-block">
                    <img src={item.img} alt="" className="w-full" />
                  </div>
                  <div className="col-span-10 my-auto">
                    <p className="inline-block font-semibold text-lg">
                      {item.titel}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:col-span-3 col-span-full my-auto">
                <div className=" grid grid-cols-2">
                  <div className=" col-span-1">
                    <span className=" text-3xl font-bold text-color_9">
                      ${item.preic}
                    </span>
                  </div>
                  <div className=" col-span-1 ml-auto">
                    <ul>
                      <li className=" rounded-md w-10 h-10 inline-flex justify-center items-center mr-4 cursor-pointer text-2xl text-color_9 bg-color_13">
                        <FiEdit />
                      </li>
                      <li className=" rounded-md w-10 h-10  justify-center items-center inline-flex cursor-pointer text-2xl text-color_10 bg-color_12">
                        <RiCloseLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" h-[2px] bg-opacity-30 rounded-lg bg-color_1 w-full col-span-full mt-4"></div>
            </div>
          ))}
          <div className="grid grid-cols-12 px-5">
            <div className=" col-span-9">
              <form action="">
                <input
                  type="text"
                  className=" w-2/4 py-2 bg-color_13 px-2 rounded-l-md"
                  placeholder="COUPON CODE"
                />
                <button className=" bg-color_5 text-white py-2 px-3 rounded-r-md font-semibold">
                  Apply coupon
                </button>
              </form>
            </div>
            <div className=" col-span-3 ml-auto">
              <button className=" bg-color_5 text-white py-2 px-3 rounded-md font-semibold bg-opacity-60">
                Update cart
              </button>
            </div>
          </div>
        </div>
        <div className=" md:col-span-4 col-span-full shadow-2xl rounded-lg p-5 h-80 md:mt-0 mt-10">
          <h3 className=" font-bold text-2xl text-black text-opacity-80 mb-3">
            Cart Total
          </h3>
          {[
            {
              id: 1,
              title: "Original Price",
              price: "$500",
              styleTitel: " text-md",
              stylePrice: "font-bold text-md",
            },
            {
              id: 2,
              title: "Coupon Discount",
              price: "-$20",
              styleTitel: " text-md",
              stylePrice: "font-semibold text-md text-color_10",
            },
            {
              id: 3,
              title: "Total",
              price: "$480",
              styleTitel: "text-2xl font-bold text-black text-opacity-80",
              stylePrice: "font-bold text-xl",
            },
          ].map((item) => (
            <div className=" grid grid-cols-2 mb-2" key={item.id}>
              <div className=" col-span-1">
                <p className={`${item.styleTitel}`}>{item.title}</p>
              </div>
              <div className=" col-span-1 ml-auto">
                <p className={`${item.stylePrice}`}>{item.price}</p>
              </div>
            </div>
          ))}
          <a
            href=""
            className=" bg-color_9 text-white block text-center py-4 font-semibold text-xl rounded-lg mt-5"
          >
            Proceed to Checkout
          </a>
          <p className=" text-color_1 font-medium text-center mt-3">
            By completing your purchase, you agree to these{" "}
            <a href="" className=" text-color_5">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
Cart.Layout = Layout;