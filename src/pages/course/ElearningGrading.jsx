/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setProgressDialog } from "../../store/slices/progressDialogSlice";
import ProgressionDialog from "../../components/course/progression/ProgressionDialog";
import { Button } from "@material-tailwind/react";

ElearningGrading.propTypes = {};

function ElearningGrading(props) {
  const dispatch = useDispatch();

  const handleOpenProgression = () => {
    dispatch(setProgressDialog(true));
  };

  return (
    <div className="w-screen h-fit px-16 py-8">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-row justify-start items-start gap-x-48">
          <div>
            <h2 className="font-bold text-5xl">Hạt giống</h2>
            <div className="mt-4 text-custom-green mb-12">
              <h4 className="text-lg font-semibold">
                Mã lớp (HG12) | 18:00 - 19:30
              </h4>
              <h4 className="text-lg font-semibold">Gia sư A & Gia sư B</h4>
            </div>
            <Button
              variant="outlined"
              className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
              onClick={handleOpenProgression}
            >
              Progression
            </Button>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-5xl">How to Write a Paragraph</h2>
            <h3 className="font-bold text-4xl text-gray-500">Homework 1</h3>
            <div className="text-black text-base font-medium">
              <p>
                After writing, students exchange their work and provide
                feedback.
              </p>
              <p>Due date: Sunday, 13 August 2023, 12:00 AM</p>
            </div>
            <div className="flex flex-row items-center gap-x-8">
              <p className="text-lg font-bold">Đỗ Minh Khuê</p>
              <div className="flex flex-row items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H560v-160H240v640Zm240-40q67 0 113.5-47T640-360v-160h-80v160q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v220h80v-220q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM240-800v160-160 640-640Z" />
                </svg>
                <p className="text-base font-medium underline">Submission</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProgressionDialog />
    </div>
  );
}

export default ElearningGrading;
