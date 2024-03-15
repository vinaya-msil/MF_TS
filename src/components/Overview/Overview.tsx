import React from "react";
import { OverviewData } from "../data/OverviewData";
import "./Overview.css";

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
  dataOneYear: Data;
  dataThreeYear: Data;
  dataFiveYear: Data;
  dataTenYear: Data;
  options: any; 
}

const Overview: React.FC<OverviewProps> = (props) => {
  const data: OverviewDataType = OverviewData[props.fundKey];

  return (
    <div className="overview-component">
      <section className="head-section">
        <div className="image-section-in-head">
          <img className="logo" src={data.imageUrl} alt="Logo" />
        </div>
        <div className="details-of-head-section">
          <p className="smallDetails">
            {data.investmentType} <span> * </span> {data.subCategoryName}
          </p>
          <h2 className="overview-head">{data.fundName}</h2>
        </div>
      </section>
      <section className="returns-section">
        <hr />
        <p className="smallDetails">returns</p>
        <div className="retunsMainTextContent">
          <h1>
            {data.returns} %   </h1><pre><p className="smallDetails">  <b>anually</b> for last {data.returnYears} years</p></pre>
          <hr />
        </div>
      </section>
      <hr />
      <section className="example-chart">
        <img className="example-chart-image" src="replacethisimage.png" alt="Example Chart" />
      </section>
    </div>
  );
};

export default Overview;
