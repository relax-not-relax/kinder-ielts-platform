/* eslint-disable no-unused-vars */
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import FileUpload from "./FileUpload";

HomeworkDetailsDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function HomeworkDetailsDialog({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      size="xl"
      className="rounded-3xl p-6 no-scrollbar overflow-y-scroll h-[800px]"
    >
      <DialogHeader className="px-4 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-3xl text-black">Add submission</h2>
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
        <div className="flex flex-row justify-start items-start gap-x-24 mb-4">
          <div className="flex flex-col">
            <h4 className="text-xl text-custom-green font-bold">Homework 01</h4>
            <p className="text-base text-custom-green font-medium">
              Uploaded by Tutor Minh Khuê
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-base">
              After writing, students exchange their work and provide feedback.
            </p>
            <p className="text-black text-base">
              Due date: Sunday, 19 November 2024, 12:00 AM{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 divide-x-2 divide-black">
          <div className="flex flex-col">
            <p className="text-black text-xl font-bold">From</p>
            <div className="mt-6">
              <p className="text-black text-3xl font-bold">09:00 PM</p>
              <p className="text-black text-4xl font-bold">12 November 2024</p>
            </div>
          </div>
          <div className="flex flex-col ps-12">
            <p className="text-custom-red text-xl font-bold">To</p>
            <div className="mt-6">
              <p className="text-custom-red text-3xl font-bold">12:00 AM</p>
              <p className="text-custom-red text-4xl font-bold">
                19 November 2024
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-black font-semibold">Your submission</p>
        <div className="grid grid-cols-2 gap-4 py-4">
          <FileUpload />
          <div className="w-full flex flex-col">
            <p className="text-sm text-black font-medium mb-2">
              Enter text manually
            </p>
            <Textarea label="Type in your assignment here" className="h-96" />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button className="mr-4 rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white">
          <span className="normal-case text-lg">Save changes</span>
        </Button>
        <Button className="text-black rounded-full bg-gray-400 py-1 hover:bg-custom-red hover:text-white">
          <span className="normal-case text-lg">Cancel changes</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default HomeworkDetailsDialog;
