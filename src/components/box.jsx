import React, { useId } from "react";

function Box({
  label = "From",
  amount,
  OnAmountChange,
  OnCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`backdrop-blur-sm bg-white/10 border border-white/30 p-5 rounded-xl ${className}`}
    >
      <div className="bg-white p-4 rounded-lg text-sm flex gap-4 items-start shadow-lg w-[400px] max-w-full">
        <div className="flex-2 text-left">
          <label htmlFor={id} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            type="number"
            id={id}
            className="outline-none w-full bg-transparent py-1.5 px-2 border rounded-md text-black"
            placeholder="0.00"
            disabled={amountDisabled}
            value={amount === 0 ? "" : amount}
            onChange={(e) =>
              OnAmountChange && OnAmountChange(Number(e.target.value))
            }
          />
        </div>

        {/* Currency select */}
        <div className="flex-1 text-right">
          <p className="text-black/40 mb-2">Currency Type</p>
          <select
            className="outline-none w-full bg-transparent py-1.5 px-2 border rounded-md text-black"
            disabled={currencyDisabled}
            value={selectedCurrency}
            onChange={(e) =>
              OnCurrencyChange && OnCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Box;
