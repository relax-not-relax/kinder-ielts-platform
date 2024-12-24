/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

AcademicArticle.propTypes = {};

function AcademicArticle(props) {
  return (
    <div className="mt-2 md:px-8 px-4">
      <div className="flex flex-row justify-start items-end gap-x-4">
        <h2 className="xl:text-3xl md:text-2xl text-xl font-bold">
          Bài viết học thuật
        </h2>
        <Link className="underline italic md:text-base text-sm">
          Khám phá thêm
        </Link>
      </div>
      <div className="snap-x w-auto flex flex-row gap-x-6 overflow-x-scroll no-scrollbar pb-10 pt-6">
        <div className="snap-start">
          <ArticleCard />
        </div>
        <div className="snap-start">
          <ArticleCard />
        </div>
        <div className="snap-start">
          <ArticleCard />
        </div>
        <div className="snap-start">
          <ArticleCard />
        </div>
        <div className="snap-start">
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}

export default AcademicArticle;
