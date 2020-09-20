import React, { useState, useEffect } from "react";
import styles from "./Searchbar.module.css";
import { searchUser } from "../functions.js";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async (username) => {
    try {
      const res = await searchUser(username);
      setUsers(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (value.length > 0) fetchUsers(value);
    else setUsers([]);
  }, [value]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <input
          className={styles.bar}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search"
        />
        <div className={styles.resultContainer}>
          {users.length > 0 &&
            users.map((data) => (
              <Link
                key={data._id}
                to={{ pathname: "/profile", state: { id: data._id } }}
              >
                <div className={styles.result}>
                  <button className={styles.btn}>{data.username}</button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
