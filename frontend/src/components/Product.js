import Rating from './Rating';
import { Link } from 'react-router-dom';
export default function Product(props) {
    const { product } = props;
    return (
        <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
                <img width={300} height={300} className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2 style={{ margin: '0px' }}>{product.name}</h2>
                </a>
                <p style={{ marginTop: '0px' }}>{product.description}</p>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className="price">{product.price}€</div>
            </div>
        </div>
    )
}
