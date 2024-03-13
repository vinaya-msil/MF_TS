import React, { useEffect } from "react";
import "./TradeFilter.css";
import TradeTable from "../TradeTable/TradeTable";
import TradeFilterBtns from "./TradeFilterBtns";
import { setSearchText } from "../../redux/slice/SearchSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { DataItem } from "../Type";

interface TradeFilterProps {}

const TradeFilter: React.FC<TradeFilterProps> = () => {
  const { category } = useSelector((state: RootState) => state.category);
  const { searchText } = useSelector((state: RootState) => state.search);
  const { data } = useSelector((state: RootState) => state.data);

  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchText(e.target.value));
  }

  useEffect(() => {
    dispatch(setSearchText(""));
  }, [category, dispatch]);

  function filterCategory(data: DataItem[]) {
    return data.filter((item) => {
      return category === item.category;
    });
  }

  function filterSearch(data: DataItem[]) {
    if (searchText === "") {
      return data;
    } else {
      if (searchText.length > 2) {
        return data.filter((item) => {
          return item.fundName.toLowerCase().includes(searchText.toLowerCase());
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
      <TradeFilterBtns />
      <div className="trade-filter-search">
        <input
          className="default search-bar"
          type="search"
          value={searchText}
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
