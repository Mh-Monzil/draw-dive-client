
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;