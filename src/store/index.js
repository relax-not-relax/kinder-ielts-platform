import { configureStore } from "@reduxjs/toolkit";
import progressDialogReducer from "./slices/progressDialogSlice";
import takeAttendanceDialogReducer from "./slices/takeAttendanceDialogSlice";
import tutorsReducer from "./slices/tutorsSlice";
import loginStateReducer from "./slices/loginStateSlice";

const store = configureStore({
  reducer: {
    progressDialog: progressDialogReducer,
    takeAttendanceDialog: takeAttendanceDialogReducer,
    tutors: tutorsReducer,
    loginState: loginStateReducer,
  },
});

export default store;
