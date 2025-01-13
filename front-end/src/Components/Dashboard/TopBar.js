import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Menu from "../../Context/MainContext";

export default function TopBar() {
  const menu = useContext(Menu);
  const SetIsOpen = menu.SetIsOpen;
  return (
    <div className="top-bar d-flex align-items-center justify-content-between " >
      <div className="d-flex align-items-center gap-4 ">
        <h3>E-commerce</h3>
        <FontAwesomeIcon onClick={()=>SetIsOpen(prev =>!prev )} cursor={"pointer"} icon={faBars} />
      </div>
    </div>
  );
}
