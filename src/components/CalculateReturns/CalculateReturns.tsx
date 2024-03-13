import React from "react";
import { useState } from "react";
import "./CalculateReturns.css";
import { OverviewData } from "../data/OverviewData";
import DoughnutChart from "../DoughnutChart/DoughnutChart";

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
  
  interface OverviewDataType {
    key: string;
    investmentType: string;
    subCategoryName: string;
    fundName: string;
    clientCode: string;
    OrderDate: string;
    orderType: string;
    amount: number;
    orderCategory: string;
    orderStatus: string;
    category: string;
    imageUrl: string;
    status: string;
    returns: number;
    returnYears: number;
    data: Data;
    options: any; 
  }

  const CalculateReturns: React.FC<OverviewProps> = (props) => {
    const data: OverviewDataType = OverviewData[props.fundKey];
    // console.log('props from cal returns', props);
    const [oneYearClass,   setOneYearClass  ] = useState('selected-button');
    const [threeYearClass, setThreeYearClass] = useState('');
    const [fiveeYearClass, setFiveYearClass ] = useState('');
    const [tenYearClass,   setTeneYearClass ] = useState('');
    
    const handleClassOneYear = ()=>{
        setOneYearClass("selected-button");
        setThreeYearClass("");
        setFiveYearClass("");
        setTeneYearClass("");
    }  
    const handleClassThreeYear = ()=>{
        setOneYearClass("");
        setThreeYearClass("selected-button");
        setFiveYearClass("");
        setTeneYearClass("");
    } 
    const handleClassFiveYear = ()=>{
        setOneYearClass("");
        setThreeYearClass("");
        setFiveYearClass("selected-button");
        setTeneYearClass("");
    } 
    const handleClassTenYear = ()=>{
        setOneYearClass("");
        setThreeYearClass("");
        setFiveYearClass("");
        setTeneYearClass("selected-button");
    } 

    const handleRangechange = ()=>{}

    
    
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
                    <input id="rangeInput" type="range"  />
                    <button> 1000 </button>
                </div>
            </section>
            <section className="nav-section-returns">
                <div className="navigation-section">
                    <button className={oneYearClass}   onClick={handleClassOneYear  } >1 Year</button>
                    <button className={threeYearClass} onClick={handleClassThreeYear} >3 Years</button>
                    <button className={fiveeYearClass} onClick={handleClassFiveYear } >5 Years</button>
                    <button className={tenYearClass}   onClick={handleClassTenYear  } >10 Years</button>
                </div>
                <div className="side-section-returns">
                    <p className="smallDetails">Expected Returns <br/>
                            Funds <b>n</b> Y annual returns
                    </p>
                    <h3> {(OverviewData[props.fundKey]).returns} % p.a</h3>
                </div>
            </section>

            <section className="bar-grapg-section">
                <div className="colors-section">
                    {/* <img className="bar-graph-image" src="piechart.png" /> */}
                    
                    <DoughnutChart fundKey={props.fundKey} />
                    
                    {/* <div className="short-dots">
                        <section><h1 className="invested-amt-color">.<span className="smallDetails">Invested </span></h1> </section>
                        <section><h1 className="return-amt-color"> .<span className="smallDetails">Gains</span> </h1></section>
                    </div> */}
                </div>
                <div className="pie-chart-text">
                    <p className="smallDetails">if you invest  100 for n years</p><br/>
                    <h3>Total Value: 77,434 <span className="smallDetails profit-percent">(+115%)</span></h3>
                </div>
            </section>


        </div>
    )
}
export default CalculateReturns;
