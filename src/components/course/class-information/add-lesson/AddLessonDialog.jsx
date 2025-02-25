/* eslint-disable no-unused-vars */
import React from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Option,
  Select,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import ClassroomAddForm from "./ClassroomAddForm";
import WarmUpTestAddForm from "./WarmUpTestAddForm";
import HomeworkAddForm from "./HomeworkAddForm";
import MaterialsAddForm from "./MaterialsAddForm";

AddLessonDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function AddLessonDialog({ isOpen, onClose }) {
  const [value, setValue] = React.useState("Classroom link");
  const [addForm, setAddForm] = React.useState(null);

  React.useEffect(() => {
    switch (value) {
      case "Classroom link":
        setAddForm(<ClassroomAddForm onClose={onClose} />);
        break;
      case "Warm-up test":
        setAddForm(<WarmUpTestAddForm onClose={onClose} />);
        break;
      case "Homework":
        setAddForm(<HomeworkAddForm onClose={onClose} />);
        break;
      case "Materials":
        setAddForm(<MaterialsAddForm onClose={onClose} />);
        break;
      default:
        setAddForm(null);
    }
  }, [onClose, value]);

  return (
    <Dialog open={isOpen} size="xs" className="rounded-3xl md:p-6 p-4">
      <DialogHeader className="md:px-4 px-0 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="md:text-3xl text-2xl text-black">
            Add lesson details
          </h2>
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
      <DialogBody className="md:px-4 px-0 py-0">
        <div className="w-full mt-4 flex flex-col gap-y-4">
          <Select
            label="Chọn dữ liệu buổi học"
            value={value}
            onChange={(val) => setValue(val)}
          >
            <Option value="Classroom link">Classroom link</Option>
            <Option value="Warm-up test">Warm-up test</Option>
            <Option value="Homework">Homework</Option>
            <Option value="Materials">Materials</Option>
          </Select>
          {addForm}
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default AddLessonDialog;
