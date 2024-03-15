import React from "react";
import { OverviewData } from "../data/OverviewData";
import "../Overview/Overview.css";

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

const FundHoldings: React.FC<OverviewProps> = (props) => {
  const data: OverviewDataType = OverviewData[props.fundKey];

  return (
    <div className="overview-component">
      <section className="head-section">
        <h3>Fund Holdings</h3>
        
        <div className="holdings-data-section">
            <p>Holding Name</p>
            <p>Allocation</p>
            {/* //{(OverviewData[props.fundKey] as any)[dataYearHere].percentage} */}
            <section className="holding-body-section">
                {((OverviewData[props.fundKey] as any).holdingsData).map((item: any)=>{
                    console.log('((OverviewData[props.fundKey] as any).holdingsData)',((OverviewData[props.fundKey] as any).holdingsData.name));
                    <>
                        <h6>{item.name}</h6>
                        <h6>{item.allocation}</h6>
                    </>
                })}
            </section>
            
        </div>
      </section>
    </div>
  );
};

export default FundHoldings;
