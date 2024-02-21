import ArrayState from './ArrayState.jsx';
import DCHeroes from './DCHeros.jsx';
import ObjectState from './ObjectState.jsx';
import Form from './Form.jsx';
import Users from './Users.jsx';

import {useState} from 'react';

function App() {
    const [userData, setUserData] = useState([]);
    return (
        <>
            {/* <ArrayState /> */}
            {/* <ObjectState /> */}
            {/* <DCHeroes /> */}
            <Form setUserData={setUserData} />
            <Users userData={userData} />
        </>
    );
}

export default App;
