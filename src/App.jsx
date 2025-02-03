import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux"
import store from "./utils/store";
import Header from "./components/Header";
import { lazy, Suspense } from "react";

/**
 * App Component - Main entry point of the application
 * Uses Redux for state management and React Router for navigation.
*/

// Lazy load Components
const ProductList = lazy(()=> import("./components/ProductList"));
const Cart = lazy(()=> import("./components/Cart"));
const ProductDetail = lazy(()=> import("./components/ProductDetail"));
const NotFound = lazy(()=> import("./components/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Header component - contains navigation links */}
        <Header/>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* Home Page - Displays product list */}
            <Route path="/" element={<ProductList />}/>

            {/* Cart Page - Displays cart items */}
            <Route path="/cart" element={<Cart />}/>

            {/* Product Detail Page - Shows details for a specific product */}
            <Route path="/product/:id" element={<ProductDetail />}/>
          
            {/* 404 Page - Handles unknown routes */}
            <Route path="*" element={<NotFound />}/>
        </Routes>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
