import { Link } from "react-router-dom";
import { useAuthData } from "frontend/Context";

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
          <Link to="/homepage"> Note List </Link>
        </li>

        <li>
          <Link to="/archives">Archives</Link>
        </li>
        <li>
          <Link to="/trash_note">Trash</Link>
        </li>

        <li onClick={logoutHandler}>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};
