import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedId: null,
};

const takeAttendanceDialogSlice = createSlice({
  name: "takeAttendanceDialog",
  initialState,
  reducers: {
    setTakeAttendanceDialog: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.selectedId = action.payload.id;
    },
  },
});

export const { setTakeAttendanceDialog } = takeAttendanceDialogSlice.actions;
export default takeAttendanceDialogSlice.reducer;
