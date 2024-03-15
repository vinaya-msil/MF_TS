import React from "react";
import "./InvestButtons.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function InvestButtons({
  handleClick,
}: {
  handleClick: (data: string)=>void;
}) {
  const investBtns = [
    "Overview",
    "Scheme Details",
    "Fund Holdings",
    "Peer Comparison",
  ];
  const { investButton } = useSelector(
    (state: RootState) => state.investButton
  );
  return (
    <div className="invest-filter-buttons">
      {investBtns.map((item, index) => {
        if (item === investButton) {
          return (
            <button
              key={index}
              className="selected-invest-button invest-button"
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="invest-button"
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </button>
          );
        }
      })}
    </div>
  );
}

export default InvestButtons;
