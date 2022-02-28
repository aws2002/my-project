import Link from "next/link";
export default function EmptyCart() {
  return (
    <section className="empty-cart px-5 py-5">
      <div className=" grid container grid-cols-12">
        <div className=" col-span-full text-center bg-color_22 py-5 rounded-md mb-3">
          <h4 className=" text-5xl font-bold text-black text-opacity-80">
            My cart
          </h4>
          <ul>
            {[
              { id: 1, titel: "Home", href: "" },
              { id: 2, titel: "Courses", href: "" },
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
              Cart
            </li>
          </ul>
        </div>
        <div className="col-span-12  m-auto text-center">
          <div className=" flex justify-center">
            <img src="/asset 33.svg" alt="" className=" w-4/5" />
          </div>
          <h3 className=" font-bold text-5xl text-black text-opacity-80">
            Your cart is currently empty
          </h3>
          <p className=" font-medium text-color_1 mt-2 mb-9">
            Please check out all the available courses and buy some courses that
            fulfill your needs.
          </p>
          <Link href="/">
            <a className=" bg-color_5 text-white px-7 py-4 font-semibold text-xl transition-all hover:text-white hover:bg-opacity-90  rounded-lg">
              Back to Shop
            </a>
          </Link>{" "}
        </div>
      </div>
    </section>
  );
}
