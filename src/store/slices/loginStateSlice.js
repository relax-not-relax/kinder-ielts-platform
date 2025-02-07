import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loginStateSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoginState } = loginStateSlice.actions;
export default loginStateSlice.reducer;
