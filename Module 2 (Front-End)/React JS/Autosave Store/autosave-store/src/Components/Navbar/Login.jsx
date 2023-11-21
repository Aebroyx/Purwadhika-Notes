

// Your component that contains the modal
import Register from "./Register";

export default function Login() {
    return (
        <>
            <button className="btn btn-ghost btn-circle" onClick = {()=> document.getElementById('my_modal_1').showModal()}>
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
                        <div className="control-form w-full">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                        </div>
                        <div className="control-form w-full">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <p className="font-bold mb-4 mt-2">Forgot your password?</p>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <button className="btn bg-violet-500 text-white w-full">LOG IN</button>
                        <p className="mt-5">Doesn't have an account?</p>
                         <Register />
                    </div>
                </div>
            </dialog>
        </>
  );
}