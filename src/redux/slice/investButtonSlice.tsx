import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  investButton:string;
}
const initialState: InitialState = {
  investButton: "Overview",
};
export const investButtonSlice = createSlice({
  name: "investButton",
  initialState,
  reducers: {
    changeInvestButton:(state,action:PayloadAction<string>)=>{
        state.investButton=action.payload;
    }
  },
});
export const {changeInvestButton}=investButtonSlice.actions;
export default investButtonSlice.reducer;
