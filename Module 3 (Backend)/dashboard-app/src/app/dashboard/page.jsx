import Image from "next/image";
import CreateProduct from "@/components/CreateProduct";

const fetchProducts = async() => {
    try {
        const res = await fetch('http://localhost:5000/products/get', {
            method: 'GET', cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        return error
    }
}

export default async function Page(){
    const {data: products} = await fetchProducts()
    return(
        <>
            <section className="flex flex-col">
                <div className="flex flex-col items-center my-10">
                    <h1 className="text-5xl font-bold">Dashboard</h1>
                </div>

                <div className="flex flex-col mx-10 gap-4">
                    <h1 className="text-2xl font-bold">Create Products</h1>
                    <CreateProduct />
                </div>

                <div className="flex flex-col my-10 mx-10 gap-4">
                    <h1 className="text-2xl font-bold">View Products</h1>
                    {
                        products.map((item, index) => {
                            return(
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure><Image src={`http://localhost:5000/public/image/${item?.ProductImages[0]?.url}`} width={500} height={200} alt={''}></Image></figure>
                                            <div className="card-body">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.description}</p>
                                                    <p>Rp.{item.price.toLocaleString("id-ID")}</p>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-primary">Buy Now</button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}