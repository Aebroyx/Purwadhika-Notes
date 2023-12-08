"use client"
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export default function ListTodos({data}) {
    const router = useRouter()

    const {mutate} = useMutation(
        {
            mutationFn: async(id) => {
                const res = await fetch(`http://localhost:5000/todos/${id}`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                })

                if(!res.ok) throw new Error('Failed Fetch Data')
            },
            onSuccess: () => {
                toast('Task Deleted')
                setTimeout(()=>{
                    router.refresh()
                }, 1000)
            },
            onError: (error) => {
                toast.error(error.message)
            }
        }
    )

    const handleDelete = (id) => {
        mutate(id);
    };
    return(
        <>
            <div className="flex flex-col gap-2">
                {
                    data.map((items, index) => {
                        return(
                            <div className="flex justify-between bg-gray-300 rounded p-3">
                                <div className="text-black ">
                                    {items.task}
                                </div>
                                <button className="btn bg-red-600 text-white" onClick={() => handleDelete(items.id)}><FaTrash /></button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}