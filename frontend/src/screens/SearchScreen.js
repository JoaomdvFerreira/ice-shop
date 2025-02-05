import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
export default function SearchScreen(props) {
    const { name = 'all' } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(searchProducts({ name: name !== 'all' ? name : '' }))

    }, [dispatch, name])
    return (
        <div>
            <div className="row">
                {
                    loading
                        ? <LoadingBox></LoadingBox>
                        : error
                            ? <MessageBox variant="danger">{error}</MessageBox>
                            :
                            <div>
                                {products.length} Results
                        </div>
                }
            </div>
            <div className="row top">
                <div className="col-1">
                    <h3>Department</h3>
                    <ul>
                        <li>Category 1</li>
                    </ul>
                </div>
                <div className="col-3">
                    {
                        loading
                            ? <LoadingBox></LoadingBox>
                            : error
                                ? <MessageBox variant="danger">{error}</MessageBox>
                                :
                                <>
                                    {products.length === 0 && (<MessageBox variant="info">No Products Found</MessageBox>)}
                                    <div className="row center">
                                        {products.map((product) => (
                                            <Product key={product._id} product={product}></Product>
                                        ))}
                                    </div>
                                </>
                    }
                </div>
            </div>
        </div>
    )
}
