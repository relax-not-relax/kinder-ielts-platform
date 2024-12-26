/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProgressDialog } from "../../../store/slices/progressDialogSlice";

ProgressionDetailsTable.propTypes = {
  homeworks: PropTypes.array.isRequired,
};

const TABLE_ROWS = [
  {
    name: "Nguyễn Hải Anh",
    submission: [
      {
        exercise: "Homework 01",
        submit: "",
      },
      {
        exercise: "Homework 02",
        submit: "",
      },
    ],
  },
  {
    name: "Bùi Anh Dương",
    submission: [
      {
        exercise: "Homework 01",
        submit: "",
      },
      {
        exercise: "Homework 02",
        submit: "",
      },
    ],
  },
  {
    name: "Nguyễn Trần Trọng Đức",
    submission: [
      {
        exercise: "Homework 01",
        submit: "",
      },
      {
        exercise: "Homework 02",
        submit: "",
      },
    ],
  },
  {
    name: "Đỗ Minh Khuê",
    submission: [
      {
        exercise: "Homework 01",
        submit: "Khue-DM-B101.pdf",
      },
      {
        exercise: "Homework 02",
        submit: "Khue-DM-B102.pdf",
      },
    ],
  },
  {
    name: "Bùi Đức Thiện",
    submission: [
      {
        exercise: "Homework 01",
        submit: "Thien-BD-B101.pdf",
      },
      {
        exercise: "Homework 02",
        submit: "Thien-BD-B102.pdf",
      },
    ],
  },
];

function ProgressionDetailsTable({ homeworks }) {
  const navigate = useNavigate();
  const openProgression = useSelector((state) => state.progressDialog.value);
  const dispatch = useDispatch();

  const handleCloseProgression = () => {
    dispatch(setProgressDialog(false));
  };

  const handleNavigate = () => {
    navigate("/homework/1");
    handleCloseProgression();
  };
  return (
    <div className="w-full overflow-x-scroll no-scrollbar">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b-2 border-black py-2">
              <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs">
                Name
              </h3>
            </th>
            {homeworks.map((homework, index) => {
              return (
                <th key={index} className="border-b-2 border-black px-4 py-2">
                  <h3 className="font-semibold text-black leading-none md:text-lg sm:text-base text-xs">
                    {homework.name}
                  </h3>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((val, index) => {
            const classes =
              "h-12 border-b border-e-2 border-b-blue-gray-50 border-e-black";

            return (
              <tr key={index}>
                <td className={`${classes} lg:w-56 w-48`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {val.name}
                  </Typography>
                </td>
                {val.submission.map((sub, index) => {
                  return (
                    <td
                      key={index}
                      className="h-12 px-4 border-b border-b-blue-gray-50"
                    >
                      <div className="flex flex-row items-center gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill={`${sub.submit ? "black" : "gray"}`}
                        >
                          <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H560v-160H240v640Zm240-40q67 0 113.5-47T640-360v-160h-80v160q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v220h80v-220q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM240-800v160-160 640-640Z" />
                        </svg>
                        {sub.submit ? (
                          <Link
                            className="line-clamp-1 underline md:text-base text-sm font-medium text-black"
                            onClick={handleNavigate}
                          >
                            {sub.submit}
                          </Link>
                        ) : (
                          <p className="line-clamp-1 underline md:text-base text-sm font-medium text-gray-400">
                            NA
                          </p>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProgressionDetailsTable;
