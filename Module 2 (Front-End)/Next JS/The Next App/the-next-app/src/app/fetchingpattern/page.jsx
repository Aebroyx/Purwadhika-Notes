import { Suspense } from "react"

const baseUrl = 'https://jsonplaceholder.typicode.com/'

// // Parallel Fetching
// const getDataPosts = async() => {
//     try {
//         const response = await fetch(`${baseUrl}/posts`)
//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getDataUsers = async() => {
//     try {
//         const response = await fetch(`${baseUrl}/users`)
//         // this is a test to show that both fetch will wait for each other
//         // await new Promise((resolve, reject) => {
//         //     setTimeout(resolve, 3000)
//         // })
//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default async function FetchingPattern(){

//     const resPosts = await getDataPosts()
//     const resUsers = await getDataUsers()

//     return(
//         <>
//             <h3>
//                 parallel data fetching
//             </h3>
//             <h5>
//                 {JSON.stringify(resPosts).slice(0, 100)}
//             </h5>
//             <h5>
//                 {JSON.stringify(resUsers).slice(0, 100)}
//             </h5>
//         </>
//     )
// }

// Sequential Fetching
const getDataPosts = async() => {
    try {
        const response = await fetch(`${baseUrl}/posts`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const getDataUsers = async() => {
    try {
        const response = await fetch(`${baseUrl}/users`)
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 3000)
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const ComponentUsers = async() => {
    const resUsers = await getDataUsers()

    return(
        <h5>
            {JSON.stringify(resUsers).slice(0, 100)}
        </h5>
    )
}

export default async function FetchingPattern(){

    const resPosts = await getDataPosts()

    return(
        <>
            <h3>
                parallel data fetching
            </h3>
            <h5>
                {JSON.stringify(resPosts).slice(0, 100)}
            </h5>
            <Suspense fallback={<h3>Loading</h3>}>
                <ComponentUsers />
            </Suspense>
        </>
    )
}