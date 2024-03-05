import {useState, useEffect} from 'react';

const localCache = {};

export function usePosts(path) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localCache[path]) {
            setPosts(localCache[path]);
        } else {
            fetchData();
        }

        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/${path}`
                );
                if (!res.ok) throw new Error('Request Failed');
                const data = await res.json();
                localCache[path] = data;
                setLoading(false);
                setPosts(data);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        }
    }, [path]);

    return [error, loading, posts];
}
