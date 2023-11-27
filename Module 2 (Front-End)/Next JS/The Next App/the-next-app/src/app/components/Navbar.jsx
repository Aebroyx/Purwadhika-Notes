import Link from "next/link"

// dummy database for example
const dbExample = [
    {id:1, name: 't-shirt'},
    {id:2, name: 'hoodie'}
]

export default function Navbar(){
    return(
        <>
            <nav className="flex bg-green-500 gap-5">
                <Link href='/'>
                    <span>
                        Home
                    </span>
                </Link>
                <Link href='/profile'>
                    <span>
                        Profile
                    </span>
                </Link>
                {
                    dbExample.map(item => {
                        return(
                            <Link href={`/products/${item.name}`}>
                                <span>
                                    {item.name}
                                </span>
                            </Link>
                        )
                    })
                }
            </nav>
        </>
    )
}