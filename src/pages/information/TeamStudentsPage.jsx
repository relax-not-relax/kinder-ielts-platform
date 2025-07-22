import { Button } from "@material-tailwind/react";
import React from "react";
import student1 from "../../assets/student_1.png";
import student2 from "../../assets/student_2.png";
import banner from "../../assets/team-student-banner.png";
import tutorBanner from "../../assets/tutor_1.png";
import BannerSection from "../../components/BannerSection";

// Mock data for tutors
const TUTOR_INFO = {
  name: "Tutor Minh Khuê",
  avatar: tutorBanner,
  achievements: [
    "Tốt nghiệp Đại học Ngoại ngữ Đà Nẵng - FTU Danang với GPA 3.6/4.0",
    "Chứng chỉ IELTS 8.0 (L: 8.5, R: 8.5, W: 7.5, S: 7.0) - IDP IELTS",
    "Chứng chỉ TESOL 120h - TEFL Professional Development Institute",
    "Chứng chỉ Teaching Assistant - TEFL/TESOL VIETNAM (2021 - 2023)",
    "Kinh nghiệm giảng dạy IELTS tại các trung tâm uy tín: ILA, YOLA, Wall Street English",
    "Hơn 3 năm kinh nghiệm giảng dạy IELTS cho học viên từ mọi trình độ",
  ],
  experience: [
    "Đã hỗ trợ hơn 500 học viên đạt mục tiêu IELTS từ 5.5 - 8.0 trong 3 năm qua",
    "Chuyên môn: Writing và Speaking - 2 kỹ năng khó nhất của IELTS",
    "Phương pháp giảng dạy: Tập trung vào thực hành và phản hồi chi tiết",
    "Thành tích nổi bật: 95% học viên đạt mục tiêu sau 3-6 tháng học",
  ],
};

// Mock data for multiple tutors
const TUTORS_DATA = [
  {
    id: 1,
    name: "Tutor Minh Khuê",
    score: "8.0",
    avatar: tutorBanner,
    achievements: [
      "Tốt nghiệp Đại học Ngoại ngữ Đà Nẵng - FTU Danang với GPA 3.6/4.0",
      "Chứng chỉ IELTS 8.0 (L: 8.5, R: 8.5, W: 7.5, S: 7.0) - IDP IELTS",
      "Chứng chỉ TESOL 120h - TEFL Professional Development Institute",
      "Chứng chỉ Teaching Assistant - TEFL/TESOL VIETNAM (2021 - 2023)",
      "Kinh nghiệm giảng dạy IELTS tại các trung tâm uy tín: ILA, YOLA, Wall Street English",
      "Hơn 3 năm kinh nghiệm giảng dạy IELTS cho học viên từ mọi trình độ",
    ],
    experience: [
      "Đã hỗ trợ hơn 500 học viên đạt mục tiêu IELTS từ 5.5 - 8.0 trong 3 năm qua",
      "Chuyên môn: Writing và Speaking - 2 kỹ năng khó nhất của IELTS",
      "Phương pháp giảng dạy: Tập trung vào thực hành và phản hồi chi tiết",
      "Thành tích nổi bật: 95% học viên đạt mục tiêu sau 3-6 tháng học",
    ],
  },
  {
    id: 2,
    name: "Tutor Quốc Dũng",
    score: "7.5",
    avatar: tutorBanner,
    achievements: [
      "Tốt nghiệp Đại học Sư phạm Hà Nội - chuyên ngành Tiếng Anh",
      "Chứng chỉ IELTS 7.5 (L: 8.0, R: 8.0, W: 7.0, S: 7.0) - British Council",
      "Chứng chỉ CELTA - Cambridge Assessment English",
      "Chứng chỉ TKT (Teaching Knowledge Test) - Cambridge",
      "Kinh nghiệm giảng dạy tại Apollo English, ACET",
      "4 năm kinh nghiệm giảng dạy IELTS và tiếng Anh giao tiếp",
    ],
    experience: [
      "Đã giúp hơn 300 học viên cải thiện kỹ năng Reading và Listening",
      "Chuyên môn: Reading và Listening - phương pháp làm bài hiệu quả",
      "Phương pháp giảng dạy: Kết hợp lý thuyết và thực hành intensive",
      "Thành tích nổi bật: 90% học viên tăng ít nhất 1.0 band sau 2 tháng",
    ],
  },
];

// Mock data for students
const STUDENTS_DATA = [
  {
    id: 1,
    name: "Quang Đức",
    class: "HC71",
    score: 7.0,
    avatar: student1,
    scores: { listening: 7.0, reading: 7.0, writing: 7.5, speaking: 6.5 },
  },
  {
    id: 2,
    name: "Quỳnh Trang",
    class: "LA03",
    score: 7.5,
    avatar: student2,
    scores: { listening: 8.5, reading: 8.5, writing: 6.5, speaking: 7.0 },
  },
  {
    id: 3,
    name: "Nhã Quỳnh",
    class: "LA11",
    score: 7.5,
    avatar: student2,
    scores: { listening: 8.0, reading: 8.5, writing: 6.5, speaking: 6.5 },
  },
  {
    id: 4,
    name: "Quang Đức",
    class: "HC71",
    score: 7.0,
    avatar: student1,
    scores: { listening: 7.0, reading: 7.0, writing: 7.5, speaking: 6.5 },
  },
  {
    id: 5,
    name: "Quỳnh Trang",
    class: "LA03",
    score: 7.5,
    avatar: student2,
    scores: { listening: 8.5, reading: 8.5, writing: 6.5, speaking: 7.0 },
  },
  {
    id: 6,
    name: "Nhã Quỳnh",
    class: "LA11",
    score: 7.5,
    avatar: student2,
    scores: { listening: 8.0, reading: 8.5, writing: 6.5, speaking: 6.5 },
  },
];

