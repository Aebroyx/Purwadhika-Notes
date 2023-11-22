import ShirtCard from './../../assets/shirtcard.png'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return(
        <>
            <Link to={'/product'}>
            <div className=''>
                <div className="card bg-base-100 shadow-xl w-full">
                    <figure><img src={ShirtCard} alt="shirt card" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.data.name}</h2>
                        <p>Rp. 149.000</p>
                        <p>S M L XL XXL</p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}