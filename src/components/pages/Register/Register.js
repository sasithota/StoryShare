import React, { useState, useContext, useMemo } from "react";
import axios from "axios";
import { isAuthCon, msgCon } from "../../context/isAuth.js";
import Form from "../../utils/Form/Form.js";
import styles from "./Register.module.css";
import { Redirect } from "react-router-dom";
import { fetchRegister } from "../../utils/functions.js";

const Register = (props) => {
	const [username, setUname] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const { isAuth } = useContext(isAuthCon);
	const { setMsgCon } = useContext(msgCon);
	const [reg, setReg] = useState(false);
	const submit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetchRegister(username, password);
			setReg(true);
			setMsgCon(res);
		} catch (e) {
			setMsgCon(e);
		}

		setUname("");
		setPassword("");
	};
	useMemo(() => {}, [reg, isAuth]);
	const data = {
		button: "Register",
		onSubmit: submit,
		values: { username, password },
		setPassword,
		setUname,
	};
	if (reg) return <Redirect to="/login" />;
	if (isAuth) return <Redirect to="/" />;
	return (
		<React.Fragment>
			<div className={styles.container}>
				<h3>Register Form</h3>
				<p>{message}</p>
				<Form data={data} />
			</div>
		</React.Fragment>
	);
};
export default Register;
