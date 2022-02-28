import Link from "next/link";
export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      category: "Company",
      links: [
        { nameLink: "About us", href: "#", id: 1 },
        { nameLink: "Contact us", href: "/contact-us", id: 2 },
        { nameLink: "News and Blogs", href: "#", id: 3 },
        { nameLink: "Library", href: "#", id: 4 },
        { nameLink: "Career", href: "#", id: 5 },
      ],
    },
    {
      id: 2,
      category: "Community",
      links: [
        { nameLink: "Documentation", href: "#", id: 1 },
        { nameLink: "Faq", href: "#", id: 2 },
        { nameLink: "Forum", href: "#", id: 3 },
        { nameLink: "Sitemap", href: "#", id: 4 },
      ],
    },
    {
      id: 3,
      category: "Teaching",
      links: [
        { nameLink: "Become a teacher", href: "#", id: 1 },
        { nameLink: "How to guide", href: "#", id: 2 },
        { nameLink: "Terms & Conditions", href: "#", id: 3 },
      ],
    },
  ];
  return (
    <footer className="py-12 px-5">
      <div className=" container">
        <div className=" grid grid-cols-6 gap-x-12">
          <div className="md:col-span-2 col-span-6 mb-7">
            <h1 className=" text-5xl mb-5 font-bold">Eduport</h1>
            <p className="text-color_1 font-semibold">
              Eduport education theme, built specifically for the education
              centers which is dedicated to teaching and involve learners.
            </p>
            <div className=" grid grid-cols-3">
              <div className="col-span-1"></div>
            </div>
          </div>
          {footerLinks.map((item) => (
            <div className="md:col-span-1 col-span-3 mb-5" key={item.id}>
              <ul>
                <li className="font-bold mb-8 text-2xl">{item.category}</li>

                {item.links.map((link) => (
                  <li
                    className=" mb-3 text-color_1 font-semibold"
                    key={link.id}
                  >
                    <Link href={link.href}>
                      <a>{link.nameLink}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 col-span-3 mb-5">
            <ul>
              <li className="font-bold mb-8 text-2xl">Contact</li>
              <li className=" mb-2 text-color_1 font-semibold">
                Toll free:+1234 568 963
              </li>
              <li className=" mb-2 text-color_1 font-semibold text-sm">
                (9:AM to 8:PM IST)
              </li>
              <li className=" mb-2 text-color_1 font-semibold">
                Email:example@gmail.com
              </li>
            </ul>
            <div className=" grid grid-cols-2 mt-3">
              <div className="col-span-2">
                <img src="/Footer/google.svg" alt="" />
              </div>
              <div className="col-span-2 mt-3">
                <img src="/Footer/asset 8.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" md:col-span-3 col-span-3">
            <p className=" mb-2 text-color_1 font-semibold">
              Copyrights ©2021 Eduport. All rights reserved.
            </p>
          </div>
          <div className="md:col-span-3 col-span-3 text-right">
            <ul className=" link-footer">
              <li>
                <a href="" className=" mb-2 text-color_1 font-semibold">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="" className=" mb-2 text-color_1 font-semibold">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
