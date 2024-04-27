
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;