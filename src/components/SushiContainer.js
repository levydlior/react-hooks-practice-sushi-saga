import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, money, onMoneyCharge }) {
  const [sushiOnPage, setsuShiOnPage] = useState(0);
  const [sushiToCut, setsuSushiToCut] = useState(4);

  const slicedSushis = sushis.slice(sushiOnPage, sushiToCut);

  const sushiListItem = slicedSushis.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} money={money} onMoneyCharge={onMoneyCharge} />;
  });

  function handleShowMore (){
    setsuShiOnPage(sushiOnPage => sushiOnPage + 4)
    setsuSushiToCut(sushiToCut => sushiToCut + 4)
  }



  return (
    <div className="belt">
      {sushiListItem}
      <MoreButton onShowMoreClick={handleShowMore}/>
    </div>
  );
}

export default SushiContainer;
