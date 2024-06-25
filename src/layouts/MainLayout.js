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
        <div>
            <Topbar />
            <Header />
            <Outlet />
            <Footer />
            <Bottom />
        </div>
    )
};
export default MainLayout;