import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import "../CSS-components/cart.css"


/**
 * Cart Component - Displays the list of items added to the cart.
 * Uses Redux to fetch cart items from the global state.
*/

function Cart(){
    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    return(
        <div className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ?
        <p className="empty-cart">No Items in the Cart</p> :
        cartItems.map((item) => (
            <CartItem className="cart-items"
            key = {item.id}
            itemData={item}
            />
        ))
        }
        </div>
    )
}

export default Cart;