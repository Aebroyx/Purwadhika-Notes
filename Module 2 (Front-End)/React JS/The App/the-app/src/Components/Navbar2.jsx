import { Link } from "react-router-dom"

export default function Navbar2() {
    return (
        <>
            <div className="bg-violet-500">
                <span>
                    Class Component
                </span>
                <div className="flex gap-5">
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <span>
                        <Link to='/profile2'>Profile</Link>
                    </span>
                    <span>
                        <Link to='/hooks'>Hooks</Link>
                    </span>
                </div>
            </div>
        </>
    )
}