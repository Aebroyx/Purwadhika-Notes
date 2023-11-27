import { cache } from "react"

export const revalidate = 3600

export const getItem = cache(async (id) => {
    const item = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return item.json()
})