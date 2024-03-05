import DisplayPost from '../ui/DisplayPost.jsx';
import {Link} from 'react-router-dom';
import {usePosts} from '../hooks/usePosts.js';
import Loading from '../ui/Loading.jsx';

function Posts() {
    const path = 'posts';

    const [error, loading, posts] = usePosts(path);

    if (error) {
        return <p>Something went wrong</p>;
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Link key={post.id} to={`${post.id}`}>
                    <DisplayPost post={post} />
                </Link>
            ))}
        </>
    );
}

export default Posts;
