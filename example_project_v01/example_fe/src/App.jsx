import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Posts from "./pages/Posts.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import { useFetch } from "./hook/useFetch.js";

function App() {
  const [error, user] = useFetch(import.meta.env.VITE_SERVER_URL + "/users/1");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {user && (
            <>
              <Route path="dashboard" element={<Dashboard user={user} />} />
              <Route path="posts" element={<Posts />} />
              <Route path="posts/:id" element={<SinglePost />} />
              <Route path="create-post" element={<CreatePost user={user} />} />
            </>
          )}
          <Route path="*" element={<h1>Not found!</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
