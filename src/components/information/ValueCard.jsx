/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

ValueCard.propTypes = {
  value: PropTypes.object.isRequired,
};

function ValueCard({ value }) {
  return (
    <div
      className={`border-[3px] border-${value.color} rounded-3xl xl:p-4 md:p-3 p-3 flex flex-col xl:gap-y-8 md:gap-y-4 gap-y-3 bg-white`}
    >
      <div className="flex flex-col md:gap-y-2 gap-y-1">
        <p className={`text-${value.color} xl:text-base md:text-sm text-xs`}>
          {value.subTitle}
        </p>
        <h4
          className={`text-${value.color} xl:text-4xl md:text-3xl text-2xl font-semibold`}
        >
          {value.title}
        </h4>
      </div>
      {value.content}
    </div>
  );
}

export default ValueCard;
