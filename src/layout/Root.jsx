
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-[1440px] mx-auto px-4'>
            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;