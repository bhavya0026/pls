import React from "react";

const ProductCard = ({ image, title, price, sale }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        {sale && <span className="sale-tag">Sale</span>}
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">RS {price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
