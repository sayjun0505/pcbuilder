import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Example from "../components/chart";
export default function Info() {
  const location = useLocation();
  const data = location.state;
  useEffect(() => {});
  // Process the data as needed
  // Example: Display the data
  return (
    <div>
      <div className="mt-36 w-full rounded-xl p-8 flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center w-full gap-12 bg-white py-8 rounded-xl">
          <img
            src="https://pc-builder.io/images/cpu/1692871336_61345.jpg"
            alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor"
            className="w-32 sm:w-48"
          />
          <div className="flex flex-col gap-4">
            <span className="mt-4 text-2xl sm:text-4xl font-bold">
              AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor
            </span>
            <div className="text-right">
              registerID:{JSON.stringify(data, null, 2)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 ">
          <div className="mt-8 w-full flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[37%] flex flex-col">
              <div className="w-full rounded-lg text-center bg-[#ecf1fe] p-4">
                Specifications
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Manufacturer</span>
                <span className="">AMD</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Part #</span>
                <span className="">100-100000910WOF</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Core Count</span>
                <span className="">8</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Core Clock</span>
                <span className="">4.2 GHz</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Boost Clock</span>
                <span className="">5 GHz</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">TDP</span>
                <span className="">120 W</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Series</span>
                <span className="">AMD Ryzen 7</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Microarchitecture</span>
                <span className="">Zen 4</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Core Family</span>
                <span className="">Raphael</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Socket</span>
                <span className="">AM5</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Integrated Graphics</span>
                <span className="">Radeon</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Maximum Supported Memory</span>
                <span className="">128 GB</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">ECC Support</span>
                <span className="">Yes</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Includes Cooler</span>
                <span className="">No</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Packaging</span>
                <span className="">Boxed</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">L1 Cache</span>
                <div className="flex flex-col items-end">
                  <span className="">8 x 32 kB Instruction</span>
                  <span className="">8 x 32 kB Data</span>
                </div>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">L2 Cache</span>
                <span className="">8 x 1 MB</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">L3 Cache</span>
                <span className="">1 x 96 MB</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Lithography</span>
                <span className="">5 nm</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Includes CPU Cooler</span>
                <span className="">No</span>
              </div>
              <div className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300">
                <span className="">Simultaneous Multithreading</span>
                <span className="">Yes</span>
              </div>
            </div>
            <div className="mt-12 md:mt-0 w-full md:w-[60%]">
              <div className="flex flex-col gap-32">
                <div className="w-full">
                  <div className="bg-[#c2cad0] w-full h-32 text-center flex items-center justify-center  text-3xl sm:text-6xl text-bold">
                    Price Tracker
                  </div>
                  <div className="relative w-full h-fit bg-[#dfdfdf]">
                    <div className="py-20  w-full flex flex-col gap-2">
                      <div className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center ">
                        <div className="w-[22%] text-left   text-xl sm:text-3xl text-blue-700 font-bold">
                          Newegg
                        </div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">65000</div>
                      </div>
                      <div className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center ">
                        <div className="w-[22%] text-left   text-xl sm:text-3xl text-blue-700 font-bold">
                          amazon
                        </div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">65000</div>
                      </div>
                      <div className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center ">
                        <div className="w-[22%] text-left   text-xl sm:text-3xl text-blue-700 font-bold">
                          BH
                        </div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">65000</div>
                      </div>
                      <div className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center ">
                        <div className="w-[22%] text-left   text-xl sm:text-3xl text-blue-700 font-bold">
                          Best Buy
                        </div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">65000</div>
                      </div>
                      <div className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center ">
                        <div className="w-[22%] text-left  text-xl sm:text-3xl text-blue-700 font-bold">
                          memory
                        </div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">$542</div>
                        <div className="w-[22%] text-center ">65000</div>
                      </div>
                    </div>
                    <div className="absolute top-0 w-full h-full flex flex-row justify-between px-8 ">
                      <div className="w-[24%] "></div>
                      <div className="w-[24%] bg-[#8dafbd] h-full opacity-30 text-white text-xl sm:text-2xl md:text-4xl flex items-center justify-between py-4 flex-col">
                        <div className="">Live Price</div>
                        <div>$523</div>
                      </div>
                      <div className="w-[24%] h-full bg-[#90bda6] opacity-30 text-white  text-xl sm:text-4xl flex items-center justify-between py-4 flex-col">
                        <div>Last Price</div>
                        <div>$523</div>
                      </div>
                      <div className="w-[24%] h-full bg-[#caa3a2] opacity-30 text-white  text-xl sm:text-4xl flex items-center justify-between py-4 flex-col">
                        <div>Total</div>
                        <div>4523</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-32">
                  <Example />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
