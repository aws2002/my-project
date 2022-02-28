import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
export default function Checkout() {
  const [toggleClose, setToggleClose] = React.useState(true);
  var inputs = [
    {
      id: 1,
      type: "text",
      nameLabel: "Your name *",
      namePlaceholder: "Name",
      typeStyle: true,
    },
    {
      id: 2,
      type: "email",
      nameLabel: "Email address *",
      namePlaceholder: "Email",
      typeStyle: true,
    },
    {
      id: 3,
      type: "text",
      nameLabel: "Mobile number *",
      namePlaceholder: "Mobile number",
      typeStyle: true,
    },

    {
      id: 4,
      nameLabel: "Select country *",
      namePlaceholder: "Select country",
      typeStyle: false,
      option: ["osama1", "osama2"],
    },
    {
      id: 5,
      nameLabel: "Select country *",
      namePlaceholder: "Select country",
      typeStyle: false,
      option: ["osama1", "osama2"],
    },
    {
      id: 6,
      type: "text",
      nameLabel: "Postal code *",
      namePlaceholder: "PIN code",
      typeStyle: true,
    },
    {
      id: 7,
      type: "text",
      nameLabel: "Address *",
      namePlaceholder: "Address",
      typeStyle: true,
    },
  ];
  var inputs2 = [
    {
      id: 1,
      type: "text",
      nameLabel: "Card Number",
      namePlaceholder: "xxxx xxxx xxxx xxxx",
      styleCol: "col-span-2",
    },
    {
      id: 2,
      type: "text",
      nameLabel: "Expiration date",
      namePlaceholder: "Month / Year",
      styleCol: "col-span-1",
    },
    {
      id: 3,
      type: "text",
      nameLabel: "CVV / CVC",
      namePlaceholder: "xxx",
      styleCol: "col-span-1",
    },
    {
      id: 4,
      type: "text",
      nameLabel: "Name on Card",
      namePlaceholder: "Enter card holder name",
      styleCol: "col-span-2",
    },
  ];
  return (
    <section className="checkout my-10 px-5">
      <div className=" container grid grid-cols-12 md:gap-x-14">
        <div className=" col-span-full text-center bg-color_22 py-5 rounded-md mb-12">
          <h4 className=" text-5xl font-bold text-black text-opacity-80">
            Checkout
          </h4>
          <ul>
            {[
              { id: 1, titel: "Home", href: "" },
              { id: 2, titel: "Courses", href: "" },
              { id: 3, titel: "Cart", href: "" },
            ].map((item) => (
              <li
                className=" inline-block text-color_1 font-medium"
                key={item.id}
              >
                <a href="" className=" hover:text-color_5 transition-all">
                  {item.titel}
                </a>{" "}
                <span className=" text-5xl">.</span>
              </li>
            ))}
            <li className=" inline-block text-color_1 font-medium text-opacity-75">
              Checkout
            </li>
          </ul>
        </div>
        <div className=" md:col-span-8 col-span-full mb-10">
          <div className=" grid grid-cols-12">
            {toggleClose && (
              <div className=" col-span-full mb-8">
                <div className="bg-indigo-600 rounded-lg">
                  <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6">
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="w-0 flex-1 flex items-center">
                        <span className=" text-3xl">🔥</span>
                        <p className="ml-3 font-medium text-white truncate">
                          <span className="md:hidden">
                            We announced a new product!
                          </span>
                          <span className="hidden md:inline">
                            These courses are at a limited discount, please
                            checkout within2 days and 18 hours
                          </span>
                        </p>
                      </div>
                      <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                          type="button"
                          className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                          onClick={() => setToggleClose(!toggleClose)}
                        >
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className=" col-span-full  shadow-md rounded-lg p-5">
              <div className=" grid grid-cols-2 gap-x-6">
                <div className=" col-span-2 mb-8">
                  <h2 className=" font-bold text-black text-opacity-80 text-2xl">
                    Personal Details
                  </h2>
                </div>
                {inputs.map((item) => (
                  <div
                    key={item.id}
                    className=" md:col-span-1 col-span-2  mb-4"
                  >
                    {item.typeStyle && (
                      <>
                        <label className=" font-semibold text-color_1">
                          {item.nameLabel}
                        </label>
                        <input
                          type={item.type}
                          className=" block bg-color_6 w-full mt-2 h-10 px-3 rounded-sm"
                          placeholder={item.namePlaceholder}
                        />
                      </>
                    )}
                    {!item.typeStyle && (
                      <div className=" md:col-span-1 col-span-2">
                        <label className=" font-semibold text-color_1">
                          {item.nameLabel}
                        </label>
                        <select
                          name="asdasd"
                          id=""
                          className="font-semibold text-opacity-60 text-color_1 block bg-color_6 w-full mt-2 h-10 px-2 rounded-sm"
                        >
                          <option
                            value=""
                            className=" font-semibold text-color_1 "
                          >
                            Select country
                          </option>

                          {item.option.map((itemOption, index) => (
                            <option
                              value=""
                              className=" font-semibold text-color_1"
                              key={index}
                            >
                              {itemOption}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                ))}
                <div className=" col-span-2 flex items-end justify-end">
                  <a
                    href=""
                    className=" bg-color_5 text-white px-3 py-2 font-semibold bg-opacity-60 rounded-md"
                  >
                    Save changes
                  </a>
                </div>
                <div className=" col-span-2">
                  {[
                    {
                      id: 1,
                      titel:"Credit or Debit Card",
                      component: (
                        <div className=" grid grid-cols-2 gap-4">
                          {inputs2.map((item) => (
                            <div className={item.styleCol} key={item.id}>
                              <label className=" font-semibold text-color_1">
                                {item.nameLabel}{" "}
                                <span className=" text-color_10">*</span>
                              </label>
                              <input
                                type={item.type}
                                className=" block bg-color_6 w-full mt-2 h-10 px-3 rounded-sm"
                                placeholder={item.namePlaceholder}
                              />
                            </div>
                          ))}
                        </div>
                      ),
                    },
                    {
                      id: 2,
                      titel:"Pay with Net Banking",
                      component: (
                        <>
                          <div className=" grid grid-cols-2 gap-4">
                            <div className=" col-span-2">
                              <p>
                                In order to complete your transaction, we will
                                transfer you over to Eduport secure servers.
                                Select your bank from the drop-down list and
                                click proceed to continue with your payment.
                              </p>
                            </div>

                            <div className=" col-span-1">
                              <select
                                name="asdasd"
                                id=""
                                className="font-semibold text-opacity-60 text-color_1 block bg-color_6 w-full mt-2 h-10 px-2 rounded-sm"
                              >
                                <option
                                  value=""
                                  className=" font-semibold text-color_1 "
                                >
                                  Select country
                                </option>
                                ))
                              </select>
                            </div>
                          </div>
                        </>
                      ),
                    },
                  ].map((item) => (
                    <Disclosure as="div" className="mt-5" key={item.id}>
                      {({ open }) => (
                        <div>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-color_6 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className=" mt-1">{item.titel}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-7 h-7 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {item.component}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-4 col-span-full">
          <div className=" grid grid-cols-12">
            <div className="col-span-12 shadow-md rounded-lg p-5">
              <h3 className="font-bold text-2xl text-black text-opacity-80 mb-3">
                Order Summary
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
            <div className="col-span-12 shadow-md rounded-lg mt-5 p-10 bg-color_16 text-white bg-img-3 relative">
              <h4 className=" font-bold text-xl mb-2">
                Access 25K Online courses from 120 institutions, Start today!
              </h4>
              <p className="mb-5">
                Here is the description of premium features which will allow
                users to get benefits and save a lot of money
              </p>
              <div className=" absolute p-img-3">
                <svg width="92.6px" height="135.2px">
                  <path
                    className="fill-white"
                    d="M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z"
                  ></path>
                  <path
                    className="fill-warning-2"
                    d="M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z"
                  ></path>
                  <polygon
                    className="fill-warning opacity-6"
                    points="31.2,12.3 4.7,5.4 25.1,17.2"
                  ></polygon>
                  <polygon
                    className="fill-warning"
                    points="21.5,19.5 15,24.8 4.7,5.4 "
                  ></polygon>
                </svg>
              </div>
              <a
                href=""
                className=" rounded-sm bg-color_11 font-medium text-black text-opacity-80 py-2 px-3"
              >
                Purchase Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
