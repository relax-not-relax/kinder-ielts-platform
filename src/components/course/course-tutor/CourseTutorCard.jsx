/* eslint-disable no-unused-vars */
import { Breadcrumbs, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import formatTime from "../../../utils/formatTime";
import TutorInformation from "./TutorInformation";

CourseTutorCard.propTypes = {};

function CourseTutorCard() {
  const [active, setActive] = React.useState(0);
  const courseInfo = useSelector((state) => state.classInformation.information);
  const [tutorInfo, setTutorInfo] = React.useState(
    courseInfo?.tutorResponses[0] ?? []
  );

  const next = () => {
    if (active === 1) return;

    setActive(active + 1);
    setTutorInfo(courseInfo?.tutorResponses[active + 1]);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
    setTutorInfo(courseInfo?.tutorResponses[active - 1]);
  };

  return (
    <div className="lg:sticky lg:left-0 lg:top-10 lg:w-fit w-full lg:h-full h-fit lg:py-12 py-8 xl:ps-12 xl:pe-8 md:px-6 px-4 lg:shadow-xl shadow-none shadow-slate-900/20 shadow-b-2 shadow-r-[4px] -shadow-spread-2 bg-white">
      <Breadcrumbs className="p-0 bg-transparent">
        <a href="#" className="font-semibold sm:text-xs text-[10px] capitalize">
          Trang chủ
        </a>
        <a href="#" className="font-semibold sm:text-xs text-[10px] capitalize">
          Khoá học của tôi
        </a>
        <a href="#" className="font-semibold sm:text-xs text-[10px] capitalize">
          {courseInfo?.belongToCourse.level.name}-{courseInfo?.code}
        </a>
      </Breadcrumbs>
      <h3 className="xl:mt-12 lg:mt-8 mt-3 xl:text-xl lg:text-lg text-xl font-semibold mb-3">
        Course level
      </h3>
      <h2 className="font-bold xl:text-5xl lg:text-4xl text-3xl uppercase">
        {courseInfo?.belongToCourse.level.name}
      </h2>
      <div className="mt-4 text-black xl:text-lg lg:text-base sm:text-sm text-xs font-medium">
        <h4>
          Mã lớp ({courseInfo?.code}) | {formatTime(courseInfo?.fromTime)} -{" "}
          {formatTime(courseInfo?.toTime)}
        </h4>
        <div className="flex flex-row gap-x-1">
          <h4>Gia sư</h4>
          {courseInfo?.tutorResponses?.map((tutor, key) => {
            const divide = (
              <span>
                {key === courseInfo?.tutorResponses?.length - 1 ? "" : "&"}
              </span>
            );
            return (
              <>
                <h4 key={key}>{tutor.firstName}</h4>
                {divide}
              </>
            );
          })}
        </div>
      </div>
      {courseInfo?.tutorResponses?.length > 1 ? (
        <div className="w-full flex items-center justify-between my-4">
          <IconButton
            size="sm"
            variant="filled"
            onClick={prev}
            disabled={active === 0}
            color="white"
            className="shadow-md disabled:shadow-md shadow-blue-gray-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </IconButton>
          <Typography
            color="black"
            className="font-semibold sm:text-lg text-base"
          >
            {tutorInfo.firstName}
          </Typography>
          <IconButton
            size="sm"
            variant="filled"
            onClick={next}
            disabled={active === 1}
            color="white"
            className="shadow-md disabled:shadow-md shadow-blue-gray-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </IconButton>
        </div>
      ) : (
        <div className="w-full h-6"></div>
      )}
      {tutorInfo ? (
        <TutorInformation tutorInfo={tutorInfo} key={active} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CourseTutorCard;
