import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Example from "../components/chart";
export default function Info() {
  const location = useLocation();
  const data = location.state;
  const [seletected, setSelected] = useState(
    JSON.stringify(data, null, 2).replace(/"/g, "")
  );
  const [fromdb, setFromdb] = useState({});
  const [avg, setAvg] = useState(0.0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/api/spec?id=${seletected}`;
        // const url = `http://103.35.189.49:5000/api/spec?id=${seletected}`;
        const response = await axios.get(url);
        const view = response.data;
        setFromdb(view);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="mt-36 w-full rounded-xl p-8 flex flex-col gap-8">
        {fromdb.data && (
          <div className="flex flex-row justify-between items-center w-full px-8 gap-12 bg-white py-8 rounded-xl">
            <img
              src={fromdb.data.imgurl}
              alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor"
              className="w-32 sm:w-48"
            />
            <div className="flex flex-col gap-4">
              <span className="mt-4 text-2xl sm:text-4xl font-bold">
                {fromdb.data.name}
              </span>
              <div className="text-left">
                {fromdb.data.detail}                
              </div>
            </div>
            <div className="text-4xl text-blue-600 font-bold flex items-start">€{fromdb.data.price}</div>
          </div>
        )}

        <div className="flex flex-row justify-between w-full">
          <div className="w-3/12 h-128 rounded-t-lg bg-white"></div>
          <div className="w-8/12 rounded-md ">
            <div className="flex px-2 rounded-t-lg flex-row w-full bg-gray-300 h-12 items-center">
              <div className="w-3/5 font-bold text-2xl">Offer name</div>
              <div className="w-1/5 text-center  font-bold text-2xl ">Price and shipping</div>
              <div className="w-1/5 text-center  font-bold text-2xl">Shop</div>
            </div>
            {fromdb.vendor &&
              fromdb.vendor.map((item, index) => (
                <div
                  className="flex px-2 flex-row w-full py-2 border-2 bg-white items-center hover:border-gray-400 hover:cursor-pointer"
                  key={item.cpuid}
                >
                  <a href={item.directlink} className="w-3/5 px-4  line-clamp-2 text-2xl">
                    {item.displayname}
                  </a>
                  <div className="w-1/5 text-2xl text-blue-600 font-bold text-right">€ {item.price}</div>
                  <div className="w-1/5 flex justify-end">
                    <img className="h-12" src={item.vendorimgurl} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
