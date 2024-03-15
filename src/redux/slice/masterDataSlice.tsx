import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/data/data";
import { DataItem } from "../../components/Type";

interface InitialState {
  data: DataItem[];
}
const initialState: InitialState = {
  data: data,
};
export const masterDataSlice = createSlice({
  name: "masterData",
  initialState,
  reducers: {},
});
export default masterDataSlice.reducer;
