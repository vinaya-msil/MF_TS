import "./SchemeDetails.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
function SchemeDetails() {
  const { investData } = useSelector((state: RootState) => state.invest);
  const data = investData[0];
  return (
    <div className="scheme-details" >
      <h4>Basic Information</h4>
      <div className="basic-info-body">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="basic-info-data left">
                  <p>
                    <span className="material-symbols-outlined">cake</span>Fund
                    Age
                  </p>
                  <p>{data.fundAge}</p>
                </div>
              </td>
              <td>
                <div className="basic-info-data right">
                  <p>
                    <span className="material-symbols-outlined">pie_chart</span>
                    Fund Size(AUM)
                  </p>
                  <p>{data.fundSize}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="basic-info-data left">
                  <p>
                    <span className="material-symbols-outlined">lock</span>
                    Lock-in Period
                  </p>
                  <p>{data.lockInPeriod}</p>
                </div>
              </td>
              <td>
                <div className="basic-info-data right">
                  <p>
                    <span className="material-symbols-outlined">whatshot</span>
                    Expense Ratio
                  </p>
                  <p>{data.expenseRatio}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="basic-info-tax left">
                  <span className="material-symbols-outlined">logout</span>
                  <div className="tax-body">
                    <p>Exit Load</p>
                    <p>
                      1.00% - If redeemed/switchedout within 1 Year from the
                      date of allotment. Nil - If redeemed/switchedout after 1
                      year from the date of allotment.
                    </p>
                  </div>
                </div>
              </td>
              <td className="tax-implication-td">
                <div className="basic-info-tax right">
                  <span className="material-symbols-outlined">payments</span>
                  <div className="tax-body">
                    <p>Tax Implications</p>
                    <p>
                      Withdrawal within 1 year <br></br>Exit load + 15% tax on
                      gains
                    </p>
                    <p>
                      Withdrawal after 1 year <br></br>10% tax on gains over ₹1
                      Lakh per financial year
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="basic-info-btn">LEARN ABOUT TERMS</p>
      </div>
    </div>
  );
}

export default SchemeDetails;
