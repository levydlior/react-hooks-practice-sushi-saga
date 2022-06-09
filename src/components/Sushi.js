import React, { useState } from "react";

function Sushi({ sushi, money, onMoneyCharge }) {
  const { img_url, name, price } = sushi;

  const [eatenSushi, setEatnSushi] = useState(false);

  function canIEatThis() {
    if (money >= price) {
      setEatnSushi(true);
      onMoneyCharge(price, name);
    } else {
      return null;
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={canIEatThis}>
        {eatenSushi ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
