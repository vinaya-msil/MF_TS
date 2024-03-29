import React, { useRef, useState } from "react";
import SchemeDetails from "../../components/SchemeDetails/SchemeDetails";
import InvestButtons from "../../components/InvestButtons/InvestButtons";
import "./Invest.css";
import { useDispatch, useSelector } from "react-redux";
import InvestHeader from "../../components/InvestHeader/InvestHeader";
import FundManager from "../../components/FundManager/FundManager";
import RiskAndRating from "../../components/RiskAndRating/RiskAndRating";
import Overview from "../../components/Overview/Overview";
import CalculateReturns from "../../components/CalculateReturns/CalculateReturns";
import FundHoldings from "../../components/FundHoldings/FundHoldings";
import SimilarFunds from "../../components/SimilarFunds/SimilarFunds";
import YourInvestmentPad from "../../components/YourInvestmentPad/YourInvestmentPad";
import QuantFunds from "../../components/QuantFunds/QuantFunds";

function Invest() {
  const fundKey = "sixTwo";
  const dispatch = useDispatch();
  const overviewRef = useRef<HTMLDivElement>(null);
  const schemeRef = useRef<HTMLDivElement>(null);
  const fundRef = useRef<HTMLDivElement>(null);
  const peerRef = useRef<HTMLDivElement>(null);
  function handleClick(data: string) {
    // dispatch(changeInvestButton(data));
    switch (data) {
      case "Overview":
        overviewRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Scheme Details":
        schemeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Fund Holdings":
        fundRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Peer Comparison":
        peerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="invest">
      <div className="invest-body">
        <div className="card-layout">
          <InvestHeader />
          <InvestButtons handleClick={handleClick} />
        </div>
        <div className="overview-section" ref={overviewRef}>
          <Overview fundKey={fundKey} />
          <CalculateReturns fundKey={fundKey} />
        </div>
        <div ref={schemeRef}>
          <SchemeDetails />
        </div>
        <FundManager />
        <RiskAndRating />
        <div ref={fundRef}>
          <FundHoldings fundKey={fundKey} />
        </div>
        <div ref={peerRef}>
          <SimilarFunds />
        </div>
        <QuantFunds/>
      </div>
      <YourInvestmentPad />
    </div>
  );
}

export default Invest;
