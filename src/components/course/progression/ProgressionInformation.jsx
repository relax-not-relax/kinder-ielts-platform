/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  IconButton,
} from "@material-tailwind/react";
import ProgressionDetails from "./ProgressionDetails";
import { useSelector } from "react-redux";

ProgressionInformation.propTypes = {};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

function Icon({ id, open }) {
  return (
    <div>
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
    </div>
  );
}

function ProgressionInformation(props) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const classInfo = useSelector((state) => state.classInformation.information);

  return (
    <div>
      {classInfo.detailInfo.studySchedules.map((schedule, index) => {
        return (
          <Accordion
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            key={index + 1}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="p-4 w-full flex flex-row justify-between items-center bg-custom-green/15"
            >
              <h4 className="xl:text-lg lg:text-base md:text-lg sm:text-base text-sm font-semibold">
                {schedule.title}
              </h4>
            </AccordionHeader>
            <AccordionBody>
              <ProgressionDetails
                homeworkList={schedule.detailInfo.homeworks}
              />
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
}

export default ProgressionInformation;
