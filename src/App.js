import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [price, setPrice] = useState("");
  const [soldPrices, setSoldPrices] = useState([]);
  const [totalSoldPrice, setTotalSoldPrice] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const calculate = () => {
    const enteredPrice = parseFloat(price);

    if (enteredPrice <= 100) {
      setErrorMessage(
        "The Sale Price field must be greater than or equal to 100."
      );
    } else if (enteredPrice >= 300) {
      setErrorMessage(
        "The Sale Price field must be less than or equal to 300."
      );
    } else {
      setSoldPrices([...soldPrices, enteredPrice]);
      setTotalSoldPrice(totalSoldPrice + enteredPrice);
      setTotalProfit(totalProfit + (enteredPrice - 100));
      setErrorMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Task Three</h2>
      <p>
        Storing input textbox value into an array, displaying that array list,
        then calculating total sale price &amp; total profit using Javascript
      </p>
      <p>Product Original Price: </p>
      <label htmlFor="input">Sale Price * </label>
      <br />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={calculate}>Submit</button>
      <h4>Output Result: </h4>
      <h5>Sold Price List</h5>
      <ul>
        {soldPrices.map((soldPrice, index) => (
          <li key={index}>{soldPrice}</li>
        ))}
      </ul>
      <h5>Total Sold Price : </h5>
      <p>{totalSoldPrice}</p>
      <h5>Total Profit : </h5>
      <p>{totalProfit}</p>
    </div>
  );
};

export default App;
