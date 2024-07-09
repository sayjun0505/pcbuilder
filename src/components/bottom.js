import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div className="w-full bg-[#293840] text-white pt-12">
      <div className="px-8 w-full flex flex-row flex-wrap justify-between py-12">
        <div className="flex w-full md:w-2/5 flex-col gap-4">
          <div className="flex flex-row sm:items-center pr-0 sm:pr-36  hover:cursor-pointer">
            <img
              src="https://static.pcbuilder.net/assets/images/logo-80.png"
              alt="PC Builder"
              className="w-20 h-20"
            />
            <Link to="/" className="hidden sm:flex flex-row">
              <span className="text-3xl font-bold text-[#18AE91]">PC</span>
              <span className="ml-2 text-3xl font-bold text-white">Effective</span>
              <sup>{/* <small className="text-[22px]">™</small> */}</sup>
            </Link>
          </div>

          <span>
            Browse, Discover, Customize, Build Your PC - All in one place!
          </span>
          <span>
            PC Builder is your go-to platform for building your PC from scratch.
            You get a variety of computer parts at your disposal from all over
            the internet, including every major e-commerce website.
          </span>
          <span>Reach us at : contact@pc-builder.io</span>
        </div>
        <div className="min-w-60 w-full mt-4 md:mt-0 md:w-1/4 flex flex-col gap-4">
          <span className="font-bold">Disclaimer</span>
          <span>
            Product price & specifications may change from time-to-time. So,
            before making a purchase, double-check them on the retailer's
            website.
          </span>
          <span>
            Although, the compatibility filter is highly accurate, just verify
            before ordering them.
          </span>
        </div>
        <div className=" mt-4 md:mt-0 min-w-60 flex flex-col gap-4">
          <span className="font-bold">Useful Links</span>
          <span>Power Supply Calculator</span>
          <span>Product List</span>
          <span>Blog</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
        </div>
        <div className=" mt-4 md:mt-0 min-w-32 flex flex-col gap-4">
          <span className="font-bold">Connect</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
      <div className="px-8 py-4 text-left bg-[#001119] flex flex-row  justify-between">
        <div className="">
          Copyright © 2020-24 PC Builder™ | All Rights Reserved.
        </div>
        <div className="">Disclosure | Privacy Policy | Sitemap</div>
      </div>
    </div>
  );
}
