import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/home'; 
import Checkout from './components/RelatedProducts';
function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeLastFromCart = () => {
    setCart((prevCart) => prevCart.slice(0, -1));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setSelectedProduct={setSelectedProduct} />} />
          <Route path="/products/:productId" element={
            <ProductDetail
              addToCart={addToCart}
              removeLastFromCart={removeLastFromCart}
              product={selectedProduct}
            />
          } />
          <Route path="/checkout" element={
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                {/* Show ProductDetail only if a product is selected */}
                {selectedProduct && (
                  <ProductDetail
                    addToCart={addToCart}
                    removeLastFromCart={removeLastFromCart}
                    product={selectedProduct}
                  />
                )}
                <RelatedProducts />
              </div>
              <div className="lg:w-1/3">
                <ShoppingCart cart={cart} removeLastFromCart={removeLastFromCart} />
              </div>
            </div>
          } />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
