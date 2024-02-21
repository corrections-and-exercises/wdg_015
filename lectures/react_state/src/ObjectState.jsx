import {useState} from 'react';

function ObjectState() {
    const [user, setUser] = useState({name: 'Hannah'});

    const entries = Object.values(user);

    function addAge() {
        setUser({...user, age: 40});
    }

    function removeProperty() {
        const copy = {...user};
        delete copy.age;
        setUser(copy);
    }

    function changeAge() {
        // const copy = {...user};
        // copy.age = 20;
        // setUser(copy);
        setUser({...user, age: 20});
    }

    return (
        <>
            <h1>Objects</h1>
            {entries.map((el) => (
                <p>{el}</p>
            ))}
            <button onClick={addAge}>Add Age</button>
            <button onClick={removeProperty}>Remove Age</button>
            <button onClick={changeAge}>Change Age</button>
        </>
    );
}

export default ObjectState;
