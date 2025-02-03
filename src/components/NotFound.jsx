import { Link } from "react-router-dom";


function NotFound(){

    return(
        <>
        <h1>Oops!! Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
        </>
    )
}
export default NotFound;