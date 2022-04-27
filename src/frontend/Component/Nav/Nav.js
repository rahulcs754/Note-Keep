import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthData } from "frontend/Context";
import { Menu } from "./Menu";
import styles from "./Nav.module.css";
import mainLogo from "../../../assets/img/logo.png";
import { MdNightlightRound, MdViewHeadline } from "react-icons/md";
export const Nav = () => {
  const [showmenu, setShowmenu] = useState(false);
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;

  return (
    <>
      <div className="rs-row">
        <div className="col-12">
          <header className={`header ${styles.header_update}`}>
            <h1 className="header-logo">
              <Link to="/">
                <img src={mainLogo} width="28" />
              </Link>
            </h1>

            <ul className={`header-nav ${styles.header_nav_reset}`}>
              <li>
                <Link to="#">
                  <MdNightlightRound size={28} />
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setShowmenu(!showmenu)}>
                  <MdViewHeadline size={28} />
                </Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
      {showmenu ? <Menu /> : null}
    </>
  );
};
