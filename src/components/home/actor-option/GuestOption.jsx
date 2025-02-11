/* eslint-disable no-unused-vars */
import React from "react";
import decor1 from "../../../assets/home-decor-1.png";
import decor2 from "../../../assets/home-decor-2.png";
import decor3 from "../../../assets/home-decor-3.png";
import decor4 from "../../../assets/home-decor-4.png";
import banner1 from "../../../assets/home-bnn-1.png";
import AboutKinder from "../AboutKinder";
import KinderTutors from "../KinderTutors";
import KinderStudents from "../KinderStudents";
import { Button, Card } from "@material-tailwind/react";

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
      <div className="py-24 w-full">
        <div className="flex flex-col gap-y-3 text-center">
          <h3 className="text-5xl font-bold">Học IELTS dễ dàng hơn</h3>
          <h3 className="text-5xl font-bold text-custom-green">
            cùng Kinder IELTS
          </h3>
        </div>
        <div className="flex flex-row gap-x-12 items-start justify-center mt-16">
          {ATTRACTIVE_LIST.map((a) => {
            return (
              <Card
                key={a.id}
                className={`flex flex-col gap-y-12 p-12 items-center w-96 h-fit transition-all duration-300 ease-in-out ${
                  attractSelected === a.id
                    ? "shadow-md drop-shadow-lg"
                    : "shadow-none"
                }`}
                onMouseEnter={() => setAttractSelected(a.id)}
                onMouseLeave={() => setAttractSelected(null)}
                onMouseDown={() => setAttractSelected(a.id)}
                onMouseUp={() => setAttractSelected(null)}
              >
                <div className="relative w-96 h-56 flex justify-center items-center">
                  <img
                    src={a.image}
                    alt="attractive"
                    className={`w-56 h-56 object-cover object-center z-[2] transition-all duration-300 ease-in-out ${
                      attractSelected === a.id ? "opacity-25" : "opacity-100"
                    }`}
                  />
                  <div className="w-64 h-56 absolute top-0 z-[3] flex justify-center items-center">
                    <p
                      className={`text-center text-xl transition-all duration-300 ease-in-out text-black ${
                        attractSelected === a.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {a.description}
                    </p>
                  </div>
                </div>
                <div className="text-center text-4xl font-bold text-black">
                  {a.title}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="py-16 w-full flex flex-col gap-y-12">
        <div className="flex flex-row justify-center items-center gap-x-4">
          {INFORMATION_LIST.map((info, index) => {
            return (
              <Button
                key={index}
                className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-6 py-1 border-2 border-custom-green ${
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
        <div className="flex justify-center">{informationSelected.content}</div>
      </div>
      <div className="w-full h-96 mt-24 relative">
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
      </div>
      <div className="w-full h-fit relative">
        <div className="relative z-[2]">
          <img
            src={banner1}
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
          <Button className="rounded-full normal-case xl:text-lg sm:text-base text-sm px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
            Tìm hiểu thêm về ưu đãi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuestOption;
