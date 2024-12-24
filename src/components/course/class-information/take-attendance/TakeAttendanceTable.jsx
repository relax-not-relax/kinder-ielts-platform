/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Button, Option, Select, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setProgressDialog } from "../../../../store/slices/progressDialogSlice";
import { setTakeAttendanceDialog } from "../../../../store/slices/takeAttendanceDialogSlice";

TakeAttendanceTable.propTypes = {};

const TABLE_HEAD = ["Name", "Status", "Assignment", "Note"];

const TABLE_ROWS = [
  {
    name: "Nguyễn Hải Anh",
    status: "Absent",
    assignment: false,
    note: "",
  },
  {
    name: "Bùi Anh Dương",
    status: "Present",
    assignment: false,
    note: "Chưa hoàn thành assignment",
  },
  {
    name: "Nguyễn Trần Trọng Đức",
    status: "Present",
    assignment: false,
    note: "Chưa hoàn thành assignment",
  },
  {
    name: "Đỗ Minh Khuê",
    status: "Present",
    assignment: true,
    note: "",
  },
  {
    name: "Bùi Đức Thiện",
    status: "Present",
    assignment: true,
    note: "",
  },
];

function TakeAttendanceTable(props) {
  const [absenceStatuses, setAbsenceStatuses] = React.useState(
    TABLE_ROWS.map((row) => row.status)
  );

  const selectedId = useSelector(
    (state) => state.takeAttendanceDialog.selectedId
  );

  const handleStatusChange = (index, newStatus) => {
    setAbsenceStatuses((prev) => {
      const updatedStatuses = [...prev];
      updatedStatuses[index] = newStatus;
      return updatedStatuses;
    });
  };

  const dispatch = useDispatch();
  const handleOpenProgression = () => {
    dispatch(setProgressDialog(true));
    dispatch(
      setTakeAttendanceDialog({ isOpen: false, selectedId: selectedId })
    );
  };

  return (
    <div>
      <div className="h-full w-full overflow-x-scroll no-scrollbar">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`border-b-2 border-black py-2 ${
                    head === "Name" ? "" : "px-8"
                  }`}
                >
                  <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs">
                    {head}
                  </h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, status, assignment, note }, index) => {
              const classes = "py-4 border-b border-b-blue-gray-50";
              let classesAbsence = "";
              switch (absenceStatuses[index]) {
                case "Present":
                  classesAbsence = "text-custom-green";
                  break;
                case "Absent":
                  classesAbsence = "text-[#D92323]";
                  break;
                case "Late":
                  classesAbsence = "text-[#EBA612]";
                  break;
                default:
                  classesAbsence = "text-green";
              }
              return (
                <tr key={index}>
                  <td className={`${classes} border-e-2 border-e-black w-64`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-base"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} px-8 w-48`}>
                    <div className="w-full">
                      <select
                        className={`no-chevron ${classesAbsence} font-medium`}
                        value={absenceStatuses[index]}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                      </select>
                    </div>
                  </td>
                  <td className={`${classes} w-72`}>
                    <Button
                      className="flex items-center gap-3 py-0"
                      variant="text"
                      disabled={!assignment}
                      onClick={handleOpenProgression}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill={`${assignment ? "black" : "gray"}`}
                      >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H560v-160H240v640Zm240-40q67 0 113.5-47T640-360v-160h-80v160q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v220h80v-220q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM240-800v160-160 640-640Z" />
                      </svg>
                      <span
                        className={`${
                          assignment ? "text-black" : "text-gray-500"
                        } normal-case text-base font-medium underline`}
                      >
                        See more
                      </span>
                    </Button>
                  </td>
                  <td className={`${classes} px-8`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-base"
                    >
                      {note ? note : "NA"}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TakeAttendanceTable;
