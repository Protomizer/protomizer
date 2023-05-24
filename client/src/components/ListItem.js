import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ListItem = ({ content }) => {
  return (
    <li className="text-xs md:text-base">
      <span>
        <AiFillCheckCircle />
      </span>{" "}
      {content}{" "}
    </li>
  );
};

export default ListItem;
