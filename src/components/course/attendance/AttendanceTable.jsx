/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

AttendanceTable.propTypes = {};

const TABLE_HEAD = ["Name", "D.O.B", "Email", "Absence", "Note"];

const TABLE_ROWS = [
  {
    name: "Nguyễn Hải Anh",
    dob: "17/10/2003",
    email: "anh.ng@gmail.com",
    absence: [
      {
        date: "B1 (12/12)",
        status: "Absent",
      },
      {
        date: "B2 (19/12)",
        status: "Present",
      },
      {
        date: "B3 (26/12)",
        status: "Present",
      },
      {
        date: "B4 (02/01)",
        status: "Late",
      },
      {
        date: "B5 (09/01)",
        status: "",
      },
    ],
    note: ["B1: lỗi mạng"],
  },
  {
    name: "Bùi Anh Dương",
    dob: "03/10/2003",
    email: "duong.2312@gmail.com",
    absence: [
      {
        date: "B1 (12/12)",
        status: "Present",
      },
      {
        date: "B2 (19/12)",
        status: "Late",
      },
      {
        date: "B3 (26/12)",
        status: "Present",
      },
      {
        date: "B4 (02/01)",
        status: "Present",
      },
      {
        date: "B5 (09/01)",
        status: "",
      },
    ],
    note: [],
  },
  {
    name: "Nguyễn Trần Trọng Đức",
    dob: "12/07/2004",
    email: "duc.ntt@gmail.com",
    absence: [
      {
        date: "B1 (12/12)",
        status: "Present",
      },
      {
        date: "B2 (19/12)",
        status: "Late",
      },
      {
        date: "B3 (26/12)",
        status: "Present",
      },
      {
        date: "B4 (02/01)",
        status: "Present",
      },
      {
        date: "B5 (09/01)",
        status: "",
      },
    ],
    note: [],
  },
  {
    name: "Đỗ Minh Khuê",
    dob: "01/12/2003",
    email: "minhkhuye1202@gmail.com",
    absence: [
      {
        date: "B1 (12/12)",
        status: "Present",
      },
      {
        date: "B2 (19/12)",
        status: "Absent",
      },
      {
        date: "B3 (26/12)",
        status: "Absent",
      },
      {
        date: "B4 (02/01)",
        status: "Present",
      },
      {
        date: "B5 (09/01)",
        status: "",
      },
    ],
    note: ["B2: kẹt lịch cá nhân", "B3: --"],
  },
  {
    name: "Bùi Đức Thiện",
    dob: "05/09/2002",
    email: "dthien.b2122@gmail.com",
    absence: [
      {
        date: "B1 (12/12)",
        status: "Present",
      },
      {
        date: "B2 (19/12)",
        status: "Present",
      },
      {
        date: "B3 (26/12)",
        status: "Present",
      },
      {
        date: "B4 (02/01)",
        status: "Present",
      },
      {
        date: "B5 (09/01)",
        status: "",
      },
    ],
    note: [],
  },
];

function AttendanceTable(props) {
  return (
    <div className="h-full w-full flex flex-row justify-start items-start overflow-x-scroll no-scrollbar">
      <div className="flex-none flex flex-col xl:w-64 w-48">
        <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs mb-2">
          Name
        </h3>
        <div className="w-auto h-8 bg-black"></div>
        {TABLE_ROWS.map(({ name }) => {
          return (
            <div
              className="h-12 border-b border-blue-gray-50 flex items-center"
              key={name}
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {name}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="flex-none flex flex-col w-24">
        <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs mb-2">
          D.O.B
        </h3>
        <div className="w-auto h-8 bg-black"></div>

        {TABLE_ROWS.map(({ dob }) => {
          return (
            <div
              className="h-12 border-b border-blue-gray-50 flex items-center"
              key={dob}
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {dob}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="flex-none flex flex-col xl:w-56 w-36">
        <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs mb-2">
          Email
        </h3>
        <div className="w-auto h-8 bg-black"></div>
        <div className="border-e-2 border-black">
          {TABLE_ROWS.map(({ email }) => {
            return (
              <div
                className="h-12 border-b border-blue-gray-50 flex items-center overflow-x-scroll no-scrollbar"
                key={email}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {email}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-none flex flex-col lg:w-96 w-48">
        <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs mb-2">
          Absence
        </h3>
        <div className="w-full overflow-x-scroll no-scrollbar">
          <table>
            <thead className="h-8 border-t-2 border-b-2 border-black">
              <tr className="h-8">
                {TABLE_ROWS[0].absence.map(({ date }) => {
                  return (
                    <th key={date}>
                      <h3 className="font-semibold text-black leading-none text-lg w-28">
                        {date}
                      </h3>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ absence, name }) => {
                return (
                  <tr key={name}>
                    {absence.map((val) => {
                      let classes = "";
                      switch (val.status) {
                        case "Present":
                          classes = "text-custom-green";
                          break;
                        case "Absent":
                          classes = "text-[#D92323]";
                          break;
                        case "Late":
                          classes = "text-[#EBA612]";
                          break;
                        default:
                          classes = "text-green";
                      }
                      return (
                        <td
                          className="h-12 px-4 border-b border-blue-gray-50"
                          key={val.date}
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={`font-normal ${classes}`}
                          >
                            {val.status}
                          </Typography>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:grow flex-none w-40 flex flex-col">
        <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs mb-2">
          Note
        </h3>
        <div className="w-auto h-8 bg-black"></div>
        <div className="border-x-2 border-black">
          {TABLE_ROWS.map(({ note }) => {
            return (
              <div
                key={note}
                className="w-full flex justify-start items-start h-12 px-2 border-b border-blue-gray-50 overflow-y-scroll no-scrollbar"
              >
                {note.length === 0 && (
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    --
                  </Typography>
                )}
                {note.length > 0 && (
                  <div className="flex flex-col gap-y-1">
                    {note.map((val, index) => {
                      return (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          key={index}
                        >
                          {val}
                        </Typography>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AttendanceTable;
