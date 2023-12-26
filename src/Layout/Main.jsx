import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div >
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
}

export default Main;
