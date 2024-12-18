/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import ProgressionInformation from "./ProgressionInformation";

ProgressionDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function ProgressionDialog({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="xl"
      className="rounded-3xl p-6"
    >
      <DialogHeader className="px-4 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-3xl text-black">Progression</h2>
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
      <DialogBody className="px-4 py-2">
        <p className="pb-4 text-base text-black font-semibold">
          Quản lý tiến độ và bài tập của bạn.
        </p>
        <ProgressionInformation />
      </DialogBody>
    </Dialog>
  );
}

export default ProgressionDialog;
