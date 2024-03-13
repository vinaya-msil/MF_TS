import "./App.css";
import { useState } from "react";
// import OrderBook from "./pages/OrderBook";
import Trade from "../pages/Trade";
import Table from "../components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invest from "../pages/Invest/Invest";
import { Link } from "react-router-dom";

function App() {

  const [tradeBtnClass, setTradeBtnClass] = useState("applyCss");
  const [orderBookBtnClass, setOrderBookBtnClass] = useState("dontApplyCss");

  const handleMainButtonTradeState = ()=>{
     setTradeBtnClass("applyCss");
     setOrderBookBtnClass("dontApplyCss");
  }
  const handleMainButtonOrderBookState = ()=>{
    setTradeBtnClass("dontApplyCss");
    setOrderBookBtnClass("applyCss");
 }
  

  return (
    <div className="App">
      <Router>
        <header>
          <Link to={"/"}>
            <button onClick={handleMainButtonTradeState} className={tradeBtnClass} >Trade</button>
          </Link>
          <Link to={"/order"}>
            <button onClick={handleMainButtonOrderBookState} className={orderBookBtnClass}>Order Book</button>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Trade />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/order" element={<Table />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
