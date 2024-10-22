import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";

export default function OrderListScreen(props) {
    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;
    const orderDeleted = useSelector(state => state.orderDeleted);
    const {
        loading: loadingDeleted,
        error: errorDeleted,
        success: successDeleted
    } = orderDeleted;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ORDER_DELETE_RESET });
        dispatch(listOrders());
    }, [dispatch]);

    const deleteHandler = (order) => {
        if (window.confirm('Are you sure to delete')) {
            dispatch(deleteOrder(order._id));
        }
    }
    return (
        <div>
            <h1>Orders</h1>
            {loadingDeleted && <LoadingBox></LoadingBox>}
            {errorDeleted && <MessageBox variant="danger">{errorDeleted}</MessageBox>}
            {loading
                ? (<LoadingBox></LoadingBox>)
                : error
                    ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (<table className="table">
                        <thead>
                            <tr>
                                <th>ORDER ID</th>
                                <th>SHIPPING NAME</th>
                                <th>ORDER DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.shippingAddress.fullName}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>€{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="small"
                                            onClick={() => { props.history.push(`/order/${order._id}`) }}>
                                            Details
                                        </button>
                                        <button
                                            type="button"
                                            className="small"
                                            onClick={() => deleteHandler(order)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
        </div>
    )
}
