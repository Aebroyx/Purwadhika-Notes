import Navbar from "../../Components/navbar"
// usually made with regular function since u can export it easily like this:
export default function Home() {
    return(
        <>
            <Navbar />
            <h1>
                Home Page
             </h1>
        </>
    )
}


// If we use function expression the the export default needs to be at the bottom of the function
/*
const Home = () => {
    return (
        <>
            <h1>
                Home Page
            </h1>
        </>
    )
}

export default Home
*/
