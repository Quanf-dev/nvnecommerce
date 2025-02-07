import React, { useState, useEffect, useContext } from "react";
import useCart from "../../hooks/useCart";
import myContext from "../../context/myContext";

const AmountSelector = ({ amount, id }) => {
  const [internalAmount, setInternalAmount] = useState(amount);
  const { incrementCart, decrementCart } = useCart();
  const { product, setProduct } = useContext(myContext);

  const increaseAmount = () => {
    incrementCart(id);
    setInternalAmount(internalAmount + 1);
    setProduct((prev) => ({ ...prev, quantity: internalAmount + 1 }));
  };

  const decreaseAmount = () => {
    if (internalAmount > 1) {
      decrementCart(id);
      setInternalAmount(internalAmount - 1);
      setProduct((prev) => ({ ...prev, quantity: internalAmount - 1 }));
    }
  };

  return (
    <div className="w-[110px] max-w-sm relative">
      <div className="relative">
        <button
          onClick={decreaseAmount}
          className="absolute right-9 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
          </svg>
        </button>
        <input
          id="amountInput"
          type="number"
          value={internalAmount}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 mr-20 lg:pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          onClick={increaseAmount}
          className="absolute right-1 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AmountSelector;