function TeamStudentsPage() {
  const [active, setActive] = React.useState(false);
  const [currentTutorIndex, setCurrentTutorIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const currentTutor = TUTORS_DATA[currentTutorIndex];

  const nextTutor = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTutorIndex((prev) => (prev + 1) % TUTORS_DATA.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const prevTutor = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTutorIndex((prev) => (prev - 1 + TUTORS_DATA.length) % TUTORS_DATA.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-green via-transparent via-20% to-transparent to-80% z-[2]" />
        <div className="absolute z-[3] w-full xl:bottom-24 lg:bottom-16 md:bottom-10 sm:bottom-8 bottom-2 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col md:gap-y-4 gap-y-1 xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-xl text-yellow font-bold">
            <h3>Đội ngũ và học viên</h3>
          </div>
          <div className="flex md:flex-row flex-col gap-y-2 gap-x-6 md:mt-8 mt-4">
            <Button
              className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] max-w-64 md:w-64 w-fit px-3 py-1 transition-all duration-300 ${
                active
                  ? "bg-transparent text-yellow border-2 border-yellow"
                  : "bg-yellow text-black border-2 border-yellow"
              }`}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
              onClick={() => setActive(true)}
              onBlur={() => setActive(false)}
            >
              {active ? "Giá trị cốt lõi" : "Tìm hiểu thêm"}
            </Button>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red w-fit">
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center text-xs sm:text-sm mb-4 sm:mb-6">
          <span>Trang Chủ</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="font-medium">Đội ngũ và học viên</span>
        </div>
      </div>

      {/* Tutor Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-purple mb-4 text-left">
          Đội ngũ nhân viên Kinder IELTS
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-left">
          Gia sư Kinder IELTS được đào tạo sư phạm mỗi quý, cập nhật xu hướng thi và là đối tác của IDP IELTS Việt Nam. Chúng tôi cam kết chất lượng giảng dạy với các buổi huấn luyện chuyên sâu từ chuyên gia.
        </p>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row">
            {/* Tutor Image */}
            <div className={`lg:w-1/3 w-full relative transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <img
                src={currentTutor.avatar}
                alt={currentTutor.name}
                className="w-full h-64 lg:h-full object-cover object-center"
              />
              {/* Navigation Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={prevTutor}
                  disabled={isTransitioning}
                  className="bg-white/80 hover:bg-white text-custom-green p-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTutor}
                  disabled={isTransitioning}
                  className="bg-white/80 hover:bg-white text-custom-green p-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Tutor Info */}
            <div className={`lg:w-2/3 w-full p-6 lg:p-8 transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="flex items-center mb-6">
                <div className="bg-custom-green text-white px-4 py-2 rounded-full mr-4">
                  <span className="font-bold text-lg">{currentTutor.score}</span>
                </div>
                <h3 className="text-2xl font-bold text-custom-green">
                  {currentTutor.name}
                </h3>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Bằng cấp và chứng chỉ:
                </h4>
                <ul className="space-y-2">
                  {currentTutor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-custom-green mr-2">•</span>
                      <span className="text-gray-700 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Kinh nghiệm giảng dạy:
                </h4>
                <ul className="space-y-2">
                  {currentTutor.experience.map((exp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-custom-green mr-2">•</span>
                      <span className="text-gray-700 text-sm">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Students Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-green mb-8 text-center">
            Các Học Viên Nổi Bật
            <br />
            Tại Kinder IELTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {STUDENTS_DATA.map((student) => (
              <div
                key={student.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Student Image */}
                <div className="relative h-80">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Score Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="bg-custom-green text-white px-2 py-1 rounded text-xs font-medium">
                        Reading: {student.scores.reading}
                      </div>
                      <div className="bg-custom-green text-white px-2 py-1 rounded text-xs font-medium">
                        Writing: {student.scores.writing}
                      </div>
                      <div className="bg-custom-green text-white px-2 py-1 rounded text-xs font-medium">
                        Listening: {student.scores.listening}
                      </div>
                      <div className="bg-custom-green text-white px-2 py-1 rounded text-xs font-medium">
                        Speaking: {student.scores.speaking}
                      </div>
                    </div>

                    {/* Overall Score */}
                    <div className="bg-yellow text-black px-4 py-2 rounded-lg text-right">
                      <span className="text-2xl font-bold">
                        {student.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Học viên {student.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Khóa {student.class}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-2 transition-all duration-300 ${
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
              {active ? "Giá trị cốt lõi" : "Xem thêm học viên"}
            </Button>
          </div>
        </div>
      </div>

      <BannerSection />
    </div>
  );
}

export default TeamStudentsPage;
