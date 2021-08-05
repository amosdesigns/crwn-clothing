import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import CartItem from "../cart-Item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => (
  <section className="cart-dropdown">
    <div className="cart-items" >
    {
      cartItems.map(cartItems => (
        <CartItem key={cartItems.id} item={cartItems}/>
      ))
    }
    </div>
    <CustomButton type="">Goto Checkout</CustomButton>
  </section>
);
const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown);
