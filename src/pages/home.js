import Infotable from "../components/infotable";
import Filters from "../components/filters";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [filtervalue, setFiltervalue] = useState("");
  const [showdata, setShowdata] = useState([]);
  const [all, setAll] = useState([]);
  const [minvalCoreCount, setMinvalCoreCount] = useState(1);
  const [maxvalCoreCount, setMaxvalCoreCount] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://103.35.189.49:5000/api/alldata');
        // const response = await axios.get("http://localhost:5000/api/alldata");
        // console.log(response.data.data)
        const tmp = response.data.data.map((item, index) => {
          const cpuid = item._id;
          // let ar = response.data.vendor.filter((item) => item.cpuid === cpuid);
          let t = {
            id: item._id,
            img: item.imgurl,
            title: item.name.replace("Cpu ", "").replace(" Processor", ""),
            detail: item.detail,
            link: item.link,
            price: item.price,
          };
          return t;
        });
        setAll(tmp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData(); // Call fetchData every 1 minute (60000 milliseconds)
    }, 60000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);
  useEffect(() => {
    setShowdata(all);
  }, [all]);

  useEffect(() => {
    const filterData = (value, list) => {
      if (value === "") {        
        return list;
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
          <div className="mt-8 text-3xl text-blue-600 font-bold">
            <span className="text-gray-200">Total:</span>
            <span className="text-white">{showdata.length}</span>
          </div>
        </div>
        {showdata&&<Infotable datas={showdata} />}
      </div>
    </div>
  );
}
