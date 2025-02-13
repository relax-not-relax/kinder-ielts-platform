/* eslint-disable no-unused-vars */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import React from "react";
import CourseSample from "../../models/CourseSample";
import thumbnail1 from "../../assets/course-thumbnail-1.png";
import thumbnail2 from "../../assets/course-thumbnail-2.png";
import thumbnail3 from "../../assets/course-thumbnail-3.png";
import HomeCourseCard from "./HomeCourseCard";
import { useMediaQuery } from "../../utils/useMediaQuery";

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
  const [courseList, setCourseList] = React.useState([]);
  React.useLayoutEffect(() => {
    const updateCourseList = () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        setCourseList(ONLINE_COURSES);
      } else if (window.matchMedia("(min-width: 426px)").matches) {
        setCourseList(ONLINE_COURSES.slice(0, 2));
      } else {
        setCourseList(ONLINE_COURSES.slice(0, 1));
      }
    };

    updateCourseList(); // Cập nhật ngay khi component mount

    window.addEventListener("resize", updateCourseList); // Theo dõi sự thay đổi kích thước màn hình
    return () => window.removeEventListener("resize", updateCourseList); // Cleanup khi unmount
  }, []);

  return (
    <div className="flex flex-row md:gap-x-8 sm:gap-x-4 gap-x-3 xl:mt-8 lg:mt-4 sm:mt-8 items-center justify-center ">
      <IconButton className="rounded-xl" color="white" size="md">
        <ChevronLeftIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-8">
        {courseList.map((course, key) => {
          return <HomeCourseCard key={key} course={course} />;
        })}
      </div>
      <IconButton className="rounded-xl" color="white" size="md">
        <ChevronRightIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
    </div>
  );
}

export default CourseSlider;
