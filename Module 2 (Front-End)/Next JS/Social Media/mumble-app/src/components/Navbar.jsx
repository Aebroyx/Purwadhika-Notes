"use client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "@/redux/slice/userSlice"

// Cookies
import { getCookies, delCookies } from "@/features/cookies"


export default function Navbar() {
    const dataUser = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useQuery({
        queryFn: async() => {
            const {value} = await getCookies()
            console.log(value)

            let res = await fetch(`http://localhost:5000/users/${value}`)
            res = await res.json()

            console.log(res)

            dispatch(setUser(res))
        }
    })

    const onLogout = async() => {
        await delCookies()
        dispatch(setUser(null))
    }

    return(
        <>
            <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <Link href={'/feed'} className="btn btn-ghost text-xl text-black">mumble</Link>
                </div>
                <div className="navbar-center flex">
                    <a>
                        {
                            dataUser.user?
                            <>
                                <Link href={'/profile'} className="btn btn-ghost">{dataUser.user.username}</Link>
                                <button className="hidden btn btn-ghost btn-circle">
                                    <div className="indicator bg-white text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </>
                            :
                                null
                        }
                    </a>
                </div>
                <div className="navbar-end flex gap-2">
                    <div>
                        {
                            dataUser.user?
                            <>
                            <button className="btn btn-ghost" onClick={onLogout}>Logout</button>
                            </>
                            :
                            <>
                            <Link href="/login" className="btn btn-ghost text-black">Login</Link>
                            <Link href="/register" className="btn btn-ghost text-black">Sign Up</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}