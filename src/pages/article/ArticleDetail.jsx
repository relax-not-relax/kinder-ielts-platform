import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import courseBanner from "../../assets/course_bnn_1.png";
import ArticleCard from "../../components/article/ArticleCard";
import { LIST_INSIGHTS } from "../../dummy/dummy_data_article";

function ArticleDetail() {
  const [expandedSections, setExpandedSections] = React.useState([1]);
  const [isCourse, setIsCourse] = React.useState(false);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const courseTopics = [
    {
      title: "A Growing Divide in Composition Standards",
      content: `An examination of composition course descriptions from a wide range of universities reveals a clear divide: prestigious schools still prioritize traditional academic writing skills, while less-selective colleges tend to lean toward more introspective and multimedia-based assignments. While elite universities use writing courses to teach structured argumentation and analytical thinking, others focus on personal storytelling, cultural observations, or non-written formats. This trend may be well-intentioned, but it could be doing students a disservice by not pushing them toward college-level rigor.`,
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Michigan vs. Michigan State: A Telling Comparison",
      content: "Content for Michigan comparison section...",
      image: null,
    },
    {
      title: "Lower Expectations for a Struggling Student Base",
      content: "Content for lower expectations section...",
      image: null,
    },
    {
      title: "AI and the Future of College Writing",
      content: "Content for AI and future writing section...",
      image: null,
    },
    {
      title: "Consequences for Students and Employers Alike",
      content: "Content for consequences section...",
      image: null,
    },
  ];

  console.log(isCourse);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-1 bg-green-600 transform -translate-x-1/2"></div>

          <div className="lg:col-span-1 space-y-6 pr-8">
            <nav className="text-sm text-gray-600 mb-6">
              <span>Trang Chủ</span>
              <span className="mx-2">/</span>
              <span>Bài viết</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Insights</span>
            </nav>

            <div>
              <h1 className="text-3xl font-bold text-custom-green mb-4 leading-tight">
                Review chi tiết khóa học &quot;Introduction to Writing&quot;:
                Nền tảng vững chắc để tiếp cận IELTS Writing
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Khóa học &quot;Introduction to Writing&quot; là chương trình học
                trực tuyến được thiết kế để trang bị cho bạn các kỹ năng và
                chiến lược cần thiết để đạt kết quả cao trong bài thi Viết IELTS
              </p>
            </div>

            {/* Instructor Card */}
            <button onClick={() => setIsCourse(!isCourse)}>
              <Card className="sm:w-[22rem] w-[18rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none relative"
                >
                  <img
                    src={courseBanner}
                    alt="ui/ux review check"
                    className="object-cover object-center"
                  />
                  <div className="px-2 py-[2px] bg-yellow absolute top-5 left-5 rounded-full">
                    <span className="text-black sm:text-sm text-xs">
                      Khoá học video
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </button>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6 pl-8">
            {/* Course Introduction */}
            {isCourse && (
              <Card className="bg-light-green">
                <CardBody className="p-6">
                  <button
                    onClick={() => toggleSection(0)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h2 className="text-xl font-bold text-gray-900">
                      Course introduction
                    </h2>
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform ${
                        expandedSections.includes(0) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </CardBody>
              </Card>
            )}

            {/* Course Topics */}
            <div className="space-y-4">
              {courseTopics.map((topic, index) => (
                <Card key={index} className="bg-light-green">
                  <CardBody className="p-6">
                    <button
                      onClick={() => toggleSection(index + 1)}
                      className="w-full flex items-center justify-between text-left mb-4"
                    >
                      <h3 className="text-lg font-bold text-gray-900">
                        {index + 1}. {topic.title}
                      </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform ${
                          expandedSections.includes(index + 1)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {expandedSections.includes(index + 1) && (
                      <div className="space-y-4">
                        <p className="text-gray-900 text-lg leading-relaxed">
                          {topic.content}
                        </p>
                        {topic.image && (
                          <div className="rounded-lg overflow-hidden">
                            <image
                              src={topic.image || "/placeholder.svg"}
                              alt={`Illustration for ${topic.title}`}
                              width={800}
                              height={400}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Register Button */}
            {isCourse && (
              <Button className="w-full bg-yellow hover:bg-yellow-500 text-black font-bold py-4 text-lg rounded-full">
                Đăng ký khóa học
              </Button>
            )}

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* See More Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Xem tiếp:</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="snap-x w-auto flex flex-row gap-x-6 overflow-x-scroll no-scrollbar pb-10 pt-6">
                {LIST_INSIGHTS.map((item, index) => (
                  <div key={index} className="snap-start">
                    <ArticleCard article={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
