// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Details for Product {id}</p>
    </div>
  );
}

export default ProductDetail;
