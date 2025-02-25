/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";
import UpdateWarmUpTestDialog from "./update-lesson/UpdateWarmUpTestDialog";
import warmupTestAPI from "../../../api/warmupTestApi";
import { enqueueSnackbar } from "notistack";

WarmUpTestLink.propTypes = {
  warmUpTest: PropTypes.object.isRequired,
};

function WarmUpTestLink({ warmUpTest }) {
  const [disableSection, setDisableSection] = React.useState(
    warmUpTest.status.name === "VIEW" ? false : true
  );

  const [isSet, setIsSet] = React.useState(false);

  const updateStatus = async () => {
    setIsSet(true);
    try {
      await warmupTestAPI.updateWarmUpTestStatus(warmUpTest.id);
      setIsSet(false);
      return true;
    } catch (error) {
      setIsSet(false);
      enqueueSnackbar("Cập nhật trạng thái không thành công!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return false;
    }
  };

  const handleDisableSection = async () => {
    if (await updateStatus()) {
      setDisableSection(true);
    } else {
      return;
    }
  };

  const handleEnableSection = async () => {
    if (await updateStatus()) {
      setDisableSection(false);
    } else {
      return;
    }
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);

  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center items-start pb-2">
      <div className="flex flex-row items-start gap-x-2">
        {disableSection ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#d0ece0"
          >
            <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#159E64"
          >
            <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        )}

        {disableSection ? (
          <p className="md:text-lg sm:text-base text-sm text-custom-blur-green font-semibold">
            {warmUpTest.title}
          </p>
        ) : (
          <a
            href={warmUpTest.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-lg sm:text-base text-sm text-custom-green font-semibold"
          >
            {warmUpTest.title}
          </a>
        )}
      </div>
      <div className="flex flex-row items-start">
        <IconButton
          variant="text"
          onClick={() => {
            handleOpenUpdate();
          }}
          disabled={isSet}
        >
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
          <IconButton
            variant="text"
            onClick={handleEnableSection}
            disabled={isSet}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#159E64"
            >
              <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
            </svg>
          </IconButton>
        ) : (
          <IconButton
            variant="text"
            onClick={handleDisableSection}
            disabled={isSet}
          >
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
        )}
      </div>

      <UpdateWarmUpTestDialog
        isOpen={openUpdate}
        onClose={handleCloseUpdate}
        warmupTest={warmUpTest}
      />
    </div>
  );
}

export default WarmUpTestLink;
