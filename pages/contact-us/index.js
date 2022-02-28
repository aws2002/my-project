import { useForm } from "../../components/Hooks/useForm";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export default function index() {
  const dataContact = [
    {
      id: 1,
      titel: "Customer Support",
      phone: "(423) 733-8222",
      email: "example@email.com",
      address: "2002 Horton Ford Rd, Eidson, TN, 37731",
    },
    {
      id: 2,
      titel: "Contact Address",
      phone: "+896-789-546",
      email: "example@email.com",
      address: "2492 Centennial NW, Acworth, GA, 30102",
    },
    {
      id: 3,
      titel: "Main Office Address",
      phone: "(678) 324-1251",
      email: "example@email.com",
      address: "2002 Horton Ford Rd, Eidson, TN, 37731",
    },
  ];
  const [value, handleChange] = useForm(
    { name: "" },
    { email: "" },
    { message: "" }
  );
  const inputRef = React.useRef();
  return (
    <section className="body-font relative contact-us my-10 bg-img-contact">
      <div className=" container text-center">
        <span className=" text-color_5 font-medium text-2xl">Contact us</span>
        <p className=" font-bold text-4xl">We're here to help!</p>
      </div>
      <div className="container px-5 py-9 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="bg-black bg-opacity-90 relative flex flex-wrap py-6 rounded shadow-md">
            {dataContact.map((item) => (
              <div className="lg:w-1/3 px-6" key={item.id}>
                <h2 className="title-font font-semibold text-white tracking-widest text-md">
                  {item.titel}
                </h2>
                <p className="mt-1 text-white text-sm font-medium">
                  <FaLocationArrow className=" inline"/> {item.address}
                </p>
                <p className="mt-1 text-white text-sm font-medium">
                  <BsTelephoneFill className=" inline"/> {item.phone}
                </p>
                <a href="" className="mt-1 text-color_2 font-medium text-sm">
                 <HiOutlineMail className=" inline-block"/> {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-black bg-opacity-90 shadow-xl p-5 rounded-md flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className=" text-4xl text-white mb-1 font-semibold">
            Let's talk
          </h2>
          <p className="leading-relaxed mb-5 text-white font-medium">
            To request a quote or want to meet up for coffee, contact us
            directly or fill out the form and we will get back to you promptly
          </p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-white text-sm">
              Your name *
            </label>
            <input
              ref={inputRef}
              type="text"
              value={value.name}
              onChange={handleChange}
              id="name"
              name="name"
              className="w-full bg-opacity-40 text-white bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-white text-sm">
              Email address *
            </label>
            <input
              ref={inputRef}
              value={value.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-opacity-40 text-white bg-white  rounded border  border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7  text-white text-sm">
              Message *
            </label>
            <textarea
              ref={inputRef}
              value={value.message}
              onChange={handleChange}
              id="message"
              name="message"
              className="w-full bg-opacity-40 text-white bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-color_5 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-70 transition-all font-medium rounded text-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
