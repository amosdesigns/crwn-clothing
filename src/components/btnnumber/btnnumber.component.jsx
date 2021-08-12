import React, { useState } from "react";
import { connect } from "react-redux";
import "./btnnumber.styles.scss";

const BtnNumber = ({ itemCount }) => {
  const [count, setCount] = useState(itemCount);

  return (
    <span className="btn-number">
      <div>
        <i
          className="fas fa-chevron-square-down"
          onClick={count > 1 ? () => setCount(count - 1) : null}
        ></i>
      </div>

      <input type="text" id="number" value={count} readOnly />
      <div>
        <i
          className="fas fa-chevron-square-up"
          onClick={count < 10 ? () => setCount(count + 1) : null}
        ></i>
      </div>
    </span>
  );
};


const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(BtnNumber);
