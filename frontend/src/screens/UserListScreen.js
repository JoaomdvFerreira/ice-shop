import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function UserListScreen(props) {
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userDeleted = useSelector((state) => state.userDelete);
    const {
        loading: loadingDeleted,
        error: errorDeleted,
        success: successDeleted } = userDeleted;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch, successDeleted]);

    const deleteHandler = (user) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteUser(user._id));
        }
    }
    return (
        <div>
            <h1>Users</h1>
            {loadingDeleted && <LoadingBox></LoadingBox>}
            {errorDeleted && <MessageBox variant="danger">{errorDeleted}</MessageBox>}
            {successDeleted && <MessageBox variant="success">User Deleted Successfully</MessageBox>}
            {
                loading
                    ? (<LoadingBox></LoadingBox>)
                    : error
                        ? <MessageBox variant="danger">{error}</MessageBox>
                        : (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>IS ADMIN</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="small"
                                                    onClick={() => props.history.push(`/user/${user._id}/edit`)}>Edit</button>
                                                <button
                                                    type="button"
                                                    className="small"
                                                    onClick={() => deleteHandler(user)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
        </div>
    );
}
