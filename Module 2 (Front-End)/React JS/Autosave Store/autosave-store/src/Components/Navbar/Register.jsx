import {useRef} from 'react';
import RegisterForm from "./RegisterForm"
import toast from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

export default function Register() {
    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()

    const[isLoading, setIsLoading] = useState(false)

    const onRegister = async() => {
        try {
            // Validation Input
            if(inputUsername.current.value.length < 5) throw({message: 'Minimum Character 5'})
            if(!inputEmail.current.value.includes('@')) throw({message: 'Email Not Valid'})
            if(inputPassword.current.value != inputConfirmPassword.current.value) throw({message: 'Password Does Not Match'})

            setIsLoading(true)

            // Check Username or Email Exist or not?
            const response = await axios.get(`http://localhost:5000/users?email=${inputEmail.current.value}`)
            
            if (response.data.length > 0) throw({message: 'Email Already Exist!'})

            // Send Post Request
            await axios.post('http://localhost:5000/users', {username: inputUsername.current.value, email: inputEmail.current.value, password: inputPassword.current.value})
            document.getElementById('my_modal_2').close();
            toast.success('Register Success!')

            inputUsername.current.value = ''
            inputEmail.current.value = ''
            inputPassword.current.value = ''
            inputConfirmPassword.current.value = ''
        } catch (error) {
            toast.error(error.message)    
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <>
            <button className="underline underline-offset-1" onClick={() => {
                document.getElementById('my_modal_1').close();
                document.getElementById('my_modal_2').showModal();
            }}>
                Register now
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">
                            Register
                    </h3>
                    <div className="flex justify-center">
                        <div className="w-[500px]">
                            <RegisterForm inputRef={inputUsername} type="text" label="Username" />
                            <RegisterForm inputRef={inputEmail} type="text" label="Email" />
                            <RegisterForm inputRef={inputPassword} type="password" label="Password" />
                            <RegisterForm inputRef={inputConfirmPassword} type="password" label="Confirm Password" />
                        </div>
                    </div>
                    <button disabled={isLoading} onClick={onRegister} className="btn bg-violet-400 text-white w-full mt-5">
                    {isLoading? 'Loading...':'Register'}
                    </button>
                </div>
            </dialog>
        </>
  );
}