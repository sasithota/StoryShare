import React, { useContext, useState, useEffect } from "react";
import styles from "./Alert.module.css";
import { msgCon } from "../../context/isAuth.js";
const Alert = (props) => {
	const { msg, setMsgCon } = useContext(msgCon);
	useEffect(() => {}, [msg]);
	return (
		<div className={msg ? styles.containerDis : styles.containerHid}>
			<p className={styles.msg}>{props.msg}</p>
			<button className={styles.btn} onClick={() => setMsgCon(null)}>
				&times;
			</button>
		</div>
	);
};

export default Alert;
