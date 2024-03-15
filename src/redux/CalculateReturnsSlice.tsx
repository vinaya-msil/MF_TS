import { createSlice } from "@reduxjs/toolkit";

export const calculateReturnsSlice = createSlice({
  name: "calculateReturnsSlice",
  initialState: {
     rangeInputValue      : 50,
     oneYearClass         :'selected-button',   
     threeYearClass       :'button', 
     fiveeYearClass       :'button', 
     tenYearClass         :'button',
     amountInButton       :500,
     dataYear             :'dataOneYear',
  },
  reducers: {
    changeButtonAmount:(state,action)=>{
      state.amountInButton = action.payload;
    },
    handleoneYearClass:(state)=>{
      state.oneYearClass       = 'selected-button';
      state.threeYearClass     = 'button'         ;
      state.fiveeYearClass     = 'button'         ;
      state.tenYearClass       = 'button'         ;
      state.dataYear           = 'dataOneYear'    ;
      console.log('state.dataYear           = dataOneYear    ;',state.dataYear);
    },
    handlethreeYearClass:(state)=>{
      state.oneYearClass       = 'button'         ;
      state.threeYearClass     = 'selected-button';
      state.fiveeYearClass     = 'button'         ;
      state.tenYearClass       = 'button'         ;
      state.dataYear           = 'dataThreeYear'    ;
      console.log('state.dataYear           = dataOneYear    ;',state.dataYear);
    },
    handlefiveYearClass:(state)=>{
      state.oneYearClass       ='button'         ;
      state.threeYearClass     ='button'         ;
      state.fiveeYearClass     ='selected-button';
      state.tenYearClass       ='button'         ;
      state.dataYear           = 'dataFiveYear'    ;
      console.log('state.dataYear           = dataOneYear    ;',state.dataYear);

    },
    handletenYearClass:(state)=>{
      state.oneYearClass       = 'button'         ;
      state.threeYearClass     = 'button'         ;
      state.fiveeYearClass     = 'button'         ;
      state.tenYearClass       = 'selected-button';
      state.dataYear           = 'dataTenYear'    ;
      console.log('state.dataYear           = dataOneYear    ;',state.dataYear);

    },
  }
}); 
// Action creators are generated for each case reducer function
export const { handleoneYearClass,handletenYearClass,
  handlefiveYearClass,handlethreeYearClass,changeButtonAmount, } 
    = calculateReturnsSlice.actions;

export default calculateReturnsSlice.reducer;
