import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="product">
      <img className='product-image' src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
}

export default Product;
