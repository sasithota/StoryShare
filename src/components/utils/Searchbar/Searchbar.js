import React,{useState,useEffect} from 'react';
import styles from './Searchbar.module.css';
import axios from 'axios';
const Searchbar = ()=>{
	const [value,setValue] = useState('');
  const [users,setUsers] = useState([]);
  const fetchUsers = async(username)=>{
    const body = {username};
    axios.post('http://localhost:5000/api/users/find',body,{
      headers:{
        'auth-token' : localStorage.getItem('token')
      }}).then(res=>{
        const {error,msg} = res.data;
        if(msg)
          setUsers(msg);
      }).catch(e=>console.log(e));
  }
  useEffect(()=>{
    if(value.length>0)
      fetchUsers(value);
    else
      setUsers([]);
  },[value]);
	return (
       <React.Fragment>
       <div className={styles.container}>
         <input className={styles.bar} value={value} onChange={(e)=>setValue(e.target.value)} placeholder='search' />
         <div className={styles.resultContainer}>
         {
           users.length>0 && users.map(data=>
               <div className={styles.result}>
                    <button className={styles.btn}>{data.username}</button>
               </div>
           )
         } 
         </div>
       </div>
       </React.Fragment>
		);
}

export default Searchbar;