import { createSlice } from "@reduxjs/toolkit";
import { SimilarFundData } from "../../components/Type";
import { similarFundData } from "../../components/data/similarFundData";


interface InitialState{
    similarData:SimilarFundData[];
}
const initialState:InitialState={
    similarData:similarFundData
}
export const similarDataSlice=createSlice({
    name:'similar',
    initialState,
    reducers:{}
});
export default similarDataSlice.reducer;

