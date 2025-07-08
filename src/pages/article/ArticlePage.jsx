import { Button } from "@material-tailwind/react";
import React from "react";
import { ARTICLE_IMAGE } from "../../assets/article_image";
import banner from "../../assets/home-bnn.png";
import ArticleCard from "../../components/article/ArticleCard";
import SearchBar from "../../components/article/SearchBar";
import CourseSlider from "../../components/home/CourseSlider";
import { ROUTE_PAGE } from "../../constants";
import {
  LIST_BLOG,
  LIST_INSIGHTS,
  LIST_SELF_STUDY_MATERIAL,
} from "../../dummy/dummy_data_article";
import useNavigatePage from "../../hook/useNavigatePage";

function ArticlePage() {
  const { goToPage } = useNavigatePage();

  const [active, setActive] = React.useState(false);
  const links = [
    { href: "#", label: "Luyện đề cơ bản" },
    { href: "#", label: "Luyện đề nâng cao" },
    { href: "#", label: "Bộ trợ kỹ năng" },
    { href: "#", label: "Bài mẫu Writing" },
    { href: "#", label: "Bài mẫu Speaking" },
    { href: "#", label: "Thông tin khoá học" },
  ];

  return (
    <div>
      <div className="w-full relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-green via-transparent via-20% to-transparent to-80% z-[2]" />
        <div className="absolute z-[3] w-full max-w-3xl mx-auto xl:bottom-24 lg:bottom-16 md:bottom-10 sm:bottom-8 bottom-2 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col md:gap-y-4 gap-y-1 xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-xl text-yellow font-bold">
            <h3>BÀI VIẾT</h3>
          </div>
          <div className="flex md:flex-row flex-col gap-y-2 gap-x-6 md:mt-8 mt-4">
            <Button
              className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] max-w-40 md:w-64 w-fit px-3 py-1 transition-all duration-300 ${
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
              Tìm khoá học
            </Button>
            <Button className="rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-6 py-1 bg-custom-red text-white border-2 border-custom-red hover:bg-white hover:text-custom-red w-fit">
              Tìm tài liệu
            </Button>
          </div>
        </div>
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <SearchBar />

        <div className="w-full max-w-5xl mx-auto mb-8">
          <p className="text-gray-800 text-base font-semibold mb-2">Gợi ý</p>
          <div className="flex flex-wrap gap-2 justify-between">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-800 hover:text-green-600 text-lg font-bold w-fit block"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-lg w-full flex flex-row gap-3 md:flex-row max-w-5xl h-96 overflow-hidden">
          <img
            src={ARTICLE_IMAGE.article_card_thumbnail}
            alt="books"
            className="w-2/3 h-full rounded-l-lg object-cover"
          />
          <div className="w-1/3 h-full p-5 overflow-auto max-h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              What does freshman composition look like in 2024?
            </h3>
            <p className="text-gray-700 xl:text-xl md:text-lg sm:text-sm text-[12px] mb-4">
              In my previous post, I looked at how universities’ reliance on
              adjuncts and the resulting grade inflation in freshman composition
              classes trickles back to the high school level, depressing minimum
              SAT/ACT English scores (“benchmarks”) correlated with earning
              passing grades in college writing courses. I think, however, that
              there is another major factor at play at as well here: not only
              are composition instructors pressured to award higher-than-merited
              grades, but at many institutions, the classwork itself has become
              less demanding. This phenomenon seems especially pronounced at
              less-selective college, which enroll the vast majority of students
              with low scores.
            </p>
            <button className="bg-yellow text-black font-semibold px-6 py-2 rounded-full hover:bg-custom-yellow w-full">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-custom-purple font-medium">
          Insights
        </h2>
        <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-custom-purple">
          Cập nhật các dạng đề mới nhất
          <br />
          và bí quyết làm bài thi hiệu quả cùng Kinder IELTS
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
            active
              ? "bg-transparent text-yellow border-2 border-yellow"
              : "bg-yellow text-black border-2 border-yellow"
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onBlur={() => setActive(false)}
          onClick={() => goToPage(ROUTE_PAGE.ARTICLE_INSIGHTS_PAGE)}
        >
          {active ? "Giá trị cốt lõi" : "Xem thêm"}
        </Button>
        <CourseSlider
          data={LIST_INSIGHTS}
          renderItems={(item, index) => (
            <ArticleCard key={index} article={item} />
          )}
        />
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-custom-purple font-medium">
          Blog
        </h2>
        <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-custom-purple">
          Cập nhật tin tức và xu hướng mới nhất trong việc học
          <br />
          học tiếng Anh, luyện thi IELTS và bí quyết chinh phục
          <br />
          mục tiêu ngôn ngữ một cách hiệu quả nhất.
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
            active
              ? "bg-transparent text-yellow border-2 border-yellow"
              : "bg-yellow text-black border-2 border-yellow"
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onBlur={() => setActive(false)}
          onClick={() => goToPage(ROUTE_PAGE.ARTICLE_BLOG_PAGE)}
        >
          {active ? "Giá trị cốt lõi" : "Xem thêm"}
        </Button>
        <CourseSlider
          data={LIST_BLOG}
          renderItems={(item, index) => (
            <ArticleCard key={index} article={item} />
          )}
        />
      </div>
      <div className="py-24 w-full flex flex-col justify-center items-center xl:gap-y-6 lg:gap-y-3 gap-y-4 md:px-0 px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-custom-purple font-medium">
          Tài liệu tự học
        </h2>
        <p className="text-center xl:text-xl md:text-lg sm:text-sm text-[12px] text-custom-purple">
          Giới thiệu loạt tài liệu tự học
          <br />
          được biên soạn bởi team Kinder IELTS
        </p>
        <Button
          className={`rounded-full normal-case xl:text-lg md:text-base sm:text-xs text-[10px] px-3 py-1 transition-all duration-300 ${
            active
              ? "bg-transparent text-yellow border-2 border-yellow"
              : "bg-yellow text-black border-2 border-yellow"
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onBlur={() => setActive(false)}
          onClick={() => goToPage(ROUTE_PAGE.ARTICLE_SELF_STUDY_MATERIAL_PAGE)}
        >
          {active ? "Giá trị cốt lõi" : "Xem thêm"}
        </Button>
        <CourseSlider
          data={LIST_SELF_STUDY_MATERIAL}
          renderItems={(item, index) => (
            <ArticleCard key={index} article={item} />
          )}
        />
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default ArticlePage;
