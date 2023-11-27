export default function Products({params}) {
    return(
        <>
            <h1>
                Product Page
            </h1>
            <h5>
                {params.slug}
            </h5>
        </>
    )
}