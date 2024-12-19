import { configureStore } from "@reduxjs/toolkit";
import progressDialogReducer from "./slices/progressDialogSlice";
import takeAttendanceDialogReducer from "./slices/takeAttendanceDialogSlice";

const store = configureStore({
  reducer: {
    progressDialog: progressDialogReducer,
    takeAttendanceDialog: takeAttendanceDialogReducer,
  },
});

export default store;
