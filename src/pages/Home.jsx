/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/home-bnn.png";
import banner2 from "../assets/home-bnn-2.png";
import { Button } from "@material-tailwind/react";
import CourseSlider from "../components/home/CourseSlider";
import GuestOption from "../components/home/actor-option/GuestOption";
import StudentOption from "../components/home/actor-option/StudentOption";

Home.propTypes = {};

function Home(props) {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <div className="w-full relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute z-[3] w-full bottom-24 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-8xl text-yellow font-bold">IELTS ĐẠI HỌC</h2>
            <h2 className="text-8xl text-yellow font-bold">HỌC PHÍ MẦM NON</h2>
          </div>
          <div className="flex flex-row gap-x-6 mt-8">
            <Button
              className={`rounded-full normal-case xl:text-lg sm:text-base max-w-64 w-64 text-sm px-3 py-1 transition-all duration-300 ${
                active
                  ? "bg-transparent text-yellow border-2 border-yellow"
                  : "bg-yellow text-black border-2 border-yellow"
              }`}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
              onBlur={() => setActive(false)}
            >
              {active ? "Giá trị cốt lõi" : "Giới thiệu Kinder IELTS"}
            </Button>
            <Button className="rounded-full normal-case xl:text-lg sm:text-base text-sm px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
              Kiểm tra trình độ Tiếng Anh
            </Button>
          </div>
        </div>
      </div>

      {/* <GuestOption /> */}
      <StudentOption />

      <div className="w-full h-fit relative">
        <div className="relative z-[2]">
          <img
            src={banner2}
            alt="Khoá học online"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[3] flex flex-col justify-center items-center gap-y-6">
          <h2 className="text-6xl text-yellow font-medium">Khoá học online</h2>
          <p className="text-center text-xl text-yellow">
            Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
            <br />
            học tập và trao đổi trực tiếp với Gia sư
          </p>
          <Button
            className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 transition-all duration-300 ${
              active
                ? "bg-transparent text-yellow border-2 border-yellow"
                : "bg-yellow text-black border-2 border-yellow"
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onBlur={() => setActive(false)}
          >
            {active ? "Giá trị cốt lõi" : "Xem thêm"}
          </Button>
          <CourseSlider />
        </div>
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center gap-y-6">
        <h2 className="text-6xl text-custom-purple font-medium">
          Khoá học video
        </h2>
        <p className="text-center text-xl text-custom-purple">
          Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
          <br />
          học tập và trao đổi trực tiếp với Gia sư
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 transition-all duration-300 ${
            active
              ? "bg-transparent text-yellow border-2 border-yellow"
              : "bg-yellow text-black border-2 border-yellow"
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onBlur={() => setActive(false)}
        >
          {active ? "Giá trị cốt lõi" : "Xem thêm"}
        </Button>
        <CourseSlider />
      </div>
      <div className="pt-0 pb-24 w-full flex flex-col justify-center items-center gap-y-6">
        <h2 className="text-6xl text-custom-purple font-medium">Tài liệu</h2>
        <p className="text-center text-xl text-custom-purple">
          Các tài liệu được biên soạn độc quyền bởi Kinder IELTS
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 transition-all duration-300 ${
            active
              ? "bg-transparent text-yellow border-2 border-yellow"
              : "bg-yellow text-black border-2 border-yellow"
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onBlur={() => setActive(false)}
        >
          {active ? "Giá trị cốt lõi" : "Xem thêm"}
        </Button>
        <CourseSlider />
      </div>
    </div>
  );
}

export default Home;
