import {Outlet} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import {UserContextProvider} from '../context/UserContext.jsx';

function Layout() {
    return (
        <UserContextProvider>
            <div className='layout'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </UserContextProvider>
    );
}

export default Layout;
