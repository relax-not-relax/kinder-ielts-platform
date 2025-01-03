/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Chip, IconButton, Option, Select } from "@material-tailwind/react";
import AddTutorDialog from "./AddTutorDialog";

TutorSelector.propTypes = {};

function TutorSelector(props) {
  const tutorOptions = [
    { value: "minh-khue", label: "Minh Khuê" },
    { value: "quoc-dung", label: "Quốc Dũng" },
    { value: "tutor-1", label: "Tutor 1" },
    { value: "tutor-2", label: "Tutor 2" },
  ];

  // State lưu trữ danh sách đã chọn
  const [selectedTutors, setSelectedTutors] = React.useState([
    { value: "minh-khue", label: "Minh Khuê" },
  ]);

  // State lưu trữ giá trị select hiện tại
  const [currentSelect, setCurrentSelect] = React.useState("");

  // Thêm một tutor vào danh sách
  const handleAddTutor = (selected) => {
    if (selected) {
      const tutor = tutorOptions.find((t) => t.value === selected);
      if (tutor && !selectedTutors.some((t) => t.value === tutor.value)) {
        setSelectedTutors([...selectedTutors, tutor]);
      }
    }
  };

  // Xóa một tutor khỏi danh sách
  const handleRemoveTutor = (value) => {
    setSelectedTutors(selectedTutors.filter((t) => t.value !== value));
  };

  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const handleOpenAddDialog = () => setOpenAddDialog(true);
  const handleCloseAddDialog = () => setOpenAddDialog(false);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-start gap-3">
        {selectedTutors.map((tutor) => (
          <div key={tutor.value}>
            <Chip
              open={true}
              value={tutor.label}
              onClose={() => handleRemoveTutor(tutor.value)}
              color="green"
            />
          </div>
        ))}

        <IconButton
          size="sm"
          color="green"
          variant="outlined"
          onClick={handleOpenAddDialog}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </IconButton>
      </div>
      <AddTutorDialog
        isOpen={openAddDialog}
        onClose={handleCloseAddDialog}
        addTutor={handleAddTutor}
      />
    </div>
  );
}

export default TutorSelector;
