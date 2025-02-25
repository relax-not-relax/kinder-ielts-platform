import { atom } from "jotai";
import { enqueueSnackbar } from "notistack";
import classAPI from "../../api/classApi";

export const scheduleSelectedAtom = atom(null);

export const isRefreshingScheduleAtom = atom(false);

export const readRefreshScheduleAtom = atom(
  (get) => get(scheduleSelectedAtom),
  async (get, set) => {
    const scheduleSelected = get(scheduleSelectedAtom);
    if (!scheduleSelected) return;
    set(isRefreshingScheduleAtom, true);
    try {
      const res = await classAPI.getStudyScheduleById(scheduleSelected.id);
      set(scheduleSelectedAtom, res.data);

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar("LỖI! Không tải được buổi học!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } finally {
      set(isRefreshingScheduleAtom, false);
    }
  }
);
