import React from "react";
import "./RiskAndRating.css";
import PieCharts from "../PieChart/PieCharts";

const RiskAndRating: React.FC = () => {
  return (
    <div className="risk-rating">
      <h4>Risk And Ratings</h4>
      <div className="risk-rating-card">
        <div className="risk-rating-content">
          <div className="risk-rating-img">
            <PieCharts />
          </div>
          <p>
            Your Investment will be at <span>Very High</span> risk
          </p>
        </div>
        <div className="risk-rating-part">
          <div className="rating-name-part">
            <p>Angel One</p>
            <p>Crisil</p>
            <p>Morningstar</p>
            <p>Value Research</p>
          </div>
          <div className="rating-part">
            <p className="risk-star">
              4
              <img
                src="./assets/star-rate-svgrepo-com.svg"
                alt="rating"
                width={10}
              />
            </p>
            <p className="risk-star">
              5
              <img
                src="./assets/star-rate-svgrepo-com.svg"
                alt="rating"
                width={10}
              />
            </p>
            <p className="risk-star">
              4
              <img
                src="./assets/star-rate-svgrepo-com.svg"
                alt="rating"
                width={10}
              />
            </p>
            <p className="risk-star">
              4
              <img
                src="./assets/star-rate-svgrepo-com.svg"
                alt="rating"
                width={10}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAndRating;
