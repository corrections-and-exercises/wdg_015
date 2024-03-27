import { PostForm } from "../ui/PostForm.jsx";

function CreatePost({ user }) {
  return (
    <div>
      <PostForm user={user} />
    </div>
  );
}

export default CreatePost;
