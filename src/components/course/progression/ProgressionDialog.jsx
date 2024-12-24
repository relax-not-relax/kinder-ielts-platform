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
import { useDispatch, useSelector } from "react-redux";
import { setProgressDialog } from "../../../store/slices/progressDialogSlice";

ProgressionDialog.propTypes = {};

function ProgressionDialog() {
  const openProgression = useSelector((state) => state.progressDialog.value);
  const dispatch = useDispatch();

  const handleCloseProgression = () => {
    dispatch(setProgressDialog(false));
  };
  return (
    <Dialog
      open={openProgression}
      size="xl"
      className="rounded-3xl md:p-6 p-4 xl:max-h-[800px] max-h-[600px] overflow-y-scroll no-scrollbar"
    >
      <DialogHeader className="md:px-4 px-0 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="md:text-3xl text-2xl text-black">Progression</h2>
          <IconButton variant="text" onClick={handleCloseProgression}>
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
        <p className="pb-4 md:text-base text-sm text-black font-semibold">
          Quản lý tiến độ và bài tập của bạn.
        </p>
        <ProgressionInformation />
      </DialogBody>
    </Dialog>
  );
}

export default ProgressionDialog;
