import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <span onClick={scrollToTop} className=" transition-all hover:bg-opacity-80 bg-color_5 text-white w-14 h-14 rounded-md text-4xl fixed right-9 bottom-9 flex justify-center items-center cursor-pointer">
          <FiArrowUp />
        </span>
      )}
    </div>
  );
}
