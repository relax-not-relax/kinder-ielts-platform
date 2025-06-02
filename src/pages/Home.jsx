/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import banner2 from "../assets/home-bnn-2.png";
import banner from "../assets/home-bnn.png";
import CourseSlider from "../components/home/CourseSlider";
import HomeCourseCard from "../components/home/HomeCourseCard";
import GuestOption from "../components/home/actor-option/GuestOption";
import StudentOption from "../components/home/actor-option/StudentOption";
import { ONLINE_COURSES } from "../dummy/dmmy_data_course";

Home.propTypes = {};

function Home(props) {
  const [active, setActive] = React.useState(false);
  const loginStatus = useSelector((state) => state.loginState.value);
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    setIsAuthenticated(loginStatus);
  }, [loginStatus]);

  return (
    <div>
      <div className="w-full relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute z-[3] w-full xl:bottom-24 lg:bottom-16 md:bottom-10 sm:bottom-8 bottom-2 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col md:gap-y-4 gap-y-1 xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-xl text-yellow font-bold">
            <h2>IELTS ĐẠI HỌC</h2>
            <h2>HỌC PHÍ MẦM NON</h2>
          </div>
          <div className="flex md:flex-row flex-col gap-y-2 gap-x-6 md:mt-8 mt-4">
            <Button
              className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] max-w-64 md:w-64 w-fit px-3 py-1 transition-all duration-300 ${
                active
                  ? "bg-transparent text-yellow border-2 border-yellow"
                  : "bg-yellow text-black border-2 border-yellow"
              }`}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
              onClick={() => setActive(true)}
              onBlur={() => setActive(false)}
            >
              {active ? "Giá trị cốt lõi" : "Giới thiệu Kinder IELTS"}
            </Button>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red w-fit">
              Kiểm tra trình độ Tiếng Anh
            </Button>
          </div>
        </div>
      </div>

      {!!isAuthenticated && <StudentOption isEmpty={true} />}
      {!isAuthenticated && <GuestOption />}

      <div className="w-full lg:h-fit md:h-[90vh] h-screen relative">
        <div className="relative z-[2] lg:h-full md:h-[90vh] h-screen">
          <img
            src={banner2}
            alt="Khoá học online"
            className="w-full lg:h-full md:h-[90vh] h-screen object-cover object-center"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[3] flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-yellow font-medium">
            Khoá học online
          </h2>
          <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-yellow">
            Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
            <br />
            học tập và trao đổi trực tiếp với Gia sư
          </p>
          <Button
            className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
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
          <CourseSlider
            data={ONLINE_COURSES}
            renderItems={(item, index) => (
              <HomeCourseCard key={index} course={item} />
            )}
          />
        </div>
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-custom-purple font-medium">
          Khoá học video
        </h2>
        <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-custom-purple">
          Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
          <br />
          học tập và trao đổi trực tiếp với Gia sư
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
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
        <CourseSlider
          data={ONLINE_COURSES}
          renderItems={(item, index) => (
            <HomeCourseCard key={index} course={item} />
          )}
        />
      </div>
      <div className="pt-0 pb-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-custom-purple font-medium">
          Tài liệu
        </h2>
        <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-custom-purple">
          Các tài liệu được biên soạn độc quyền bởi Kinder IELTS
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
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
        <CourseSlider
          data={ONLINE_COURSES}
          renderItems={(item, index) => (
            <HomeCourseCard key={index} course={item} />
          )}
        />
      </div>
    </div>
  );
}

export default Home;
