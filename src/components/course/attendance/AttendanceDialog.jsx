/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import AttendanceTable from "./AttendanceTable";

AttendanceDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function AttendanceDialog({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="xl"
      className="rounded-3xl md:p-6 p-4"
    >
      <DialogHeader className="md:px-4 px-0 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="md:text-3xl text-2xl text-black">Attendance</h2>
          <IconButton variant="text" onClick={onClose}>
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
      <DialogBody className="md:px-4 px-0 py-2">
        <AttendanceTable />
      </DialogBody>
    </Dialog>
  );
}

export default AttendanceDialog;
