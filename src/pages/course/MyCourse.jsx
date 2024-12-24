/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import CourseTutorCard from "../../components/course/course-tutor/CourseTutorCard";
import CourseDetails from "../../components/course/CourseDetails";

function MyCourse() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const rightSectionRef = useRef(null);
  const [canScrollRoot, setCanScrollRoot] = useState(false);

  useLayoutEffect(() => {
    if (isLargeScreen && rightSectionRef.current) {
      const rightSection = rightSectionRef.current;

      const handleScroll = () => {
        if (
          rightSection.scrollTop + rightSection.clientHeight >=
          rightSection.scrollHeight
        ) {
          setCanScrollRoot(true);
        } else {
          setCanScrollRoot(false);
        }
      };

      rightSection.addEventListener("scroll", handleScroll);
      return () => rightSection.removeEventListener("scroll", handleScroll);
    }
  }, [isLargeScreen]);

  return (
    <>
      {isLargeScreen ? (
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
      ) : (
        <div className="w-screen h-fit flex flex-col overflow-y-scroll">
          <CourseTutorCard />
          <div className="grow h-fit">
            <CourseDetails />
          </div>
        </div>
      )}
    </>
  );
}

export default MyCourse;
