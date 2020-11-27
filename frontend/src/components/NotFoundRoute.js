import { Link } from "react-router-dom";

export default function NotFoundRoute() {
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>
        </div>
    )
}
