import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";
import tableReducer from "./TableSlice";
import CalculateReturnsReducer from "./CalculateReturnsSlice";
export default configureStore({
  reducer: {
    appSlice              : appReducer,
    tableSlice            : tableReducer,
    CalculateReturnsSlice : CalculateReturnsReducer
  }
});

