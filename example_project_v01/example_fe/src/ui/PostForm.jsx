import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostForm({ user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    user_id: user.id,
  });

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    createPost();
  }

  async function createPost() {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER_URL + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="mx-auto flex w-4/12 flex-col p-10" onSubmit={submitForm}>
      <label className="p-2 text-center text-2xl" htmlFor="title">
        Title
      </label>
      <input
        className="p-1"
        onChange={handleChange}
        type="text"
        name="title"
        id="title"
        value={formData.title}
      />
      <label className="p-2 text-center text-2xl" htmlFor="content">
        Content
      </label>
      <textarea
        className="p-4"
        onChange={handleChange}
        name="content"
        id="content"
        value={formData.content}
      />
      <button
        className="text-2xl text-red-600  hover:text-orange-600  "
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
