import React from "react";
import numberLayer from "../assets/numberLayer.png";

const Number = ({ number, content }) => {
  return (
    <div className="max-w-full">
      <div className="flex items-center">
        <h1 className="text-8xl text-[#8E61EE] font-bold">{number}.</h1>
        <div className="max-w-full">
          <img src={numberLayer} className="max-w-full" />
        </div>
      </div>

      <p className="text-gray-500">
        {content}
      </p>
    </div>
  );
};

export default Number;
