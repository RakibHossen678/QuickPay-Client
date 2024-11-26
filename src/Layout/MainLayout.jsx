import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex gap-14">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
