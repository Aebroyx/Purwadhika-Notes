import FrontImage1 from './../../assets/frontimg1.png'
import FrontImage2 from './../../assets/frontimg2.png'
import { axiosInstance } from './../../Lib/AxiosInstance'

//Components
import ProductCard from '../../Components/ProductCard.jsx/Index'
import { useEffect, useState } from 'react'

export default function Home() {
    const[products, setProducts] = useState([])

    const onGetData = async() => {
        try {
            const res = await axiosInstance.get('/products')
            setProducts(res.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    return(
        <>
        <section>
            <div className='flex'>
                <div>
                    <img src={FrontImage1} alt="frontimg1" className='flex-1' />
                </div>
                <div>
                    <img src={FrontImage2} alt="frontimg2" className='flex-1'/>
                </div>
            </div>
        </section>

        <div className='flex justify-center items-center pt-3 pb-7'>
                <div style={{backgroundColor: 'white', width: '24px' , height: '6px', borderRadius: '100px'}}></div>
        </div>

        <section>
            <h1 className='text-2xl font-bold pl-4 pb-4'>
                Original T-Shirts
            </h1>
            <div className='grid grid-cols-2 px-4 sm:grid-cols-2 gap-4 md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4 xl:grid-cols-4 gap-4 2xl:grid-cols-4 gap-4'>
                {
                    products.map((item, index) => {
                        return(
                            item.category == "t-shirt"?
                            <>
                                <ProductCard data={item} />
                            </>
                            :
                            null
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}