import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {isAuthCon,msgCon} from './components/context/isAuth.js';
import Navbar from './components/utils/Navbar/Navbar.js';
import Login from './components/pages/Login/Login.js';
import Register from './components/pages/Register/Register.js';
import Home from './components/pages/Home/Home.js';
import Alert from './components/utils/Alert/Alert.js';
import './App.css';

function App() {
	const [isAuth,setIsAuth] = useState(null);
  const [msg,setMsg] = useState(null);
	const setAuth = (value)=>{
		setIsAuth(value);
	}
  const setMsgCon = (value)=>{
    setMsg(value);
  }
	useEffect(()=>{
		if(localStorage.getItem('token'))
        setAuth(true);
	})
  return (
  	<React.Fragment>
  	<isAuthCon.Provider value={{isAuth,setAuth}} >
    <msgCon.Provider value={{msg,setMsgCon}}>
  	<Router>
       <Navbar />
       <Alert msg={msg} />
       <main>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/login' component={Login} />
         <Route path='/register' component={Register} />
        </Switch>
       </main>
    </Router>
    </msgCon.Provider>
    </isAuthCon.Provider>
    </React.Fragment>
  );
}

export default App;
