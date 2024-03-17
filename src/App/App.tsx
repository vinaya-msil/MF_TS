import "./App.css";
import Trade from "../pages/Trade";
import Table from "../components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invest from "../pages/Invest/Invest";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTradeBtnClass, changeOrderBtnClass  } from "../redux/AppSlice";
function App() {
  const dispatch = useDispatch();
  const reduxBtnClass = useSelector((state:any) => state.appSlice);
  return (
    <div className="App">
      <Router>
        <header>
          <Link to={"/"}>
            <button onClick={() => dispatch(changeTradeBtnClass())}
            className={reduxBtnClass.tradeBtnClass}>Trade</button>
          </Link>
          <Link to={"/order"}>
            <button onClick={() => dispatch(changeOrderBtnClass())} 
            className={reduxBtnClass.orderBookBtnClass}>Order Book</button>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Trade />}      />
          <Route path="/trade" element={<Trade />} />
          <Route path="/order" element={<Table />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;