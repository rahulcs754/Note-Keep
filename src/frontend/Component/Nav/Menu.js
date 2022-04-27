import { Link } from "react-router-dom";
import { useAuthData } from "frontend/Context";
import {
  MdOutlineLogout,
  MdOutlineHome,
  MdOutlineLabel,
  MdOutlineArchive,
  MdDeleteOutline,
} from "react-icons/md";
export const Menu = () => {
  const Firstname = localStorage.getItem("rsnote_Firstname");
  const { DispatchUserAuth } = useAuthData();

  const logoutHandler = () => {
    DispatchUserAuth({
      type: "LOGOUT",
    });
  };

  return (
    <div className="menu">
      <h3>Welcome {Firstname}</h3>
      <ul>
        <li>
          <Link to="/"> Note List </Link>
        </li>
        <li>
          <Link to="/">Label</Link>
        </li>
        <li>
          <Link to="/">Archive</Link>
        </li>
        <li>
          <Link to="/">Trash</Link>
        </li>
        <li onClick={logoutHandler}>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};
