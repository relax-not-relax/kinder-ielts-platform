/* eslint-disable no-unused-vars */
import React from "react";
import banner3 from "../../../assets/home-bnn-3.png";
import { Button, IconButton } from "@material-tailwind/react";
import decor4 from "../../../assets/home-decor-4.png";
import ClassScheduleSample from "../../../models/ClassScheduleSample";
import thumbnail1 from "../../../assets/class-thumbnail-1.png";
import thumbnail2 from "../../../assets/class-thumbnail-2.png";
import ClassScheduleEl from "../ClassScheduleEl";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CourseCard from "../../course/course-management/CourseCard";

const CLASS_SCHEDULE = [
  new ClassScheduleSample("04/12", "HẠT GIỐNG", "18:00 - 20:00", thumbnail1),
  new ClassScheduleSample(
    "06/12",
    "Introduction to Reading",
    "19:00 - 21:00",
    thumbnail2
  ),
  new ClassScheduleSample("11/12", "HẠT GIỐNG", "18:00 - 20:00", thumbnail1),
];

function StudentOption(props) {
  return (
    <div>
      <div className="py-12 lg:px-16 md:px-8 px-4 flex flex-col gap-y-20">
        <h2 className="text-5xl font-semibold">Xin chào, Lê Nguyễn Yến Nhi</h2>

        {/* Show when class list is existed */}
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-y-4">
            <h4 className="text-4xl font-semibold">Lịch học</h4>
            {CLASS_SCHEDULE.map((c, key) => {
              return <ClassScheduleEl key={key} el={c} />;
            })}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-6 items-center">
              <h4 className="text-4xl font-semibold">Khoá học của bạn</h4>
              <div className="flex flex-row gap-x-2 items-center">
                <IconButton size="sm" color="white">
                  <ChevronLeftIcon className="h-4 w-4 stroke-[3]" />
                </IconButton>
                <IconButton size="sm" color="white">
                  <ChevronRightIcon className="h-4 w-4 stroke-[3]" />
                </IconButton>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-6">
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>

      {/* Show when empty class list */}
      {/* <div className="w-full h-96 mt-24 relative">
        <div className="absolute bottom-0 z-[2] left-4">
          <img
            src={decor4}
            alt="Tìm khoá học"
            className="w-[95%] object-cover object-center"
          />
        </div>
        <div className="relative w-full flex flex-col items-center gap-y-10 z-[3]">
          <h1 className="text-6xl text-center font-medium">
            Tìm ngay khóa học IELTS <br /> phù hợp với bạn
          </h1>
          <Button className="rounded-full normal-case xl:text-lg sm:text-base text-sm px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
            Tham khảo các khóa học
          </Button>
        </div>
      </div> */}

      <div className="w-full h-fit relative">
        <div className="relative z-[2]">
          <img
            src={banner3}
            alt="Ưu đãi"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[3] flex flex-col justify-center items-center gap-y-6">
          <h2 className="text-3xl text-yellow font-medium">
            Khai Giảng Tháng 12/2024
          </h2>
          <p className="text-center text-8xl font-semibold text-white">
            ƯU ĐÃI ĐẾN <span className="text-yellow">25%</span> <br /> CHO{" "}
            <span className="text-yellow">EARLY BIRDS</span>
          </p>
          <Button className="rounded-full normal-case xl:text-lg sm:text-base text-sm px-6 py-1 bg-yellow text-black border-2 border-yellow">
            ĐĂNG KÝ NGAY
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StudentOption;
