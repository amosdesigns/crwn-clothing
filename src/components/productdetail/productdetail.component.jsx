import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import BtnNumber from "../btnnumber/btnnumber.component";
import "./productdetail.styles.scss";

const hat = {
  id: 1,
  name: "Alpine Blue",
  imageUrl: "../images/shop-img/hats/alpine-blue.png",
  price: 25.95,
  stockLevel: 200,
  salePrice: 23.95,
  description: "MG Ladies Fashion Wide Alpine Blue Hat - Brown",
  lgDescription:
    "MG Ladies Fashion Alpine Blue hat  - Brown. An elegant broad-brim sun hat is woven from airy lightweight straw for a look that's both graceful and chic.",
  model: "BBHMG",
  brand: "MG",
  size: ["s", "m", "l", "xl", "xxl"],
  color: ["borwn"],
  quantity: 6,
  shippingTime: "1 week",
  details: [
    "Made from soft 100% recycled polyester yarn that’s itch-free and comfortable next to skin; it provides a snug fit that loosens with wear",
    "The rib-knit cuff traps heat and stays put Fully fashioned construction provides an all-day, low-profile fit",
    "Fair Trade Certified™ sewn, which means the people who made it earned a premium for their labor",
  ],
};

const ProductDetail = ({ cartItems, total }) => {
  cartItems = hat;
  console.log(cartItems);
  return (
    <section className="product-detail">
      <div
        className="mainImage"
        style={{
          backgroundImage: "url('../images/shop-img/hats/blue-beanie.png')",
        }}
      ></div>
      <aside className="writtenInfo">
        <section className="titlePrice">
          <h1 className="name">{cartItems.name}</h1>
          <span className="price">${cartItems.price}</span>
          <span>
            Brand: {cartItems.brand} | Style: {cartItems.model}
          </span>
          <a href="#comments">
            Goto Customer Reviews <i class="fas fa-level-down-alt"></i>
          </a>
        </section>
        <h3 className="reviewsRatings">5 Stars Based on 6 Reviews</h3>
        <div className="product-information">
          <section className="btnGroup">
            <BtnNumber qty={cartItems.quantity} />
            <CustomButton onClick={() => addItem(cartItems)}>
              Add to Cart
            </CustomButton>
          </section>

          <h2>Product Information</h2>
          <p>{cartItems.lgDescription}</p>
          <p>
            <span className="label">Shipping:</span>
            Ships within {cartItems.shippingTime}
          </p>
          <p>
            <span className="label">This item ships as:</span> Parcel Free
            delivery
          </p>
          <ul>
            {cartItems.details.map((item, i)=>(<li key={i}>{item}</li>))}
          </ul>
        </div>
      </aside>
    </section>
  );
};
// const mapDispatchToProps = (dispatch) => ({
// addItem: (item) => dispatch(addItem(item)),
// });
//
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(ProductDetail);
