import React from "react";
import styles from "./Feed.module.css";
import Card from "../Card/Card.js";
const Feed = ({ card }) => {
	return (
		<div className={styles.postContainer}>
			{card.map((item) => {
				const { title, _id, content, author } = item;
				return <Card key={_id} data={{ title, content, author }} />;
			})}
		</div>
	);
};

export default Feed;
