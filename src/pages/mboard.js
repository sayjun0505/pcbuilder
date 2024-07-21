import Infotable from "../components/infotable";
import Filters from "../components/filters";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Mboard() {
  const [filtervalue, setFiltervalue] = useState("");
  const [showdata, setShowdata] = useState([]);
  const [all, setAll] = useState([]);
  const [minvalCoreCount, setMinvalCoreCount] = useState(1);
  const [maxvalCoreCount, setMaxvalCoreCount] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://103.35.189.49:5000/api/allmdata"
        // );
        const response = await axios.get("http://localhost:5000/api/allmdata");
        // console.log(response.data.data)
        const tmp = response.data.data.map((item, index) => {
          const mboardid = item._id;
          // let ar = response.data.vendor.filter((item) => item.cpuid === cpuid);
          let t = {
            id: item._id,
            img: item.imgurl,
            title: item.name.replace("Cpu ", "").replace(" Processor", ""),
            detail: item.detail,
            link: item.link,
            price: item.price
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
        // const x = filtered.filter(
        //   (item) =>
        //     parseInt(item.cores) > parseInt(minvalCoreCount) &&
        //     parseInt(item.cores) < parseInt(maxvalCoreCount)
        // );
        return filtered;
      }
    };
    let x = filterData(filtervalue, all);
    setShowdata(x);
  }, [filtervalue, all, minvalCoreCount, maxvalCoreCount]);

  const handleCoreCountValuesChange = (newMinval, newMaxval) => {
    setMinvalCoreCount(newMinval);
    setMaxvalCoreCount(newMaxval);
  };
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const itemsPerPage = 36;
  const totalPages = Math.ceil(showdata.length / itemsPerPage);
  const paginatedData = showdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="md:mt-60 w-full flex flex-row justify-between">
      <div className="hidden md:flex w-1/4 h-screen">
        <Filters
          handleCoreCountValuesChanges={handleCoreCountValuesChange}
          condition={filtervalue}
        />
      </div>
      <div className="p-2 sm:p-0 w-full md:w-[73%] rounded-xl flex flex-col gap-4 ">
        <div className="flex justify-end">
          <div className="-mt-12 text-3xl text-blue-600 font-bold">
            <span className="text-gray-200">Total:</span>
            <span className="text-white">{showdata.length}</span>
          </div>
        </div>

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
          {/* <div className="text-white flex flex-row gap-4 mr-12">
            <div
              onClick={goToPrevPage}
              className="hover:cursor-pointer border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500 flex justify-center items-center"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div onClick={()=>goToPage(1)} className={`hover:cursor-pointer ${currentPage==1?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              1
            </div>
            <div onClick={()=>goToPage(2)} className={`hover:cursor-pointer ${currentPage==2?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              2
            </div>
            <div onClick={()=>goToPage(3)} className={`hover:cursor-pointer ${currentPage==3?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              3
            </div>
            <div onClick={()=>goToPage(4)} className={`hover:cursor-pointer ${currentPage==4?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              4
            </div>
            <div onClick={()=>goToPage(5)} className={`hover:cursor-pointer ${currentPage==5?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              5
            </div>
            <div onClick={()=>goToPage(6)} className={`hover:cursor-pointer ${currentPage==6?'bg-gray-500':'bg-none'} border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500`}>
              6
            </div>
            <div
              onClick={goToNextPage}
              className="hover:cursor-pointer border-2 border-white rounded-full w-8 h-8 text-center hover:bg-gray-500 flex justify-center items-center"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
          </div> */}
        </div>
        {showdata && <Infotable datas={showdata} loc="mboard"/>}
      </div>
    </div>
  );
}
