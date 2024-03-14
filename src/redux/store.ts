import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import masterDataSlice from "./slice/masterDataSlice";
import CategorySlice from "./slice/CategorySlice";
import  investDataSlice  from "./slice/investSlice";
import investButtonSlice from "./slice/investButtonSlice";

const store = configureStore({
  reducer: {
    data: masterDataSlice,
    search: SearchSlice,
    category:CategorySlice,
    invest:investDataSlice,
    investButton:investButtonSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
