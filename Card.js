import React from "react";

const Card = ({ image, name, desc }) => {
  return (
    <div className="test-type-card p-4 md:p-6 rounded-lg bg-white shadow-lg">
      <div>
        <img src={image} className="rounded-lg w-full h-auto" />
        <h3 className="text-xl font-semibold mt-3">{name}</h3>
        <p className="text-sm md:text-basetext-gray-400">{desc}</p>
        <button className="border-2 border-blue-500 rounded-md bg-blue-300 text-blue-700 mt-4 text-xs md:text-base">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
