import React from 'react'
import { useState } from 'react';
import axiosInstance from '../axios config/axiosInstance';

export const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [token, setToken] = useState('');
 
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/user/login',
                JSON.stringify(loginData),
                {
                    headers: {'Content-Type': 'application/json'},
                }
            )
            setToken(res.data);
            console.log(res.data);
            localStorage.setItem('token', token);
        } catch (err) {
            console.error(err);
        }
    }

    const handleInput = (e) => {
        if(e.target.name === 'username'){
            setLoginData({...loginData, username: e.target.value});
        }
        if(e.target.name === 'password'){
            setLoginData({...loginData, password: e.target.value});
        }
    }

  return (
    <div className='min-w-full flex mt-36 mb-52 justify-center items-center'>
        <form onSubmit={(e) => {signIn(e)}}>
            <div>
                <h2 className='font-thin text-5xl mb-10'>Login</h2>
                <div className="form-group mb-4">
                    <label htmlFor='username'>Username</label>
                    <input type="text" value={loginData.username} 
                    name="username" id="username" 
                    class="ml-2 form-input px-6 py-1 rounded-full" 
                    onChange={(e)=>{handleInput(e)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" value={loginData.password} 
                    name="password" id="password" 
                    class="ml-3 form-input px-6 py-1 rounded-full" 
                    onChange={(e)=>{handleInput(e)}}
                    />
                </div>
                <button type="submit" className="py-2 px-5 mt-4 rounded-full bg-indigo-600 text-slate-200 font-bold hover:bg-indigo-400 transition-all cursor-pointer">
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}
