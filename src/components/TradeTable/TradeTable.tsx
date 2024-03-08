import React from "react";
import "./TradeTable.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface DataItem {
  icon: string;
  investmentType: string;
  subCategoryName: string;
  fundName: string;
  rating: string;
  reInvestmentPlan: string;
  oneYrReturn: string;
  threeYrReturn: string;
  fiveYrReturn: string;
  currentNav: string;
  minSipInvestment: string;
}

interface TradeTableProps {
  filteredData: DataItem[];
}

const TradeTable: React.FC<TradeTableProps> = ({ filteredData }) => {
  return (
    <div className="table-wrapper">
      <table className="trade-table">
        <thead>
          <tr>
            <th>Fund</th>
            <th>1Y Returns</th>
            <th>3Y Returns</th>
            <th>5Y Returns</th>
            <th>Current Nav</th>
            <th>Min SIP Investment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.fundName}>
              <td>
                <div className="fund-body">
                  <img src={item.icon} alt="icon" width={50} />
                  <div className="fund-name">
                    <div className="fund-first-row">
                      <span>{item.investmentType}</span>
                      <span>.</span>
                      <span> {item.subCategoryName}</span>
                    </div>
                    <div className="fund-second-row">{item.fundName}</div>
                    <div className="fund-last-row">
                      <span className="span-rating">
                        {item.rating}
                        <img
                          src="./assets/star-rate-svgrepo-com.svg"
                          alt="rating"
                          width={10}
                        />
                      </span>
                      <span className="span-growth">
                        {item.reInvestmentPlan}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.oneYrReturn}</td>
              <td>{item.threeYrReturn}</td>
              <td>{item.fiveYrReturn}</td>
              <td>{item.currentNav}</td>
              <td>{item.minSipInvestment}</td>
              <td>
                <Link to={"/invest"}>
                  <Button />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeTable;
