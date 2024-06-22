import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item._id === product._id);
      if (existingProduct) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item._id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
      <Routes>
        <Route path="/cart"   element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>}  />
      </Routes>
    </Router>
  );
}

export default App;