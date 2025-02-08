/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import CourseTutorCard from "../../components/course/course-tutor/CourseTutorCard";
import CourseDetails from "../../components/course/CourseDetails";
import { useParams } from "react-router-dom";
import classAPI from "../../api/classApi";
import { Spinner } from "@material-tailwind/react";

function MyCourse() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const rightSectionRef = useRef(null);
  const [canScrollRoot, setCanScrollRoot] = useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const [classDetails, setClassDetails] = React.useState(null);

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

  React.useEffect(() => {
    setIsLoading(true);
    const fetchClass = async () => {
      try {
        const res = await classAPI.getClassDetails({
          id,
        });
        setClassDetails(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch class information", error);
        setIsLoading(false);
      }
    };

    fetchClass();
  }, [id]);

  if (isLoading && !classDetails) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {isLargeScreen ? (
        <div
          className={`w-screen h-screen relative flex flex-row ${
            canScrollRoot ? "overflow-y-scroll" : "overflow-hidden"
          }`}
        >
          <CourseTutorCard courseInfo={classDetails} />
          <div
            ref={rightSectionRef}
            className="grow overflow-y-scroll py-10 h-screen scroll-smooth no-scrollbar scroll-p-0"
          >
            <CourseDetails courseInfo={classDetails} />
          </div>
        </div>
      ) : (
        <div className="w-screen h-fit flex flex-col overflow-y-scroll">
          <CourseTutorCard courseInfo={classDetails} />
          <div className="grow h-fit">
            <CourseDetails courseInfo={classDetails} />
          </div>
        </div>
      )}
    </>
  );
}

export default MyCourse;
