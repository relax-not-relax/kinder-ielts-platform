import { Button } from "@material-tailwind/react";
import decor4 from "../assets/home-decor-4.png";
function BannerSection() {
  return (
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
  );
}

export default BannerSection;
