import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";
import SearchSlice from "./slice/SearchSlice";
import masterDataSlice from "./slice/masterDataSlice";
import CategorySlice from "./slice/CategorySlice";
import  investDataSlice  from "./slice/investSlice";
import investButtonSlice from "./slice/investButtonSlice";
import investmentPadSlice from "./slice/investmentPadSlice";
import similarDataSlice from "./slice/similarDataSlice";
import tableReducer from "./TableSlice";
import CalculateReturnsReducer from "./CalculateReturnsSlice";

const store = configureStore({
  reducer: {
    data: masterDataSlice,
    appSlice              : appReducer,
    tableSlice            : tableReducer,
    CalculateReturnsSlice : CalculateReturnsReducer,
    search: SearchSlice,
    category:CategorySlice,
    invest:investDataSlice,
    investButton:investButtonSlice,
    investPad:investmentPadSlice,
    similar:similarDataSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


// import { configureStore } from "@reduxjs/toolkit";


