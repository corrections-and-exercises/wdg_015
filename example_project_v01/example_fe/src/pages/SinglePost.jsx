import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch.js";

function SinglePost() {
  const { id } = useParams();
  const [error, post] = useFetch(
    `${import.meta.env.VITE_SERVER_URL}/posts/${id}`,
  );

  return (
    <>
      {post && (
        <div className=" mx-auto w-2/3 border-2 border-dashed border-gray-700 bg-gray-100 p-10  text-center">
          <p className="p-4 text-5xl">{post.title}</p>
          <p>{post.content}</p>
        </div>
      )}
    </>
  );
}

export default SinglePost;
