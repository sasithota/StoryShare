import React from "react";
import styles from "./Form.module.css";
const Form = ({ data }) => {
	return (
		<React.Fragment>
			<form onSubmit={data.onSubmit} className={styles.form}>
				<input
					className={styles.input}
					name="username"
					type="text"
					onChange={(e) => data.setUname(e.target.value)}
					value={data.values.username}
					placeholder="username"
				/>
				<input
					className={styles.input}
					name="password"
					type="password"
					onChange={(e) => data.setPassword(e.target.value)}
					value={data.values.password}
					placeholder="password"
				/>
				<button className={styles.button} type="submit">
					{data.button}
				</button>
			</form>
		</React.Fragment>
	);
};

export default Form;
