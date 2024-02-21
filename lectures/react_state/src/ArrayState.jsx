import {useState} from 'react';

function ArrayState() {
    const [myArray, setMyArray] = useState([1, 2, 3, 4]);

    function addItem() {
        // setMyArray(myArray.concat([5]));
        // setMyArray([...myArray, 5]);
        setMyArray((prev) => [...prev, 5]);
    }

    function removeFromArray(input) {
        setMyArray(myArray.filter((el) => el !== input));
    }

    function filterArray() {
        setMyArray(myArray.filter((el) => el < 3));
    }

    function multiplyByTwo() {
        setMyArray(myArray.map((el) => el * 2));
    }

    const filteredArray = myArray.filter((el) => el < 10);
    const length = myArray.length;

    return (
        <div>
            <h1>Array</h1>
            {myArray.map((el, idx) => (
                <p key={idx}>{el}</p>
            ))}
            <button onClick={addItem}>Add item</button>
            <button onClick={filterArray}>Filter</button>
            <button onClick={multiplyByTwo}>Multiply</button>
            <button onClick={() => removeFromArray(4)}>Remove item</button>
            <p>length: {length}</p>
            <h2>Filtered Array</h2>
            {filteredArray.map((el, idx) => (
                <p key={idx}>{el}</p>
            ))}
        </div>
    );
}

export default ArrayState;
