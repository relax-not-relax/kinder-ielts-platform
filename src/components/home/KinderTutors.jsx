/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import tutorAPI from "../../api/tutorApi";
import { Button, Card, Spinner } from "@material-tailwind/react";

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
    }, 2000);

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
    <Card className="w-[70%] h-[500px] flex flex-row rounded-2xl">
      <div className="flex-none w-[40%] p-12 flex flex-col justify-between">
        <div className="flex flex-col gap-y-3 text-black">
          <h3 className="text-xl font-bold">Đội ngũ Kinder IELTS</h3>
          <div className="flex flex-row gap-x-24 text-lg font-semibold">
            <p>Tutor {tutors[active].firstName}</p>
            <p className="text-custom-red">
              IELTS {tutors[active].overall.toFixed(1)}
            </p>
          </div>
          <ul className="list-none list-outside">
            {tutors[active].certificates.map((c, key) => {
              return <li key={key}>{c.detail}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center gap-x-2">
            {tutors.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    active === index ? "bg-custom-green" : "bg-gray-300"
                  } transition-all`}
                ></div>
              );
            })}
          </div>
          <Button
            fullWidth
            className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 transition-all duration-300 ${
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
          src={tutors[active].account.avatar}
          alt={tutors[active].fullName}
          className="w-full h-full object-center object-cover rounded-xl rounded-l-none"
        />
      </div>
    </Card>
  );
}

export default KinderTutors;
