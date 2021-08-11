import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import CartItem from "../cart-Item/cart-item.component";
import { withRouter } from 'react-router-dom';
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history}) => (
  <section className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItems) => (
          <CartItem key={cartItems.id} item={cartItems} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton type="" onClick={()=>history.push('/checkout')}>Goto Checkout</CustomButton>
  </section>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
