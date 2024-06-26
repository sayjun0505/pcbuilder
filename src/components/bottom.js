export default function Bottom() {
    return (
        <div className="w-full my-12 px-32">
            <div className="w-full border-t-2 border-b-2 border-gray-300 flex flex-row justify-between py-12">
                <div className="flex w-2/5 flex-col gap-4">
                    <img id="logo-image" src="https://pc-builder.io/img/pc-builder-logo.svg" alt="PC Builder" className="w-48" />
                    <span>Browse, Discover, Customize, Build Your PC - All in one place!</span>
                    <span>
                        PC Builder is your go-to platform for building your PC from scratch. You get a variety of computer parts at your disposal from all over the internet, including every major e-commerce website.
                    </span>
                    <span>Reach us at : contact@pc-builder.io</span>
                </div>
                <div className="w-1/4 flex flex-col gap-4">
                    <span className="font-bold">Disclaimer</span>
                    <span>Product price & specifications may change from time-to-time. So, before making a purchase, double-check them on the retailer's website.</span>
                    <span>Although, the compatibility filter is highly accurate, just verify before ordering them.</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold">Useful Links</span>
                    <span>Power Supply Calculator</span>
                    <span>Product List</span>
                    <span>Blog</span>
                    <span>About Us</span>
                    <span>Contact Us</span>
                    <span>Terms & Conditions</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold">Connect</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                </div>
            </div>
        </div>
    )
}