import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuthData } from "frontend/Context";
import styles from "./Nav.module.css";
import { MdOutlineLogout } from "react-icons/md";
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
              <Link to="/">ESW</Link>
            </h1>

            <ul className="header-nav">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active_url" : "normal"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active_url" : "normal"
                  }
                  to="/explore/all"
                >
                  Explore
                </NavLink>
              </li>
              {isUserLoggedIn ? (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active_url" : "normal"
                    }
                    to="/playlists"
                  >
                    Playlist
                  </NavLink>
                </li>
              ) : null}
              <li>
                <NavLink to="#">
                  <MdOutlineLogout />
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};
