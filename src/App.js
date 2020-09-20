import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isAuthCon, msgCon } from "./components/context/isAuth.js";
import Navbar from "./components/utils/Navbar/Navbar.js";
import Alert from "./components/utils/Alert/Alert.js";
import ProtectedRoute from "./components/utils/ProtectedRoute/ProtectedRoute.js";
import "./App.css";

// lazy load code splitting
const Home = lazy(() => import("./components/pages/Home/Home.js"));
const Login = lazy(() => import("./components/pages/Login/Login.js"));
const Register = lazy(() => import("./components/pages/Register/Register.js"));
const Profile = lazy(() => import("./components/pages/Profile/Profile.js"));

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const [msg, setMsg] = useState(null);
  const setAuth = (value) => {
    setIsAuth(value);
  };
  const setMsgCon = (value) => {
    setMsg(value);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) setAuth(true);
  });
  return (
    <React.Fragment>
      <isAuthCon.Provider value={{ isAuth, setAuth }}>
        <msgCon.Provider value={{ msg, setMsgCon }}>
          <Router>
            <Navbar />
            <Alert msg={msg} />
            <main>
              <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                  <ProtectedRoute exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <ProtectedRoute path="/profile" component={Profile} />
                </Suspense>
              </Switch>
            </main>
          </Router>
        </msgCon.Provider>
      </isAuthCon.Provider>
    </React.Fragment>
  );
}

export default App;
