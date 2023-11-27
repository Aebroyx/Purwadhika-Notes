import ShirtCard from './../../assets/shirtcard.png'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return(
        <>
            <Link to={'/product'}>
            <div className=''>
                <div className="card bg-base-100 shadow-xl w-full">
                    <figure>
                        <Link to={`/detail-product/${props.data.id}`}>
                            <img src={ShirtCard} alt="shirt card" />
                        </Link>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.data.name}</h2>
                        <p>Rp. {props.data.price.toLocaleString('id-ID')}</p>
                        <p>{props.data.size.map((item, index) => {
                            return(
                                ' ' + item
                            )
                        })}</p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}