import React from "react";
// import { useState } from "react";
import "./CalculateReturns.css";
// import { Dispatch,  } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {handleoneYearClass,handletenYearClass,
    handlefiveYearClass,handlethreeYearClass,changeButtonAmount, } from "../../redux/CalculateReturnsSlice";
import { OverviewData } from "../data/OverviewData";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
// import { useDispatch } from "react-redux";



interface OverviewProps {
    fundKey: keyof typeof OverviewData;
  }
interface Data {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  }
  
//   interface OverviewDataType {
//     key: string;
//     investmentType: string;
//     subCategoryName: string;
//     fundName: string;
//     clientCode: string;
//     OrderDate: string;
//     orderType: string;
//     amount: number;
//     orderCategory: string;
//     orderStatus: string;
//     category: string;
//     imageUrl: string;
//     status: string;
//     returns: number;
//     returnYears: number;
//     data: Data;
//     options: any; 
//   }

  const CalculateReturns: React.FC<OverviewProps> = (props) => {
    const dispatch = useDispatch();
    // const data: OverviewDataType = OverviewData[props.fundKey];
    const reduxClass = useSelector((state:any) => state.CalculateReturnsSlice);

    const handleRangechange = (event : React.ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.target.value);
        dispatch(changeButtonAmount(Number(event.target.value)*10));
    }
    const dataYearHere = reduxClass.dataYear
    return(
        <div className="main">
            <div className="head-calculate-returns">
                <section className="header-section">
                    <h3>Calculate Your Returns</h3>
                </section>
                
            </div>
            <section className="radio-buttons-section">
                
                <input type="radio" value="sip" id="SipRadio" />
                <label >SIP</label>
                <input type="radio" value="onetime" id="OneTimeRadio" />
                <label >OneTime</label>
            </section>
            <section className="range-section">
                <div>
                    <h2>Choose Amount</h2>
                    
                </div>
                <div>
                    <input id="rangeInput" type="range" onChange={handleRangechange} />
                    <button> {reduxClass.amountInButton} </button>
                </div>
            </section>
            <section className="nav-section-returns">
                <div className="navigation-section">
                    <button className={reduxClass.oneYearClass} 
                        onClick={() => dispatch(handleoneYearClass())} >1 Year</button>
                    <button className={reduxClass.threeYearClass} 
                        onClick={() => dispatch(handlethreeYearClass())} >3 Years</button>
                    <button className={reduxClass.fiveeYearClass} 
                        onClick={() => dispatch(handlefiveYearClass())} >5 Years</button>
                    <button className={reduxClass.tenYearClass} 
                        onClick={() => dispatch(handletenYearClass())} >10 Years</button>
                </div>
                <div className="side-section-returns">
                    <p className="smallDetails">Expected Returns <br/>
                            Funds <b>n</b> Y annual returns
                    </p>

                    <h3> {(OverviewData[props.fundKey] as any)[dataYearHere].returns} % p.a</h3>
                </div>
            </section>

            <section className="bar-grapg-section">
                <div className="colors-section">
                    
                    <DoughnutChart fundKey={props.fundKey} />
                </div>
                <div className="pie-chart-text">
                    <p className="smallDetails">if you invest  100 for n years</p><br/>
                    <h3>Total Value: {(OverviewData[props.fundKey] as any)[dataYearHere].totalValue} 
                     <span className="smallDetails profit-percent">+{(OverviewData[props.fundKey] as any)[dataYearHere].percentage}%</span></h3>
                </div>
            </section>


        </div>
    )
}
export default CalculateReturns;
