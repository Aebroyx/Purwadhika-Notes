import Link from "next/link"


export default async function Portofolio() {
    
    async function getData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            if(!response.ok) throw ("error")

            return response.json()
            
        } catch (error) {
            return(error)
        }
    }

    const data = await getData()

    return(
        <>
            {
                data.map((item, index) => {
                    return(
                    <Link href={`/portofolio/${item.id}`}>
                        <div className="flex justify-center items-center w-full border border-solid">
                            <h3>
                                Name: {item.name}
                            </h3>
                        </div>
                    </Link>
                    )
                })
            }
        </>
    )
}