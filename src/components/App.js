import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setShushis] = useState([]);
  const [money, setMoney] = useState(40)
  const [emptyPlate, setEmptyPlate] = useState([])

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((arrayOfSushi) => setShushis(arrayOfSushi));
  }, []);

  function handleMoneyCharge(price, name){
    setMoney(money => money - price)
    const updatedEmptyPlates = [...emptyPlate, name]
    setEmptyPlate(updatedEmptyPlates)
  }



  return (
    <div className="app">
      <SushiContainer sushis={sushis} money={money} onMoneyCharge={handleMoneyCharge} />
      <Table money={money} emptyPlate={emptyPlate} />
    </div>
  );
}

export default App;
