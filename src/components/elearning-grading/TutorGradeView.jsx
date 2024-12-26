/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";
import CommentForm from "./CommentForm";

TutorGradeView.propTypes = {};

function TutorGradeView(props) {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h3 className="md:text-xl sm:text-lg text-base font-bold">Grade</h3>
      <div className="flex md:flex-row flex-col items-center gap-x-2">
        <Input label="Grade" type="number" />
        <p className="md:text-5xl text-3xl">/</p>
        <Input label="Grade" type="number" />
      </div>
      <hr />
      <h3 className="md:text-xl sm:text-lg text-base font-bold">
        Criteria and comment
      </h3>
      <CommentForm />
    </div>
  );
}

export default TutorGradeView;
