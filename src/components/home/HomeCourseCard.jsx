/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import formatPrice from "../../utils/formatPrice";

HomeCourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

function HomeCourseCard({ course }) {
  const [active, setActive] = React.useState(false);
  return (
    <Card className="xl:w-[22rem] lg:w-[16rem] sm:w-[17rem] w-[12rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={course.thumbnail}
          alt="course thumbnail"
          className="object-cover object-center"
        />
      </CardHeader>
      <CardBody className="px-4 pt-3 pb-0">
        <article>
          <h4
            color="blue-gray"
            className="xl:text-xl lg:text-lg sm:text-xl font-bold text-black"
          >
            {course.title}
          </h4>
          <p className="xl:text-lg lg:text-base sm:text-lg text-base text-black">
            Level: {course.level}
          </p>
          <p className="xl:text-base lg:text-xs text-xs text-black xl:mt-3 lg:mt-1 mt-2">
            Khoá học được giảng dạy bởi Tutor {course.tutor}
          </p>
          <p className="xl:text-base lg:text-xs text-xs text-black line-clamp-3">
            {course.description}
          </p>
        </article>
        <p className="xl:mt-5 lg:mt-2 mt-3 text-black xl:text-2xl lg:text-lg text-xl font-semibold">
          {formatPrice(course.price)}
        </p>
      </CardBody>
      <CardFooter className="px-4 xl:py-6 lg:py-4">
        <div className="flex sm:flex-row flex-col gap-y-2 justify-between items-center">
          <Button
            className={`rounded-full normal-case xl:text-lg sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
              active
                ? "bg-transparent text-yellow border-2 border-yellow"
                : "bg-yellow text-black border-2 border-yellow"
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onBlur={() => setActive(false)}
          >
            {active ? "Giá trị cốt lõi" : "Mua ngay"}
          </Button>
          <Button className="bg-gray-400 rounded-full normal-case xl:text-lg sm:text-xs text-[10px] px-3 py-1 text-black">
            Thêm vào giỏ
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default HomeCourseCard;
