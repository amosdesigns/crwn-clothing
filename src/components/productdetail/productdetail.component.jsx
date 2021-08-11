import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import { addItem } from "../../redux/cart/cart.actions";
import BtnNumber from "../btnnumber/btnnumber.component";
import "./productdetail.styles.scss";

const ProductDetail = ({ item, addItem }) => (
  <section className="product-detail">
    <div
      className="mainImage"
      style={{
        backgroundImage: "url('../images/shop-img/hats/blue-beanie.png')",
      }}
    ></div>
    <aside className="writtenInfo">
      <section className="titlePrice">
        <h1 className="name">Alpine Blue </h1>
        <span className="price">$29.99</span>
        <span>Model: ALPB | Style: 29105</span>
      </section>
      <div className="product-information">
        <section className="btnGroup">
          <BtnNumber />
          <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
        </section>
        <h2>Product Information</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          <span className="label">Shipping:</span>
          Ships within 1 weeks
        </p>
        <p>
          <span className="label">This item ships as:</span> Parcel Free
          delivery
        </p>
        <ul>
          <li>
            Made from soft 100% recycled polyester yarn that’s itch-free and
            comfortable next to skin; it provides a snug fit that loosens with
            wear
          </li>
          <li>The rib-knit cuff traps heat and stays put</li>

          <li>
            Fully fashioned construction provides an all-day, low-profile fit
          </li>

          <li>
            Fair Trade Certified™ sewn, which means the people who made it
            earned a premium for their labor
          </li>
        </ul>
      </div>
    </aside>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductDetail);
