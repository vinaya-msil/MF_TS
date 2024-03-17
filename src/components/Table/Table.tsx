import React, { ChangeEvent } from "react";
import './Table.css';
import Popup from "../Popup/Popup";
import { UserData } from "../data/UserData";
import { reduxToggleComponentPurchase,  reduxToggleComponentWithdraw, 
  reduxToggleComponentSwitch, changeSearchTerm,changeIsHidden, toggleCurrentPage  } 
  from "../../redux/TableSlice";
import { useDispatch, useSelector } from "react-redux";
function Table() {
  const dispatch = useDispatch();
  // redux selector 
  const reduxClass = useSelector((state:any) => state.tableSlice);
  const toggleVisibility = () => {
    // setIsHidden(!isHidden);
    dispatch(changeIsHidden());
  };
  // handling input change here on every click in input
  const handleInputChange = (searchValue: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(searchValue.target.value));
  };
  // handling order type filter
  const handleOrderType = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  // data need to make headers and table rows
  // header data
  const headersOfTable = [{ headOne: 'Fund Name', headTwo: 'Client Code',
                            headThree: 'Order Date', headFour: 'Order Type',
                            headFive: 'Amount', headSix: 'FreshOrder / Investment',
                            headSeven: 'Order Status' }];
  // table data
  const StocksTable: React.FC<{ stocksDataArray: any[], stocksHeaderArray: any[],
     category: string, itemsPerPage: number }>
      = ({ stocksDataArray, stocksHeaderArray, category, itemsPerPage }) => {
    const indexOfLastItem = reduxClass.currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // temparry array initialization
    const tempArray: any[] = [];
    const tempArrayFunction = stocksDataArray.map(bdVal => {
      return (category === bdVal.category && tempArray.push(bdVal))
    });
    const currentItems = tempArray.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tempArray.length / itemsPerPage);
    const handlePageChange = (page: number) => {
      dispatch(toggleCurrentPage(page));
    };
    return (
      <>
        <table>
          <thead className="head-of-table">
            {stocksHeaderArray.map(headVal => (
              <tr key={headVal.headOne}>
                <th>{headVal.headOne}  </th>
                <th>{headVal.headTwo}  </th>
                <th>{headVal.headThree}</th>
                <th>{headVal.headFour} </th>
                <th>{headVal.headFive} </th>
                <th>{headVal.headSix}  </th>
                <th>{headVal.headSeven}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {currentItems.map(bdVal => (
              category === bdVal.category &&
              <tr key={bdVal.key}>
                <td><img className="logo" src={bdVal.imageUrl} />{bdVal.fundName}</td>
                <td>{bdVal.clientCode}</td>
                <td>{bdVal.OrderDate}</td>
                <td>{bdVal.orderType}</td>
                <td>{bdVal.amount}</td>
                <td>{bdVal.orderCategory}</td>
                <td><button className={bdVal.orderStatus}>{bdVal.orderStatus}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => handlePageChange(reduxClass.currentPage - 1)} 
                  disabled={reduxClass.currentPage === 1} >prev</button>
          <button onClick={() => handlePageChange(reduxClass.currentPage + 1)} 
                  disabled={reduxClass.currentPage === totalPages}>next</button>
        </div>
      </>
    );
  };
  // filtered data rows
  let filteredRows = reduxClass.searchTerm === "" ? UserData : UserData.filter((item) => {
        if (((item.fundName.toLowerCase().includes(reduxClass.searchTerm .toLowerCase()) ||
            item.clientCode.toLowerCase().includes(reduxClass.searchTerm .toLowerCase()) ||
            item.orderType.toLocaleLowerCase().includes(reduxClass.searchTerm .toLowerCase())) ||
            item.status.toLocaleLowerCase() === reduxClass.status)
        ) {return true;}
        else {return false;}});
  if ((reduxClass.optionFailed === true && reduxClass.optionSuccess === true) 
      || (reduxClass.optionFailed === false && reduxClass.optionSuccess === false))
    {filteredRows = filteredRows;}
  else {
    if (reduxClass.optionFailed === true) {
      filteredRows = filteredRows.filter(
        (item) => {
          if (item.orderStatus === "Failed"){return true;}
          else {return false;}}
      )
    } else {
        filteredRows = filteredRows.filter(
          (item) => {
            if (item.orderStatus === "Success") {return true;}
            else {return false;}
          }
        )
      }
    }
    filteredRows = filteredRows.filter(
      (item) => {
        if (item.OrderDate >= reduxClass.dateFrom && item.OrderDate <= reduxClass.dateTo) {return true;}
        else {return false;}}
    )
    return (
      <div className="OrderBookComponent">
        <h4 className="order-book-h2">Order Book</h4>
        <div className="navigation-section">
          <button className={reduxClass.purchasedClass} onClick={() => dispatch(reduxToggleComponentPurchase())}  id="Purchase">Purchase</button>
          <button className={reduxClass.withdrawClass} onClick={() => dispatch(reduxToggleComponentWithdraw())} id="Withdraw">Withdraw</button>
          <button className={reduxClass.switchClass} onClick={() => dispatch(reduxToggleComponentSwitch())} id="Switch">Switch</button>
        </div>
        <input onChange={handleInputChange} className="search-input" id="searchInput" type="text" placeholder="Search client name / code" />
        <label className="order-type-label"><b id="OrderTypeText">OrderType</b>
          <select onChange={handleOrderType} id="selectOption">
            <option value=''>All</option>
            <option value='Lumpsum'>Lumpsum</option>
            <option value='Intraday'>Intraday</option>
            <option value='SIP'>SIP</option>
          </select>
        </label>
        <button className="filterButton" onClick={toggleVisibility}>Filters</button>
        {reduxClass.isHidden ? null : <Popup />}
        <hr />
        <div className="table">
          {reduxClass.purchaseComponent && <StocksTable stocksDataArray={filteredRows} 
              stocksHeaderArray={headersOfTable} category={'Purchased'} itemsPerPage={4} />}
          {reduxClass.withdrawComponent && <StocksTable stocksDataArray={filteredRows} 
              stocksHeaderArray={headersOfTable} category={'Withdraw'} itemsPerPage={4} />}
          {reduxClass.switchComponent && <StocksTable stocksDataArray={filteredRows} 
              stocksHeaderArray={headersOfTable} category={'Switch'} itemsPerPage={4} />}
        </div>
      </div>
    );
} 
export default Table;