/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";
import ClassroomLink from "./ClassroomLink";
import WarmUpTestLink from "./WarmUpTestLink";
import HomeworkLink from "./HomeworkLink";
import MaterialFiles from "./MaterialFiles";
import AddLessonDialog from "./add-lesson/AddLessonDialog";

LessonDetails.propTypes = {};

function LessonDetails(props) {
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const handleOpenAddDialog = () => setOpenAddDialog(true);
  const handleCloseAddDialog = () => setOpenAddDialog(false);

  return (
    <div className="w-full flex flex-col px-4">
      <div className="flex md:flex-row flex-col justify-between items-start pb-4">
        <div>
          <h4 className="md:text-lg text-base font-semibold text-black mb-1">
            Objectives:
          </h4>
          <ol className="list-decimal ps-4 text-black font-normal md:text-base text-sm">
            <li>
              To help students understand how to structure an essay paragraph.
            </li>
            <li>
              To give students a sample of an effective IELTS Writing paragraph.
            </li>
            <li>
              To familiarize students with elaborating central ideasusing
              explanation and examples.
            </li>
          </ol>
        </div>
        <div className="flex flex-row items-center">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#159E64"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          </IconButton>
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#159E64"
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Classroom link section */}
      <ClassroomLink />

      {/* Warm-up test link section */}
      <WarmUpTestLink />

      {/* Homework link section */}
      <HomeworkLink />

      {/* Material files section */}
      <MaterialFiles />

      {/* Add button */}
      <IconButton
        variant="text"
        className="w-5 h-5 hover:bg-transparent mt-4"
        onClick={handleOpenAddDialog}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#159E64"
        >
          <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </IconButton>
      <AddLessonDialog isOpen={openAddDialog} onClose={handleCloseAddDialog} />
    </div>
  );
}

export default LessonDetails;
