import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  searchText: string;
}
const initialState: InitialState = {
  searchText: "",
};
export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});
export const { setSearchText } = SearchSlice.actions;
export default SearchSlice.reducer;
