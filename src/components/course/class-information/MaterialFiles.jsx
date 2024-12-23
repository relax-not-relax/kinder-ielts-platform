/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";

MaterialFiles.propTypes = {};

function MaterialFiles(props) {
  const [disableSection, setDisableSection] = React.useState(false);

  const handleDisableSection = () => setDisableSection(true);
  const handleEnableSection = () => setDisableSection(false);

  return (
    <div className="flex flex-row justify-between items-start pb-2">
      <div className="flex flex-row items-start gap-x-2">
        {disableSection ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#d0ece0"
          >
            <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#159E64"
          >
            <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
        )}

        <div className="flex flex-col gap-y-1">
          {disableSection ? (
            <p className="text-lg text-custom-blur-green font-semibold">
              Materials
            </p>
          ) : (
            <p className="text-lg text-custom-green font-semibold">Materials</p>
          )}
          {disableSection ? (
            <div className="text-gray-300 text-base font-medium flex flex-col">
              <p href="/">Material 01: Day 01 slide deck</p>
              <p href="/">Material 02: Sample for Persuasive Paragraph</p>
            </div>
          ) : (
            <div className="text-black text-base font-medium flex flex-col">
              <a href="/">Material 01: Day 01 slide deck</a>
              <a href="/">Material 02: Sample for Persuasive Paragraph</a>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-start">
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
        {disableSection ? (
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#159E64"
              onClick={handleEnableSection}
            >
              <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
            </svg>
          </IconButton>
        ) : (
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#159E64"
              onClick={handleDisableSection}
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
            </svg>
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default MaterialFiles;
