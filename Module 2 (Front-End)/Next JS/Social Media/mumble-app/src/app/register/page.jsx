"use client"
import { useRef } from "react"
import InputComponent from "../login/InputComponent"
import { useMutation } from "@tanstack/react-query"

export default function Page() {
    const inputEmail = useRef()
    const inputUsername = useRef()
    const inputPassword = useRef()

    const {mutate} = useMutation({
        mutationFn: async() => {
            const res = await fetch(`http://localhost:5000/users`, {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: inputEmail.current.value,
                    username: inputUsername.current.value,
                    password: inputPassword.current.value,
                })
            })
        },
        onSuccess: () => {
            alert("Register Success")
        },
        onError: () => {
            alert("Error")
        }
    })
    
    return(
        <>
            <div className="h-screen bg-gradient-to-r from-teal-50 to-teal-500">
                <div className="flex">
                    <div className="w-1/6">

                    </div>
                    <div className="flex-1 justify-center items-center">
                        <div className="backdrop-blur rounded-md h-[650px] mt-16 bg-white/30">
                            <div className="flex flex-col h-full justify-center items-center gap-4">
                                <h1 className="text-4xl text-white">Register</h1>
                                <InputComponent label="Email" type='text' inputRef={inputEmail} />
                                <InputComponent label="Username" type='text' inputRef={inputUsername} />
                                <InputComponent label="Password" type='password' inputRef={inputPassword} />
                                <p className="text-sm text-black underline">Forgot password?</p>
                                <button className="btn glass" onClick={() => mutate()}>Create an account</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6">

                    </div>
                </div>
            </div>
        </>
    )
}