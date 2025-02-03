import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../utils/cartSlice";
import "../CSS-components/cartitem.css";

//CartItem Component - Displays individual cart item with quantity controls and remove functionality.

function CartItem (props){
    const dispatch = useDispatch();

    // Increase the quantity of the item in the cart
    function handleIncrease(){
        dispatch(updateQuantity({id:props.itemData.id, quantity: props.itemData.quantity + 1}));
    }

    // Decrease the quantity of the item in the cart (minimum quantity is 1)
    function handleDecrease(){
        if(props.itemData.quantity > 1){
            dispatch(updateQuantity({id:props.itemData.id, quantity: props.itemData.quantity - 1}));
        }
    }

    // Remove the item completely from the cart
    function handleRemove(){
        dispatch(removeFromCart(props.itemData.id));
    }

    return(
        <div className="cart-item">
            <img src={props.itemData.thumbnail} alt="" className="cart-item-image" />
            <div className="cart-item-info">
                <h1 className="cart-item-title">{props.itemData.title}</h1>
                <p className="cart-item-price">Price: ${props.itemData.price}</p>
                <div className="cart-item-quantity">
                    <button onClick={handleIncrease} className="quantity-button">+</button>
                    <span>{props.itemData.quantity}</span>
                    <button onClick={handleDecrease} className="quantity-button">-</button>
                </div>
                <button onClick={handleRemove} className="remove-button">Remove</button>
            </div>
        </div>
    )
}
export default CartItem;