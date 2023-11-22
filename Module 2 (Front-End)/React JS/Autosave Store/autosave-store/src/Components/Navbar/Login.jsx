

// Your component that contains the modal
import Register from "./Register";
import { useRef } from "react";
import LoginForm from "./RegisterForm";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';

import { useContext } from 'react';
import { userDataContext } from "../../Context/userDataContext";

export default function Login() {
    const { setUserData } = useContext(userDataContext);

    const inputUsername = useRef()
    const inputPassword = useRef()
    const navigate = useNavigate();

    const onLogin = async() => {
        try {
            // Step-1. Ambil data dari input
            const username = inputUsername.current.value
            const password = inputPassword.current.value 

            // Step-2. Ambil data dari JSON-Server && 
            const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`)
            if(response.data.length === 0) throw {message: 'Login Failed!'}

            toast.success('Login Success!')
            setUserData(response.data[0]);
            document.getElementById('my_modal_1').close();
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <button className="btn btn-ghost btn-circle text-white" onClick = {()=> document.getElementById('my_modal_1').showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </button >
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="flex flex-col justify-center items-center">
                        <LoginForm inputRef={inputUsername} type="text" label="Username" />
                        <LoginForm inputRef={inputPassword} type="password" label="Password" />  
                    </div>
                    <p className="font-bold mb-4 mt-2">Forgot your password?</p>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <button onClick={onLogin} className="btn bg-violet-500 text-white w-full">LOG IN</button>
                        <p className="mt-5">Doesn't have an account?</p>
                         <Register />
                    </div>
                </div>
            </dialog>
        </>
  );
}