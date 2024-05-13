import Footer from '../Pages/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
        <Navbar/>

        <div className="min-h-[calc(100vh-306px)]">
        <Outlet/>
        </div>
        <Footer/>
    </div>
    );
};

export default Root;