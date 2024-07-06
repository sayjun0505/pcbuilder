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
  const [avg, setAvg] = useState("0.0");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = `http://localhost:5000/api/spec?id=${seletected}`;
        const url = `http://103.35.189.49:5000/api/spec?id=${seletected}`;
        // const response = await axios.get('http://103.35.189.49:5000/api/alldata');
        const response = await axios.get(url);
        const view = response.data;
        var x=0.0;
        view.vendor.map((i)=>x+=i.price)
        setAvg((x/view.vendor.length).toFixed(2).toString())
        if (!view || !view.data) {
          return null; // or handle the condition appropriately
        }
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
          <div className="flex flex-row justify-center items-center w-full gap-12 bg-white py-8 rounded-xl">
            <img
              src={fromdb.data.imgurl}
              alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor"
              className="w-32 sm:w-48"
            />
            <div className="flex flex-col gap-4">
              <span className="mt-4 text-2xl sm:text-4xl font-bold">
                {fromdb.data.name}
              </span>
              <div className="text-right">
                registerID:&nbsp;{fromdb.data._id}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-12 ">
          <div className="mt-8 w-full flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[37%] flex flex-col">
              <div className="w-full rounded-lg text-center bg-[#ecf1fe] p-4">
                Specifications
              </div>
              {fromdb.data &&
                Object.entries(fromdb.data).map(([key, value]) => {
                  if (
                    key !== "_id" &&
                    key !== "imgurl" &&
                    key !== "detail" &&
                    key !== "__v"
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex flex-row justify-between h-16 items-center px-4 border-b-2 border-gray-300"
                      >
                        <span>{key}</span>
                        {key === "ManufacturerURL" ? (
                          <span>
                            <a
                              className="hover:cursor-pointer hover:text-blue-500"
                              href={value}
                            >
                              Go to...
                            </a>
                          </span>
                        ) : key === "detail" ? (
                          <span>
                            <a
                              className="hover:cursor-pointer hover:text-blue-500"
                              href={value}
                            >
                              View more...
                            </a>
                          </span>
                        ) : (
                          <span>{value}</span>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              {fromdb.data && (
                <a
                  className="hover:cursor-pointer hover:text-blue-500 flex justify-end mt-12"
                  href={fromdb.data.detail}
                >
                  View more...
                </a>
              )}
            </div>
            <div className="mt-12 md:mt-0 w-full md:w-[60%]">
              <div className="flex flex-col gap-32">
                <div className="w-full">
                  <div className="bg-[#c2cad0] w-full h-32 text-center flex items-center justify-center  text-3xl sm:text-6xl text-bold">
                    Price Tracker
                  </div>
                  <div className="relative w-full h-fit bg-[#dfdfdf]">
                    <div className="py-20  w-full flex flex-col gap-2">
                      {console.log(fromdb.vendor)}
                      {fromdb.vendor &&
                        fromdb.vendor.map((item) => (
                          <div
                            key={item.id}
                            className="flex w-full flex-row h-16 bg-[#c2cad0] p-4 justify-between items-center "
                          >
                            <div className="w-[22%] text-left text-xl sm:text-3xl text-blue-700 font-bold">
                              {item.vendorname.toUpperCase()}
                            </div>
                            <div className="w-[22%] text-center ">
                              {item.price}
                            </div>
                            <div className="w-[22%] text-center ">{item.prev}</div>
                            {/* <div className="w-[22%] text-center ">{(100*(parseFloat(item.price.replace("€","").replace(",","."))-parseFloat(avg))/parseFloat(avg)).toFixed(2)}%</div> */}
                            <div className="w-[24%] text-center ">{item.date}</div>
                          </div>
                        ))}
                    </div>
                    <div className="absolute top-0 w-full h-full flex flex-row justify-between px-8 ">
                      <div className="w-[24%] "></div>
                      <div className="w-[24%] bg-[#8dafbd] h-full opacity-30 text-white text-xl sm:text-2xl md:text-4xl flex items-center justify-between py-4 flex-col">
                        <div className="">Live Price</div>
                        <div>{avg}€</div>
                      </div>
                      <div className="w-[24%] h-full bg-[#90bda6] opacity-30 text-white  text-xl sm:text-4xl flex items-center justify-between py-4 flex-col">
                        <div>Diff</div>
                        <div></div>
                      </div>
                      <div className="w-[24%] h-full bg-[#caa3a2] opacity-30 text-white  text-xl sm:text-4xl flex items-center justify-between py-4 flex-col">
                        <div>Registered</div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-32">
                  {/* {console.log(fromdb.vendor)} */}
                {fromdb.vendor &&<Example data={fromdb.vendor}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
