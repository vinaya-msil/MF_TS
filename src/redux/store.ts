import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import masterDataSlice from "./slice/masterDataSlice";
import CategorySlice from "./slice/CategorySlice";

const store = configureStore({
  reducer: {
    data: masterDataSlice,
    search: SearchSlice,
    category:CategorySlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
