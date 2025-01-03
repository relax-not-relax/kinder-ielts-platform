/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import TutorSelector from "./TutorSelector";

ClassTimeTable.propTypes = {};

const TABLE_HEAD = ["Buổi", "Thứ", "Ngày", "Thời gian", "Nội dung", "Tutor"];

const TABLE_ROWS = [
  {
    day: "Thứ 2",
    dateTime: "12/12/2024",
    time: "18:00 - 19:30",
    content: "Writing",
    tutor: "Minh Khuê / Quốc Dũng",
  },
  {
    day: "Thứ 2",
    dateTime: "19/12/2024",
    time: "18:00 - 19:30",
    content: "Writing",
    tutor: "Minh Khuê",
  },
  {
    day: "Thứ 2",
    dateTime: "26/12/2024",
    time: "18:00 - 19:30",
    content: "Writing",
    tutor: "Minh Khuê",
  },
  {
    day: "Thứ 2",
    dateTime: "02/01/2025",
    time: "18:00 - 19:30",
    content: "Writing",
    tutor: "Minh Khuê",
  },
  {
    day: "Thứ 2",
    dateTime: "09/01/2025",
    time: "18:00 - 19:30",
    content: "Writing",
    tutor: "Minh Khuê",
  },
];

function ClassTimeTable(props) {
  return (
    <div className="h-full w-full overflow-x-scroll no-scrollbar">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b-2 border-black px-4 py-2">
                <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs">
                  {head}
                </h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ day, dateTime, time, content, tutor }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {day}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dateTime}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {content}
                  </Typography>
                </td>
                <td className={`${classes} w-96 max-w-96 h-auto`}>
                  {/* Hiển thị tên của tutors theo buổi học (tutor view) */}
                  {/* <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {tutor}
                  </Typography> */}

                  {/* Hiển thị lựa chọn tutor cho buổi học (admin view) */}
                  <TutorSelector />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTimeTable;
