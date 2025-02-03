import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import "../CSS-components/productItem.css";

/**
 * ProductItem Component - Displays a single product with details.
 * Allows users to view details or add the product to the cart.
 */

function ProductItem(props){
    const dispatch = useDispatch();
    return(
        <div className="productItem">
            <img src={props.product.thumbnail} alt="" className="image"/>
            <h3 className="title">{props.product.title}</h3>
            <p className="price">{props.product.price}</p>
            <Link to={`/product/${props.product.id}`} className="link">View Details</Link>
            <button onClick={()=> dispatch(addToCart(props.product))} className="button">Add to Cart</button>
        </div>
    )
}

export default ProductItem;