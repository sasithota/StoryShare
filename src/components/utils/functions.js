import React from 'react';
import axios from 'axios';

const getUserDetails = (id)=>{
	return new Promise(async(resolve,reject)=>{
		const token = window.localStorage.getItem('token');
		try{
          const res = await axios.post(`http://localhost:5000/api/users/simple/${id}`);
          const {error,msg} = await res.data;
          if(error) return reject(error);
          if(msg) return resolve(msg);
		}catch(e){
			return reject(e);
		}
	})
}

const fetchCards = ()=>{
	return new Promise(async(resolve,reject)=>{
		const token = window.localStorage.getItem('token');
		try{
           const res = await axios.get('http://localhost:5000/api/posts',{
           	headers : {
           		'auth-token' : token
           	}
           });
           const {error,msg} = res.data;
           if(error) return reject(error);
           if(msg) return resolve(msg);
		}catch(e){
			return reject(e);
		}
	})
}

const postACard = (title,content)=>{
	return new Promise(async(resolve,reject)=>{
		const token = window.localStorage.getItem('token');
		const body = {title,content};
		try{
          const res = await axios.put('http://localhost:5000/api/posts',body,{
          headers:{
          'auth-token' : token
          }
          });
          const {error,msg} = await res.data;
          if(error) return reject(error);
          if(msg) return resolve(msg);
		}catch(e){
			return reject("Network error");
		}
	})
}

const fetchLogin = (username,password)=>{
	return new Promise(async(resolve,reject)=>{
         const body = {username,password};
         try{
           const res = await axios.post('http://localhost:5000/api/login',body);
           const {error,msg} = await res.data;
           if(error) return reject(error);
           if(msg){
           	  window.localStorage.setItem('token',msg.token);
           	  window.localStorage.setItem('user',msg.user);
           	  return resolve("Logged in successfully");
           }
         }catch(e){
         	return reject("Network error");
         }
	})
}

const fetchRegister = (username,password)=>{
	return new Promise(async(resolve,reject)=>{
		const body = {username,password};
		try{
           const res = await axios.put('http://localhost:5000/api/register',body);
           const {error,msg} = await res.data;
           if(error) return reject(error);
           if(msg) return resolve("account created successfully");
		}catch(e){
			return reject("Network error");
		}
	})
}
export {
	getUserDetails,
	fetchCards,
	postACard,
	fetchLogin,
	fetchRegister
}