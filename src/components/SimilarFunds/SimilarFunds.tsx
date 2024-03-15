import React from "react";
import "./SimilarFunds.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function SimilarFunds() {
  const { similarData } = useSelector((state: RootState) => state.similar);
  return (
    <div className="similar-funds">
      <h4>Similar Funds</h4>
      <div className="similar-fund-body">
        <table className="similar-fund-table">
          <tbody>
              <tr>
                <td>
                  <div className="basic-info-data ">
                    <p>Fund Name</p>
                    <button className="info-btn">
                      3Y RETURN
                      <img src="./assets/up-down.png" alt="filter" width={15}></img>
                    </button>
                  </div>
                </td>
              </tr>
          </tbody>

          {similarData.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <div className="basic-info-data">
                      <div className="bank-name">
                        <img src={item.icon} width={40}></img>
                        <p>{item.fundName}</p>
                      </div>
                      <p className="left">{item.threeYrReturn}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default SimilarFunds;
