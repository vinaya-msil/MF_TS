import { useSelector } from "react-redux";
import "./QuantFunds.css";
import { RootState } from "../../redux/store";

function QuantFunds() {
  const { quantFund } = useSelector((state: RootState) => state.quants);
  return (
    <div className="quant-funds">
      <h4>Other Funds by Quant Mutual Fund</h4>
      <div className="quant-fund-body">
        <table className="quant-fund-table">
          <tbody>
            <tr>
              <td>
                <div className="basic-info-data">
                  <p className="basic-info-data-head">Fund Name</p>
                  <button className="info-btn">
                    3Y RETURN
                    <img
                      src="./assets/up-down.png"
                      alt="filter"
                      width={15}
                    ></img>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>

          {quantFund.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <div className="basic-info-data">
                      <div className="quant-fund-col">
                        <div className="quant-fund-first-row">
                          <span>{item.investmentType}</span>
                          <span className="dot">.</span>
                          <span>{item.subCategoryName}</span>
                        </div>
                        <div className="bank-name">
                          <img src={item.icon} width={40}></img>
                          <p>{item.fundName}</p>
                        </div>
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

export default QuantFunds;
