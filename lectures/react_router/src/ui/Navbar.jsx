import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink
                to='/'
                style={({isActive}) => ({
                    color: isActive ? 'green' : 'blue',
                })}
            >
                Home
            </NavLink>
            <NavLink
                to='/users'
                style={({isActive}) => ({
                    color: isActive ? 'green' : 'blue',
                })}
            >
                Users
            </NavLink>
            <NavLink
                to='/users/me'
                style={({isActive}) => ({
                    color: isActive ? 'green' : 'blue',
                })}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='/posts'
                style={({isActive}) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                // className={({isActive}) => {
                //     return isActive ? 'active' : '';
                // }}
            >
                Posts
            </NavLink>
        </nav>
    );
}

export default Navbar;
