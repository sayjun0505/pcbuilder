import Header from '../components/header';
import Bottom from '../components/bottom';
import Footer from '../components/footer';
import Topbar from '../components/topbar';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
const MainLayout = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className='w-full flex items-center'>
            <div className='flex flex-col w-full'>
                <Topbar />
                {/* <Header /> */}
                <div className='px-2 md:px-32 py-12 bg-[#dae2e5]'>
                    <Outlet />
                </div>
                <Footer />
                <Bottom />
            </div>
        </div>

    )
};
export default MainLayout;