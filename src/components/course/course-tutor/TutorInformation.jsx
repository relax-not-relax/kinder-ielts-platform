/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import tutorImg from "../../../assets/tutor_1.png";
import tutorImg2 from "../../../assets/tutor_2.png";

TutorInformation.propTypes = {
  tutorInfo: PropTypes.object.isRequired,
};

function TutorInformation({ tutorInfo }) {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <img
          className="h-36 w-36 object-cover object-center rounded-xl"
          src={tutorInfo.id === 1 ? tutorImg : tutorImg2}
          alt="tutor"
        />
      </div>
      <div className="mt-4 w-full">
        <h5 className="text-lg font-semibold text-custom-green">
          Điểm số của Gia sư:
        </h5>
        <div className="flex flex-row w-full gap-x-3 mt-2 w-fit">
          <div className="grid grid-rows-2 grid-flow-col gap-3">
            {tutorInfo.ieltsBand.map((band) => {
              return (
                <div
                  className="px-3 py-2 flex flex-row items-center justify-between bg-custom-green w-32 rounded-xl"
                  key={band.skill}
                >
                  <p className="text-yellow font-medium">{band.skill}</p>
                  <p className="text-yellow font-medium">{band.score}</p>
                </div>
              );
            })}
          </div>
          <div className="px-10 flex items-center justify-center grow bg-yellow rounded-xl">
            <p className="text-5xl text-custom-green font-bold">
              {tutorInfo.overall}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="text-lg font-semibold text-custom-green">
          Bằng cấp và Giải thưởng:
        </h5>
        <ul className="list-disc ps-4 mt-2 w-[400px]">
          {tutorInfo.reward.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TutorInformation;
