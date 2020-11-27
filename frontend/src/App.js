import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

import { FaCaretDown } from 'react-icons/fa';
import NotFoundRoute from './components/NotFoundRoute';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Icecream Shop</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name}
                    <FaCaretDown />
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                  <Link to="/signin">Sign In</Link>
                )
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin {' '}<FaCaretDown /></Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
            <Route path="/signin" component={SigninScreen} exact></Route>
            <Route path="/register" component={RegisterScreen} exact></Route>
            <Route path="/shipping" component={ShippingAddressScreen} exact></Route>
            <Route path="/payment" component={PaymentMethodScreen} exact></Route>
            <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>
            <Route path="/order/:id" component={OrderScreen} exact></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen} exact></Route>
            <PrivateRoute path="/profile" component={ProfileScreen} exact></PrivateRoute>
            <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
            <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
            <AdminRoute path="/userlist" component={UserListScreen} exact></AdminRoute>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen} exact></AdminRoute>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route component={NotFoundRoute}></Route>
          </Switch>
        </main>
        <footer className="row center">
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
