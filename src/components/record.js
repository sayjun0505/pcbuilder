import React from "react";
import { useNavigate } from "react-router-dom";
export default function Record(propss) {
  const navigate = useNavigate();
  const detail = (data,loc) => {
    if(loc=="cpu")navigate("/info", { state: data });
    if(loc=="mboard")navigate("/mdetail", { state: data });
    if(loc=="ram")navigate("/ramdetail", { state: data });
    if(loc=="case")navigate("/casedetail", { state: data });
    if(loc=="gpu")navigate("/gpudetail", { state: data });
    if(loc=="storage")navigate("/storagedetail", { state: data });
  };
  return (
    <div
      className="w-64 bg-white shadow-xl rounded-md hover:cursor-pointer border-2 border-white hover:border-gray-300 border-white-500 p-2  flex flex-row justify-between"
      onClick={() => detail(propss.datainfo.id,propss.loc)}
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
            <span className="line-clamp-3">{propss.datainfo.detail}</span>
          </div>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="flex flex-row gap-2 items-center justify-center">
              {" "}
              <span>{propss.datainfo.review}</span>
            </div>
            <div className=" flex flex-col justify-between py-0 sm:py-4 -mt-8 sm:mt-0">
              <div className="flex justify-end w-full font-black text-bold text-xl text-blue-700 test-right">
                € {propss.datainfo.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
