import Link from "next/link";
import Layout from "../components/Layouts/Layout ";
export default function Errorr() {
  return (
    <section className="error px-5 py-5">
      <div className=" grid container grid-cols-12">
        <div className="col-span-12  m-auto text-center">
          <img src="/asset 3.svg" alt="" />
          <h6 className=" text-color_10 font-bold text-9xl text-center mt-9">
            404
          </h6>
          <h3 className=" font-bold text-3xl ">Oh no, something went wrong!</h3>
          <p className=" font-medium text-color_1 mt-2 mb-9">Either something went wrong or this page doesn't exist anymore.</p>
          <Link href="/">
            <a className=" text-color_10 px-7 py-4 font-semibold text-xl transition-all hover:text-white hover:bg-color_10 bg-color_23 rounded-lg">
              Take me to Homepage
            </a>
          </Link>{" "}
        </div>
      </div>
    </section>
  );
}
Errorr.Layout = Layout;