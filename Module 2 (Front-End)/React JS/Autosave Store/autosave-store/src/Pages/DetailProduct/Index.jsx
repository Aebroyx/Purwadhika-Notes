import { useParams } from "react-router-dom"
import { axiosInstance } from "../../Lib/AxiosInstance"
import { useEffect, useState } from "react"
import { BsShare } from "react-icons/bs";


export default function DetailProduct() {
    const params = useParams()
    const slug = params.id

    const [data, setData] = useState({})

    const getDetail = async() => {
        try {
            const response = await axiosInstance.get(`/products/${slug}`)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return(
        <>
        <section className="flex">
            <div className="w-2/3 mx-8">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={data.image} className="w-2/3 h-auto" />
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img src={data.image} className="w-2/3 h-auto" />
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <img src={data.image} className="w-2/3 h-auto" />
                    </div> 
                    <div id="item4" className="carousel-item w-full">
                        <img src={data.image} className="w-2/3 h-auto" />
                    </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="w-1/3">
                <div className="my-4 mx-4 text-white">
                    <h1 className="font-bold text-xl">{data.name}</h1>
                    <h1 className="font-bold text-xl pb-4">Rp. {data?.price?.toLocaleString('id-ID')}</h1>
                    <div className="flex gap-2">
                        {
                            data?.size?.map((item, index) => {
                                return(
                                    <>
                                        <button className="btn font-bold">{item}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col">
                        <button className="btn my-2">ADD TO CART</button>
                    </div>
                    <div className="flex gap-2">
                            <button className="btn w-2/3">ADD TO WISHLIST</button>
                            <button className="btn w-1/3"><BsShare /></button>
                    </div>
                    {/* //details */}
                    <div>
                        <h1 className="text-xl pt-4">Details</h1>
                        <p>{data.material}</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere libero id eligendi. Itaque, optio incidunt tempore nesciunt qui fuga velit? Obcaecati reiciendis eligendi totam et explicabo, rerum deserunt voluptates ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corrupti doloremque laudantium fugit alias voluptas cumque in ipsum praesentium dolores distinctio quia modi eum, eos totam, recusandae, tenetur veniam cum.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}