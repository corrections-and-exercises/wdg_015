function PostPreview({ post }) {
  const date = new Date(post.creationdate).toDateString();
  return (
    <div className="m-2 mx-auto w-2/3 border-2 border-dashed border-gray-700 bg-gray-100 p-2 text-center">
      <p className="text-sm">{date}</p>
      <p className="text-3xl">{post.title}</p>
      {post.content.length > 10 ? (
        <p>{post.content.substring(0, 20)}...</p>
      ) : (
        <p> {post.content}</p>
      )}
    </div>
  );
}

export default PostPreview;
