import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";
export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="keywords" content="osama" />
      </Head>
      <section className="sign-up">
        <div className=" grid grid-cols-2">
          <div className="md:col-span-1 col-span-2 bg-color_24 h-full text-center py-10">
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
          <div className=" md:col-span-1 col-span-full md:px-32 px-12 md:py-10 mt-1">
            <span className=" text-6xl">🙏</span>
            <h2 className="md:mt-3 mt-0 text-4xl font-bold text-opacity-80 mb-4 text-black">
              Sign up for your account!
            </h2>
            <p className=" text-color_1 font-medium text-lg">
              Nice to see you! Please Sign up with your account.
            </p>
            {[
              {
                id: 1,
                titel: "Email address *",
                type: "email",
                placeholder: "E-mail",
                icon: (
                  <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
                ),
              },
              {
                id: 2,
                titel: "Password *",
                type: "password",
                placeholder: "**********",
                icon: (
                  <RiLockPasswordFill className=" absolute top-3 left-3 text-2xl text-color_1" />
                ),
              },
              {
                id: 3,
                titel: "Confirm Password *",
                type: "password",
                placeholder: "**********",
                icon: (
                  <RiLockPasswordFill className=" absolute top-3 left-3 text-2xl text-color_1" />
                ),
              },
            ].map((item) => (
              <div key={item.id}>
                <label
                  htmlFor="email-address"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
                >
                  {item.titel}
                </label>

                <div className="relative">
                  {item.icon}
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    className=" font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            ))}
            <div className=" mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4"
              />
              <label htmlFor="remember-me" className="ml-2 inline text-color_1">
                By signing up, you agree to the{" "}
                <a href="" className=" text-color_5">
                  terms of service
                </a>
              </label>
              <button className=" block bg-color_5 text-white font-medium w-full mt-8 py-3 rounded-lg">
                Sign Up
              </button>
            </div>
            <div className=" grid grid-cols-12 mt-3 gap-x-4">
              <div className="col-span-5">
                <div className=" bg-color_1 border bg-opacity-50 rounded-lg mt-3"></div>
              </div>
              <div className="col-span-2 text-center">
                <span className=" text-lg text-color_1">or</span>
              </div>
              <div className="col-span-5">
                <div className=" bg-color_1 border bg-opacity-50 rounded-lg mt-3"></div>
              </div>
              <div className="col-span-6">
                <a
                  href=""
                  target="_blank"
                  className=" block text-center bg-color_25 transition-all hover:bg-opacity-95 text-white font-medium mt-4 py-3 rounded-lg"
                >
                  <BsGoogle className=" inline text-xl" /> Login with Google
                </a>
              </div>
              <div className="col-span-6">
                <a
                  href=""
                  target="_blank"
                  className=" block text-center bg-color_26 transition-all hover:bg-opacity-95 text-white font-medium mt-4 py-3 rounded-lg"
                >
                  <FaFacebookF className=" inline text-xl" /> Login with
                  Facebook
                </a>
              </div>
              <div className="col-span-12 text-center mt-3 md:mb-0 mb-5">
                <p className=" font-medium text-color_1">
                  Don't have an account?{" "}
                  <Link href="/sign-in">
                    <a className=" text-color_5">Sign in here</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
SignUp.getLayout = (page) => {
  return <>{page}</>;
};
