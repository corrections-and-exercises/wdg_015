import List from '../components/List.jsx';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useUserContext} from '../context/UserContext.jsx';

function Dashboard() {
    const {firstName} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!firstName) navigate('/login');
    }, [firstName, navigate]);

    return (
        <div>
            <List />
        </div>
    );
}

export default Dashboard;
