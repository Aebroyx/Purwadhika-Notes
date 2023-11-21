import { useEffect, useState, useRef } from "react"

let dataDummy = []

export default function Hooks(){

    const inputUsername = useRef()
    const inputPassword = useRef()

    const[number, setNumber] = useState(0)

    // Kiri untuk pakai data, kanan untuk menyimpan data
    const[data, setData] = useState([])

    // Like Component Did Mount
    useEffect(() => {
        //onGetData()
        console.log('Component Did Mount')
    }, [])

    // Like Component Will Unmount
    // useEffect(() => {
    //     return(() => {
    //         console.log('Component Will Unmount')
    //     })
    // }, [])

    // Like Component Did Update
    // useEffect(() => {
    //     console.log('Component Did Update')
    // }, [number])

    const onGetData = async() => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users', {method: "GET"})
            response = await response.json()
            setData(response)
        } catch (error) {
            console.log(error)
        }
    }

    const onRegister = async() => {
        try {
            console.log(inputUsername.current.value)
            console.log(inputPassword.current.value)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="flex justify-center flex-col items-center">
            <h1>
                Hooks Page
            </h1>
            <ul>
                {data.map((item, index) => {
                    return(
                        <li>{item.username}</li>
                    )
                })}
            </ul>
            <button className="btn bg-blue-300" onClick={onGetData}>
                Fetch Data
            </button>

            <input type="text" ref={inputUsername} className="input border" placeholder="Enter Username" />
            <input type="password" ref={inputPassword} className="input border" placeholder="Enter Username" />
            <button className="btn bg-blue-300" onClick={onRegister}>
                Register
            </button>
        </div>
    )   
}