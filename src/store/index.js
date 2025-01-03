import { configureStore } from "@reduxjs/toolkit";
import progressDialogReducer from "./slices/progressDialogSlice";
import takeAttendanceDialogReducer from "./slices/takeAttendanceDialogSlice";
import tutorsReducer from "./slices/tutorsSlice";

const store = configureStore({
  reducer: {
    progressDialog: progressDialogReducer,
    takeAttendanceDialog: takeAttendanceDialogReducer,
    tutors: tutorsReducer,
  },
});

export default store;
