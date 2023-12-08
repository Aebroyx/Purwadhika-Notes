"use client"
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from "next/navigation";

export default function ClearAll() {
    const router = useRouter()

    const {mutate} = useMutation(
        {
            mutationFn: async () => {
                const res = await fetch('http://localhost:5000/todos', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!res.ok) {
                    const errorMessage = await res.text();
                    throw new Error(`Failed to Clear All Data. Server error: ${errorMessage}`);
                }
            },
            onSuccess: () => {
                toast('All Tasks Cleared');
                setTimeout(() => {
                    router.refresh()
                }, 1000)
            },
            onError: (error) => {
                console.error('Clear all error:', error);
                toast.error(error.message);
            },
        }
    )
    const handleClearAll = () => {
        // Show a confirmation dialog or perform the action directly
        // In this example, it clears all data without confirmation
        mutate();
    };


    return(
        <>
            <button className="btn bg-indigo-500 text-white" onClick={handleClearAll}>Clear All</button>
        </>
    )
}