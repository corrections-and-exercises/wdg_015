function DisplayPost({post}) {
    return (
        <div className='post'>
            <p>No: {post.id}</p>
            <p className='title'>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export default DisplayPost;
