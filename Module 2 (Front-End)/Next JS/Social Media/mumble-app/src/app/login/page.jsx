"use client"
import { useRef } from "react"
import InputComponent from "./InputComponent"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"

// Redux
import { setUser } from "@/redux/slice/userSlice"
import { useDispatch } from "react-redux"

// Cookies
import { setCookies } from "@/features/cookies"

export default function Page() {

    const inputUsername = useRef()
    const inputPassword = useRef()

    const router = useRouter()

    // Define useDispatch
    const dispatch = useDispatch()

    const {mutate} = useMutation({
        mutationFn: async() => {
            const res = await fetch(`http://localhost:5000/users?username=${inputUsername.current.value}&password=${inputPassword.current.value}`, {method: 'GET'})
            if(!res.ok) throw new Error('Server Error')
            return await res.json()
        },
        onSuccess: (data) => {
            console.log(data)
            if(data.length === 0) return toast.error("Login Failed")

            toast.success('Login Successful')
            // Sends data to action.payload
            dispatch(setUser(data[0]))
            setCookies(data)

            setTimeout(() => {
                router.push('/feed')
            }, 1000)
        },
        onError: (error) => {
            toast.error(error)
        }
    })

    return(
        <>
            <Toaster />
            <div className="h-screen bg-gradient-to-r from-teal-50 to-teal-500">
                <div className="flex">
                    <div className="w-1/6">

                    </div>
                    <div className="flex-1 justify-center items-center">
                        <div className="backdrop-blur rounded-md h-[650px] mt-16 bg-white/30">
                            <div className="flex flex-col h-full justify-center items-center gap-4">
                                <h1 className="text-4xl text-white">Login</h1>
                                <span className="text-black">Don't have an account? <span className="underline text-black"><Link href="/register">Register Here</Link></span></span>
                                <InputComponent label="Username" type='text' inputRef={inputUsername} />
                                <InputComponent label="Password" type='password' inputRef={inputPassword} />
                                <p className="text-sm text-black underline">Forgot password?</p>
                                <button className="btn glass" onClick={() => mutate()}>Login</button>
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