import React from "react";
import "./TradeFilter.css";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/slice/CategorySlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface TradeFilterBtnsProps {}

const TradeFilterBtns: React.FC<TradeFilterBtnsProps> = () => {
  const btns = [
    "Top Rated",
    "High Returns",
    "Tax Saving",
    "Low Risk",
    "Sector Bets",
    "Diversified",
  ];
  const { category } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  const handleChange = (category: string) => {
    dispatch(changeCategory(category));
  };
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
                handleChange(item);
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
