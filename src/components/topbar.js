import search from "../assets/search.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Topbar() {
  const [showproducts, setShowproducts] = useState(false);
  const handleHover = () => {
    const svgIcon = document.getElementById("brws-svg");
    if (svgIcon) {
      svgIcon.setAttribute("fill", "#18AE91");
    }
  };

  const handleLeave = () => {
    const svgIcon = document.getElementById("brws-svg");
    if (svgIcon) {
      svgIcon.setAttribute("fill", "#ffffff");
    }
  };
  const openbrowser = () => {
    setShowproducts(!showproducts);
  };

  return (
    <nav className="relative w-full border-b-2 border-[#04151f] text-white">
      <header className="px-4 py-2 md:py-4 bg-[#001119]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row sm:items-center pr-0 sm:pr-36 border-r-2 border-[#293840] hover:cursor-pointer">
              <img
                src="https://static.pcbuilder.net/assets/images/logo-80.png"
                alt="PC Builder"
                className="w-20 h-20"
              />
              <div className="hidden sm:flex flex-row">
                <span class="text-3xl font-bold text-[#18AE91]">PC</span>
                <span class="ml-2 text-3xl font-bold text-white">
                  Effective
                </span>
                <sup>{/* <small className="text-[22px]">™</small> */}</sup>
              </div>
            </div>
            <div className="flex items-center px-8">
              <img src={search} className="w-8" alt="alt" />
              <input
                type="text"
                className="bg-[#001119] ml-8 h-8 outline-none text-xl "
                placeholder="Search ..."
              ></input>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className="flex flex-row items-center gap-4 ">
              <div className="w-8 h-8 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 125"
                  style={{ enableBackground: "new 0 0 100 100" }}
                  className="text-red-500"
                >
                  <g>
                    <g>
                      <path d="6.4-9.8-14.2-9.8c0,0-5.2,4-12.2,4c-6.8,0-12.2-4-12.2-4c-7.8,0-14.2,2-14.2,9.8v10.6 c0,0,11.8,6,26.5,5.4C2786.7,196.7,2795.8,191.9,2795.8,191.9z" />
                    </g>
                    <g>
                      <path d="M50,97.5C23.8,97.5,2.5,76.2,2.5,50S23.8,2.5,50,2.5S97.5,23.8,97.5,50S76.2,97.5,50,97.5z M50,7.5 C26.6,7.5,7.5,26.6,7.5,50S26.6,92.5,50,92.5S92.5,73.4,92.5,50S73.4,7.5,50,7.5z" />
                    </g>
                    <g>
                      <path d="M50,52.4c7.5,0,13.6-6.7,13.6-15s-6.1-15-13.6-15s-13.6,6.7-13.6,15S42.5,52.4,50,52.4" />
                      <path d="M76.5,72.8V62.3c0-7.9-6.4-9.8-14.2-9.8c0,0-5.2,4-12.2,4c-6.8,0-12.2-4-12.2-4c-7.8,0-14.2,2-14.2,9.8v10.6 c0,0,11.8,6,26.5,5.4C67.4,77.6,76.5,72.8,76.5,72.8z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-none">Welcome</span>
                <span className=" font-bold">Sign In/Register</span>
              </div>
            </div>
            <div className="hidden md:flex items-center ">
              <div className="flex flex-row items-end">
                <img
                  class=""
                  alt="aaa"
                  src="https://static.pcbuilder.net/assets/images/icons/cart.svg"
                  className="w-8 h-8"
                />
                <span className="">Cart</span>
              </div>
            </div>
            <div class="hidden md:flex mode items-center">
              <label class="switch">
                <input type="checkbox" id="switch" name="theme" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </header>
      <div className="hidden md:flex bg-[#04151f] w-full border-b-2 border-t-2 border-[#293840] flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row py-4 px-[28px] font-bold border-r-2 border-[#293840] items-center gap-2">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-36.23 -36.23 374.37 374.37"
              className="stroke-white w-8 h-8"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="1.8114719999999997"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M244.948,137.181c0.001,0,0,0,0.001,0c15.248,0,29.576-5.947,40.341-16.746c14.694-14.74,20.177-36.316,14.308-56.309 c-0.341-1.163-1.272-2.06-2.446-2.358c-1.174-0.301-2.42,0.044-3.276,0.902l-35.874,35.983c-2.153-0.872-7.577-3.85-17.615-13.857 c-10.038-10.008-13.034-15.423-13.915-17.574l35.873-35.985c0.856-0.858,1.195-2.106,0.893-3.279 c-0.303-1.174-1.202-2.102-2.367-2.439c-5.17-1.499-10.528-2.26-15.925-2.26c-15.249,0-29.557,5.964-40.337,16.744 c-31.338,31.338-11.863,62.861-11.863,62.861l-35.144,35.145c-8.577-7.223-17.882-14.376-28.145-21.415 c-2.314-1.587-5.327-1.536-7.569,0.012c-5.583-6.21-11.518-12.441-18.202-18.615l3.808-3.808c2.765-2.765,3.113-7.03,1.047-10.174 c0.064-0.107,0.123-0.219,0.188-0.326c2.971-4.893,6.354-9.408,10.199-13.644c7.708-8.788,18.703-14.988,30.091-17.399 c4.963-1.053,10.107-1.42,15.169-0.988c1.589,0.134,3.983,1.039,5.462,0.334c2.215-1.056,2.178-4.322-0.053-5.333 c-8.266-5.42-18.581-8.166-28.346-8.907c-21.734-1.649-42.848,6.65-60.224,19.315c-2.963-1.288-6.537-0.729-8.96,1.695 L42.896,87.926c-2.636,2.636-3.067,6.633-1.312,9.724c-2.865,3.145-5.868,6.157-9,9.035c-1.362-0.358-2.774-0.56-4.221-0.56 c-4.409,0-8.554,1.717-11.672,4.833L4.834,122.815C1.717,125.933,0,130.077,0,134.486c0,4.409,1.717,8.554,4.834,11.672 l15.259,15.258c3.117,3.117,7.262,4.834,11.67,4.834c4.408,0,8.553-1.717,11.669-4.834l11.858-11.857 c3.117-3.118,4.834-7.263,4.834-11.671c0-1.061-0.104-2.106-0.299-3.127c3.07-3.368,6.296-6.589,9.671-9.65 c2.935,1.211,6.438,0.627,8.823-1.758l3.809-3.81c6.174,6.684,12.405,12.619,18.615,18.202c-1.548,2.241-1.599,5.255-0.012,7.569 c7.04,10.263,14.193,19.567,21.416,28.145l-65.864,65.863c-8.228,8.23-8.228,21.618-0.001,29.844 c3.985,3.986,9.284,6.182,14.92,6.182c5.637,0,10.937-2.196,14.922-6.184l64.961-64.96c12.091,11.622,24.211,22.082,36.163,32.392 c14.497,12.506,29.487,25.437,43.913,40.069c1.25,1.267,2.953,1.982,4.732,1.989h0.023c1.771,0,3.469-0.703,4.722-1.956 l20.198-20.197c1.258-1.259,1.962-2.967,1.956-4.746c-0.006-1.778-0.722-3.481-1.989-4.731 c-14.631-14.425-27.561-29.415-40.066-43.911c-10.31-11.953-20.77-24.074-32.393-36.166l34.104-34.379 C229.466,135.584,237.084,137.181,244.948,137.181z"></path>{" "}
              </g>
            </svg>
            <span className=" hover:text-[#18AE91] hover:cursor-pointer">
              System Builder
            </span>
          </div>
          <div className="flex flex-row py-4 px-[28px] font-bold border-r-2 border-[#293840] items-center gap-2">
            <div className="flex flex-col gap-[2px]">
              <div className="w-[20px] h-[4px] rounded-full bg-white"></div>
              <div className="w-[20px] h-[4px] rounded-full bg-white"></div>
              <div className="w-[20px] h-[4px] rounded-full bg-white"></div>
            </div>
            <span className=" hover:text-[#18AE91] hover:cursor-pointer">
              Pre-Build PC
            </span>
          </div>
          <div className="flex flex-row py-4 px-[28px] font-bold border-r-2 border-[#293840] items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              stroke-width="0.00024000000000000003"
              className="h-6 w-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.94513 2.25H15.0549C16.4225 2.24998 17.5248 2.24996 18.3918 2.36652C19.2919 2.48754 20.0497 2.74643 20.6517 3.34835C21.2536 3.95027 21.5125 4.70814 21.6335 5.60825C21.75 6.47522 21.75 7.57754 21.75 8.94513V14.052C21.75 14.9505 21.7501 15.6997 21.6701 16.2945C21.5857 16.9223 21.4 17.4891 20.9445 17.9445C20.4891 18.4 19.9223 18.5857 19.2945 18.6701C18.6997 18.7501 17.9505 18.75 17.052 18.75H6.94801C6.04952 18.75 5.3003 18.7501 4.70552 18.6701C4.07773 18.5857 3.51093 18.4 3.05546 17.9445C2.59999 17.4891 2.41432 16.9223 2.32991 16.2945C2.24994 15.6997 2.24997 14.9505 2.25 14.052L2.25 8.94513C2.24998 7.57754 2.24996 6.47522 2.36652 5.60825C2.48754 4.70814 2.74643 3.95027 3.34835 3.34835C3.95027 2.74643 4.70814 2.48754 5.60825 2.36652C6.47522 2.24996 7.57754 2.24998 8.94513 2.25ZM5.80812 3.85315C5.07434 3.9518 4.68577 4.13225 4.40901 4.40901C4.13225 4.68577 3.9518 5.07435 3.85315 5.80812C3.75159 6.56347 3.75 7.56458 3.75 9V14C3.75 14.964 3.75159 15.6116 3.81654 16.0946C3.87858 16.5561 3.9858 16.7536 4.11612 16.8839C4.24643 17.0142 4.44393 17.1214 4.90539 17.1835C5.38843 17.2484 6.03599 17.25 7 17.25H17C17.964 17.25 18.6116 17.2484 19.0946 17.1835C19.5561 17.1214 19.7536 17.0142 19.8839 16.8839C20.0142 16.7536 20.1214 16.5561 20.1835 16.0946C20.2484 15.6116 20.25 14.964 20.25 14V9C20.25 7.56459 20.2484 6.56347 20.1469 5.80812C20.0482 5.07435 19.8678 4.68577 19.591 4.40901C19.3142 4.13225 18.9257 3.9518 18.1919 3.85315C17.4365 3.75159 16.4354 3.75 15 3.75H9C7.56458 3.75 6.56347 3.75159 5.80812 3.85315ZM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H15C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15ZM1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <span className=" hover:text-[#18AE91] hover:cursor-pointer">
              Laptops
            </span>
          </div>
          <div
            className="flex flex-row py-4 px-[28px] font-bold border-r-2 border-[#293840] items-center gap-2"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={openbrowser}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 3H7V1H5V3C3.89543 3 3 3.89543 3 5H1V7H3V9H1V11H3V13H1V15H3V17H1V19H3C3 20.1046 3.89543 21 5 21V23H7V21H9V23H11V21H13V23H15V21H17V23H19V21C20.1046 21 21 20.1046 21 19H23V17H21V15H23V13H21V11H23V9H21V7H23V5H21C21 3.89543 20.1046 3 19 3V1H17V3H15V1H13V3H11V1H9V3ZM5 5H19V19H5V5ZM13 6H12V7V11V12H13H17H18V11V7V6H17H13ZM14 8H16V10H14V8"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <span className=" hover:text-[#18AE91] hover:cursor-pointer">
              Browse Products
            </span>
            <svg
              viewBox="-6.5 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-white ${
                showproducts ? "transform rotate-180" : ""
              }`}
              stroke="#ffffff"
              fill="#ffffff"
              id="brws-svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-row p-4">
          <div className="flex flex-col justify-betwen items-center text-sm">
            <div className=" hover:text-[#18AE91] hover:cursor-pointer">
              Forum
            </div>
            <div className=" hover:text-[#18AE91] hover:cursor-pointer">
              Blog
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div
        className={`absolute z-40 w-full ${
          showproducts ? "flex" : "hidden"
        }  flex-row bg-[#001119] py-4 px-8 justify-between`}
      >
        <div className="flex flex-col gap-4">
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Storage</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/storage.png"
            />
          </div>
          <Link
            to="/cpu"
            onClick={()=>setShowproducts(false)}
            className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center"
          >
            <span>CPU</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/mega-menu/nav-processor.png"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Graphic Card</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/graphics-card.png"
            />
          </div>
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>CPU Cooler</span>
            <img
              className="w-24 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/cpu-cooler.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Power Supply</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/power-supply.png"
            />
          </div>
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Motherboard</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/motherboard.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Case</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/case.png"
            />
          </div>
          <div className="border-b-4  border-t-[2px] border-r-[2px] border-l-[2px] w-40 h-40 shadow-md hover:shadow-4xl hover:cursor-pointer border-[#04151f] hover:border-[#18AE91] rounded-md flex flex-col gap-2 justify-center items-center">
            <span>Memory</span>
            <img
              className="w-20 h-20"
              alt="cpu, processor, pc builder, pc part picker, build my pc"
              data-ll-status="loaded"
              src="https://static.pcbuilder.net/assets/images/megamenu/memory.png"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between mr-16">
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Cooling</span>
            <span className="text-md  font-bold">Case Fans</span>
            <span className="text-md  font-bold">Thermal Compound</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Expansion</span>
            <span className="text-md  font-bold">Sound Cards</span>
            <span className="text-md  font-bold">Wired Networking</span>
            <span className="text-md  font-bold">Wireless Networking</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Displays</span>
            <span className="text-md  font-bold">Monitors</span>
            <span className="text-md  font-bold">Webcam</span>
          </div>
        </div>
        <div className="flex flex-col justify-between mr-16">
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Peripherals</span>
            <span className="text-md  font-bold">Headphones</span>
            <span className="text-md  font-bold">Keyboards</span>
            <span className="text-md  font-bold">Mouse</span>
            <span className="text-md  font-bold">Speakers</span>
            <span className="text-md  font-bold">
              Uninteraptable Power Supplies
            </span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">
              External Storage
            </span>
            <span className="text-md  font-bold">External Hard Drives</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Drives</span>
            <span className="text-md  font-bold">Optical Drives</span>
          </div>
        </div>
        <div className="flex flex-col justify-between mr-24">
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Software</span>
            <span className="text-md  font-bold">Antivirus</span>
            <span className="text-md  font-bold">Utilities</span>
            <span className="text-md  font-bold">Operating Systems</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">
              Pre-Built PCs
            </span>
            <span className="text-md  font-bold">Gaming Desktops</span>
            <span className="text-md  font-bold">Cheap Desktops</span>
            <span className="text-md  font-bold">AIO Desktops</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-md text-gray-500 font-bold">Others</span>
            <span className="text-md  font-bold">Laptops</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
