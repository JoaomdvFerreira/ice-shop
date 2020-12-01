import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { externalSignin } from '../actions/userActions';

export default function FacebookSignin() {
    const dispatch = useDispatch();

    const componentClicked = (res) => {
        const token = res.tokenId;

        if (token) {
            const name = res.profileObj.name;
            const email = res.profileObj.email;
            dispatch(externalSignin(name, email, token));
        }
    }

    const responseFacebook = (res) => {
        alert("to be completed");
    }
    return (
        <>
            <FacebookLogin
                appId="2871498439750626"
                fields="name,email"
                onClick={() => componentClicked}
                callback={responseFacebook}
            />
        </>
    )
}
