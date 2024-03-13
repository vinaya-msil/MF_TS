// store.ts
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
// import yourReducer from './path-to-your-reducer';

const store = configureStore({
  reducer: {
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
