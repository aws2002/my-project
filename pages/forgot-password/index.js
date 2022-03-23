import { HiOutlineMail } from "react-icons/hi";
import Head from "next/head";
export default function ForgotPassword() {
  return (
    <>
     <Head>
        <title>Forgot Password</title>
        <meta name="keywords" content="osama" />
      </Head>
    <section className="forgot-password">
      <div className=" grid grid-cols-2">
        <div className="md:col-span-1 col-span-2 bg-color_24 md:h-screen h-full text-center py-10">
          <h2 className=" font-bold text-4xl text-opacity-80 mb-3 text-black">
            Welcome to our largest community
          </h2>
          <p className=" font-medium text-opacity-90 text-black">
            Let's learn something new today!
          </p>
          <img src="/02.svg" alt="" className=" w-full px-14 mt-10" />
          <div className=" grid grid-cols-2 mt-12">
            <div className="md:col-span-1 col-span-full md:mx-auto pl-14">
              <div className="flex -space-x-1 overflow-hidden">
                {[
                  {
                    id: 1,
                    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  },
                  {
                    id: 2,
                    src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  },
                  {
                    id: 3,
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  },
                  {
                    id: 4,
                    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
                  },
                ].map((item) => (
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={item.src}
                    key={item.id}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="md:col-span-1 col-span-full md:text-left md:-ml-16 -ml-20 mt-3 md:my-auto">
              <p className=" font-medium text-opacity-90 text-black">
                4k+ Students joined us, now it's your turn.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:col-span-1 col-span-full md:px-32 px-12 md:py-10 my-auto">
          <span className=" text-6xl block mt-2">🤔</span>
          <h2 className="md:mt-3 mt-0 text-4xl font-bold text-opacity-80 mb-4 text-black">
            Forgot Password?
          </h2>
          <p className=" text-color_1 font-medium text-lg">
            To receive a new password, enter your email address below.
          </p>
          <label
            htmlFor="email-address"
            className="block font-medium text-color_1 mt-7 mb-1 text-md"
          >
            Email address *
          </label>

          <div className="relative">
            <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
            <input
              type="email"
              placeholder="E-mail"
              className=" font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button className=" block bg-color_5 text-white font-medium w-full mt-8 py-3 rounded-lg">Reset password</button>
        </div>
      </div>
    </section></>
  );
}
