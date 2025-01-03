/* eslint-disable no-unused-vars */
import {
  Breadcrumbs,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import TutorInformation from "./TutorInformation";
import classAPI from "../../../api/classApi";
import { useParams } from "react-router-dom";

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
  const [tutorInfo, setTutorInfo] = React.useState(null);
  const [tutorList, setTutorList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    setIsLoading(true);
    const fetchTutors = async () => {
      try {
        const res = await classAPI.getClassDetails({
          id,
        });
        console.log(res.data.detailInfo.tutorResponses);
        setTutorList(res.data.detailInfo.tutorResponses);
        setTutorInfo(res.data.detailInfo.tutorResponses[0]);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch tutors", error);
      }
    };

    fetchTutors();
  }, [id]);

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
    <div className="lg:sticky lg:left-0 lg:top-10 lg:w-fit w-full lg:h-full h-fit lg:py-12 py-8 xl:ps-12 xl:pe-8 md:px-6 px-4 lg:shadow-xl shadow-none shadow-slate-900/20 shadow-b-2 shadow-r-[4px] -shadow-spread-2 bg-white">
      {isLoading && tutorList.length === 0 && !tutorInfo ? (
        <div className="lg:w-[450px] flex justify-center items-center">
          <Spinner color="green" />
        </div>
      ) : (
        <>
          <Breadcrumbs className="p-0 bg-transparent">
            <a
              href="#"
              className="font-semibold sm:text-xs text-[10px] capitalize"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="font-semibold sm:text-xs text-[10px] capitalize"
            >
              Khoá học của tôi
            </a>
            <a
              href="#"
              className="font-semibold sm:text-xs text-[10px] capitalize"
            >
              Hạt giống-HG12
            </a>
          </Breadcrumbs>
          <h3 className="xl:mt-12 lg:mt-8 mt-3 xl:text-xl lg:text-lg text-xl font-semibold mb-3">
            Course level
          </h3>
          <h2 className="font-bold xl:text-5xl lg:text-4xl text-3xl uppercase">
            Hạt giống
          </h2>
          <div className="mt-4 text-black xl:text-lg lg:text-base sm:text-sm text-xs font-medium">
            <h4>Mã lớp (HG12) | 18:00 - 19:30</h4>
            {tutorInfo ? <h4>Gia sư {tutorInfo.firstName}</h4> : <h4></h4>}
          </div>
          {tutorList.length > 1 ? (
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
          ) : (
            <div className="w-full h-6"></div>
          )}
          {tutorInfo ? (
            <TutorInformation tutorInfo={tutorInfo} key={active} />
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}

export default CourseTutorCard;
