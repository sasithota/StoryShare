import React, { useEffect, useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { isAuthCon } from "../../context/isAuth.js";
import { useLocation, Link } from "react-router-dom";
import { getUserId } from "../functions.js";

const Navbar = () => {
  const { isAuth } = useContext(isAuthCon);
  const location = useLocation();
  const [uid, setUid] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getUserId(window.localStorage.getItem("user"));
        setUid(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logo}>logo</h2>
          <h2 className={styles.brand}>Brand</h2>
        </div>
        <div className={styles.navLinks}>
          {isAuth && location.pathname != "/" && (
            <Link to="/" className={styles.linkContainer}>
              <button className={styles.navLink}>Home</button>
            </Link>
          )}
          <div className={styles.linkContainer}>
            {isAuth ? (
              <Link to={{ pathname: "/profile", state: { id: uid } }}>
                <button className={styles.navLink}>
                  {localStorage.getItem("user")}
                </button>
              </Link>
            ) : location.pathname == "/login" ? (
              <Link to="/register">
                <button className={styles.navLink}>Register</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className={styles.navLink}>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
