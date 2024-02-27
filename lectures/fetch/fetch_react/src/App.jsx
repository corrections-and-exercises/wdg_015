import {useState, useEffect} from 'react';

function App() {
    const [book, setBook] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch('https://openlibrary.org/works/OL45804W.json')
        //     .then((res) => {
        //         if (!res.ok) throw new Error('Request failed');
        //         return res.json();
        //     })
        //     .then((data) => setBook(data))
        //     .catch((error) => console.log(error));
        async function fetchData() {
            try {
                const res = await fetch(
                    'https://openlibrary.org/works/OL4580W.json'
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setBook(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <p>Something went wrong</p>;
    }

    return (
        <>
            <h1>Fetch</h1>
            <p>{book.description}</p>
        </>
    );
}

export default App;
