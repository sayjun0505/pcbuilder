// import Header from '../components/header';
import Bottom from '../components/bottom';
import Footer from '../components/footer';
import Topbar from '../components/topbar';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Face from '../components/face';
const MainLayout = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className='w-full flex items-center'>
            <div className='relative flex flex-col w-full'>
                <Topbar />
                {/* <Header /> */}
                
                {location.pathname === '/' ?<div className='w-full'> <Face /></div> :<div className='px-2 md:px-12 py-12  bg-[#26293b]'> <Outlet /></div>}
                
                <Footer />
                <Bottom />
            </div>
        </div>

    )
};
export default MainLayout;