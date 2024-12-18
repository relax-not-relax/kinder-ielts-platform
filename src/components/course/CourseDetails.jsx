/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { ClassInformation } from "./class-information/ClassInformation";
import AllMyCourse from "./course-management/AllMyCourse";
import AcademicArticle from "./article/AcademicArticle";
import MangeClassDialog from "./class/MangeClassDialog";
import AttendanceDialog from "./attendance/AttendanceDialog";
import ProgressionDialog from "./progression/ProgressionDialog";

CourseDetails.propTypes = {};

function CourseDetails(props) {
  const [openManageClass, setOpenManageClass] = React.useState(false);
  const handleOpenManageClass = () => setOpenManageClass(true);
  const handleCloseManageClass = () => setOpenManageClass(false);

  const [openAttendance, setOpenAttendance] = React.useState(false);
  const handleOpenAttendance = () => setOpenAttendance(true);
  const handleCloseAttendance = () => setOpenAttendance(false);

  const [openProgression, setOpenProgression] = React.useState(false);
  const handleOpenProgression = () => setOpenProgression(true);
  const handleCloseProgression = () => setOpenProgression(false);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row justify-start items-center gap-x-2 px-8">
        <Button
          variant="outlined"
          className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenManageClass}
        >
          Manage class
        </Button>
        <Button
          variant="outlined"
          className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenAttendance}
        >
          Attendance
        </Button>
        <Button
          variant="outlined"
          className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenProgression}
        >
          Progression
        </Button>
      </div>
      <ClassInformation />
      <AllMyCourse />
      <AcademicArticle />

      <MangeClassDialog
        isOpen={openManageClass}
        onClose={handleCloseManageClass}
      />
      <AttendanceDialog
        isOpen={openAttendance}
        onClose={handleCloseAttendance}
      />
      <ProgressionDialog
        isOpen={openProgression}
        onClose={handleCloseProgression}
      />
    </div>
  );
}

export default CourseDetails;
