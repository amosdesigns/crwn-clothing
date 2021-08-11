import React, { useState } from "react";
import "./btnnumber.styles.scss";

const BtnNumber = () => {
  const [count, setCount] = useState(0);

  return (
    <span className="btn-number">
      <div>
        <i
          className="fas fa-chevron-square-down"
          onClick={count >= 1 ? () => setCount(count - 1) : null}
        ></i>
      </div>

      <input type="text" id="number" value={count} readOnly />
      <div>
        <i
          className="fas fa-chevron-square-up"
          onClick={count <= 9 ? () => setCount(count + 1) : null}
        ></i>
      </div>
    </span>
  );
};

export default BtnNumber;
