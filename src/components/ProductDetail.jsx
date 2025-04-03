import useFetch from "../utils/useFetch"
import { Navigate, replace, useParams } from "react-router-dom"
import "../CSS-components/productdetail.css"
import { useNavigate } from "react-router-dom";

/**
 * ProductDetail Component - Fetches and displays details of a specific product.
 * Uses the id from the URL to retrieve product data.
*/

function ProductDetail(){
    // Get product ID from the URL
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: product, error, loading} = useFetch(`https://dummyjson.com/products/${id}`);

    // Show loading state while fetching data
    if(loading) return <p>Loading...</p>;

    // Show error message if fetching fails
    if(error || !product || product.message){
        navigate("/NotFound", {replace:true})
        return null;
    }

    // Handle case where no product is found

    return(
        <div className="product-detail">
            <img src={product.thumbnail} alt="" className="product-image" />
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <h2 className="product-brand">{product.brand}</h2>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-rating">Rating: {product.rating}/5</p>
            </div>
        </div>
    )
}

export default ProductDetail