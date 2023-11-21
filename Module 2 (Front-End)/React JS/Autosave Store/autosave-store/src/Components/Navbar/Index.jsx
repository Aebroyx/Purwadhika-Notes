import React, { useState } from 'react';
import Login from './Login';
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar(){
    const [isSideNavVisible, setIsSideNavVisible] = useState(false);
    
    const toggleSideNav = () => {
        setIsSideNavVisible(!isSideNavVisible);
    };

    const closeSideNav = () => {
        setIsSideNavVisible(false);
    };
      
    return(
        <>
            <nav>
                <div className="navbar bg-violet-500 bg-opacity-50 sticky top-0">
                    <div className='pr-3'>
                        <button onClick={toggleSideNav} className="text-slate-950 p-2 btn btn-ghost btn-circle">
                        <GiHamburgerMenu />
                    </button>
                    </div>
                    <div className="flex-1">
                        <a className="text-slate-950 text-xl pr-20">Autosave Store</a>
                        <div className="hidden md:flex space-x-4">
                        <div>
                            HOT ITEMS
                        </div>
                        <div>
                            THE ORIGINAL HOODIE
                        </div>
                        <div>
                            COLLABORATION
                        </div>
                    </div>
                    </div>
                    <Login />
                    <div className="flex-none">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    
                </div>
                {isSideNavVisible && (
                <div className="fixed top-0 left-0 h-full w-64 bg-violet-500 text-slate-950 p-4 flex flex-col">
                    <button onClick={closeSideNav} className="mr-auto text-slate-950 p-2">
                        ✕
                    </button>
                    <ul>
                        <li className='mt-5 border-b border-black'>HOT ITEMS</li>
                        <li className='mt-5 border-b border-black'>ABOUT US</li>
                    </ul>
                </div>
                )}
            </nav>
        </>
    )
}