import React, { useState } from "react";
import MultiRangeSlider from "./multirangeslider";
export default function RangeAccordion({ title, onValuesChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [minval, setMinval] = useState(1);
  const [maxval, setMaxval] = useState(100);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleValuesChange = (newMinval, newMaxval) => {
    setMinval(newMinval);
    setMaxval(newMaxval);
    onValuesChange(newMinval, newMaxval);
  };
  return (
    <div className=" overflow-hidden">
      <div
        className="flex justify-between items-center border-b-2 border-gray-200 p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg text-white font-semibold">{title}</h3>
        <svg viewBox="0 0 1024 1024" className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 w-[14px] h-[14px]`} version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg>
        {/* <img
          width="50"
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 w-[14px] h-[14px]`}
          height="50"
          src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
          alt="expand-arrow--v1"
        /> */}
      </div>
      <div
        className={` px-4 bg-gray-100 transition-height duration-3000 ${
          isOpen ? "h-36 rounded-b-lg" : "h-0 overflow-hidden"
        }`}
      >
        <MultiRangeSlider
          min={1}
          max={100}
          symbol=""
          minval={minval}
          maxval={maxval}
          onValuesChange={handleValuesChange}
        />
      </div>
    </div>
  );
}
