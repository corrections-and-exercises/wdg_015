// import {useContext} from 'react';
// import {UserContext} from '../context/UserContext.jsx';

import {useUserContext} from '../context/UserContext.jsx';

function Home() {
    const {firstName} = useUserContext();
    return (
        <div>
            <h1>
                Welcome <i>{firstName}</i>
            </h1>
        </div>
    );
}

export default Home;
