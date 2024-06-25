import React, { useCallback, useEffect, useRef, useState } from 'react';
import MultiRangeSlider from "./multirangeslider"
export default function RangeAccordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        setContents(content);
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" overflow-hidden">
            <div
                className="flex justify-between items-center border-b-2 border-gray-200 p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-semibold">{title}</h3>

                <img
                    width="50"
                    className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 w-[14px] h-[14px]`}
                    height="50"
                    src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                />
            </div>
            <div
                className={` px-4 bg-gray-100 transition-height duration-3000 ${isOpen ? 'h-36 ' : 'h-0 overflow-hidden'}`}
            >
                <MultiRangeSlider min={1} max={100} symbol="" />
            </div>
        </div>
    );
};
