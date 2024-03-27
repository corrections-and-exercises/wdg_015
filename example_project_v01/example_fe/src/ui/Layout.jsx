import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-green-200 ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
