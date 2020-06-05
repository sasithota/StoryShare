import React from 'react';
import styles from './Form.module.css';
const Form = (props)=>{
	return (
       <React.Fragment>
          <form  onSubmit={props.onSubmit} className={styles.form}>
            <input className={styles.input} name='username' type='text' onChange={(e)=>props.setUname(e.target.value)} value={props.values.username} placeholder='username'/>
            <input className={styles.input} name='password' type='password' onChange={(e)=>props.setPassword(e.target.value)} value={props.values.password} placeholder='password' />
            <button className={styles.button} type='submit'>{props.button}</button>
          </form>
       </React.Fragment> 
		);
}

export default Form;