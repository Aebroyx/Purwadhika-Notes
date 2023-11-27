'use client'
import Link from "next/link"
import useSWR from "swr"


export default function Todos() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
    
    if(error) return alert('Failed to Load')
    if(isLoading) return <div>Loading</div>
    return(
        <>
            <h1 className="text-xl">
                Todos Page
            </h1>
            {
                data.map((item, index) => {
                    return(
                        <Link href={`/todos/${item.id}`} key={index}>
                            <div className="bg-gray-200">
                                <p>{item.id}. {item.title}</p>
                            </div>
                        </Link>
                    )
                })
                
            }
        </>
    )
}