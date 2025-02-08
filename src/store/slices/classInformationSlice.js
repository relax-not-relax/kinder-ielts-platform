import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: null,
};

const classInformationSlice = createSlice({
  name: "classInformation",
  initialState,
  reducers: {
    setClassInformation: (state, action) => {
      state.information = action.payload;
    },
  },
});

export const { setClassInformation } = classInformationSlice.actions;
export default classInformationSlice.reducer;
