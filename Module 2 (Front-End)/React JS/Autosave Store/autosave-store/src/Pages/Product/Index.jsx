import axios from "axios"
import { useEffect, useState } from "react"
import { axiosInstance } from "../../Lib/AxiosInstance"

export default function Product() {
    const[data, setData] = useState([])

    useEffect(() => {
        onGetData()
    }, [])

    const onGetData = async() => {
        try {
            let response = await axiosInstance.get('/products')
            setData(response.data[0])
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            <div>
                <h1>{data.name}</h1>
                <h1>{data.price.toLocaleString('id-ID')}</h1>
            </div>
        </>
    )
}