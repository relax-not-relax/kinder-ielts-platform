/* eslint-disable no-unused-vars */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import React from "react";
import CourseSample from "../../models/CourseSample";
import thumbnail1 from "../../assets/course-thumbnail-1.png";
import thumbnail2 from "../../assets/course-thumbnail-2.png";
import thumbnail3 from "../../assets/course-thumbnail-3.png";
import HomeCourseCard from "./HomeCourseCard";

const ONLINE_COURSES = [
  new CourseSample(
    thumbnail1,
    "Hạt Giống",
    "Beginner",
    "Tín",
    'Khóa học "Introduction to Speaking" là chương trình học trực tuyến được thiết kế để trang bị cho bạn các kỹ năng và chiến lược cần thiết để đạt kết quả cao trong bài thi Viết IELTS',
    360000
  ),
  new CourseSample(
    thumbnail2,
    "Hạt Giống",
    "Beginner",
    "Tín",
    'Khóa học "Introduction to Speaking" là chương trình học trực tuyến được thiết kế để trang bị cho bạn các kỹ năng và chiến lược cần thiết để đạt kết quả cao trong bài thi Viết IELTS',
    360000
  ),
  new CourseSample(
    thumbnail3,
    "Hạt Giống",
    "Beginner",
    "Tín",
    'Khóa học "Introduction to Speaking" là chương trình học trực tuyến được thiết kế để trang bị cho bạn các kỹ năng và chiến lược cần thiết để đạt kết quả cao trong bài thi Viết IELTS',
    360000
  ),
];

function CourseSlider(props) {
  return (
    <div className="flex flex-row gap-x-8 mt-8 items-center justify-center">
      <IconButton className="rounded-xl" color="white">
        <ChevronLeftIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
      <div className="grid grid-cols-3 grid-rows-1 gap-8">
        {ONLINE_COURSES.map((course, key) => {
          return <HomeCourseCard key={key} course={course} />;
        })}
      </div>
      <IconButton className="rounded-xl" color="white">
        <ChevronRightIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
    </div>
  );
}

export default CourseSlider;
