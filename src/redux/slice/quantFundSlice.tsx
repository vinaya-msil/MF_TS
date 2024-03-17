import { createSlice } from "@reduxjs/toolkit";
import { QuantFunds } from "../../components/Type";
import { otherQuants } from "../../components/data/otherQuants";

interface InitialState{
    quantFund:QuantFunds[];
}
const initialState:InitialState={
    quantFund:otherQuants
}
export const quantFundSlice=createSlice({
    name:'quant',
    initialState,
    reducers:{}
});
export default quantFundSlice.reducer;