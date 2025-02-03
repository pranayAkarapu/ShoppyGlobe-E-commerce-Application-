import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import "../CSS-components/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

/**
 * Header Component - Displays the navigation bar with links to Home and Cart.
 * Uses Redux to get the number of items in the cart.
*/

function Header(){

    // Getting the number of cart items from Redux store
    const cartItems = useSelector((state)=> state.cart.items);

    return(
        <header className="header">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>({cartItems.length})</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header;