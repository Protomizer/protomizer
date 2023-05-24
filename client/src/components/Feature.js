import React from "react";

const Feature = ({ image, title, content, reverse }) => {
  return (
    <div className="feature-item grid md:grid-cols-2 gap-6 md:gap-10 mb-[120px] md:mb-6 items-center">
      <div>
        <h2 className="font-bold text-xl md:text-3xl mb-4">{title}</h2>
        <p className="text-sm md:text-base">{content}</p>
      </div>
      <img
        src={image}
        className={reverse ? "max-w-full md:order-[-1]" : "max-w-full"}
        alt=""
      />
    </div>
  );
};

export default Feature;
