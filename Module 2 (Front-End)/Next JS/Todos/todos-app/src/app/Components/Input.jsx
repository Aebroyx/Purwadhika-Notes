"use client"
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function Input() {
    const router = useRouter()
    const inputTodos = useRef()

    const {mutate} = useMutation(
        {
            mutationFn: async() => {
                const res = await fetch('http://localhost:5000/todos', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        task: inputTodos.current.value
                    })
                })

                if(!res.ok) throw new Error('Failed Fetch Data')
            },
            onSuccess: () => {
                toast('Task Successfully Added!')
                setTimeout(()=>{
                    router.refresh()
                }, 1000)
            },
            onError: (error) => {
                toast.error(error.message)
            }
        }
    )
    return(
        <>
        <div className="flex gap-2">
            <input type="text" placeholder="Add your new todo" className="input input-bordered w-full max-w-xs bg-white" ref={inputTodos}/>
            <button className="btn text-2xl text-white bg-indigo-500" onClick={mutate}><FaPlus /></button>
        </div>
        </>
    )
}