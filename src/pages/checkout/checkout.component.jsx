import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const Checkout = ({ cartItems, total }) => {
 
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems, total } }) => ({
  cartItems,
  total
});
export default connect(mapStateToProps)(Checkout);
