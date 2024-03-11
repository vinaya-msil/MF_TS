import React from "react";
import "./InvestButtons.css";

interface InvestButtonsProps {
  investButton: string;
  setInvestButton: React.Dispatch<React.SetStateAction<string>>;
}

const InvestButtons: React.FC<InvestButtonsProps> = ({
  investButton,
  setInvestButton,
}) => {
  const investBtns: string[] = [
    "Overview",
    "Scheme Details",
    "Fund Holdings",
    "Peer Comparison",
  ];

  return (
    <div className="invest-filter-buttons">
      {investBtns.map((item, index) => {
        if (item === investButton) {
          return (
            <button key={index} className="selected-invest-button invest-button">
              {item}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="invest-button"
              onClick={() => {
                setInvestButton(item);
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

export default InvestButtons;
