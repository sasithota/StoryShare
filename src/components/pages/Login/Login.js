import React, { useState, useContext, useEffect } from "react";
import { isAuthCon, msgCon } from "../../context/isAuth.js";
import Form from "../../utils/Form/Form.js";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { fetchLogin } from "../../utils/functions.js";

const Login = (props) => {
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setAuth } = useContext(isAuthCon);
  const { setMsgCon } = useContext(msgCon);
  const handler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchLogin(username, password);
      setAuth(true);
      setMsgCon(res);
    } catch (e) {
      setMsgCon(e);
    }
    setUname("");
    setPassword("");
  };
  useEffect(() => {}, [isAuth]);
  if (isAuth) return <Redirect to="/" />;
  // props for Form component
  const data = {
    button: "Login",
    values: { username, password },
    setUname,
    setPassword,
    onSubmit: handler,
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h3>Login Form</h3>
        <Form data={data} />
      </div>
    </React.Fragment>
  );
};
export default Login;
