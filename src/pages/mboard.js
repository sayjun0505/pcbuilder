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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://103.35.189.49:5000/api/allmdata"
        );
        // const response = await axios.get("http://localhost:5000/api/allmdata");
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
        setShowdata(tmp);
        console.log(response.data.data);
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // fetchData();
    FilterProcess(); 
    const interval = setInterval(() => {
      FilterProcess(); // Call fetchData every 1 minute (60000 milliseconds)
    }, 60000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);
  const handleCoreCountValuesChange = (newMinval, newMaxval) => {
    setMinvalCoreCount(newMinval);
    setMaxvalCoreCount(newMaxval);
  };
  
  const init=async()=>{
    setFiltervalue("");
    const response = await axios.get(
      `http://103.35.189.49:5000/api/allmdata?filter=`
    );
    // const response = await axios.get("http://localhost:5000/api/allmdata");
    console.log(response.data.data);
    setCount(response.data.count);

    const tmp = response.data.data.map((item, index) => {
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
    setShowdata(tmp);
  }
  const FilterProcess=async()=>{
    const response = await axios.get(
      `http://103.35.189.49:5000/api/allmdata?filter=${filtervalue}`
    );
    // const response = await axios.get("http://localhost:5000/api/allmdata");
    setCount(response.data.count);

    const tmp = response.data.data.map((item, index) => {
      const cpuid = item._id;
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
    setShowdata(tmp);
  }
  
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
            <span className="text-white">{count}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-8 w-full">
            <div className="bg-white border-2 border-gray-200 w-[320px] sm:w-1/2 h-12 rounded-xl px-4 flex justify-center items-center gap-4">
              <input
                type="text"
                className="w-full outline-none bg-white"
                value={filtervalue}
                onChange={(event) => setFiltervalue(event.target.value)}
              />
              {filtervalue&&
              <svg onClick={init} fill="#000000" className="h-6 w-6 hover:cursor-pointer" viewBox="0 0 492 492">
              <path className="text-gray-800 fill-current" d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"></path>
            </svg>}
            </div>
            <div className="flex justify-center w-20 border-2 rounded-lg h-12 border-gray-200 items-center hover:border-gray-500 hover:cursor-pointer" onClick={FilterProcess}>
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
