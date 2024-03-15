import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from '../context/UserContext.jsx';
function Navbar() {
    const {firstName, setFirstName} = useUserContext();
    const navigate = useNavigate();

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='dashboard'>Dashboard</NavLink>
            <NavLink to='forum'>Forum</NavLink>
            {firstName ? (
                <>
                    <span
                        onClick={() => {
                            setFirstName('');
                            navigate('/');
                        }}
                    >
                        Logout
                    </span>
                </>
            ) : (
                <NavLink to='login'>Login</NavLink>
            )}
        </nav>
    );
}

export default Navbar;
