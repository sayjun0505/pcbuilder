import React from "react";
import { useNavigate } from "react-router-dom";
export default function Record(propss) {
  // const [data, setData] = useState(propss.datainfo);
  console.log(propss.datainfo.vendor);
  const navigate = useNavigate();
  const detail = (data) => {
    // console.log("data.id:", data.id)
    navigate("/info", { state: data });
  };
  return (
    <div
      className="bg-white rounded-md hover:cursor-pointer border-2 border-white hover:border-gray-500 border-white-500 p-2  flex w-full flex-col md:flex-row justify-between"
      onClick={() => detail(propss.datainfo.id)}
    >
      <div className="broder-2 border-blue-500 w-full sm:w-3/4 flex flex-row items-center gap-4 flex-start">
        <div className="flex flex-col justify-center">
          <img
            src={propss.datainfo.img}
            alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor"
            className="w-16 h-16 sm:w-40 sm:h-32"
          />
          <div className="flex flex-row gap-2 items-center justify-center">
            <img
              alt="Rating"
              className="w-4 h-4 "
              src="https://pc-builder.io/img/star.svg"
            />{" "}
            <span>{propss.datainfo.review}</span>
          </div>
        </div>
        <div className="h-full py-0 sm:py-4 flex w-full flex-col justify-between">
          <a
            href="https://pc-builder.io/cpu/amd-ryzen-7-7800x3d-p52516"
            className=" font-black text-bold text-lg sm:text-2xl "
          >
            {propss.datainfo.title}
          </a>
          <div className="hidden sm:flex flex-row w-full justify-between">
            <div className="w-1/2 gap-2 flex flex-col justify-start">
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>Core Count:</span>
                <span>{propss.datainfo.cores}</span>
              </div>
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>IncludesCooler:</span>
                <span>{propss.datainfo.IncludesCooler}</span>
              </div>
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>MPN:</span>
                <span>{propss.datainfo.MPN}</span>
              </div>
            </div>
            <div className="w-1/2 gap-2 flex flex-col justify-start">
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>Core Clock:</span>
                <span>{propss.datainfo.cclock}</span>
              </div>
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>CoreFamily:</span>
                <span>propss.datainfo.CoreFamily</span>
              </div>
              <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                <span>Socket:</span>
                <span>{propss.datainfo.Socket}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-between py-0 sm:py-4 -mt-8 sm:mt-0">
        <div className="flex justify-end w-full font-black text-bold text-xl text-blue-700 test-right">
          {propss.datainfo.vendor[0].price}
        </div>
        <div className="flex flex-row w-full items-center justify-end gap-4 ">
          {propss.datainfo.vendor.map((item, key) => {
            return item.vendorname === "bmp" ? (
                <div className="bg-gray-500 p-2 rounded-xl">
                    <img
                        id="imgLogo"
                        src="https://www.bpm-power.com/var/logo/logo_5.jpg"
                        className="w-16 h-8"
                        alt="Bpm-power"
                        title="Bpm-power"
                    />
                </div>
            ) : (
                <div className="bg-gray-500 p-2 rounded-xl">
                    <img
                        src="https://azerty.nl/static/version1719466751/frontend/Azerty/hyva/nl_NL/images/logo.svg"
                        title=""
                        alt="Azerty"
                        className="w-16 h-8"
                    />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
