import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  value: boolean;
}

const initialState: InitialState = {
  value: false,
};

const pwdSlice = createSlice({
  name: 'forgotPwd',
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.value = !state.value;
    },
  },
});

export default pwdSlice;
export const { toggleOn } = pwdSlice.actions;
