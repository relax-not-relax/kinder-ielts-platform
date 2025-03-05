import React from "react";

const className = "xl:text-base text-sm font-medium";

const valuesData = [
  {
    id: 1,
    subTitle: "COMPANION",
    title: "ĐỒNG HÀNH",
    color: "custom-green",
    content: React.createElement(
      "p",
      { className: className },
      "Kinder IELTS đồng hành cùng học viên với những giải pháp tối ưu cho IELTS. Gia sư tại Kinder IELTS như một người bạn xuyên suốt hành trình ôn luyện của bạn."
    ),
  },
  {
    id: 2,
    subTitle: "QUALITY",
    title: "CHẤT LƯỢNG",
    color: "custom-yellow",
    content: React.createElement(
      "p",
      { className: className },
      "Chất lượng dạy - học tại Kinder đến kinh nghiệm dạy, trải nghiệm thi thật thường xuyên và kiến thức được đúc kết từ quá trình tự học, nghiên cứu và phát triển sản phẩm."
    ),
  },
  {
    id: 3,
    subTitle: "COMMITMENT",
    title: "CAM KẾT",
    color: "custom-red",
    content: React.createElement("p", { className: className }, [
      "Kinder IELTS không có cam kết đầu ra, chỉ có ",
      React.createElement(
        "span",
        { key: "span", className: "text-custom-green" },
        "cam kết học tập"
      ),
      " (cam kết đôi bên - học viên phải có trách nhiệm học nghiêm túc và Gia sư phải luôn nâng cao chất lượng buổi học).",
    ]),
  },
  {
    id: 4,
    subTitle: "ACCESSIBILITY",
    title: "TIẾP CẬN",
    color: "custom-purple",
    content: React.createElement("p", { className: className }, [
      React.createElement(
        "span",
        { key: "span", className: "text-custom-green" },
        '"Học phí Mầm non, Chất lượng Đại học"'
      ),
      ", Kinder mong muốn IELTS sẽ được phổ cập hơn cho những bạn học viên ở xa, chưa có điều kiện tiếp cận đúng đắn với bài thi.",
    ]),
  },
  {
    id: 5,
    subTitle: "RIGHTFUL",
    title: "ĐÚNG ĐẮN",
    color: "custom-dark-green",
    content: React.createElement(
      "p",
      { className: className },
      "Học viên sẽ được tiếp cận với kiến thức đúng của bài thi, ôn tập sát trọng tâm cùng những Gia sư đã chinh chiến nhiều với IELTS."
    ),
  },
];

export default valuesData;
