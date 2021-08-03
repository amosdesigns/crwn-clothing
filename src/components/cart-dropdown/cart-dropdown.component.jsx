import React from "react";
import CustomButton from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <section className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton type="">Goto Checkout</CustomButton>
  </section>
);

export default CartDropdown;
