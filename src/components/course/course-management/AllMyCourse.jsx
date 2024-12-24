/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import CourseCard from "./CourseCard";

AllMyCourse.propTypes = {};

function AllMyCourse(props) {
  return (
    <div className="mt-12 md:px-8 px-4">
      <h2 className="xl:text-3xl md:text-2xl text-xl font-bold">
        Các khóa học khác của bạn
      </h2>
      <div className="snap-x w-auto flex flex-row gap-x-6 overflow-x-scroll no-scrollbar pb-10 pt-6">
        <div className="snap-start">
          <CourseCard />
        </div>
        <div className="snap-start">
          <CourseCard />
        </div>
        <div className="snap-start">
          <CourseCard />
        </div>
        <div className="snap-start">
          <CourseCard />
        </div>
        <div className="snap-start">
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default AllMyCourse;
