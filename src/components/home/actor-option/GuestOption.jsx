/* eslint-disable no-unused-vars */
import { Button, Card } from "@material-tailwind/react";
import React from "react";
import banner1 from "../../../assets/home-bnn-1.png";
import decor1 from "../../../assets/home-decor-1.png";
import decor2 from "../../../assets/home-decor-2.png";
import decor3 from "../../../assets/home-decor-3.png";
import decor4 from "../../../assets/home-decor-4.png";
import AboutKinder from "../AboutKinder";
import KinderStudents from "../KinderStudents";
import KinderTutors from "../KinderTutors";

const ATTRACTIVE_LIST = [
  {
    id: 1,
    title: "Chuẩn bị hành trang",
    image: decor1,
    description:
      "Tạo nền tảng kỹ năng IELTS vững chắc cho các bạn trẻ để trang bị hành trang vào đại học và cuộc sống.",
  },
  {
    id: 2,
    title: "Chi phí hợp lý",
    image: decor2,
    description:
      "Chúng mình luôn cố gắng hỗ trợ hết mình để các bạn sinh viên có thể học IELTS với giá thấp hơn thị trường nhưng chất lượng đảm bảo và uy tín.",
  },
  {
    id: 3,
    title: "Học tập linh hoạt",
    image: decor3,
    description:
      "Tạo nền tảng kỹ năng IELTS vững chắc cho các bạn trẻ để trang bị hành trang vào đại học và cuộc sống.",
  },
];

const INFORMATION_LIST = [
  {
    id: 0,
    title: "Về Kinder IELTS",
    content: <AboutKinder />,
  },
  {
    id: 1,
    title: "Đội ngũ Kinder",
    content: <KinderTutors />,
  },
  {
    id: 2,
    title: "Học viên Kinder",
    content: <KinderStudents />,
  },
];

function GuestOption(props) {
  const [attractSelected, setAttractSelected] = React.useState(null);
  const [informationSelected, setInformationSelected] = React.useState(
    INFORMATION_LIST[0]
  );
  const [informationActive, setInformationActive] = React.useState(0);

  return (
    <div>
      <div className="lg:py-24 sm:py-16 py-12 w-full md:px-0 px-4">
        <div className="flex flex-col gap-y-3 text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
          <h3>Học IELTS dễ dàng hơn</h3>
          <h3 className="text-custom-green">cùng Kinder IELTS</h3>
        </div>
        <div className="flex md:flex-row flex-col xl:gap-x-12 gap-y-6 lg:gap-x-10 md:gap-x-4 md:items-start items-center justify-center md:mt-16 sm:mt-12 mt-10">
          {ATTRACTIVE_LIST.map((a) => {
            return (
              <Card
                key={a.id}
                className={`flex flex-col gap-y-12 lg:p-12 md:p-8 p-12 items-center xl:w-96 lg:w-72 md:w-56 w-full h-fit transition-all duration-300 ease-in-out ${
                  attractSelected === a.id
                    ? "shadow-md drop-shadow-lg"
                    : "shadow-none"
                }`}
                onMouseEnter={() => setAttractSelected(a.id)}
                onMouseLeave={() => setAttractSelected(null)}
                onMouseDown={() => setAttractSelected(a.id)}
                onMouseUp={() => setAttractSelected(null)}
                onClick={() => setAttractSelected(a.id)}
                onBlur={() => setAttractSelected(null)}
              >
                <div className="relative xl:w-96 lg:w-72 md:w-56 w-full xl:h-56 lg:h-40 md:h-32 flex justify-center items-center">
                  <img
                    src={a.image}
                    alt="attractive"
                    className={`xl:w-56 xl:h-56 lg:w-40 lg:h-40 md:w-32 md:h-32 sm:w-56 sm:h-56 object-cover object-center z-[2] transition-all duration-300 ease-in-out ${
                      attractSelected === a.id ? "opacity-25" : "opacity-100"
                    }`}
                  />
                  <div className="xl:w-64 xl:h-56 lg:w-56 lg:h-40 h-full md:w-40 md:h-32 w-full absolute top-0 z-[3] flex justify-center items-center">
                    <p
                      className={`text-center xl:text-xl lg:text-base md:text-sm sm:text-lg transition-all duration-300 ease-in-out text-black ${
                        attractSelected === a.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {a.description}
                    </p>
                  </div>
                </div>
                <div className="text-center xl:text-4xl lg:text-2xl md:text-xl text-2xl font-bold text-black">
                  {a.title}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="lg:py-16 py-0 w-full flex flex-col gap-y-12 md:px-0 px-4">
        <div className="flex flex-row justify-center items-center md:gap-x-4 gap-x-2">
          {INFORMATION_LIST.map((info, index) => {
            return (
              <Button
                key={index}
                className={`rounded-full normal-case xl:text-lg md:text-base text-[10px] px-6 py-1 border-2 border-custom-green ${
                  informationActive === info.id
                    ? "bg-custom-green text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => {
                  setInformationActive(info.id);
                  setInformationSelected(info);
                }}
              >
                {info.title}
              </Button>
            );
          })}
        </div>
        <div className="flex justify-center lg:px-0 md:px-8">
          {informationSelected.content}
        </div>
      </div>
      <div className="w-full lg:h-96 md:h-64 sm:h-56 h-48 lg:mt-24 mt-20 relative md:px-0 px-4">
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
      <div className="w-full md:h-fit sm:h-56 h-48 relative">
        <div className="relative z-[2]">
          <img
            src={banner1}
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
          <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
            Tìm hiểu thêm về ưu đãi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuestOption;
