import { useState } from "react";
import React from "react";
import "./App.css";

import useCurrencyInfo from "./hooks/useCurrencyinfo.js";
import {Box} from "./components/index.js"; 

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);
  console.log("currencyinfo", currencyinfo);
  const options = Object.keys(currencyinfo);

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to]);
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(0);
    
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg")`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-black/20 relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-2">
            <Box
              label="From"
              amount={amount}
              currencyOptions={options}
              OnCurrencyChange={(currency) => setFrom(currency)}
              OnAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="w-full flex justify-center my-2">
            <button
              type="button"
              onClick={handleSwap}
              className="absolute z-40 top-37 bg-white text-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
              title="Swap currencies"
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <Box
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              OnCurrencyChange={(currency) => setTo(currency)}
              OnAmountChange={(amount) => setConvertedAmount(amount)}
              selectedCurrency={to}
              amountDisabled={true}
            />
          </div>

          <div className="w-full text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
