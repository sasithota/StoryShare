import React,{useContext} from 'react';
import styles from './PostForm.module.css';
const PostForm = ({values,onSubmit,setTitle,setContent})=>{
	return (
        <React.Fragment>
          <form onSubmit={onSubmit} className={styles.form} >
            <h3>Post something</h3>
            <input className={styles.input} type='text' value={values.title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea className={styles.textarea} value={values.content} placeholder='Body' onChange={(e)=>setContent(e.target.value)} />
            <button className={styles.button} type='submit'> Post </button>
          </form>
        </React.Fragment>
		);
}

export default PostForm;