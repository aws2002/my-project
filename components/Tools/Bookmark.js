import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
export default function Bookmark(props) {
  let BookmarktIcon = props.isFilled ? <FaRegBookmark /> : <FaBookmark />;
  return (
    <div>
      <i
        className=" text-xl text-orange-500 cursor-pointer transition-all hover:text-opacity-90"
        onClick={props.handleClick}
      >
        {BookmarktIcon}
      </i>
    </div>
  );
}
