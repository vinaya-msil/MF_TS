import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InvestData } from "../../components/Type";
import { investData } from "../../components/data/investData";

interface InitialState {
  investData: InvestData[];
}
const initialState: InitialState = {
  investData: investData,
};
export const investDataSlice = createSlice({
  name: "investData",
  initialState,
  reducers: {},
});
export default investDataSlice.reducer;
