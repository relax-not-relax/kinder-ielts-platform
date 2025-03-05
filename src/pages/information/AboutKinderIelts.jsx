/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/contact-bnn.png";
import banner1 from "../../assets/contact-bnn-1.png";
import banner2 from "../../assets/contact-bnn-3.png";
import gifInfo from "../../assets/Kinder-Approach.gif";
import decor1 from "../../assets/contact-decor-1.png";
import decor2 from "../../assets/contact-decor-2.png";
import decor4 from "../../assets/home-decor-4.png";
import decor3 from "../../assets/contact-decor-3.png";
import { Button } from "@material-tailwind/react";
import valuesData from "../../store/mocks/valuesData";
import ValueCard from "../../components/information/ValueCard";
import OperationTable from "../../components/information/OperationTable";
import KinderPartners from "../../components/information/KinderPartners";
import OtherServices from "../../components/information/OtherServices";

function AboutKinderIelts(props) {
  return (
    <div>
      <div className="w-full md:h-[90vh] relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute bottom-0 left-0 w-full md:h-[30vh] sm:h-28 h-20 z-[3] bg-gradient-to-b from-custom-green/0 to-custom-green"></div>
        <div className="absolute z-[4] md:bottom-24 sm:bottom-8 bottom-4 left-0 lg:px-16 md:px-8 px-4">
          <h2 className="xl:text-[110px] lg:text-7xl md:text-6xl sm:text-3xl text-2xl text-yellow font-bold">
            Về Kinder IELTS
          </h2>
          <div className="flex flex-row gap-x-6 md:mt-8 mt-4">
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-white text-black border-2 border-custom-green hover:bg-custom-green hover:text-white w-fit">
              Giá trị cốt lõi
            </Button>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-white text-black border-2 border-custom-green hover:bg-custom-green hover:text-white w-fit">
              Cách tiếp cận
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-fit md:h-[85vh] h-[130vh] relative">
        <img
          src={banner1}
          alt="Gia tri cot loi"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="w-full h-full lg:px-16 md:px-8 px-4 absolute z-[3] top-0 left-0 flex justify-center items-center">
          <div className="w-full grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-auto xl:gap-10 gap-4">
            <h3 className="xl:text-6xl md:text-5xl sm:text-3xl text-2xl text-white font-bold md:mt-8">
              Giá trị cốt lõi
            </h3>
            {valuesData.map((value) => {
              return <ValueCard key={value.id} value={value} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <img
          src={gifInfo}
          alt="Kinder Approach"
          className="relative w-full md:h-96 object-cover object-center z-[2]"
        />
      </div>
      <div className="w-full h-fit lg:px-16 md:px-8 px-4 mt-8 mb-20">
        <div className="flex lg:flex-row flex-col border-y-2 border-black">
          <div className="flex-none lg:w-[40%] w-full flex flex-col lg:gap-y-32 gap-y-16 lg:pe-8 lg:border-r-2 md:border-b-0 border-b-2 border-black py-6">
            <div className="flex flex-col gap-y-2 text-custom-green">
              <p className="md:text-xl text-lg">Our approach</p>
              <h3 className="xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold">
                Phương pháp
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img
                src={decor1}
                alt="Phuong phap"
                className="md:w-40 w-32 h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="lg:text-2xl sm:text-xl text-lg text-custom-green font-semibold">
                Kinder IELTS tin rằng, thành công với IELTS là sự kết hợp chặt
                chẽ giữa năng lực ngôn ngữ và phương pháp tiếp cận bài thi đúng
                đắn.{" "}
              </p>
              <p className="text-lg">
                Kinder IELTS đơn giản hóa tiến trình luyện thi bằng cách lược bỏ
                những mẹo làm bài vô ích, thay vào đó,{" "}
                <span className="text-custom-green font-medium">
                  tập trung nâng cao vốn từ, hoàn thiện kỹ năng làm bài và bổ
                  sung kiến thức xã hội
                </span>{" "}
                trong mỗi buổi học.
              </p>
            </div>
          </div>
          <div className="grow lg:ps-8 py-6 flex flex-col justify-between lg:gap-y-0 gap-y-16">
            <div className="flex flex-col gap-y-2 text-custom-purple">
              <p className="md:text-xl text-lg">Our operation</p>
              <h3 className="xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold">
                Vận hành
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img
                src={decor2}
                alt="Van hanh"
                className="md:w-40 w-32 h-full object-cover object-center"
              />
            </div>
            <OperationTable />
          </div>
        </div>
      </div>
      <div className="w-full lg:h-96 md:h-64 sm:h-56 h-48 lg:mt-24 mt-20 relative md:px-0 px-4">
        <div className="absolute bottom-0 z-[2] md:left-4 left-0">
          <img
            src={decor4}
            alt="Tìm khoá học"
            className="md:w-[95%] w-full object-cover object-center"
          />
        </div>
        <div className="relative w-full flex flex-col items-center md:gap-y-10 gap-y-6 z-[3]">
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center font-medium">
            Tìm ngay khóa học IELTS <br /> phù hợp với bạn
          </h1>
          <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red">
            Tham khảo các khóa học
          </Button>
        </div>
      </div>
      <img
        src={decor3}
        alt="About decor"
        className="w-full h-full object-cover object-center"
      />
      <div className="w-full lg:py-24 md:py-16 py-10 lg:px-16 md:px-8 px-4 flex flex-col lg:gap-y-12 md:gap-y-10 gap-y-12">
        <h4 className="xl:text-6xl md:text-5xl sm:text-4xl text-2xl text-custom-purple font-semibold">
          Đối tác của
          <br /> Kinder IELTS
        </h4>
        <KinderPartners />
        <div className="w-full flex md:flex-row flex-col justify-between items-start gap-y-6">
          <h4 className="text-custom-green font-semibold xl:text-6xl md:text-5xl sm:text-4xl text-2xl md:w-[35%] w-full flex-none">
            Liên hệ <br />& Hợp tác
          </h4>
          <div className="flex flex-col gap-y-4">
            <h5 className="lg:text-4xl md:text-2xl font-semibold">
              Để biết thêm chi tiết về các dịch vụ của Kinder IELTS, nhận báo
              giá cụ thể hoặc trao đổi về cơ hội hợp tác, vui lòng liên hệ với
              chúng tôi tại:
            </h5>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-yellow text-black border-2 border-yellow hover:bg-white w-fit">
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full py-10 lg:px-16 md:px-8 px-4 flex flex-col gap-y-10">
        <h4 className="text-custom-green font-semibold lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center">
          Quyền lợi <br />& Dịch vụ khác
        </h4>
        <OtherServices />
      </div>
      <img
        src={banner2}
        alt="contact decor"
        className="w-full h-auto object-cover object-center"
      />
    </div>
  );
}

export default AboutKinderIelts;
