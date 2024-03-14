import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  investPad:string;
}
const initialState: InitialState = {
    investPad: "SIP",
};
export const investmentPadSlice = createSlice({
  name: "investPad",
  initialState,
  reducers: {
    changeInvestPad:(state,action:PayloadAction<string>)=>{
        state.investPad=action.payload;
    }
  },
});
export const {changeInvestPad}=investmentPadSlice.actions;
export default investmentPadSlice.reducer;
