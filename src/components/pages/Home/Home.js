import React, { useEffect, useState, useContext } from "react";
import Feed from "../../utils/Feed/Feed.js";
import PostForm from "../../utils/PostForm/PostForm.js";
import Searchbar from "../../utils/Searchbar/Searchbar.js";
import { msgCon } from "../../context/isAuth.js";
import styles from "./Home.module.css";
import { fetchCards, postACard } from "../../utils/functions.js";
const Home = () => {
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(false);
  const { setMsgCon } = useContext(msgCon);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postACard(title, content);
      setMsgCon(res);
    } catch (e) {
      setMsgCon(e);
    }
    setTitle("");
    setContent("");
    setSubmit(!submit);
  };
  useEffect(() => {
    (async () => {
      try {
        const posts = await fetchCards();
        setCard(posts);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [submit]);
  // props for PostForm
  const data = {
    values: { title, content },
    setTitle,
    setContent,
    onSubmit,
  };
  return (
    <React.Fragment>
      <Feed card={card} />
      <div className={styles.postFormContainer}>
        <Searchbar />
        <PostForm data={data} />
      </div>
    </React.Fragment>
  );
};

export default Home;
