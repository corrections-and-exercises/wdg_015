import {useParams} from 'react-router-dom';
import DisplayPost from '../ui/DisplayPost.jsx';
import {usePosts} from '../hooks/usePosts.js';
import Loading from '../ui/Loading.jsx';

function Post() {
    const {postId} = useParams();
    const path = `posts/${postId}`;

    const [error, loading, post] = usePosts(path);

    if (error) {
        return <p>Something went wrong</p>;
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className='single-post'>
            <DisplayPost post={post} />
        </div>
    );
}

export default Post;
