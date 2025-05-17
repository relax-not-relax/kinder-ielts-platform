/* eslint-disable no-unused-vars */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import thumbnail1 from "../../../assets/class-thumbnail-1.png";
import thumbnail2 from "../../../assets/class-thumbnail-2.png";
import banner3 from "../../../assets/home-bnn-3.png";
import decor4 from "../../../assets/home-decor-4.png";
import ClassScheduleSample from "../../../models/ClassScheduleSample";
import ClassScheduleEl from "../ClassScheduleEl";
import HomeMyCourseCard from "../HomeMyCourseCard";

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
  const { isEmpty } = props;
  return (
    <div>
      <div className="py-12 lg:px-16 md:px-8 px-4 flex flex-col md:gap-y-20 gap-y-12">
        <h2 className="md:text-5xl sm:text-3xl text-2xl font-semibold">
          Xin chào, Lê Nguyễn Yến Nhi
        </h2>

        {/* Show when class list is existed */}
        {!isEmpty && (
          <div className="flex xl:flex-row flex-col gap-y-16 justify-between items-start">
            <div className="flex flex-col gap-y-4">
              <h4 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
                Lịch học
              </h4>
              {CLASS_SCHEDULE.map((c, key) => {
                return <ClassScheduleEl key={key} el={c} />;
              })}
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-6 items-center">
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
                  Khoá học của bạn
                </h4>
                <div className="flex flex-row gap-x-2 items-center">
                  <IconButton size="sm" color="white">
                    <ChevronLeftIcon className="h-4 w-4 stroke-[3]" />
                  </IconButton>
                  <IconButton size="sm" color="white">
                    <ChevronRightIcon className="h-4 w-4 stroke-[3]" />
                  </IconButton>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6">
                <HomeMyCourseCard />
                <HomeMyCourseCard />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show when empty class list */}
      {isEmpty && (
        <div className="w-full lg:h-96 md:h-64 sm:h-56 h-48 md:mt-24 mt-0 relative md:px-0 px-4">
          <div className="absolute bottom-0 z-[2] md:left-4 left-0">
            <img
              src={decor4}
              alt="Tìm khoá học"
              className="md:w-[95%] w-full object-cover object-center"
            />
          </div>
          <div className="relative w-full flex flex-col items-center md:gap-y-10 gap-y-6 z-[3]">
            <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center font-medium">
              Tìm ngay khóa học IELTS <br /> phù hợp với bạn
            </h1>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
              Tham khảo các khóa học
            </Button>
          </div>
        </div>
      )}

      <div className="w-full md:h-fit sm:h-56 h-48 relative">
        <div className="relative z-[2]">
          <img
            src={banner3}
            alt="Ưu đãi"
            className="w-full md:h-full sm:h-56 h-48 object-cover object-center"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[3] flex flex-col justify-center items-center lg:gap-y-6 gap-y-4">
          <h2 className="lg:text-3xl sm:text-2xl text-xl text-yellow font-medium">
            Khai Giảng Tháng 12/2024
          </h2>
          <p className="text-center xl:text-8xl lg:text-6xl sm:text-4xl text-2xl font-semibold text-white">
            ƯU ĐÃI ĐẾN <span className="text-yellow">25%</span> <br /> CHO{" "}
            <span className="text-yellow">EARLY BIRDS</span>
          </p>
          <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-yellow text-black border-2 border-yellow">
            ĐĂNG KÝ NGAY
          </Button>
        </div>
      </div>
    </div>
  );
}

//Validation StudentOption Props
StudentOption.propTypes = {
  isEmpty: PropTypes.bool,
};
StudentOption.defaultProps = {
  isEmpty: false,
};

export default StudentOption;
