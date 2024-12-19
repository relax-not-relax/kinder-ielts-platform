/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import CourseTutorCard from "../../components/course/course-tutor/CourseTutorCard";
import CourseDetails from "../../components/course/CourseDetails";

MyCourse.propTypes = {};

function MyCourse(props) {
  const rightSectionRef = React.useRef(null);
  const [canScrollRoot, setCanScrollRoot] = React.useState(false);

  React.useEffect(() => {
    const rightSection = rightSectionRef.current;

    const handleScroll = () => {
      // Kiểm tra xem phần bên phải đã cuộn hết chưa
      if (
        rightSection.scrollTop + rightSection.clientHeight >=
        rightSection.scrollHeight
      ) {
        setCanScrollRoot(true); // Cho phép scroll toàn trang
      } else {
        setCanScrollRoot(false); // Ngăn scroll toàn trang
      }
    };

    rightSection.addEventListener("scroll", handleScroll);

    return () => rightSection.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-screen h-screen relative flex flex-row ${
        canScrollRoot ? "overflow-y-scroll" : "overflow-hidden"
      }`}
    >
      <CourseTutorCard />
      <div
        ref={rightSectionRef}
        className="grow overflow-y-scroll py-10 h-screen scroll-smooth no-scrollbar scroll-p-0"
      >
        <CourseDetails />
      </div>
    </div>
  );
}

export default MyCourse;
