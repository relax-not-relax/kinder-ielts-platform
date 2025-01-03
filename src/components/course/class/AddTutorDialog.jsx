/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Option,
  Select,
} from "@material-tailwind/react";
import { addTutor } from "../../../store/slices/tutorsSlice";

AddTutorDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addTutor: PropTypes.func.isRequired,
};

function AddTutorDialog({ isOpen, onClose, addTutor }) {
  const tutorOptions = [
    { value: "minh-khue", label: "Minh Khuê" },
    { value: "quoc-dung", label: "Quốc Dũng" },
    { value: "tutor-1", label: "Tutor 1" },
    { value: "tutor-2", label: "Tutor 2" },
  ];

  const [currentSelect, setCurrentSelect] = React.useState("");
  return (
    <Dialog open={isOpen} className="rounded-3xl md:p-6 p-4" size="xs">
      <DialogHeader className="md:px-4 px-0 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="md:text-3xl text-2xl text-black">Add tutor</h2>
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
      <DialogBody>
        {/* Select để thêm tutor */}
        <Select
          value={currentSelect}
          label="Select tutor"
          onChange={(e) => {
            setCurrentSelect(e);
            addTutor(e);
            onClose();
          }}
        >
          {tutorOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </DialogBody>
    </Dialog>
  );
}

export default AddTutorDialog;
