import { configureStore } from "@reduxjs/toolkit";
import progressDialogReducer from "./slices/progressDialogSlice";
import takeAttendanceDialogReducer from "./slices/takeAttendanceDialogSlice";
import tutorsReducer from "./slices/tutorsSlice";
import loginStateReducer from "./slices/loginStateSlice";
import classInformationReducer from "./slices/classInformationSlice";

const store = configureStore({
  reducer: {
    progressDialog: progressDialogReducer,
    takeAttendanceDialog: takeAttendanceDialogReducer,
    tutors: tutorsReducer,
    loginState: loginStateReducer,
    classInformation: classInformationReducer,
  },
});

export default store;
