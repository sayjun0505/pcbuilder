import Infotable from "../components/infotable";
import Filters from "../components/filters";
import axios from "axios";
import React, { useContext,useEffect, useState } from "react";
import { SocketContext } from '../context/socket';



export default function Home() {
  const [filtervalue, setFiltervalue] = useState("");
  const [showdata, setShowdata] = useState([]);
  const [all, setAll] = useState([]);
  const [minvalCoreCount, setMinvalCoreCount] = useState(1);
  const [maxvalCoreCount, setMaxvalCoreCount] = useState(100);
  const socket = useContext(SocketContext);
useEffect(()=>{
  socket.on("pcbuilder",servertime=>{
    console.log("servertime:",servertime);
  })
},[socket])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://103.35.189.49:5000/api/alldata');
        const response = await axios.get("http://localhost:5000/api/alldata");
        const tmp = response.data.data.map((item, index) => {
          const cpuid = item._id;
          let ar = response.data.vendor.filter((item) => item.cpuid === cpuid);
          let t = {
            id: item._id,
            img: item.imgurl,
            review: "4.9",
            title: item.name.replace("Cpu ", "").replace(" Processor", ""),
            Manufacturer: item.Manufacturer,
            ManufacturerURL: item.ManufacturerURL,
            MPN: item.MPN,
            cores: item?.CoreCount || 0,
            bclock: "5GHZ",
            Socket: item?.Socket || "None",
            cclock: item?.CoreClock || 0,
            CoreFamily: item?.CoreFamily,
            IncludesCooler:
              item?.IncludesCooler === "Nee" ? "No" : "Yes" || "None",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg",
            vendor: ar
          };
          return t;
        });
        setAll(tmp);
        // console.log(tmp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setShowdata(all);
  }, [all]);

  useEffect(() => {
    const filterData = (value, list) => {
      if (value === "") {
        const x = list.filter(
          (item) =>
            parseInt(item.cores) > parseInt(minvalCoreCount) &&
            parseInt(item.cores) < parseInt(maxvalCoreCount)
        );
        return x;
      } else {
        const filtered = list.filter((item) =>
          item.title.toLowerCase().includes(filtervalue.toLowerCase())
        );
        const x = filtered.filter(
          (item) =>
            parseInt(item.cores) > parseInt(minvalCoreCount) &&
            parseInt(item.cores) < parseInt(maxvalCoreCount)
        );
        return x;
      }
    };
    let x = filterData(filtervalue, all);
    setShowdata(x);
  }, [filtervalue, all, minvalCoreCount, maxvalCoreCount]);

  const handleCoreCountValuesChange = (newMinval, newMaxval) => {
    setMinvalCoreCount(newMinval);
    setMaxvalCoreCount(newMaxval);
  };

  return (
    <div className="md:mt-60 w-full flex flex-row justify-between">
      <div className="hidden md:flex w-1/4 h-screen">
        <Filters
          handleCoreCountValuesChanges={handleCoreCountValuesChange}
          condition={filtervalue}
        />
      </div>
      <div className="p-2 sm:p-0 w-full md:w-[73%] rounded-xl flex flex-col gap-4 ">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="bg-white border-2 border-gray-200 w-full sm:w-1/2 h-12 rounded-xl px-4 flex justify-center items-center">
            <input
              type="text"
              className="w-full outline-none bg-white"
              onChange={(event) => setFiltervalue(event.target.value)}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 15.5L19 19"
                stroke="#818895"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                stroke="#818895"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="text-3xl text-blue-600 font-bold"><span className="text-red-500">Total:</span>{showdata.length}</div>
        </div>

        {showdata && <Infotable datas={showdata} />}
      </div>
    </div>
  );
}
