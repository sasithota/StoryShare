import React, { useContext } from "react";
import styles from "./PostForm.module.css";
const PostForm = ({ data }) => {
  return (
    <React.Fragment>
      <form onSubmit={data.onSubmit} className={styles.form}>
        <h3>Post something</h3>
        <input
          className={styles.input}
          type="text"
          value={data.values.title}
          placeholder="Title"
          onChange={(e) => data.setTitle(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          value={data.values.content}
          placeholder="Body"
          onChange={(e) => data.setContent(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Post
        </button>
      </form>
    </React.Fragment>
  );
};

export default PostForm;
