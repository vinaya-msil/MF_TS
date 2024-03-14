import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import masterDataSlice from "./slice/masterDataSlice";
import CategorySlice from "./slice/CategorySlice";
import  investDataSlice  from "./slice/investSlice";
import investButtonSlice from "./slice/investButtonSlice";
import investmentPadSlice from "./slice/investmentPadSlice";
import similarDataSlice from "./slice/similarDataSlice";

const store = configureStore({
  reducer: {
    data: masterDataSlice,
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
