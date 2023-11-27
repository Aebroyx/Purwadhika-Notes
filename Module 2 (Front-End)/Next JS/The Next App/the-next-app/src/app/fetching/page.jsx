import { urlAPI } from "./../../utils/urlAPI"

export default async function Fetching() {

    // cache: 'force-cache' ==> static side generation 
    // cache: 'no-store' ==> server side rendering
    // cache: {revalidate: 20} ==> ISR

    const response = await fetch(`${urlAPI}/products`, {method: 'GET', cache: 'no-store'})

    const data = await response.json()

    return(
        <>
            <h1 className="text-xl">
                Data Fetching
            </h1>
            <ol>
                {
                    data.map((item, index) => {
                        return(
                            <li key={index}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}