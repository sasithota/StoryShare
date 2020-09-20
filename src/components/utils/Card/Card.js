import React from "react";
import styles from "./Card.module.css";
const Card = (props) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <img
        className={styles.profilePic}
        src={`http://localhost:5000/uploads/default.png`}
        alt="profilepic"
      />
      <h3 className={styles.username}>{props.data.author.authorName}</h3>
      <h1 className={styles.options}>...</h1>
    </div>
    <div className={styles.bodyContainer}>
      <h4 className={styles.body}>{props.data.title}</h4>
      <p className={styles.body}>{props.data.content}</p>
    </div>
    <div className={styles.shareContainer}>
      <button className={styles.btn}>Like</button>
      <button className={styles.btn}>Comment</button>
      <button className={styles.btn}>Share</button>
    </div>
  </div>
);
export default Card;
