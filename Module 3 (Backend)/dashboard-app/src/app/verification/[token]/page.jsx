'use client'

import { useEffect } from "react"
import axios from 'axios'

export default function Page(params) {
    useEffect(() => {
        axios.patch('http://localhost:5000/admin/verification',null, {
            headers: {
            'authorization': params.token
            }
        })
    }, [])
    return (
        <h1>
            Please Wait...
        </h1>
    )
}