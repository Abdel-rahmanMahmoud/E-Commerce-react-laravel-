import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="position-relative dashboard">
      <SideBar />
      <TopBar />
      <Outlet />
    </div>
  );
}
