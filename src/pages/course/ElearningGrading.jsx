/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import ProgressionDialog from "../../components/course/progression/ProgressionDialog";
import SubmissionTextView from "../../components/elearning-grading/SubmissionTextView";
import TutorGradeView from "../../components/elearning-grading/TutorGradeView";
import { setProgressDialog } from "../../store/slices/progressDialogSlice";

ElearningGrading.propTypes = {};

function ElearningGrading(props) {
  const dispatch = useDispatch();

  const handleOpenProgression = () => {
    dispatch(setProgressDialog(true));
  };

  return (
    <div className="w-screen h-fit lg:px-16 md:px-8 px-4 py-8">
      <div className="flex flex-col gap-y-8">
        <div className="flex md:flex-row flex-col justify-start items-start xl:gap-x-48 lg:gap-x-24 md:gap-x-16 gap-y-6">
          <div>
            <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">
              Hạt giống
            </h2>
            <div className="md:mt-4 text-custom-green md:mb-12 mt-3 mb-3">
              <h4 className="xl:text-lg lg:text-base text-sm font-semibold">
                Mã lớp (HG12) | 18:00 - 19:30
              </h4>
              <h4 className="xl:text-lg lg:text-base text-sm font-semibold">
                Gia sư A & Gia sư B
              </h4>
            </div>
            <Button
              variant="outlined"
              className="rounded-full normal-case px-4 py-2 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
              onClick={handleOpenProgression}
            >
              Progression
            </Button>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">
              How to Write a Paragraph
            </h2>
            <h3 className="font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-gray-500">
              Homework 1
            </h3>
            <div className="text-black xl:text-base text-sm font-medium">
              <p>
                After writing, students exchange their work and provide
                feedback.
              </p>
              <p>Due date: Sunday, 13 August 2023, 12:00 AM</p>
            </div>
            <div className="flex flex-row items-center gap-x-8">
              <p className="xl:text-lg sm:text-base text-sm font-bold">
                Đỗ Minh Khuê
              </p>
              <div className="flex flex-row items-center xl:gap-x-3 gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H560v-160H240v640Zm240-40q67 0 113.5-47T640-360v-160h-80v160q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v220h80v-220q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM240-800v160-160 640-640Z" />
                </svg>
                <p className="xl:text-base sm:text-sm text-xs font-medium underline">
                  Submission
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-start xl:gap-x-8 gap-x-4 gap-y-6">
          <div className="flex-none xl:max-w-[60%] xl:min-w-[60%] lg:min-w-[50%] lg:max-w-[50%] w-full">
            <SubmissionTextView />
          </div>
          <div className="xl:flex-none xl:w-[500px] lg:grow w-full">
            <TutorGradeView />
          </div>
        </div>
      </div>

      <ProgressionDialog />
    </div>
  );
}

export default ElearningGrading;
