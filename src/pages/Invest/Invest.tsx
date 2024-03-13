import React, { useRef, useState } from "react";
import SchemeDetails from "../../components/SchemeDetails/SchemeDetails";
import InvestButtons from "../../components/InvestButtons/InvestButtons";
import "./Invest.css";
import InvestHeader from "../../components/InvestHeader/InvestHeader";
import FundManager from "../../components/FundManager/FundManager";
import RiskAndRating from "../../components/RiskAndRating/RiskAndRating";
import SimilarFunds from "../../components/SimilarFunds/SimilarFunds";
import Overview from "../../components/Overview/Overview";
import CalculateReturns from "../../components/CalculateReturns/CalculateReturns";

function Invest() {
  const fundKey = "sixTwo";
  const [investButton, setInvestButton] = useState("Overview");
  const overviewRef = useRef(null);
  const schemeDetailsRef = useRef(null);
  function handleClick(data: string) {
    // setInvestButton(data);
    // switch (data) {
    //   case "Overview":
    //     overviewRef.current.scrollIntoView({ behavior: "smooth" });
    //     break;
    //   case "Scheme Details":
    //     schemeDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    //     break;
    // }
  }
  return (
    <div className="invest">
      <div className="invest-body">
        <div className="card-layout">
          <InvestHeader />
          <InvestButtons
            investButton={investButton}
            handleClick={handleClick}
          />
        </div>
        <div className="overview-section" ref={overviewRef}>
          <Overview fundKey={fundKey} />
          <CalculateReturns fundKey={fundKey} />
        </div>
        <SchemeDetails scrollRef={schemeDetailsRef} />
        <FundManager />
        <RiskAndRating />
        <SimilarFunds />
      </div>
      {/* <YourInvestmentPad /> */}
    </div>
  );
}

export default Invest;
