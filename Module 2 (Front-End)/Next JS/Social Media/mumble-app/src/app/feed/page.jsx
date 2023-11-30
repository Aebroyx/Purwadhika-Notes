import { IoChatbubbleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Image from "next/image";

async function getData() {
    const res = await fetch('http://localhost:5000/posts')

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const data = await getData()

    return(
        <>
            <div className="h-full bg-gradient-to-r from-teal-50 to-teal-500">
                <div className="flex">
                    <div className="w-1/6">

                    </div>
                        <div className="flex-1 flex-col text-black">
                        {
                            data.map((items, index) => {
                                return(
                                    <>
                                        <div className="card bg-white my-8">
                                            <div className="card-body">
                                                <h1 className="font-bold">{items.username}</h1>
                                            </div>
                                            <figure><Image src={`/posts${items.image}`} width={500} height={500} alt="car!"/></figure>
                                            <div className="card-body">
                                                <div className="flex text-3xl gap-2 pb-2">
                                                    <IoHeartOutline />
                                                    <IoChatbubbleOutline />
                                                </div>
                                                <h2 className="card-title">{items.username}</h2>
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