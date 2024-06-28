export default function Face() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://static.pcbuilder.net/assets/images/banner/bg-banner.png"
        alt="bg"
        className="w-full h-full"
      />
      <div className="absolute top-1/4 sm:top-1/3 left-4 mr-4 sm:mr-0 sm:left-20 flex flex-col text-left gap-6">
        <span className="text-white font-bold text-5xl">
          Performing with Excellence to
        </span>
        <span className="text-[#18AE91] font-bold text-5xl">Do More for More</span>
        <div className="mt-4 ">
          <p className="text-white  text-xl">
            We are excellence with the pc parts compatibility to do more for you!
          </p>
          <p className="text-white  text-xl">
            With the ever-changing tech, you'll always get the latest and most
            accurate compatibility.
          </p>
        </div>
        <div className="mt-4 flex flex-row gap-8">
          <div className="px-8 py-2 rounded-md bg-[#18AE91] text-white text-xl font-bold border-2 border-[#18AE91]">Create Now</div>
          <div className="px-8 py-2 rounded-md text-white text-xl font-bold border-2 border-[#18AE91]">Buy Pre-Built PC</div>
        </div>
        
      </div>
    </div>
  );
}
