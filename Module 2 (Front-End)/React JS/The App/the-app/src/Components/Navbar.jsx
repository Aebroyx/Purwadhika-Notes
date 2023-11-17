import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
    <nav class="bg-primary p-4">
        <div class="container mx-auto flex justify-between items-center">

            <a href="#" class="text-white text-lg font-bold">YourLogo</a>

            <div className='flex gap-5'>
            <Link to='/' className="text-white hover:text-stone-900">Home</Link>
            <div class="relative group">
                <button class="text-white hover:text-stone-900 focus:outline-none focus:text-gray-400">
                    All Pages
                </button>
                <ul class="absolute hidden pt-2 group-hover:block">
                    <li><Link to='/profile' class="block py-5">Profile</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    )
}