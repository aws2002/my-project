import React from "react";
import CardCourseDetail from "../../components/Data/CardCourseDetail";
import Card from "../../components/SectionsPages/Card";
import HeroSectionsCourseDetail from "../../components/SectionsPages/HeroSectionsCourseDetail";
export default function CourseDetail() {
  const [active, setActive] = React.useState("Card_1");
  return (
    <>
      <HeroSectionsCourseDetail />
      <section className=" main-CourseDetail my-5">
        <div className=" grid grid-cols-12 gap-9 container">
          <div className=" col-span-8  shadow-xl rounded-lg p-8">
            {[
              { id: 1, name: "Overview", cardNumber: "Card_1" },
              { id: 2, name: "Curriculum", cardNumber: "Card_2", style: "ml-14" },
              { id: 3, name: "Instructor", cardNumber: "Card_3", style: "ml-14" },
              { id: 4, name: "Reviews", cardNumber: "Card_4", style: "ml-14" },
              { id: 5, name: "FAQs ", cardNumber: "Card_5", style: "ml-14" },
            ].map((item) => (
              <button
                onClick={() => setActive(`${item.cardNumber}`)}
                key={item.id}
                className={`${item.style} text-color_5 font-medium ${active[item.id]==="Card_1"?" bg-color_2":""}`}
              >
                {item.name}
              </button>
            ))}
            <div className=" bg-color_1 h-[1.5px] rounded-lg bg-opacity-20 mt-4"></div>
            <div className=" mt-10">
              {active === "Card_1" && <Card data={CardCourseDetail} cardIndex={0} />}
              {active === "Card_2" && <Card data={CardCourseDetail} cardIndex={1} />}
              {active === "Card_3" && <Card data={CardCourseDetail} cardIndex={2} />}
              {active === "Card_4" && <Card data={CardCourseDetail} cardIndex={3} />}
              {active === "Card_5" && <Card data={CardCourseDetail} cardIndex={4} />}
            </div>
          </div>
          <div className=" col-span-4">af</div>
        </div>
      </section>
    </>
  );
}
