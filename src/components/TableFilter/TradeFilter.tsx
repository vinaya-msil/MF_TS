import React, { useEffect, useState } from "react";
import "./TradeFilter.css";
import TradeTable from "../TradeTable/TradeTable";
import TradeFilterBtns from "./TradeFilterBtns";

interface DataItem {
  icon: string;
  investmentType: string;
  subCategoryName: string;
  fundName: string;
  rating: string;
  reInvestmentPlan: string;
  category: string;
  oneYrReturn: string;
  threeYrReturn: string;
  fiveYrReturn: string;
  currentNav: string;
  minSipInvestment: string;
}

interface TradeFilterProps {
  data: DataItem[];
}

const TradeFilter: React.FC<TradeFilterProps> = ({ data }) => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [category, setCategory] = useState<string>("Top Rated");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchVal(e.target.value);
  }

  useEffect(() => {
    setSearchVal("");
  }, [category]);

  function filterCategory(data: DataItem[]) {
    return data.filter((item) => {
      return category === item.category;
    });
  }

  function filterSearch(data: DataItem[]) {
    if (searchVal === "") {
      return data;
    } else {
      if (searchVal.length > 2) {
        return data.filter((item) => {
          return item.fundName.toLowerCase().includes(searchVal.toLowerCase());
        });
      } else {
        return data;
      }
    }
  }

  const categorisedData = filterCategory(data);
  const filteredData = filterSearch(categorisedData);

  return (
    <div className="trade-filter">
      <h2>Explore Mutual Funds</h2>
      <TradeFilterBtns category={category} setCategory={setCategory} />
      <div className="trade-filter-search">
        <input
          className="default search-bar"
          type="search"
          value={searchVal}
          placeholder="Search Schemes"
          onChange={handleChange}
        />
        <img src="./assets/search-svgrepo-com.svg" alt="search" width={20} />
      </div>
      <TradeTable filteredData={filteredData} />
    </div>
  );
};

export default TradeFilter;
