import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    tradeBtnClass:"dontApplyCss",
    orderBookBtnClass:"applyCss"
  },
  reducers: {
    changeTradeBtnClass: (state) => {
            state.tradeBtnClass = "applyCss";
            state.orderBookBtnClass = "dontApplyCss";
    },
    changeOrderBtnClass: (state) => {
      state.orderBookBtnClass = "applyCss";
      state.tradeBtnClass = "dontApplyCss";
    }
  }
});



// Action creators are generated for each case reducer function
export const { changeTradeBtnClass, changeOrderBtnClass } = appSlice.actions;

export default appSlice.reducer;
