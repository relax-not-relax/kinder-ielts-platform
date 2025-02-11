/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-tailwind/react";

ClassScheduleEl.propTypes = {
  el: PropTypes.object.isRequired,
};

function ClassScheduleEl({ el }) {
  return (
    <Card className="rounded-xl">
      <div className="flex flex-row">
        <div className="flex flex-row gap-x-3 px-4 py-2 items-center text-black w-72">
          <p className="text-5xl font-medium">{el.date}</p>
          <article>
            <h5 className="line-clamp-1 text-2xl font-medium">{el.name}</h5>
            <p className="text-lg">{el.time}</p>
          </article>
        </div>
        <div className="w-28 bg-custom-green rounded-l-none rounded-xl">
          <img
            src={el.thumbnail}
            alt={el.name}
            className="w-full object-cover object-center rounded-l-none rounded-xl"
          />
        </div>
      </div>
    </Card>
  );
}

export default ClassScheduleEl;
