/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "@material-tailwind/react";
import aboutVideo from "../../assets/Kinder-4x3-Introduction-website.mp4";

AboutKinder.propTypes = {};

function AboutKinder(props) {
  const [active, setActive] = React.useState(false);

  return (
    <Card className="xl:w-[70%] lg:w-[85%] w-full lg:h-[500px] h-fit flex lg:flex-row flex-col rounded-2xl">
      <div className="flex-none lg:w-[40%] lg:p-12 p-10 flex flex-col justify-between gap-y-10">
        <div className="flex flex-col gap-y-3 text-black">
          <p className="xl:text-xl lg:text-lg font-semibold sm:text-base text-sm">
            Kinder IELTS tin rằng, thành công với IELTS là sự kết hợp chặt chẽ
            giữa năng lực ngôn ngữ và phương pháp tiếp cận bài thi đúng đắn.
          </p>
          <p className="xl:text-lg sm:text-base text-sm">
            Kinder IELTS đơn giản hóa tiến trình luyện thi bằng cách lược bỏ
            những mẹo làm bài vô ích, thay vào đó, tập trung nâng cao vốn từ,
            hoàn thiện kỹ năng làm bài và bổ sung kiến thức xã hội trong mỗi
            buổi học.
          </p>
        </div>
        <Button
          className={`lg:w-full sm:w-fit w-full rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
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
          {active ? "Giá trị cốt lõi" : "Tìm hiểu thêm"}
        </Button>
      </div>
      <div className="grow">
        <video
          src={aboutVideo}
          autoPlay
          muted
          loop
          controls
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload"
          className="w-full h-full object-cover object-center lg:rounded-e-2xl lg:rounded-l-none rounded-b-2xl"
        ></video>
      </div>
    </Card>
  );
}

export default AboutKinder;
