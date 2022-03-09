import { FaCheckCircle } from "react-icons/fa";

export default function OverviewCourseDetail() {
  return (
    <div>
      <h4 className=" text-2xl text-black text-opacity-80 font-bold mb-4">
        Course Description
      </h4>
      <p className=" text-color_1 mb-4">
        Welcome to{" "}
        <span className=" font-medium">
          the Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over
          36 hours of content)
        </span>
      </p>
      <p className=" text-color_1 mb-4">
        In this practical hands-on training, you’re going to learn to become a
        digital marketing expert with this{" "}
        <span className=" font-medium">
          ultimate course bundle that includes 12 digital marketing courses in
          1!
        </span>
      </p>
      <p className=" text-color_1 mb-4">
        If you wish to find out the skills that should be covered in a basic
        digital marketing course syllabus in India or anywhere around the world,
        then reading this blog will help. Before we delve into the advanced
        <a href="" className=" font-medium border-b-2">
          {" "}
          digital marketing course
        </a>{" "}
        syllabus, let’s look at the scope of digital marketing and what the
        future holds.
      </p>
      <p className=" text-color_1 mb-4">
        We focus a great deal on the understanding of behavioral psychology and
        influence triggers which are crucial for becoming a well rounded Digital
        Marketer. We understand that theory is important to build a solid
        foundation, we understand that theory alone isn’t going to get the job
        done so that’s why this course is packed with practical hands-on
        examples that you can follow step by step.
      </p>
      <h4 className=" text-2xl text-black text-opacity-80 font-bold mb-4">
        What you’ll learn
      </h4>
      <ul>
        {[
          { id: 1, name: " Digital marketing course introduction" },
          { id: 2, name: " Customer Life cycle" },
          { id: 3, name: " What is Search engine optimization(SEO)" },
          { id: 4, name: " Facebook ADS" },
          { id: 5, name: " Facebook Messenger Chatbot" },
          { id: 6, name: " Search engine optimization tools" },
          { id: 7, name: " Why SEO" },
          { id: 8, name: " URL Structure" },
          { id: 9, name: " Featured Snippet" },
          { id: 10, name: " SEO tips and tricks" },
          { id: 11, name: " Google tag manager" },
        ].map((item) => (
          <li className=" text-color_1 my-3" key={item.id}>
            <FaCheckCircle className=" inline-block text-color_9 text-lg -mt-1" />{" "}
            {item.name}
          </li>
        ))}
      </ul>
      <p className=" text-color_1 mt-8">
        As it so contrasted oh estimating instrument. Size like body someone
        had. Are conduct viewing boy minutes warrant the expense? Tolerably
        behavior may admit daughters offending her ask own. Praise effect wishes
        change way and any wanted. Lively use looked latter regard had. Do he it
        part more last in.
      </p>
    </div>
  );
}
