/* eslint-disable no-unused-vars */
import { Button, Card, Spinner } from "@material-tailwind/react";
import React from "react";
import tutorAPI from "../../api/tutorApi";

KinderTutors.propTypes = {};

function KinderTutors() {
  const [tutors, setTutors] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await tutorAPI.getAll();
        setTutors(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch tutors: ", error);
        setIsLoading(false);
      }
    };

    fetchTutors();
  }, []);

  React.useEffect(() => {
    if (tutors.length === 0) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tutors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tutors]);

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Card className="xl:w-[70%] lg:w-[85%] w-full lg:h-[500px] h-fit flex lg:flex-row flex-col rounded-2xl">
      <div className="flex-none lg:w-[40%] lg:p-12 md:p-10 p-6 flex flex-col justify-between gap-y-10">
        <div className="flex flex-col gap-y-3 text-black">
          <h3 className="xl:text-xl lg:text-lg sm:text-xl text-base font-bold">
            Đội ngũ Kinder IELTS
          </h3>
          <div className="flex flex-row xl:gap-x-24 sm:gap-x-12 gap-x-4 xl:text-lg lg:text-base sm:text-lg text-sm font-semibold">
            <p>Tutor {tutors[active].firstName}</p>
            <p className="text-custom-red">
              IELTS {tutors[active].overall.toFixed(1)}
            </p>
          </div>
          <ul className="list-none list-outside md:text-base sm:text-sm text-xs">
            {tutors[active].certificates.map((c, key) => {
              return <li key={key}>{c.detail}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex items-center justify-center gap-x-2">
            {tutors.map((_, index) => {
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
      <div className="grow">
        <img
          src={tutors[active]?.account?.avatar}
          alt={tutors[active]?.fullName}
          className="w-full h-full object-center object-cover lg:rounded-e-2xl lg:rounded-l-none rounded-b-2xl"
        />
      </div>
    </Card>
  );
}

export default KinderTutors;
