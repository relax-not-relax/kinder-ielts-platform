/* eslint-disable no-unused-vars */
import React from "react";
import idpIelts from "../../assets/idpIelts.png";
import elsa from "../../assets/elsa.png";
import globalX from "../../assets/globalX.png";

const partners = [
  {
    image: idpIelts,
    title: "IDP IELTS",
    description:
      "Thí sinh đăng ký thi cùng Kinder IELTS tại IDP IELTS sẽ được giảm lệ phí thi cùng với đó là nhiều ưu đãi ôn tập, quà tặng hấp dẫn.",
  },
  {
    image: elsa,
    title: "ELSA Speak",
    description:
      "Học viên tại Kinder IELTS có thể mua sản phẩm ELSA Speak Pro/Premium với giá ưu đãi hơn so với thị trường.",
  },
  {
    image: globalX,
    title: "GlobalX",
    description:
      "Học viên tại Kinder IELTS có thể được miễn phí tư vấn và làm hồ sơ du học tại GlobalX với đội ngũ hơn 15 năm kinh nghiệm tư vấn, làm hồ sơ du học.",
  },
];

function KinderPartners(props) {
  return (
    <div className="w-full grid md:grid-rows-1 md:grid-cols-3 gap-x-6 gap-y-4">
      {partners.map((partner, key) => (
        <div key={key} className="w-full flex flex-col">
          <div className="w-full lg:h-48 md:h-32 h-36 flex justify-center items-center">
            <img
              src={partner.image}
              alt={partner.title}
              className="lg:w-80 md:w-36 w-56 object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h5 className="text-custom-green text-2xl font-semibold text-center md:text-left">
              {partner.title}
            </h5>
            <p>{partner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KinderPartners;
