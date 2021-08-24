import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = ({ cartItems, total }) => {
  total = total.toFixed(2);
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <section className="total">
        <small className="test-warning">
          *****Please use the following test credit card for payments****
          <br />
          4242 4242 4242 4242 - Exp. 01/24 - CVV: 123 visa
          <br />
          5555 5555 5555 4444 - Exp. 1/24 - CVV: 987 Mastercard
        </small>
        <span>TOTAL: ${total}</span>
        <span className="buy">
          <StripeCheckoutButton price={total} />
        </span>
      </section>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(Checkout);
