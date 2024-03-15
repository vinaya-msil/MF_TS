import React, { useState } from "react";
import "./YourInvestmentPad.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { changeInvestPad } from "../../redux/slice/investmentPadSlice";

export default function YourInvestmentPad() {
  const { investPad } = useSelector((state: RootState) => state.investPad);
  const dispatch = useDispatch();
  const investPadBtns = ["SIP", "ONE-TIME"];
  const handleNavSip = (data: string) => {
    dispatch(changeInvestPad(data));
  };
  return (
    <div className="investment-main">
      <section className="head-section">
        <h1 className="invest-head">Your Investment Pad</h1>
      </section>
      <div className="search-section">
        <p className="smallDetails invest-smallDetails">Clients</p>
        <input
          className="invest-search"
          type="text"
          placeholder="Search Client Name/Code"
        ></input>
        <button className="add-button" id="addInvesstmentButton">
          + ADD
        </button>
      </div>
      <div className="nav-body">
        <div className="nav-for-sip-onetime">
          {investPadBtns.map((item, index) => {
            if (item === investPad) {
              return (
                <button
                  key={index}
                  className="selected-invest-pad similar-invest"
                  onClick={() => {
                    handleNavSip(item);
                  }}
                >
                  {item}
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  className="invest-pad similar-invest"
                  onClick={() => {
                    handleNavSip(item);
                  }}
                >
                  {item}
                </button>
              );
            }
          })}
        </div>
        <div className="invest-amount-body">
          <div className="invest-amount-inner">
            <div className="invest-amount">
              <p>Enter Amount</p>
              <input className="sip-input" type="text" placeholder="₹0"></input>
            </div>
            <div className="select-amount-buttons">
                <button>₹5,000</button>
                <button>₹10,000</button>
                <button>₹15,000</button>
            </div>
          </div>
        </div>
      </div>
      <div className="first-order-radio">
        <p>First Order Today</p>
        <input type="radio" value={"Yes"} id="radio-yes"/>
        <label>Yes</label>
        <input type="radio" value={"No"} id="radio-no"/>
        <label>No</label>
      </div>
    </div>
  );
}
