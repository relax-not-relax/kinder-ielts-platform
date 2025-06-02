/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgressDialog } from "../../store/slices/progressDialogSlice";
import AcademicArticle from "./article/AcademicArticle";
import AttendanceDialog from "./attendance/AttendanceDialog";
import { ClassInformation } from "./class-information/ClassInformation";
import MangeClassDialog from "./class/MangeClassDialog";
import AllMyCourse from "./course-management/AllMyCourse";
import ProgressionDialog from "./progression/ProgressionDialog";

CourseDetails.propTypes = {};

function CourseDetails() {
  const [openManageClass, setOpenManageClass] = React.useState(false);
  const handleOpenManageClass = () => setOpenManageClass(true);
  const handleCloseManageClass = () => setOpenManageClass(false);

  const [openAttendance, setOpenAttendance] = React.useState(false);
  const handleOpenAttendance = () => setOpenAttendance(true);
  const handleCloseAttendance = () => setOpenAttendance(false);

  const dispatch = useDispatch();
  const courseInfo = useSelector((state) => state.classInformation.information);

  const handleOpenProgression = () => {
    dispatch(setProgressDialog(true));
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row justify-start items-center gap-x-2 md:px-8 px-4 lg:py-0 py-4">
        <Button
          variant="outlined"
          className="rounded-full normal-case sm:px-4 px-1 py-2 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenManageClass}
        >
          Manage class
        </Button>
        <Button
          variant="outlined"
          className="rounded-full normal-case sm:px-4 px-1 py-2 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenAttendance}
        >
          Attendance
        </Button>
        <Button
          variant="outlined"
          className="rounded-full normal-case sm:px-4 px-1 py-2 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
          onClick={handleOpenProgression}
        >
          Progression
        </Button>
      </div>
      <ClassInformation
        schedules={courseInfo?.detailInfo?.studySchedules ?? []}
      />
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
      <ProgressionDialog />
    </div>
  );
}

export default CourseDetails;
