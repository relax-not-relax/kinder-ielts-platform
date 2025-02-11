/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "@material-tailwind/react";

AboutKinder.propTypes = {};

function AboutKinder(props) {
  const [active, setActive] = React.useState(false);

  return (
    <Card className="w-[70%] h-[500px] flex flex-row rounded-2xl">
      <div className="flex-none w-[40%] p-12 flex flex-col justify-between">
        <div className="flex flex-col gap-y-3 text-black">
          <p className="text-xl font-semibold">
            Kinder IELTS tin rằng, thành công với IELTS là sự kết hợp chặt chẽ
            giữa năng lực ngôn ngữ và phương pháp tiếp cận bài thi đúng đắn.
          </p>
          <p className="text-lg">
            Kinder IELTS đơn giản hóa tiến trình luyện thi bằng cách lược bỏ
            những mẹo làm bài vô ích, thay vào đó, tập trung nâng cao vốn từ,
            hoàn thiện kỹ năng làm bài và bổ sung kiến thức xã hội trong mỗi
            buổi học.
          </p>
        </div>
        <Button
          fullWidth
          className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 transition-all duration-300 ${
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
      <div className="grow"></div>
    </Card>
  );
}

export default AboutKinder;
