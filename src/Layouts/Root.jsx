import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;