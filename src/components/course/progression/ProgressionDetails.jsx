/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ProgressionDetailsTable from "./ProgressionDetailsTable";
import formatDeadlineDate from "../../../utils/formatDeadlineDate";

ProgressionDetails.propTypes = {
  homeworkList: PropTypes.array.isRequired,
};

const HOMEWORKS = [
  {
    name: "Homework 01",
    description:
      "After writing, students exchange their work and provide feedback.",
    deadline: "Sunday, 13 August 2023, 12:00 AM",
  },
  {
    name: "Homework 02",
    description:
      "After writing, students exchange their work and provide feedback.",
    deadline: "Sunday, 13 August 2023, 12:00 AM",
  },
];

function ProgressionDetails({ homeworkList }) {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-y-4 pb-4">
        {homeworkList.map((homework, index) => {
          return (
            <div key={index} className="flex flex-row items-start gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#159E64"
                className="flex-none"
              >
                <path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" />
              </svg>
              <div className="flex flex-col gap-y-1">
                <a
                  href={homework.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-lg sm:text-base text-sm text-custom-green font-semibold text-black"
                >
                  {homework.title}
                </a>
                <div className="text-black md:text-base text-sm font-medium">
                  <p>{homework.description}</p>
                  <p>Due date: {formatDeadlineDate(homework.dueDate)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ProgressionDetailsTable homeworks={HOMEWORKS} />
    </div>
  );
}

export default ProgressionDetails;
