import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="relative w-full flex flex-col">
            <div className="px-2 md:px-32 text-white font-bold py-8 flex flex-row justify-between bg-[#514ACD]">
                <div className="flex flex-row gap-12">
                    <div >PC Builder</div>
                    <div >User Builds</div>
                    <div >Brows Products</div>
                </div>
                <div className="flex flex-row pr-12">Search</div>
            </div>
            <div className="w-full h-80 bg-[#5c4ee2]"></div>
            <div className="absolute mt-32 w-full px-2 md:px-32">
                <div className="w-full h-40 flex flex-row justify-between">
                    <div className="rounded-xl w-full md:w-3/4 bg-white p-2 flex flex-col">
                        <div className="flex flex-row bg-[#ecf1fe] w-full p-4 items-center">
                            <div className="w-2/5 sm:w-1/5">Component</div>
                            <div className="hidden sm:flex w-2/5">Product</div>
                            <div className="w-2/5 text-right sm:text-left">Form</div>
                        </div>
                        <div className="flex flex-row p-4 items-center">
                            <Link className="w-1/5 flex flex-row gap-2 items-center" to="/cpu">
                                <img src="https://pc-builder.io/img/components/cpu.png" className="w-8 h-8" alt="CPU" />
                                <span className=' text-gray-800'>CPU</span>
                            </Link>
                            <Link className="w-2/5" to="/cpu"><span className='hidden sm:flex text-gray-800'>+Choose CPU</span></Link>
                            <Link className="w-2/5" to="/cpu"><span className=' text-gray-800'></span></Link>
                        </div>

                    </div>
                    <div className="hidden md:flex rounded-xl w-1/5 h-40 bg-white "></div>

                </div>
            </div>
        </div>
    )
}