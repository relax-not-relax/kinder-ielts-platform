/* eslint-disable no-unused-vars */
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

CancelTakeAttendanceDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function CancelTakeAttendanceDialog({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      dismiss={{ outsidePress: false }}
      size="xs"
      className="rounded-3xl py-6 px-8"
    >
      <DialogHeader className="px-4 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-3xl text-black">Cancel changes</h2>
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
      <DialogBody className="px-4 py-3">
        <p className="text-black font-medium">
          Are you sure you want to cancel? <br /> Any unsaved changes will be
          lost.
        </p>
      </DialogBody>
      <DialogFooter className="w-full flex flex-row gap-x-4 justify-between items-center">
        <Button className="rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white w-[60%] flex-none">
          <span className="normal-case text-lg">Yes, cancel</span>
        </Button>
        <Button className="text-black rounded-full bg-gray-400 py-1 px-2 hover:bg-custom-red hover:text-white grow">
          <span className="normal-case text-lg">Keep editing</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default CancelTakeAttendanceDialog;
