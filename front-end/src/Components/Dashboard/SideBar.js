import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";
import { useContext } from "react";
import { Menu } from "../../Context/MainContext";
import { WindowSize } from "../../Context/WindowContext";

export default function SideBar() {
  const menu = useContext(Menu);
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.WindowSize;
  console.log(windowSize);
  const isOpen = menu.isOpen;
  return (
    <div
      className="side-bar pt-3 "
      style={{
        left: windowSize < "768" ?  (isOpen ? 0 : "-100%") :0,
        width: isOpen ? "240px " : "fit-content",
      }}
    >
      <NavLink
        to={"users"}
        className="d-flex align-items-center gap-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{
            padding: isOpen ? "10px 8px 10px 15px" : "10px 13px",
          }}
          icon={faUsers}
        />
        <p
          className="m-0"
          style={{
            display: isOpen ? "block" : "none",
          }}
        >
          Users
        </p>
      </NavLink>
    </div>
  );
}
