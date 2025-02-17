/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import student1 from "../../assets/student_1.png";
import student2 from "../../assets/student_2.png";
import { Button, Card } from "@material-tailwind/react";

KinderStudents.propTypes = {};

const STUDENT_RESPONSES = [
  {
    id: 1,
    name: "Nhâm Quang Đức",
    image: student1,
    course: "HC71",
    rate: "Các anh giảng rất hay và tiếp cận đúng năng lực của học viên nên em cảm thấy bài giảng trở nên thú vị hơn và điều đó đã giúp em có sự tự tin cao nhất khi đi thi và đạt được aim mình mong muốn ạ. Em xin cảm ơn Kinder và đội ngũ tutor nhiều ạ 🫶🏻🫶🏻🥰🥰😍",
    date: "20-Dec-24 IELTS on Computer Academic",
    listening: 7.0,
    reading: 7.0,
    writing: 7.0,
    speaking: 6.5,
    overall: 7.0,
  },
  {
    id: 2,
    name: "Việt Phương",
    image: student2,
    course: "HC62",
    rate: "Tuy rằng chỉ 15 buổi thôi nhưng những kiến thức mọi người truyền đạt cho mình thật sự rất hiệu quả. Xin cảm ơn Kinder và 2 bạn gia sư Tín và Phát đã đồng hành cùng mình trên con đường chinh phục 8.0 IELTS.",
    date: "20-Dec-24 IELTS on Computer Academic",
    listening: 7.0,
    reading: 7.0,
    writing: 7.0,
    speaking: 6.5,
    overall: 7.0,
  },
];

function KinderStudents(props) {
  const [active, setActive] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % STUDENT_RESPONSES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="xl:w-[70%] lg:w-[85%] w-full lg:h-[500px] h-fit flex lg:flex-row flex-col rounded-2xl">
      <div className="flex-none lg:w-[40%] lg:p-12 md:p-10 p-6 flex flex-col justify-between gap-y-10">
        <div className="flex flex-col gap-y-3 text-black">
          <h3 className="xl:text-xl lg:text-lg sm:text-xl text-base font-bold">
            Phản hồi từ học viên Kinder
          </h3>
          <div className="flex flex-row gap-x-2 items-center xl:text-lg lg:text-sm md:text-lg sm:text-base text-xs font-semibold">
            <p>{STUDENT_RESPONSES[active].name}</p>
            <p>-</p>
            <p>Học viên khoá {STUDENT_RESPONSES[active].course}</p>
          </div>
          <p className="sm:text-base text-xs">
            {STUDENT_RESPONSES[active].rate}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex items-center justify-center gap-x-2">
            {STUDENT_RESPONSES.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`md:w-3 md:h-3 w-2 h-2 rounded-full ${
                    active === index ? "bg-custom-green" : "bg-gray-300"
                  } transition-all`}
                ></div>
              );
            })}
          </div>
          <Button
            className={`lg:w-full sm:w-fit w-full rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
              activeButton
                ? "bg-transparent text-yellow border-2 border-yellow"
                : "bg-yellow text-black border-2 border-yellow"
            }`}
            onMouseEnter={() => setActiveButton(true)}
            onMouseLeave={() => setActiveButton(false)}
            onMouseDown={() => setActiveButton(true)}
            onMouseUp={() => setActiveButton(false)}
            onBlur={() => setActiveButton(false)}
          >
            {activeButton ? "Giá trị cốt lõi" : "Tìm hiểu thêm"}
          </Button>
        </div>
      </div>
      <div className="flex-none lg:w-[60%] w-full flex md:flex-row flex-col">
        <div className="flex-none md:w-[50%] w-full h-full grow md:rounded-es-2xl lg:rounded-none rounded-none">
          <img
            src={STUDENT_RESPONSES[active].image}
            alt={STUDENT_RESPONSES[active].name}
            className="w-full h-full object-cover object-center md:rounded-es-2xl lg:rounded-none rounded-none"
          />
        </div>
        <div className="grow flex flex-col justify-between px-3 py-4 gap-y-4">
          <div className="flex flex-col gap-y-5 items-center">
            <p className="text-black font-medium">Overall score</p>
            <p className="xl:text-8xl md:text-7xl text-6xl text-custom-red">
              {STUDENT_RESPONSES[active].overall.toFixed(1)}
            </p>
            <p className="xl:text-sm lg:text-xs sm:text-base text-sm text-black">
              {STUDENT_RESPONSES[active].date}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="w-full h-32 flex flex-col justify-center items-center gap-y-2 shadow-md rounded-lg">
              <p className="text-black text-lg">Listening</p>
              <p className="text-custom-red text-3xl font-semibold">
                {STUDENT_RESPONSES[active].listening.toFixed(1)}
              </p>
            </div>
            <div className="w-full h-32 flex flex-col justify-center items-center gap-y-2 shadow-md rounded-lg">
              <p className="text-black text-lg">Reading</p>
              <p className="text-custom-red text-3xl font-semibold">
                {STUDENT_RESPONSES[active].reading.toFixed(1)}
              </p>
            </div>
            <div className="w-full h-32 flex flex-col justify-center items-center gap-y-2 shadow-md rounded-lg">
              <p className="text-black text-lg">Writing</p>
              <p className="text-custom-red text-3xl font-semibold">
                {STUDENT_RESPONSES[active].writing.toFixed(1)}
              </p>
            </div>
            <div className="w-full h-32 flex flex-col justify-center items-center gap-y-2 shadow-md rounded-lg">
              <p className="text-black text-lg">Speaking</p>
              <p className="text-custom-red text-3xl font-semibold">
                {STUDENT_RESPONSES[active].speaking.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default KinderStudents;
