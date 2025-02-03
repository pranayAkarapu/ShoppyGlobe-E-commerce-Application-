import { useState } from "react"
import useFetch from "../utils/useFetch"
import ProductItem from "./ProductItem";
import "../CSS-components/productlist.css"

/**
 * ProductList Component - Fetches and displays a list of products.
 * Includes a search functionality to filter products by title.
 */

function ProductList(){
    // Fetch product data from API
    const {data: products, loading, error } = useFetch('https://dummyjson.com/products')

    // State to manage search input
    const [searchInput, setsearchInput] = useState("");

    // Handle loading and error states
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    if(!products || !products.products) return <p>No Products Found...</p>

    // Filter products based on search input
    const filteredProducts = products.products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    )

    return(
        <div className="product-list">
            <div className="search-container">
                <input type="text" className="search-bar" onChange={(e)=> setsearchInput(e.target.value)}/>
                <button className="search-btn" onClick={() => setsearchInput(searchInput)}>Search</button>
                <button className="clear-btn" onClick={()=> setsearchInput('')}>Clear</button>
            </div>
            <div className="product-items">
                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList