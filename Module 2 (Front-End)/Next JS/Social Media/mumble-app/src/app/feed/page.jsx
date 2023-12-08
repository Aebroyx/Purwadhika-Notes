import { IoChatbubbleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

import Image from "next/image";
import { getCookies } from "@/features/cookies";

async function getData() {
    const res = await fetch('http://localhost:5000/posts?_expand=user',
    {cache: 'no-store'}
    )

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const data = await getData()
    const {value} = await getCookies('userData')

    return(
        <>
            <div className="h-full bg-gradient-to-r from-teal-50 to-teal-500">
                <div className="flex">
                    <div className="w-1/6">

                    </div>
                    <div className="flex-1 flex-col text-black max-w-[500px]">
                        {
                            data.map((items, index) => {
                                return(
                                    <>
                                        <div className="card bg-white my-8">
                                            <div className="card-body">
                                                <h1 className="font-bold">{items.user.username}</h1>
                                            </div>
                                            <figure><Image src={`/posts/${items.image}`} width={500} height={500} alt="car!"/></figure>
                                            <div className="flex">
                                                    {
                                                        items.likes.includes(Number(value))?
                                                        <button className="btn btn-ghost btn-circle text-3xl"><IoHeart className="text-red-500" /></button>
                                                        :
                                                        <button className="btn btn-ghost btn-circle text-3xl"><IoHeartOutline /></button>
                                                    }
                                                    <button className="btn btn-ghost btn-circle text-3xl"><IoChatbubbleOutline /></button>
                                            </div>
                                            <div className="card-body p-4">
                                                <h2 className="font-bold">{items.likes.length} likes</h2>
                                                <h2 className="card-title">{items.user.username}</h2>
                                                <p>{items.caption}</p>
                                                <div className="card-actions justify-end">
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="w-1/6">

                    </div>
                </div>
            </div>
        </>
    )
}