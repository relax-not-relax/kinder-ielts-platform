/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setTakeAttendanceDialog } from "../../../../store/slices/takeAttendanceDialogSlice";
import TakeAttendanceTable from "./TakeAttendanceTable";
import ConfirmTakeAttendanceDialog from "./ConfirmTakeAttendanceDialog";
import CancelTakeAttendanceDialog from "./CancelTakeAttendanceDialog";

TakeAttendanceDialog.propTypes = {};

function TakeAttendanceDialog() {
  const { isOpen, selectedId } = useSelector(
    (state) => state.takeAttendanceDialog
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setTakeAttendanceDialog({ isOpen: false, selectedId: selectedId })
    );
  };

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  const [openCancel, setOpenCancel] = React.useState(false);
  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = () => setOpenCancel(false);

  return (
    <div>
      <Dialog
        open={isOpen}
        dismiss={{ outsidePress: false }}
        size="xl"
        className="rounded-3xl p-6"
      >
        <DialogHeader className="px-4 pt-0 pb-0">
          <div className="w-full flex flex-row justify-between items-center">
            <h2 className="text-3xl text-black">
              Attendance{" "}
              <span className="text-gray-500">
                Session: B{selectedId}(09/01){" "}
                <span className="text-xl">18:00 - 19:30</span>{" "}
              </span>{" "}
            </h2>
            <IconButton variant="text" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </DialogHeader>
        <DialogBody className="px-4 py-2">
          <TakeAttendanceTable />
        </DialogBody>
        <DialogFooter>
          <Button
            className="mr-4 rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white"
            onClick={handleOpenConfirm}
          >
            <span className="normal-case text-lg">Save changes</span>
          </Button>
          <Button
            className="text-black rounded-full bg-gray-400 py-1 hover:bg-custom-red hover:text-white"
            onClick={handleOpenCancel}
          >
            <span className="normal-case text-lg">Cancel changes</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <ConfirmTakeAttendanceDialog
        isOpen={openConfirm}
        onClose={handleCloseConfirm}
      />
      <CancelTakeAttendanceDialog
        isOpen={openCancel}
        onClose={handleCloseCancel}
      />
    </div>
  );
}

export default TakeAttendanceDialog;
