export default function Topbar() {
    return (
        <div className="w-full flex justify-between py-2 sm:py-8 px-2 md:px-32">
            <img id="logo-image" src="https://pc-builder.io/img/pc-builder-logo.svg" alt="PC Builder" />
            <div className="hidden text-xl sm:flex fex-row gap-12">
                <div className="hover:cursor-pointer hover:text-gray-500">Blog</div>
                <div className="hover:cursor-pointer hover:text-gray-500">Login</div>
                <div className="hover:cursor-pointer hover:text-gray-500">Signup</div>
            </div>
            <img className="w-8 h-8 flex sm:hidden" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>
        </div>
    )
}