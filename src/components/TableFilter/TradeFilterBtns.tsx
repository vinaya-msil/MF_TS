import React from "react";
import "./TradeFilter.css";

interface TradeFilterBtnsProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TradeFilterBtns: React.FC<TradeFilterBtnsProps> = ({
  category,
  setCategory,
}) => {
  const btns = [
    "Top Rated",
    "High Returns",
    "Tax Saving",
    "Low Risk",
    "Sector Bets",
    "Diversified",
  ];

  return (
    <div className="trade-filter-buttons">
      {btns.map((item, index) => {
        if (category === item) {
          return (
            <button key={index} className="selected-button default">
              {item}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="buttons default"
              onClick={() => {
                setCategory(item);
              }}
            >
              {item}
            </button>
          );
        }
      })}
    </div>
  );
};

export default TradeFilterBtns;
