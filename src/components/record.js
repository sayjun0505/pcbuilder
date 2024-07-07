import React from "react";
import { useNavigate } from "react-router-dom";
export default function Record(propss) {
  const navigate = useNavigate();
  const detail = (data) => {
    navigate("/info", { state: data });
  };
  return (
    <div
      className="w-64 bg-white rounded-md hover:cursor-pointer border-2 border-white hover:border-gray-500 border-white-500 p-2  flex flex-row justify-between"
      onClick={() => detail(propss.datainfo.id)}
    >
      <div className="broder-2 border-blue-500 w-full flex flex-col items-center justify-center gap-4 ">
        <div className="flex flex-col justify-center">
          <img
            src={propss.datainfo.img}
            alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor"
            className="w-16 h-16 sm:w-40 sm:h-32"
          />
        </div>
        <div className="text-center h-full flex w-full flex-col justify-between">
          <div className="h-12  font-black text-bold text-md sm:text-md line-clamp-2 overflow-hidden">
            {propss.datainfo.title}
          </div>
          <div className="text-left mt-4 hidden sm:flex flex-row w-full justify-between px-2">
            <span>
              {propss.datainfo.cores} cores, {propss.datainfo.cclock}GHz base
              clock, {propss.datainfo.Socket} Socket, Include coolers{" "}
              {propss.datainfo.IncludesCooler}, {propss.datainfo.CoreFamily}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="flex flex-row gap-2 items-center justify-center">
              <img
                alt="Rating"
                className="w-4 h-4 "
                src="https://pc-builder.io/img/star.svg"
              />{" "}
              <span>{propss.datainfo.review}</span>
            </div>
            <div className=" flex flex-col justify-between py-0 sm:py-4 -mt-8 sm:mt-0">
              <div className="flex justify-end w-full font-black text-bold text-xl text-blue-700 test-right">
              € {propss.datainfo.vendor.length === 1
                  ? propss.datainfo.vendor[0].price
                  : Math.min(
                      ...propss.datainfo.vendor.map((vendor) => vendor.price.toFixed(2))
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
