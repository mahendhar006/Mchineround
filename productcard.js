import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <div>
        {Array(product.rating)
          .fill()
          .map((_, index) => (
            <span key={index}>&#11088;</span>
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
