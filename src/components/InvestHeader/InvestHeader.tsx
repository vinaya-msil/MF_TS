import React from "react";
import "./InvestHeader.css";
import { Link } from "react-router-dom";
function InvestHeader() {
  return (
    <div className="invest-header">
      <Link to={"/"}>
          <span className="material-symbols-outlined invest-header-btn">arrow_back_ios</span>
      </Link>
      <h4>Mutual Funds Details</h4>
    </div>
  );
}

export default InvestHeader;
