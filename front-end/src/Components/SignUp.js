import { useState, useEffect } from "react";
import {Navigate, useNavigate} from 'react-router-dom';

import React from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
          navigate('/')
      }
  },[])

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result)); 
    if(result){
        navigate('/'); 
    }
  };
  return (
    <div className="regSign">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      />
      <input
        className="inputbox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      />
      <input
        className="inputbox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter password"
      />
      <button className="appButton" type="button" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
