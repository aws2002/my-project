export default function InstructorCourseDetail() {
  return (
    <div>
      <div className=" grid grid-cols-12 gap-x-5">
        <div className=" col-span-5 mb-7">
          <img src="./01.jpg" alt="" className=" rounded-lg" />
        </div>
        <div className=" col-span-5 my-auto">
          <h2 className="text-3xl text-black text-opacity-80 font-bold mb-1">Louis Ferguson</h2>
          <span className=" text-color_1">Instructor of Marketing</span>
        </div>
      </div>
      <h4 className=" text-2xl text-black text-opacity-80 font-bold mb-4">
        About Instructor
      </h4>
      {[
        {
          id: 1,
          text: "Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashboard see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his striking confined.",
        },
        {
          id: 2,
          text: "As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.",
        },
      ].map((item) => (
        <p className=" text-color_1 mb-4" key={item.id}>
          {item.text}
        </p>
      ))}
      <p className=" text-color_1 font-medium">
        Mail ID:{" "}
        <a href="" className=" text-color_5">
          hello@email.com
        </a>
      </p>
      <p className=" text-color_1 font-medium">
        Web:{" "}
        <a href="" className=" text-color_5">
          https://eduport.com
        </a>
      </p>
    </div>
  );
}
