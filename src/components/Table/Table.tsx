import React, { useState, ChangeEvent } from "react";
import './Table.css';
// import Popup from "../components/Popup";
import { UserData } from "../data/UserData";

function Table() {
  const [optionFailed, setOptionFailed] = useState(false);
  const [optionSuccess, setOptionSuccess] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [status, setStatus] = useState('');
  const [dateFrom, setDateFrom] = useState("0/0/0");
  const [dateTo, setDateTo] = useState("90000/12/31");
  const [btnName, setBtnName] = useState('Purchase');
  const [mainNavButton, setainNavButton] = useState('Trade');
  const [purchasedClass, setPurchasedClass] = useState('selected-button');
  const [withdrawClass, setWithdrawClass] = useState('selected');
  const [switchClass, setSwitchClass] = useState('selected');

  const classNameForSelectedButton = "selected-button";

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  // initializing states
  const [purchaseComponent, setPurchaseComponent] = useState(true);
  const [withdrawComponent, setWithdrawComponent] = useState(false);
  const [switchComponent, setSwitchComponent] = useState(false);

  //search term initialization
  const [searchTerm, setSearchTerm] = useState('');

  // input order type category
  const [orderTypeVal, setOrderTypeVal] = useState('All');

  // handling input change here on every click in input
  const handleInputChange = (searchValue: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(searchValue.target.value);
  };

  // handling order type filter
  const handleOrderType = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("selected ", event.target.value);
    setSearchTerm(event.target.value);
  };

  // 3 arrow functions which make state changes on click
  const toggleComponentPurchase = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("i am here toggleComponentPurchase");
    setPurchasedClass(classNameForSelectedButton);
    setWithdrawClass("nothing");
    setSwitchClass("nothing");
    setWithdrawComponent(false);
    setPurchaseComponent(true);
    setSwitchComponent(false);
  };

  const toggleComponentWithdraw = () :void => {
    console.log("i am here toggleComponentWithdraw");
    setWithdrawClass(classNameForSelectedButton);
    setPurchasedClass("nothing");
    setSwitchClass("nothing");
    setWithdrawComponent(true);
    setPurchaseComponent(false);
    setSwitchComponent(false);
  };

  const toggleComponentSwitch = ():void => {
    console.log("i am here toggleComponentSwitch");
    setPurchasedClass("nothing");
setWithdrawClass("nothing");
    setSwitchClass(classNameForSelectedButton)
    setWithdrawComponent(false);
    setPurchaseComponent(false);
    setSwitchComponent(true);
  };

  // data need to make headers and table rows
  // header data
  const headersOfTable = [{ headOne: 'Fund Name', headTwo: 'Client Code',
                            headThree: 'Order Date', headFour: 'Order Type',
                            headFive: 'Amount', headSix: 'FreshOrder / Investment',
                            headSeven: 'Order Status' }];

  // table data
  const StocksTable: React.FC<{ stocksDataArray: any[], stocksHeaderArray: any[], category: string, itemsPerPage: number }> = ({ stocksDataArray, stocksHeaderArray, category, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // temparry array initialization
    const tempArray: any[] = [];
    const tempArrayFunction = stocksDataArray.map(bdVal => {
      return (
        category === bdVal.category && tempArray.push(bdVal)
      )
    });

    const currentItems = tempArray.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tempArray.length / itemsPerPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    return (
      <>
        <table>
          <thead>
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
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} >prev</button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>next</button>
        </div>
      </>

    );
  };

  // filtered data rows
  let filteredRows =
    searchTerm === ""
      ? UserData : UserData.filter((item) => {
        if (
          (item.fundName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.clientCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.orderType.toLocaleLowerCase().includes(searchTerm.toLowerCase())) ||
          item.status.toLocaleLowerCase() === status
        ) {
          console.log('true');
          console.log('(item.OrderDate>=dateFrom, item.OrderDate<=dateTo)', dateFrom, dateTo);
          return true;
        }
        else {
          console.log('false');
          console.log('(item.OrderDate>=dateFrom, item.OrderDate<=dateTo)', dateFrom < dateTo);
          return false;
        }
      });

  if ((optionFailed === true && optionSuccess === true) || (optionFailed === false && optionSuccess === false)) {
    filteredRows = filteredRows;
  } else {
    if (optionFailed === true) {
      filteredRows = filteredRows.filter(
        (item) => {
          console.log("option success true", item);
          if (item.orderStatus === "Failed") {
            console.log("true ", item.status);
            return true;
          } else {
            console.log("false ", item.status);
            return false;
          }
        }
      )
    } else {
        filteredRows = filteredRows.filter(
          (item) => {
            console.log("option success true", item);
            if (item.orderStatus === "Success") {
              console.log("true ", item.status);
              return true;
            } else {
              console.log("false ", item.status);
              return false;
            }
          }
        )
      }
    }
  
    filteredRows = filteredRows.filter(
      (item) => {
        if (item.OrderDate >= dateFrom && item.OrderDate <= dateTo) {
          return true;
        } else {
          return false;
        }
      }
    )
  
    return (
      <div className="OrderBookComponent">
  
        <h4 className="order-book-h2">Order Book</h4>
        <div className="navigation-section">
          <button className={purchasedClass} onClick={toggleComponentPurchase} id="Purchase">Purchase</button>
          <button className={withdrawClass} onClick={toggleComponentWithdraw} id="Withdraw">Withdraw</button>
          <button className={switchClass} onClick={toggleComponentSwitch} id="Switch">Switch</button>
        </div>
        <input onChange={handleInputChange} className="search-input" id="searchInput" type="text" placeholder="Search client name / code" />
  
        <label><b id="OrderTypeText">OrderType</b>
          <select onChange={handleOrderType} id="selectOption">
            <option value=''>All</option>
            <option value='Lumpsum'>Lumpsum</option>
            <option value='Intraday'>Intraday</option>
            <option value='SIP'>SIP</option>
          </select>
        </label>
<button className="filterButton" onClick={toggleVisibility}>Filters</button>
        <hr />
        <div className="table">
          {purchaseComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Purchased'} itemsPerPage={4} />}
          {withdrawComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Withdraw'} itemsPerPage={4} />}
          {switchComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Switch'} itemsPerPage={4} />}
        </div>
      </div>
    );
}
  
  export default Table;
