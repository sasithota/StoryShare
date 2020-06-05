import React,{useEffect,useState,useContext} from 'react';
import Card from '../../utils/Card/Card.js';
import PostForm from '../../utils/PostForm/PostForm.js';
import Searchbar from '../../utils/Searchbar/Searchbar.js';
import {msgCon} from '../../context/isAuth.js';
import styles from './Home.module.css';
import {fetchCards,postACard} from '../../utils/functions.js';
const Home = ()=>{
  const [card,setCard] = useState([]);
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [submit,setSubmit] = useState(false);
  const {setMsgCon} = useContext(msgCon);
  const onSubmit = (e)=>{
    e.preventDefault();
    (async()=>{
      try{
        const res = await postACard(title,content);
        setMsgCon(res);
      }catch(e){
        setMsgCon(e);
      }
    })();
    setTitle('');
    setContent('');
    setSubmit(!submit);
  }
  useEffect(()=>{
     (async()=>{
         try{
            const posts = await fetchCards();
            setCard(posts);
         }catch(e){
           console.log(e);
         }
     })();
  },[submit]);
	return (

       <React.Fragment>
          <div className={styles.postContainer}>
            {
              card.map((item)=>{
                const {title,_id,content,author} = item;
                return <Card key={_id} data={{title,content,author}} />
              })
            }
          </div>
          <div className={styles.postFormContainer}>
            <Searchbar />
              <PostForm values={{title,content}} setTitle={setTitle} setContent={setContent} onSubmit={onSubmit}/>
          </div>
       </React.Fragment>
		);
}

export default Home;