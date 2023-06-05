import React from "react";
import testICON from '../assets/icon4.png'

const Feature = ({ image, reverse, subtitle, title, desc, subcontent}) => {
  
  return (
    <div className="feature-item grid md:grid-cols-2 gap-6 md:gap-10 mb-[120px] md:mb-[90px] items-center">
      <div className="flex flex-col items-start">
        <p className="py-1 px-3 border-2 border-purple-500 bg-purple-200 text-purple-500 rounded-md mb-4">{subtitle}</p>
        <h1 className="text-purple-900 text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="mb-4">{desc}</p>
        <div className="w-full h-[5px] bg-gradient-to-br from-purple-300 to-purple-50 mb-8"></div>
        <div className="grid grid-cols-2 gap-4">
          <div>
              <img src={subcontent[0].icon} className='mb-4'/>
              <p className="font-bold">{subcontent[0].text}</p>
              <p>{subcontent[0].subtext}</p>
          </div>

          <div>
              <img src={subcontent[1].icon} className='mb-4'/>
              <p className="font-bold">{subcontent[1].text}</p>
              <p>{subcontent[1].text}</p>
          </div>
        </div>
      </div>
      <img
        src={image}
        className={reverse ? "max-w-full md:order-[-1] min-w-full" : "max-w-full min-w-full"}
        alt=""
      />
    </div>
  );
};

export default Feature;
