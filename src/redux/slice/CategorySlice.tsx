import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  category: string;
}
const initialState: InitialState = {
  category: "Top Rated",
};
export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});
export const { changeCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
