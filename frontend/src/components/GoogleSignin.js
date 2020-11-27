import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { externalSignin } from '../actions/userActions';

const clientId = "708675928137-9hhgho2bk56gl1u86f6cvfad6fb4vkr5.apps.googleusercontent.com";
export default function GoogleSignin() {
    const dispatch = useDispatch();

    const successHandler = (res) => {
        const token = res.tokenId;

        if (token) {
            const name = res.profileObj.name;
            const email = res.profileObj.email;
            dispatch(externalSignin(name, email, token));
        }
    }

    const failureHandler = (res) => {
        alert("Login Failed -> response:", res);
    }

    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={successHandler}
                onFailure={failureHandler}
                cookiePolicy={"single_host_origin"}
                signedIn={true}
            />
        </>
    )
}
