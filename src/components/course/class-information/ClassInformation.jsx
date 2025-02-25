/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  IconButton,
} from "@material-tailwind/react";
import LessonDetails from "./LessonDetails";
import { useDispatch } from "react-redux";
import { setTakeAttendanceDialog } from "../../../store/slices/takeAttendanceDialogSlice";
import TakeAttendanceDialog from "./take-attendance/TakeAttendanceDialog";
import { useAtom } from "jotai";
import { scheduleSelectedAtom } from "../../../store/mocks/scheduleAtom";

ClassInformation.propTypes = {
  schedules: PropTypes.array.isRequired,
};

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

function Icon({ id, open }) {
  const dispatch = useDispatch();
  const handleOpenTakeAttendance = () => {
    dispatch(setTakeAttendanceDialog({ isOpen: true, id }));
  };

  return (
    <div className="flex flex-row items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
      <IconButton className="bg-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="h-6 w-6"
          fill="#159E64"
          onClick={handleOpenTakeAttendance}
        >
          <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
        </svg>
      </IconButton>
    </div>
  );
}

export function ClassInformation({ schedules }) {
  const [open, setOpen] = React.useState(0);
  const [scheduleSelected, setScheduleSelected] = useAtom(scheduleSelectedAtom);

  const handleOpen = (value, selected) => {
    setOpen(open === value ? 0 : value);
    setScheduleSelected(selected);
  };

  return (
    <div className="mt-6 md:px-8 px-4">
      <div className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15">
        <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
          Thông tin khóa học
        </h4>
        <IconButton className="bg-white rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="h-6 w-6"
            fill="#159E64"
          >
            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
          </svg>
        </IconButton>
      </div>
      {schedules.map((schedule, index) => {
        return (
          <Accordion
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            key={index + 1}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1, schedule)}
              className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15"
            >
              <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
                {scheduleSelected && scheduleSelected.id === schedule.id
                  ? scheduleSelected.title
                  : schedule.title}
              </h4>
            </AccordionHeader>
            <AccordionBody>
              {scheduleSelected && scheduleSelected.id === schedule.id ? (
                <LessonDetails schedule={scheduleSelected} />
              ) : (
                <></>
              )}
            </AccordionBody>
          </Accordion>
        );
      })}
      {/* <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15"
        >
          <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
            1. How to Write a Paragraph
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <LessonDetails />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15"
        >
          <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
            2. Writing short responses to given prompts
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <LessonDetails />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15"
        >
          <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
            3. Vocabulary building for writing tasks
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <LessonDetails />
        </AccordionBody>
      </Accordion> */}
      <div className="px-4 py-3 w-full flex flex-row justify-between items-center bg-[#CECECE]">
        <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
          Add new block
        </h4>
        <IconButton className="rounded-xl" variant="text">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </IconButton>
      </div>

      <TakeAttendanceDialog />
    </div>
  );
}
