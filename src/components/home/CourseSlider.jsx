/* eslint-disable no-unused-vars */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

CourseSlider.propTypes = {
  renderItems: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

CourseSlider.defaultProps = {
  data: [],
  renderItems: () => {},
};

function CourseSlider(props) {
  const { renderItems, data } = props;
  const [lstItem, setLstItem] = React.useState([]);
  React.useLayoutEffect(() => {
    const updateCourseList = () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        setLstItem(data);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setLstItem(data.slice(0, 2));
      } else {
        setLstItem(data.slice(0, 1));
      }
    };

    if (data.length > 0) {
      updateCourseList(); // Cập nhật ngay khi component mount
    } // Tránh lỗi khi data rỗng

    window.addEventListener("resize", updateCourseList); // Theo dõi sự thay đổi kích thước màn hình
    return () => window.removeEventListener("resize", updateCourseList); // Cleanup khi unmount
  }, []);

  return (
    <div className="flex flex-row md:gap-x-8 sm:gap-x-4 xl:mt-8 lg:mt-4 sm:mt-8 items-center sm:justify-center justify-between w-full">
      <IconButton className="rounded-xl" color="white" size="md">
        <ChevronLeftIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
        {lstItem.length > 0 ? (
          <React.Fragment>
            {lstItem.map((item, index) => (
              <React.Fragment key={index}>
                {renderItems(item, index)}
              </React.Fragment>
            ))}
          </React.Fragment>
        ) : null}
      </div>
      <IconButton className="rounded-xl" color="white" size="md">
        <ChevronRightIcon className="h-5 w-5 stroke-[3]" />
      </IconButton>
    </div>
  );
}

export default CourseSlider;
