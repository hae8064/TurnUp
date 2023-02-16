import { configureStore } from '@reduxjs/toolkit';
import pwdSlice from './pwdSlice';

const store = configureStore({
  reducer: {
    pwdForgot: pwdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
