/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

StudentManagementTable.propTypes = {};

const TABLE_HEAD = ["Name", "D.O.B", "Email", "Note"];

const TABLE_ROWS = [
  {
    name: "Nguyễn Hải Anh",
    dob: "17/10/2003",
    email: "anh.ng@gmail.com",
  },
  {
    name: "Bùi Anh Dương",
    dob: "03/10/2003",
    email: "duong.2312@gmail.com",
  },
  {
    name: "Nguyễn Trần Trọng Đức",
    dob: "12/07/2004",
    email: "duc.ntt@gmail.com",
  },
  {
    name: "Đỗ Minh Khuê",
    dob: "01/12/2003",
    email: "minhkhuye1202@gmail.com",
  },
  {
    name: "Bùi Đức Thiện",
    dob: "05/09/2002",
    email: "dthien.b2122@gmail.com",
  },
];

function StudentManagementTable(props) {
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
          {TABLE_ROWS.map(({ name, dob, email }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dob}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    .
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagementTable;
