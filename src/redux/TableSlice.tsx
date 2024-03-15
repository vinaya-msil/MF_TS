import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isHidden            :true,
    purchaseComponent   :true,
    withdrawComponent   :false,
    switchComponent     :false,
    searchTerm          :"",
    optionFailed        :false,  
    optionSuccess       :false, 
    status              :"",        
    dateFrom            :"0/0/0",      
    dateTo              :"90000/12/31",        
    purchasedClass      :'selected-button',
    withdrawClass       :'selected', 
    switchClass         :'selected',
    currentPage         :1,
    isVisible           :true,
    dateComp            :true,  
    statusComp          :false,
  },
  reducers: {
    toggleCurrentPage:(state,action)=>{
      state.currentPage = (action.payload);
    },
    changeIsHidden:(state)=>{
      state.isHidden = !(state.isHidden ) ;
    },
    toggleSetDateComp: (state,action)=>{
      state.dateComp = action.payload;
    },
    toggleSetStatusComp: (state,action)=>{
      state.statusComp = action.payload;
    },
    changeStatus: (state,action)=>{
      state.status = action.payload;
    },
    toggleVisibility: (state) => {
            state.isHidden = !state.isHidden;
    },
    handleOptionFailed: (state) => {
            state.optionFailed = !state.optionFailed;
    },
    reduxToggleComponentPurchase:(state)=>{
        state.purchaseComponent   =true;
        state.withdrawComponent   =false;
        state.switchComponent     =false;
        state.purchasedClass = "selected-button"
        state.withdrawClass = "button"
        state.switchClass = "button"
    },
    reduxToggleComponentWithdraw:(state)=>{
        state.purchaseComponent   =false;
        state.withdrawComponent   =true;
        state.switchComponent     =false;
        state.purchasedClass = "button"
        state.withdrawClass = "selected-button"
        state.switchClass = "button"
    },
    reduxToggleComponentSwitch:(state)=>{
        state.purchaseComponent   =false;
        state.withdrawComponent   =false;
        state.switchComponent     =true;
        state.purchasedClass = "button"
        state.withdrawClass = "button"
        state.switchClass = "selected-button"
    },
    changeSearchTerm:(state,action)=>{
        state.searchTerm = action.payload;
        // console.log('state.searchTerm state.searchTerm ',state.searchTerm);
    },
    changeOptionSuccess:(state,action)=>{
      state.optionSuccess =!( action.payload );
      console.log('optio success', state.optionSuccess);
    },
    changeOptionFailed:(state, action)=>{
      state.optionFailed = !(state.optionFailed) ;
      console.log('optio failed', state.optionFailed);
    },
    changeOptionSetDateFrom:(state, action)=>{
      state.dateFrom = action.payload;
    },
    changeOptionSetDateTo:(state, action)=>{
      state.dateTo = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {toggleVisibility, 
              reduxToggleComponentPurchase, 
              reduxToggleComponentWithdraw, 
              reduxToggleComponentSwitch,
              changeSearchTerm,
              changeOptionSuccess,
              changeOptionFailed,
              changeOptionSetDateFrom,
              changeOptionSetDateTo,
              changeStatus,
              changeIsHidden, 
              toggleSetDateComp,
              toggleSetStatusComp,
              toggleCurrentPage} = appSlice.actions;

export default appSlice.reducer;

