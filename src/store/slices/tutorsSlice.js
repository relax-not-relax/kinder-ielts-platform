import { createSlice } from "@reduxjs/toolkit";

const tutorOptions = [
  { value: "minh-khue", label: "Minh Khuê" },
  { value: "quoc-dung", label: "Quốc Dũng" },
  { value: "tutor-1", label: "Tutor 1" },
  { value: "tutor-2", label: "Tutor 2" },
];

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: {
    tutorOptions,
    selectedTutors: [{ value: "minh-khue", label: "Minh Khuê" }],
  },
  reducers: {
    addTutor: (state, action) => {
      const tutor = state.tutorOptions.find((t) => t.value === action.payload);
      if (tutor && !state.selectedTutors.some((t) => t.value === tutor.value)) {
        state.selectedTutors.push(tutor);
      }
    },
    removeTutor: (state, action) => {
      state.selectedTutors = state.selectedTutors.filter(
        (t) => t.value !== action.payload
      );
    },
  },
});

export const { addTutor, removeTutor } = tutorsSlice.actions;
export default tutorsSlice.reducer;
