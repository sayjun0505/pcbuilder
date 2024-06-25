export default function Topbar() {
    return (
        <div className="w-full flex justify-between py-8 px-32">
            <img id="logo-image" src="https://pc-builder.io/img/pc-builder-logo.svg" alt="PC Builder" />
            <div className="text-xl flex fex-row gap-12">
                <div className="hover:cursor-pointer hover:text-gray-500">Blog</div>
                <div className="hover:cursor-pointer hover:text-gray-500">Login</div>
                <div className="hover:cursor-pointer hover:text-gray-500">Signup</div>
            </div>
        </div>
    )
}