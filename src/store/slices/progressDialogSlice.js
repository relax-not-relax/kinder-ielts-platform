import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const progressDialogSlice = createSlice({
  name: "progressDialog",
  initialState,
  reducers: {
    toggleProgressDialog: (state) => {
      state.value = !state.value;
    },
    setProgressDialog: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleProgressDialog, setProgressDialog } =
  progressDialogSlice.actions;
export default progressDialogSlice.reducer;
