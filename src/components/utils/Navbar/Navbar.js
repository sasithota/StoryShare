import React,{useEffect,useContext} from 'react';
import styles from './Navbar.module.css';
import {isAuthCon} from '../../context/isAuth.js';

const Navbar = ()=>{
  const {isAuth} = useContext(isAuthCon);
	return (
       <React.Fragment>
         <div className={styles.container}>
           <div className={styles.logoContainer}>
             <h2 className={styles.logo} >logo</h2>
             <h2 className={styles.brand} >Brand</h2>
           </div>
           <div className={styles.navLinks}>
           {
               isAuth ? (<div className={styles.linkContainer}>
               <button className={styles.navLink} >Home</button>
             </div>) : (<div className={styles.linkContainer}>
               <button className={styles.navLink} >Login</button>
             </div>)
           }
             <div className={styles.linkContainer}>{
                isAuth ? <button className={styles.navLink} >{localStorage.getItem('user')}</button> :
                         <button className={styles.navLink} >register</button>
             }
             </div>

             
           </div>
         </div>
       </React.Fragment>
		);
}
export default Navbar;