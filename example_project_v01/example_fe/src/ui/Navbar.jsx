import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="border- flex justify-evenly border-b-2 border-gray-700 bg-gray-100 p-4 text-blue-950">
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      <li>
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="create-post">Create Post</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
