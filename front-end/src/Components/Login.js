import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Login =() =>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = Navigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    const handleLogin = async () =>{
        // console.log(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method: "post",
            body:JSON.stringify({email, password}),
            headers:{
                "Content-type": "application/json",
            },
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");    
        }else{
            alert("Please Provide Correct credentials")
        }
    }; 
    return(
        <div className='signIn'>
            <h1>Existing User Login</h1>
            <input className='inputbox' type="text" 
            value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            />
            <input className='inputbox' type="text" value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            placeholder="Enter Password"/>
            <button className="appButton" type="button" onClick={handleLogin}>Sign In</button>

        </div>
    )
}
export default Login;