import React from "react";
import CommentList from "../../components/commentlist/comment-list.component";
import ProductDetail from "../../components/productdetail/productdetail.component";
import ProductCarousel from "../../components/productcarousel/product-carousel.component";
import "./product.styles.scss";

const Product = () => (
  <div className="product-page">
    <ProductDetail />
    <ProductCarousel />
    <CommentList />
  </div>
);

export default Product;
