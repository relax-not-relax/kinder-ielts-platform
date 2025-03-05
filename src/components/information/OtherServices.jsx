/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/contact-bnn-2.png";

const otherServices = [
  {
    title: "Chấm chữa Writing",
    description:
      "Dịch vụ chấm chữa writing tại Kinder IELTS vẫn luôn sẵn sàng nếu học viên có nhu cầu. Học viên lựa chọn gói chấm từng task hoặc full test để được hỗ trợ.",
  },
  {
    title: "bài test trình độ",
    description:
      "Bài kiểm tra trình độ miễn phí của Kinder IELTS được thiết kế theo 03 cấp độ từ thấp đến cao, phù hợp cho người mới bắt đầu đến người muốn nâng cao band điểm.",
  },
  {
    title: "TEST SPEAKING",
    description:
      "Bài kiểm tra Speaking đầu vào miễn phí của Kinder IELTS là phần kiểm tra không bắt buộc, song, nếu học viên mong muốn có thể yêu cầu kiểm tra online qua Zoom.",
  },
  {
    title: "recording bài học",
    description:
      "Mỗi buổi học tại Kinder IELTS đều được hỗ trợ ghi hình và đăng tải lên cho toàn học viên xem lại, với thời hạn lên đến 03 tháng kể từ khi kết thúc khóa học.",
  },
  {
    title: "lớp cá nhân",
    description:
      "Kinder IELTS có các lớp cá nhân từ 1-1, 1-2 đến 1-3. Tuy nhiên, các lớp này mức phí sẽ khá cao do tính chất cá nhân hóa của giáo trình. Vui lòng liên hệ để được tư vấn.",
  },
  {
    title: "đăng ký thi ielts",
    description:
      "Là đối tác của IDP IELTS, Kinder có thể hỗ trợ học viên đăng ký và giữ chỗ theo mong muốn của thí sinh. Học viên tại Kinder còn được giảm giá khi đăng ký thi IELTS với IDP.",
  },
];

function OtherServices() {
  return (
    <div className="w-full xl:h-fit lg:h-[85vh] md:h-[100vh] h-[160vh] relative">
      <img
        src={banner}
        alt="Quyền lợi & Dịch vụ khác"
        className="relative z-[2] w-full h-full object-cover object-center"
      />
      <div className="absolute z-[3] top-0 left-0 w-full h-full flex items-center md:px-20 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 grid-rows-auto sm:gap-12 gap-8 w-full">
          {otherServices.map((service, key) => {
            return (
              <div key={key} className="w-full flex flex-col gap-y-4">
                <h4 className="uppercase text-white xl:text-4xl md:text-2xl text-xl font-medium">
                  {service.title}
                </h4>
                <p className="text-left text-white md:text-lg text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
