import {useParams, Outlet, useNavigate, useLocation} from 'react-router-dom';

function Users() {
    const {userId} = useParams();
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    function goToPosts() {
        navigate('/posts');
    }

    const location = useLocation();
    console.log(location);

    // fetch --- data --> navigate to ...

    return (
        <div>
            <h2>User: {userId}</h2>
            <button onClick={goBack}>Back</button>
            <button onClick={goToPosts}>Posts</button>
            {/* <a
                onClick={(ev) => {
                    ev.preventDefault();
                    navigate('/users/me');
                }}
            >
                Dashboard
            </a> */}
            <Outlet />
        </div>
    );
}

export default Users;
