import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { product, handleAddToCart } = props;
  console.log("product", product);

  const { name, img, seller, price, ratings, shipping } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-name">
          <small>Price:{price}</small>
        </p>
        <p className="product-name">
          <small>Seller:{seller}</small>
        </p>
        <p className="product-name">
          <small>Shipping:{shipping}</small>
        </p>
        <p className="product-name">
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="button-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
