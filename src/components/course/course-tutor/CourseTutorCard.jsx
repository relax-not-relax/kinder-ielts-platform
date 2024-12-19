/* eslint-disable no-unused-vars */
import { Breadcrumbs, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import TutorInformation from "./TutorInformation";

const tutors = [
  {
    id: 1,
    name: "Gia sư A",
    ieltsBand: [
      {
        skill: "Reading",
        score: "8.0",
      },
      {
        skill: "Writing",
        score: "7.5",
      },
      {
        skill: "Listening",
        score: "9.0",
      },
      {
        skill: "Speaking",
        score: "8.0",
      },
    ],
    overall: "8.0",
    reward: [
      "Hơn 1 năm kinh nghiệm luyện thi IELTS ở các trung tâm lớn với nhiều học viên đạt 6.0+.",
      "Giải Nhì HSG Tỉnh vào năm 12.",
      "Giải Khuyến Khích môn Tiếng Anh cho khối Chuyên.",
    ],
  },
  {
    id: 2,
    name: "Gia sư B",
    ieltsBand: [
      {
        skill: "Reading",
        score: "8.0",
      },
      {
        skill: "Writing",
        score: "8.5",
      },
      {
        skill: "Listening",
        score: "9.0",
      },
      {
        skill: "Speaking",
        score: "8.0",
      },
    ],
    overall: "8.5",
    reward: [
      "Tốt nghiệp ĐH Western Sydney Vietnam, ngành Applied Finance",
      "Chứng chỉ giảng dạy tiếng Anh TESOL",
      "Top 10 - Local Finalist P&G CEO Challenge 2022",
    ],
  },
];

function CourseTutorCard(props) {
  const [active, setActive] = React.useState(0);
  const [tutorInfo, setTutorInfo] = React.useState(tutors[0]);

  const next = () => {
    if (active === 1) return;

    setActive(active + 1);
    setTutorInfo(tutors[active + 1]);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
    setTutorInfo(tutors[active - 1]);
  };

  return (
    <div className="sticky left-0 top-10 w-fit h-full py-12 ps-12 pe-8 shadow-xl shadow-slate-900/20 shadow-b-2 shadow-r-[4px] -shadow-spread-2 bg-white">
      <Breadcrumbs className="p-0 bg-transparent">
        <a href="#" className="font-semibold text-xs capitalize">
          Trang chủ
        </a>
        <a href="#" className="font-semibold text-xs capitalize">
          Khoá học của tôi
        </a>
        <a href="#" className="font-semibold text-xs capitalize">
          Hạt giống-HG12
        </a>
      </Breadcrumbs>
      <h3 className="mt-12 text-xl font-semibold mb-3">Course level</h3>
      <h2 className="font-bold text-5xl uppercase">Hạt giống</h2>
      <div className="mt-4 text-black">
        <h4 className="text-lg font-medium">Mã lớp (HG12) | 18:00 - 19:30</h4>
        <h4 className="text-lg font-medium">Gia sư A & Gia sư B</h4>
      </div>
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
        <Typography color="black" className="font-semibold text-lg">
          {tutorInfo.name}
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
      <TutorInformation tutorInfo={tutorInfo} key={active} />
    </div>
  );
}

export default CourseTutorCard;
