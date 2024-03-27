import { Link } from "react-router-dom";
import { useFetch } from "../hook/useFetch.js";
import PostPreview from "../ui/PostPreview.jsx";

function Posts() {
  const [error, posts] = useFetch(import.meta.env.VITE_SERVER_URL + "/posts");
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Link key={post.id} to={post.id.toString()}>
            <PostPreview post={post} />
          </Link>
        ))}
    </div>
  );
}

export default Posts;
