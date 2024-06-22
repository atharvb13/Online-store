import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
        <h2>Products</h2>
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          "No products found"
        )}
      </div>
  );
};

export default Home;